var COUNTER = 0;

var METHOD_CLASS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete'
};

function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, function(c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function subBlocksNamed(block, name) {
  return (block.blocks || []).filter(function(b) { return b.name === name; });
}

// GitBook.com authors block attributes space-separated (baseUrl="a" path="b"),
// but Nunjucks' tag-argument parser (parser.parseSignature) requires commas
// between kwargs. Rewrite the tag's attribute list to insert those commas
// before Nunjucks ever sees it.
// Longer, more specific alternatives must come first: regex alternation
// takes the first match, so "swagger" would otherwise steal the prefix of
// "swagger-parameter"/"swagger-response"/"swagger-description".
var GITBOOK_BLOCK_TAG = /\{%\s*(swagger-description|swagger-parameter|swagger-response|swagger|tab|hint|file)\b([\s\S]*?)%\}/g;
var ATTR = /([a-zA-Z_][\w-]*)\s*=\s*"((?:[^"\\]|\\.)*)"/g;

// Nunjucks identifiers can't contain "-" (it lexes as subtraction), so a
// nested sub-block name like "swagger-parameter" tokenizes as "swagger"
// MINUS "parameter" instead of one symbol - fine for the outer "swagger"
// tag (registered as an extension by the framework), but it silently
// corrupts parsing of nested sub-blocks. Rename these to underscore
// variants before Nunjucks ever sees them.
var HYPHENATED_BLOCK_RENAME = {
  'swagger-description': 'swagger_description',
  'swagger-parameter': 'swagger_parameter',
  'swagger-response': 'swagger_response'
};

// "in" is a Nunjucks operator keyword (membership test), so it can't be
// used as a kwarg name inside a tag signature (e.g. swagger-parameter's
// in="query"). Rename it in transit; read back as kwargs.paramIn.
function renameReservedAttr(name) {
  return name === 'in' ? 'paramIn' : name;
}

function addCommasBetweenKwargs(content) {
  return content.replace(GITBOOK_BLOCK_TAG, function(fullTag, tagName, attrsStr) {
    var renamedTag = HYPHENATED_BLOCK_RENAME[tagName] || tagName;
    var attrs = [];
    var m;
    ATTR.lastIndex = 0;
    while ((m = ATTR.exec(attrsStr))) {
      attrs.push(renameReservedAttr(m[1]) + '="' + m[2] + '"');
    }
    return '{% ' + renamedTag + (attrs.length ? ' ' + attrs.join(', ') : '') + ' %}';
  });
}

// Honkit's nested-block engine delimits a repeated sub-block (e.g. "tab")
// by the next sibling's start tag or the parent's end tag - it has no
// concept of that sub-block's own closing tag. GitBook.com's format still
// writes one (e.g. {% endtab %}), which Nunjucks then chokes on as an
// unregistered top-level tag. Drop these, they're redundant here.
var REDUNDANT_SUB_BLOCK_END_TAGS = /\{%\s*(endtab|endswagger-description|endswagger-parameter|endswagger-response)\s*%\}\n?/g;

function stripRedundantSubBlockEndTags(content) {
  return content.replace(REDUNDANT_SUB_BLOCK_END_TAGS, '');
}

