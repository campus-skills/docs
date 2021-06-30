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
Un s
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="sites" type="array" required=true %}
Tableau des sites
{% endapi-method-parameter %}

{% api-method-parameter name="sites.$.codeSite" type="string" required=true %}
Identifiant unique dans votre SI
{% endapi-method-parameter %}

{% api-method-parameter name="sites.$.nomSite" type="string" required=true %}
Nom du site
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

{% api-method method="post" host="{{base\_url}}/api/sync/v1/formations" path="" %}
{% api-method-summary %}
Synchroniser les formations
{% endapi-method-summary %}

{% api-method-description %}
 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="formations" type="array" required=true %}
Tableau des formations
{% endapi-method-parameter %}

{% api-method-parameter name="formations.$.codeFormation" type="string" required=true %}
Identifiant unique de la formation dans votre SI
{% endapi-method-parameter %}

{% api-method-parameter name="formations.$.nomFormation" type="string" required=true %}
Nom de la formation dans votre SI
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

{% api-method method="post" host="{{base\_url}}/api/sync/v1/groups" path="" %}
{% api-method-summary %}
Synchroniser les groupes
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="groupes" type="array" required=true %}
tableau des groupes à synchroniser
{% endapi-method-parameter %}

{% api-method-parameter name="groupes.$.codeSite" type="string" required=true %}
L'identifiant du site associé
{% endapi-method-parameter %}

{% api-method-parameter name="groupes.$.codeFormation" type="string" required=true %}
L'identifiant de la formation associée
{% endapi-method-parameter %}

{% api-method-parameter name="groupes.$.nomGroupe" type="string" required=true %}
Le nom du groupe
{% endapi-method-parameter %}

{% api-method-parameter name="groupes.$.codeGroupe" type="string" required=true %}
Identifiant unique du groupe dans votre SI
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

{% api-method method="post" host="{{base\_url}}/api/sync/v1/contrats" path="" %}
{% api-method-summary %}
Synchroniser les contrats
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="contrats" type="array" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.nomEntreprise" type="string" required=true %}
Nom de l'entreprise 
{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.emailPersonnel" type="string" required=true %}
Email du tuteur école
{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.prenomPersonnel" type="string" required=true %}
Prénom du tuteur école
{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.nomPersonnel" type="string" required=true %}
Nom du tuteur école
{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.codePersonnel" type="string" required=true %}
Code du tuteur école
{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.emailMaitreApprentissage" type="string" required=true %}
Email maitre apprentissage
{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.prenomMaitreApprentissage" type="string" required=true %}
Prenom maitre apprentissage
{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.nomMaitreApprentissage" type="string" required=true %}
Nom maitre apprentissage
{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.codeMaitreApprentissage" type="string" required=true %}
Identifiant du maitre apprentissage
{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.emailApprenant" type="string" required=true %}
email de l'apprenant
{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.prenomApprenant" type="string" required=true %}
Prenom de l'apprenant
{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.codeApprenant" type="string" required=true %}
Identifiant de l'apprenant
{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.codeGroupe" type="string" required=true %}
Identifiant du groupe associé
{% endapi-method-parameter %}

{% api-method-parameter name="contrats.$.codeContrat" type="string" required=true %}
L'identifiant unique du contrat 
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

Voici un exemple de fichier nécessaire à mettre sur un serveur FTP \( si vous en avez pas nous vous donnerons accès à un chez nous \)

Il est nécessaire au préalable d'avoir configuré la structure de votre établissement sur la plateforme.

Le fichier est lu toutes les nuits et nous trouvons les différences automatiquement et les répercutons sur la plateforme

{% file src="../.gitbook/assets/template-ftp-campus-skills.xlsx" caption="Template fichier ftp" %}

{% file src="../.gitbook/assets/template-ftp-campus-skills.csv" %}



