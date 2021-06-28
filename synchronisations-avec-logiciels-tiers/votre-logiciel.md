---
description: >-
  Ici nous vous proposons d'utiliser notre API pour synchroniser les données
  depuis votre logiciel de gestion vers le notre
---

# Votre logiciel

Pour synchroniser les données de votre logiciel vers le notre, nous vous proposons deux façons :

1. Utiliser directement l'API REST
2. Déposer quotidiennement sur un serveur ftp un fichier au format csv respectant un certain formalisme.

### Structure de données

Au sein de Campus Skills la structure des données peut être décrite ainsi :

* Il y a des **formations** qui sont déployées sur des **sites** et qui sont suivis par des **groupes** d'apprenants qui ont ou pas des contrats d'apprentissages en cours

Nous avons donc besoin d'avoir :

* La liste des formations à synchroniser
* La liste des sites où ces formations sont dispensées.
* Les groupes d'étudiants faisant une formation sur un site
* Les contrats pour chacun de ces apprenants

## Synchronisation via API REST

{% api-method method="post" host="{{base\_url}}/api/sync/v1/sites" path="" %}
{% api-method-summary %}
Synchroniser les sites
{% endapi-method-summary %}

{% api-method-description %}
Méthodes pour remonter les sites sur lesquels de votre organisme de formation
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="sites" type="array" required=true %}
Un tableau des sites
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Synchronisation via FTP

Voici un exemple de fichier nécessaire pour à mettre sur un FTP.

