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

* Votre organisme peut être déployé dans plusieurs villes nous appelons ça des **sites**&#x20;
* Il y a des **périodes** de formation qui correspondent classiquement aux années scolaires ( 2020/2021, 2021/2022 etc )
* Il y a des **programmes** de formations ( BTS MCO, Licence RH ) qui sont déployés sur un site et sur une période
* Il y a des **années** de formation ( Licence RH 1ière année, License RH 2ième année etc.. )

Nous voulons avec cette structure regrouper les apprenants qui suivent la même formation sur le même site pour la même période donnée et la même année.

Cela vous permettra d'avoir un suivi clair.

Nous avons donc besoin d'avoir :

* La liste des formations à synchroniser
* La liste des sites où ces formations sont dispensées.
* La liste des périodes à synchroniser
* La liste des années de vos formations.
* Les contrats pour chacun de ces apprenants

## Synchronisation via API REST

{% swagger baseUrl="{{base_url}}/api/sync/v1/contrats" path="" method="post" summary="Synchroniser les contrats" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="contrats" type="array" required="true" %}
​
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.dateFin" type="string" %}
Date au format DD/MM/YYYY
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.dateDebut" type="string" %}
Date au format DD/MM/YYYY
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.nomEntreprise" type="string" required="true" %}
Nom de l'entreprise 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.emailPersonnel" type="string" required="true" %}
Email du tuteur école
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.prenomPersonnel" type="string" required="true" %}
Prénom du tuteur école
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.nomPersonnel" type="string" required="true" %}
Nom du tuteur école
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.codePersonnel" type="string" required="true" %}
Code du tuteur école
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.emailMaitreApprentissage" type="string" required="true" %}
Email maitre apprentissage
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.prenomMaitreApprentissage" type="string" required="true" %}
Prenom maitre apprentissage
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.nomMaitreApprentissage" type="string" required="true" %}
Nom maitre apprentissage
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.codeMaitreApprentissage" type="string" required="true" %}
Identifiant du maitre apprentissage
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.nomApprenant" type="string" required="true" %}
Nom de l'apprenant
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.emailApprenant" type="string" required="true" %}
email de l'apprenant
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.prenomApprenant" type="string" required="true" %}
Prenom de l'apprenant
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.codeApprenant" type="string" required="true" %}
Identifiant de l'apprenant
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.codeContrat" type="string" required="true" %}
L'identifiant unique du contrat 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.codePeriode" type="string" required="true" %}
Identifiant de la période associée
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.nomPeriode" required="true" type="string" %}
Nom de la période
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.codeFormation" required="true" type="string" %}
Identifiant de la formation
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.nomFormation" required="true" type="string" %}
Le nom de la formation
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.codeSite" required="true" type="string" %}
Identifiant du site
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.nomSite" required="true" type="string" %}
Nom du site
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.codeAnnee" required="true" type="string" %}
Identifiant de l'année
{% endswagger-parameter %}

{% swagger-parameter in="body" name="contrats.$.nomAnnee" required="true" type="string" %}
Nom de l'année
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="" baseUrl="{{base_url}}/api/sync/v1/contrats" summary="Récupère tous les contrats" %}
{% swagger-description %}
Retourne les contrats selon la même structure de donnees que celle envoyee dans le POST au dessus
{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="delete" path="" baseUrl="{{base_url}}/api/sync/v1/contrats" summary="Supprimer tous les contrats" %}
{% swagger-description %}
Attention cette route est a utiliser uniquement dans le bac à sable
{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}
{% endswagger %}

## Synchronisation via FTP

Voici un exemple de fichier nécessaire à mettre sur un serveur FTP ( si vous en avez pas nous vous donnerons accès à un chez nous )

Il est nécessaire au préalable d'avoir configuré la structure de votre établissement sur la plateforme.

Le fichier est lu toutes les nuits et nous trouvons les différences automatiquement et les répercutons sur la plateforme

{% file src="../.gitbook/assets/API Sync.csv" %}
template ftp
{% endfile %}
