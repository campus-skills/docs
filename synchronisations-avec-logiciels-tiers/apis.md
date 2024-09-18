---
description: >-
  Ici nous vous proposons d'utiliser notre API pour synchroniser les données
  depuis votre logiciel de gestion vers le notre.
---

# Nos APIs

Pour synchroniser les données de votre logiciel vers le notre, nous vous proposons d'utiliser directement l'API REST

### Structure de données

Au sein de Campus Skills la structure des données peut être décrite ainsi :

* Votre organisme peut être déployé dans plusieurs villes nous appelons ça des **sites**
* Il y a des **périodes** de formation qui correspondent classiquement aux années scolaires ( 2020/2021, 2021/2022 etc )
* Il y a des **programmes** de formations ( BTS MCO, Licence RH ) qui sont déployés sur un site et sur une période.
* Il y a des **années** de formation ( Licence RH 1ière année, License RH 2ième année etc.. )
* Et il y a des **groupes** qui correspondent à des sessions de formations.

Nous voulons avec cette structure regrouper les apprenants qui suivent la même formation sur le même site pour la même période donnée et la même année.

Cela vous permettra d'avoir un suivi clair.

Ainsi en plus des données sur le contrat, nous vous demandons d'ajouter des informations supplémentaires

#### Unicité des ids

Attention dans les données à synchroniser nous vous demandons de spécifier les identifiants de vos utilisateurs, ces identifiants doivent être uniques quelque soit la collection.

Par exemple si un etudiant a le même identifiant qu'un maitre d'apprentissage, l'appel API va vous retourner une erreur

Si vous avez des tables différentes en fonction des rôles et donc potentiellement des conflits d'ids entre ces tables, merci de prédixer les identifiant envoyés.

#### Unicité des emails

Dans notre SI, un email est rattaché à un compte et un seul. Si deux tuteurs entreprises ont le même mail, vous ne pourrez pas synchroniser les données

## Synchronisation via API REST

## Synchroniser les contrats

<mark style="color:green;">`POST`</mark> `{{base_url}}/api/sync/v1/contrats`

#### Request Body

| Name                                                                   | Type   | Description                                                                               |
| ---------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| contrats<mark style="color:red;">\*</mark>                             | array  | ​                                                                                          |
| contrats.$.dateFin                                                     | string | Date au format DD/MM/YYYY                                                                 |
| contrats.$.dateDebut                                                   | string | Date au format DD/MM/YYYY                                                                 |
| contrats.$.nomGroupe<mark style="color:red;">\*</mark>                 | string | Nom du groupe                                                                             |
| contrats.$.nomEntreprise<mark style="color:red;">\*</mark>             | string | Nom de l'entreprise                                                                       |
| contrats.$.emailPersonnel<mark style="color:red;">\*</mark>            | string | Email du tuteur école                                                                     |
| contrats.$.prenomPersonnel<mark style="color:red;">\*</mark>           | string | Prénom du tuteur école                                                                    |
| contrats.$.nomPersonnel<mark style="color:red;">\*</mark>              | string | Nom du tuteur école                                                                       |
| contrats.$.codePersonnel<mark style="color:red;">\*</mark>             | string | Code du tuteur école, doit être unique parmi tous les utilisateurs                        |
| contrats.$.emailMaitreApprentissage<mark style="color:red;">\*</mark>  | string | Email maitre apprentissage                                                                |
| contrats.$.prenomMaitreApprentissage<mark style="color:red;">\*</mark> | string | Prenom maitre apprentissage                                                               |
| contrats.$.nomMaitreApprentissage<mark style="color:red;">\*</mark>    | string | Nom maitre apprentissage                                                                  |
| contrats.$.codeMaitreApprentissage<mark style="color:red;">\*</mark>   | string | Identifiant du maitre apprentissage, doit être unique parmi tous les utilisateurs         |
| contrats.$.nomApprenant<mark style="color:red;">\*</mark>              | string | Nom de l'apprenant                                                                        |
| contrats.$.emailApprenant<mark style="color:red;">\*</mark>            | string | email de l'apprenant                                                                      |
| contrats.$.prenomApprenant<mark style="color:red;">\*</mark>           | string | Prenom de l'apprenant                                                                     |
| contrats.$.codeApprenant<mark style="color:red;">\*</mark>             | string | Identifiant de l'apprenant, doit être unique parmi tous les utilisateurs                  |
| contrats.$.codeGroupe<mark style="color:red;">\*</mark>                | string | L'identifiant unique du groupe de l'apprenant                                             |
| contrats.$.codeContrat<mark style="color:red;">\*</mark>               | string | L'identifiant unique du contrat                                                           |
| contrats.$.codePeriode<mark style="color:red;">\*</mark>               | string | Identifiant de la période associée ( le couple codePeriode, nomPeriode doit être unique ) |
| contrats.$.nomPeriode<mark style="color:red;">\*</mark>                | string | Nom de la période                                                                         |
| contrats.$.codeFormation<mark style="color:red;">\*</mark>             | string | Identifiant de la formation ( le couple codeFormation, nomFormation doit être unique )    |
| contrats.$.nomFormation<mark style="color:red;">\*</mark>              | string | Le nom de la formation                                                                    |
| contrats.$.codeSite<mark style="color:red;">\*</mark>                  | string | Identifiant du site ( le couple codeSite, nomSite doit être unique )                      |
| contrats.$.nomSite<mark style="color:red;">\*</mark>                   | string | Nom du site                                                                               |
| contrats.$.codeAnnee<mark style="color:red;">\*</mark>                 | string | Identifiant de l'année ( le couple codeAnnee, nomAnnee doit être unique )                 |
| contrats.$.nomAnnee<mark style="color:red;">\*</mark>                  | string | Nom de l'année                                                                            |
| contrats.$.missionTitle                                                | string | Titre de la mission                                                                       |
| contrats.$.missionDetails                                              | string | Descriptif de la mission                                                                  |
| contrats.$.monthStartGroup                                             | string | Info de démarrage du groupe permettant de gérer les rentrées décalées                     |
| contrats.$.rncp                                                        | string | codeRNCP                                                                                  |

