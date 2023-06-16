# Authentification passwordLess

Un moyen simple pour un utilisateur de se connecter à la plateforme depuis un environnement existant est de récupérer un lien ne nécessitant pas de mot de passe.

Vous pouvez ainsi mettre un bouton sur votre plateforme, et quand l'utilisateur clique dessus ouvrir une nouvelle page web avec le lien retourné par l'URL suivante :

{% swagger method="get" path="" baseUrl="{{base_url}}/api/sync/v1/passwordLessLink" summary="Récupérer un lien sans mot de passe" %}
{% swagger-description %}
{% endswagger-description %}

{% swagger-parameter in="query" name="email" required="true" type="string" %}
Email de l'utilisateur
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}

```javascript
{
  url: "Lien passwordLess";
}
```

## Lien vers un contrat

{% swagger method="get" path="" baseUrl="{{base_url}}/sync/v1/linkToContract" summary="Permet de récupérer pour l'utilisateur avec l'id un lien vers le contrat" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="email" required="true" %}
Email de l'utilisateur
{% endswagger-parameter %}

{% swagger-parameter in="query" name="contractId" required="true" %}
Code du contrat dans votre SI
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
Nous vous renvoyant un json avec la clef url content l'url passwordLess

```javascript
{
  url: "Lien passwordLess";
}
{% endswagger-response %}
{% endswagger %}
```