module.exports = {
  book: {
    assets: './assets',
    css: ['style.css']
  },

  hooks: {
    'page:before': function(page) {
      page.content = stripRedundantSubBlockEndTags(addCommasBetweenKwargs(page.content));
      return page;
    }
  },

  blocks: {
    // {% tabs %}{% tab title="..." %}...{% endtab %}{% endtabs %}
    tabs: {
      blocks: ['tab'],
      process: function(block) {
        var self = this;
        var tabs = subBlocksNamed(block, 'tab');

        return Promise.all(tabs.map(function(tab) {
          return self.renderBlock('markdown', tab.body).then(function(html) {
            return { title: tab.kwargs.title || '', html: html };
          });
        })).then(function(rendered) {
          var groupId = 'tabs-' + (++COUNTER);

          var nav = rendered.map(function(tab, i) {
            return '<button type="button" class="doc-tab-btn' + (i === 0 ? ' active' : '') + '" ' +
              'onclick="var g=this.closest(\'.doc-tabs\');g.querySelectorAll(\'.doc-tab-btn\').forEach(function(b){b.classList.remove(\'active\')});' +
              'g.querySelectorAll(\'.doc-tab-panel\').forEach(function(p){p.classList.remove(\'active\')});' +
              'this.classList.add(\'active\');g.querySelector(\'[data-panel=\"' + groupId + '-' + i + '\"]\').classList.add(\'active\');">' +
              escapeHtml(tab.title) + '</button>';
          }).join('');

          var panels = rendered.map(function(tab, i) {
            return '<div class="doc-tab-panel' + (i === 0 ? ' active' : '') + '" data-panel="' + groupId + '-' + i + '">' +
              tab.html + '</div>';
          }).join('');

          return '<div class="doc-tabs">' +
            '<div class="doc-tab-nav">' + nav + '</div>' +
            '<div class="doc-tab-content">' + panels + '</div>' +
            '</div>';
        });
      }
    },

    // {% swagger method="get" path="..." baseUrl="..." summary="..." %}
    //   {% swagger-description %}...{% endswagger-description %}
    //   {% swagger-parameter in="query" name="..." required="true" %}...{% endswagger-parameter %}
    //   {% swagger-response status="200: OK" description="" %}...{% endswagger-response %}
    // {% endswagger %}
    // (renamed to swagger_description/parameter/response by page:before, see HYPHENATED_BLOCK_RENAME)
    swagger: {
      blocks: ['swagger_description', 'swagger_parameter', 'swagger_response'],
      process: function(block) {
        var self = this;
        var method = (block.kwargs.method || 'get').toUpperCase();
        var path = block.kwargs.path || '';
        var baseUrl = block.kwargs.baseUrl || '';
        var summary = block.kwargs.summary || '';

        var description = subBlocksNamed(block, 'swagger_description')[0];
        var parameters = subBlocksNamed(block, 'swagger_parameter');
        var responses = subBlocksNamed(block, 'swagger_response');

        return Promise.all([
          description ? self.renderBlock('markdown', description.body) : Promise.resolve(''),
          Promise.all(parameters.map(function(p) {
            return self.renderBlock('markdown', p.body).then(function(html) {
              return {
                in: p.kwargs.paramIn || '',
                name: p.kwargs.name || '',
                required: p.kwargs.required === 'true' || p.kwargs.required === true,
                html: html
              };
            });
          })),
          Promise.all(responses.map(function(r) {
            return self.renderBlock('markdown', r.body).then(function(html) {
              return { status: r.kwargs.status || '', description: r.kwargs.description || '', html: html };
            });
          }))
        ]).then(function(results) {
          var descriptionHtml = results[0];
          var paramRows = results[1];
          var responseBlocks = results[2];

          var methodClass = METHOD_CLASS[method] || 'get';

          var out = '<div class="doc-swagger">';
          out += '<div class="doc-swagger-header">';
          out += '<span class="doc-swagger-method doc-swagger-method-' + methodClass + '">' + escapeHtml(method) + '</span>';
          out += '<code class="doc-swagger-path">' + escapeHtml(path) + '</code>';
          out += '</div>';
          if (baseUrl) {
            out += '<div class="doc-swagger-baseurl">' + escapeHtml(baseUrl) + '</div>';
          }
          if (summary) {
            out += '<div class="doc-swagger-summary">' + escapeHtml(summary) + '</div>';
          }
          if (descriptionHtml && descriptionHtml.trim()) {
            out += '<div class="doc-swagger-description">' + descriptionHtml + '</div>';
          }

          if (paramRows.length) {
            out += '<div class="doc-swagger-section-title">Paramètres</div>';
            out += '<table class="doc-swagger-params"><thead><tr><th>In</th><th>Nom</th><th>Requis</th><th>Description</th></tr></thead><tbody>';
            paramRows.forEach(function(p) {
              out += '<tr><td>' + escapeHtml(p.in) + '</td><td><code>' + escapeHtml(p.name) + '</code></td>' +
                '<td>' + (p.required ? 'oui' : 'non') + '</td><td>' + p.html + '</td></tr>';
            });
            out += '</tbody></table>';
          }

          if (responseBlocks.length) {
            out += '<div class="doc-swagger-section-title">Réponses</div>';
            responseBlocks.forEach(function(r) {
              out += '<div class="doc-swagger-response">';
              out += '<div class="doc-swagger-response-status">' + escapeHtml(r.status) + '</div>';
              if (r.description) {
                out += '<div class="doc-swagger-response-description">' + escapeHtml(r.description) + '</div>';
              }
              out += r.html;
              out += '</div>';
            });
          }

          out += '</div>';
          return out;
        });
      }
    },

    // {% file src="..." %} label {% endfile %}
    file: {
      process: function(block) {
        var src = block.kwargs.src || '';
        var label = (block.body || '').trim() || src.split('/').pop();
        return '<p><a class="doc-file-link" href="' + escapeHtml(src) + '" target="_blank" rel="noopener">📎 ' +
          escapeHtml(label) + '</a></p>';
      }
    }
  }
};