#### Response
Retourne les contrats selon la même structure de données que celle envoyée dans le POST au dessus.

{% tabs %}
{% tab title="200: OK " %}
```javascript
{
  "total": 1,
  "contrats": []
}
```
{% endtab %}
{% endtabs %}

## Récupère tous les contrats intégrés

<mark style="color:blue;">`GET`</mark> `{{base_url}}/api/sync/v1/contrats`

#### Query Parameters
Name | Type | Description
--- | --- | ---
limit | number | Nombre de contrats maximum à récupérer (optionnel)
page | number | Numéro de la page à récupérer (optionnel)

#### Response
Retourne les contrats selon la même structure de donnees que celle envoyee dans le POST au dessus.

{% tabs %}
{% tab title="200: OK " %}
```javascript
{
  "total": 1,
  "contrats": []
}
```
{% endtab %}
{% endtabs %}

## Récupère tous les contrats transmis

<mark style="color:blue;">`GET`</mark> `{{base_url}}/api/sync/v1/contrats-get-all`

#### Query Parameters
Name | Type | Description
--- | --- | ---
limit | number | Nombre de contrats maximum à récupérer (optionnel)
page | number | Numéro de la page à récupérer (optionnel)

#### Response
Retourne la même réponse que pour les contrats transmis au dessus.

{% tabs %}
{% tab title="200: OK " %}
```javascript
{
  "total": 1,
  "contrats": []
}
```
{% endtab %}
{% endtabs %}

## Simuler une synchronisation

<mark style="color:red;">`POST`</mark> `{{base_url}}/api/sync/v1/`contrats-diff

Cette route est une sorte de dry run sur l'intégration.

#### Response
Retourne un objet avec 4 tableaux de contrats.

{% tabs %}
{% tab title="200: OK " %}
```javascript
{
    "same": [], // contrats similaires à la précédente synchro
    "added": [], // nouveaux
    "updated": [], // changements détectés
    "removed": [] // contrats qui seront archivés
}
```
{% endtab %}
{% endtabs %}


## Supprimer tous les contrats

<mark style="color:red;">`DELETE`</mark> `{{base_url}}/api/sync/v1/contrats`

Attention cette route est a utiliser uniquement dans le bac à sable

{% tabs %}
{% tab title="200: OK " %}
```javascript
{
  // Response
}
```
{% endtab %}
{% endtabs %}

#### Différence entre contrat transmis et intégré

Un contrat transmis est une donnée que nous recevons via API

Un contrat intégré est un contrat transmis que nous avons su associer à une session ( cela nécessite que l'équipe intégration a configuré les modèles )
