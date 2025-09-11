---
description: >-
  Ici nous vous proposons d'utiliser notre API pour synchroniser les données
  depuis votre logiciel de gestion vers le notre.
---

# Nos APIs

Pour synchroniser les données de votre logiciel vers le notre, nous vous proposons d'utiliser directement l'API REST

## Structure de données

Au sein de Campus Skills la structure des données peut être décrite ainsi :

* Votre organisme peut être déployé dans plusieurs villes nous appelons ça des **sites**
* (optionnel) Chaque site peut avoir plusieurs **marques**
* Il y a des **périodes** de formation qui correspondent classiquement aux années scolaires ( 2020/2021, 2021/2022 etc )
* Il y a des **programmes** de formations ( BTS MCO, Licence RH ) qui sont déployés sur un site et sur une période.
* Il y a des **années** de formation ( Licence RH 1ière année, License RH 2ième année etc.. )
* Et il y a des **groupes** qui correspondent à des sessions de formation.

Nous voulons avec cette structure regrouper les apprenants qui suivent la même formation sur le même site pour la même période donnée et la même année.

Cela vous permettra d'avoir un suivi clair.

Ainsi en plus des données sur le contrat, nous vous demandons d'ajouter des informations supplémentaires

### Unicité des ids

Attention dans les données à synchroniser nous vous demandons de spécifier les identifiants de vos utilisateurs, ces identifiants doivent être uniques quelque soit la collection.

Par exemple si un etudiant a le même identifiant qu'un maitre d'apprentissage, l'appel API va vous retourner une erreur

Si vous avez des tables différentes en fonction des rôles et donc potentiellement des conflits d'ids entre ces tables, merci de prédixer les identifiant envoyés.

### Unicité des emails

Dans notre SI, un email est rattaché à un compte et un seul. Si deux tuteurs entreprises ont le même mail, vous ne pourrez pas synchroniser les données

### Différence entre contrat transmis et intégré

Un contrat transmis est une donnée que nous recevons via API

Un contrat intégré est un contrat transmis que nous avons su associer à une session ( cela nécessite que l'équipe intégration a configuré les modèles )

## Synchroniser les contrats

### Nous envoyer les contrats

<mark style="color:green;">`POST`</mark> `{{base_url}}/api/sync/v2/contrats`

#### Request Body (format JSON)

Un tableau représentant l'intégralité de vos contrats actifs, cf exemple plus bas.\
Ci-dessous la liste des champs pour chaque contrats :

<table><thead><tr><th width="251.3096923828125">Name</th><th width="86.03125">Type</th><th>Description</th></tr></thead><tbody><tr><td>dateFin</td><td>string</td><td>Date au format DD/MM/YYYY</td></tr><tr><td>dateDebut</td><td>string</td><td>Date au format DD/MM/YYYY</td></tr><tr><td>nomGroupe<mark style="color:red;">*</mark></td><td>string</td><td>Nom du groupe</td></tr><tr><td>nomEntreprise<mark style="color:red;">*</mark></td><td>string</td><td>Nom de l'entreprise</td></tr><tr><td>emailPersonnel<mark style="color:red;">*</mark></td><td>string</td><td>Email du tuteur école</td></tr><tr><td>prenomPersonnel<mark style="color:red;">*</mark></td><td>string</td><td>Prénom du tuteur école</td></tr><tr><td>nomPersonnel<mark style="color:red;">*</mark></td><td>string</td><td>Nom du tuteur école</td></tr><tr><td>codePersonnel<mark style="color:red;">*</mark></td><td>string</td><td>Code du tuteur école, doit être unique parmi tous les utilisateurs</td></tr><tr><td>emailMaitreApprentissage<mark style="color:red;">*</mark></td><td>string</td><td>Email maitre apprentissage</td></tr><tr><td>prenomMaitreApprentissage<mark style="color:red;">*</mark></td><td>string</td><td>Prenom maitre apprentissage</td></tr><tr><td>nomMaitreApprentissage<mark style="color:red;">*</mark></td><td>string</td><td>Nom maitre apprentissage</td></tr><tr><td>codeMaitreApprentissage<mark style="color:red;">*</mark></td><td>string</td><td>Identifiant du maitre apprentissage, doit être unique parmi tous les utilisateurs</td></tr><tr><td>nomApprenant<mark style="color:red;">*</mark></td><td>string</td><td>Nom de l'apprenant</td></tr><tr><td>emailApprenant<mark style="color:red;">*</mark></td><td>string</td><td>email de l'apprenant</td></tr><tr><td>prenomApprenant<mark style="color:red;">*</mark></td><td>string</td><td>Prenom de l'apprenant</td></tr><tr><td>codeApprenant<mark style="color:red;">*</mark></td><td>string</td><td>Identifiant de l'apprenant, doit être unique parmi tous les utilisateurs</td></tr><tr><td>codeGroupe<mark style="color:red;">*</mark></td><td>string</td><td>L'identifiant unique du groupe de l'apprenant</td></tr><tr><td>ccodeContrat<mark style="color:red;">*</mark></td><td>string</td><td>L'identifiant unique du contrat</td></tr><tr><td>codePeriode<mark style="color:red;">*</mark></td><td>string</td><td>Identifiant de la période associée ( le couple codePeriode, nomPeriode doit être unique )</td></tr><tr><td>nomPeriode<mark style="color:red;">*</mark></td><td>string</td><td>Nom de la période</td></tr><tr><td>codeFormation<mark style="color:red;">*</mark></td><td>string</td><td>Identifiant de la formation ( le couple codeFormation, nomFormation doit être unique )</td></tr><tr><td>nomFormation<mark style="color:red;">*</mark></td><td>string</td><td>Le nom de la formation</td></tr><tr><td>codeSite<mark style="color:red;">*</mark></td><td>string</td><td>Identifiant du site ( le couple codeSite, nomSite doit être unique )</td></tr><tr><td>nomSite<mark style="color:red;">*</mark></td><td>string</td><td>Nom du site</td></tr><tr><td>codeMarque</td><td>string</td><td>Code de la marque</td></tr><tr><td>nomMarque</td><td>string</td><td>Nom de la marque</td></tr><tr><td>codeAnnee<mark style="color:red;">*</mark></td><td>string</td><td>Identifiant de l'année ( le couple codeAnnee, nomAnnee doit être unique )</td></tr><tr><td>nomAnnee<mark style="color:red;">*</mark></td><td>string</td><td>Nom de l'année</td></tr><tr><td>missionTitle</td><td>string</td><td>Titre de la mission</td></tr><tr><td>missionDetails</td><td>string</td><td>Descriptif de la mission</td></tr><tr><td>monthStartGroup</td><td>string</td><td>Info de démarrage du groupe permettant de gérer les rentrées décalées</td></tr><tr><td>rncp</td><td>string</td><td>codeRNCP</td></tr></tbody></table>

#### Exemple

```json
[
    {
        codeContrat: "1234",
        dateDebut: "01/09/2025",
        dateFin: "30/06/2026",
        nomEntreprise: "Auchan",
        codeGroupe: "Groupe1",
        nomGroupe: "BTS MCO Rennes 1ère année",
        codeSite: "Site1",
        nomSite: "Rennes",
        codePeriode: "Periode1",
        nomPeriode: "2025/2026",
        codeAnnee: "Annee1",
        nomAnnee: "1ère année",
        codeFormation: "BTSMCO",
        nomFormation: "BTS MCO",
        codeApprenant: "Apprenant1",
        prenomApprenant: "Prénom apprenant"
        nomApprenant: "Nom apprenant",
        emailApprenant: "apprenant@email.com",
        codePersonnel: "Personnel1",
        prenomPersonnel: "Prénom personnel"
        nomPersonnel: "Nom personnel",
        emailPersonnel: "personnel@email.com",
        codeMaitreApprentissage: "MaitreApprentissage1",
        prenomMaitreApprentissage: "Prénom MaitreApprentissage"
        nomMaitreApprentissage: "Nom MaitreApprentissage",
        emailMaitreApprentissage: "MaitreApprentissage@email.com",
    }
]
```

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

### Récupérer tous les contrats intégrés

<mark style="color:blue;">`GET`</mark> `{{base_url}}/api/sync/v1/contrats`

#### Query Parameters

| Name  | Type   | Description                                        |
| ----- | ------ | -------------------------------------------------- |
| limit | number | Nombre de contrats maximum à récupérer (optionnel) |
| page  | number | Numéro de la page à récupérer (optionnel)          |

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

### Récupérer tous les contrats transmis

<mark style="color:blue;">`GET`</mark> `{{base_url}}/api/sync/v1/contrats-get-all`

#### Query Parameters

| Name  | Type   | Description                                        |
| ----- | ------ | -------------------------------------------------- |
| limit | number | Nombre de contrats maximum à récupérer (optionnel) |
| page  | number | Numéro de la page à récupérer (optionnel)          |

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

### Simuler une synchronisation

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

### Supprimer tous les contrats

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



## Synchroniser un calendrier de groupe au format ICS

<mark style="color:green;">`POST`</mark> `{{URL}}/api/sync/v1/calendar-group-ics`

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

<table><thead><tr><th width="274">Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>groupId</code></td><td>string</td><td>code du groupe transmis précédemment</td></tr><tr><td><code>calendarUrl</code></td><td>string</td><td>lien calendrier ics</td></tr></tbody></table>

**Response**

{% tabs %}
{% tab title="200: OK " %}

{% endtab %}
{% endtabs %}

## Synchroniser les absences d'un apprenant

<mark style="color:green;">`POST`</mark> `{{URL}}/api/sync/v1/absences-for-student`

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

<table><thead><tr><th width="274">Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>email</code></td><td>string*</td><td>email de l'apprenant</td></tr><tr><td><code>data</code></td><td>array*</td><td>Liste d'absence</td></tr><tr><td>data.$.dateDebut</td><td>string*</td><td>Date de début au format DD/MM/YYYY-HH:mm</td></tr><tr><td>data.$.dateFin</td><td>string*</td><td>Date de fin - Date de début au format DD/MM/YYYY-HH:mm</td></tr><tr><td>data.$.type</td><td>string*</td><td>type ( <code>absence</code>ou <code>retard</code>)</td></tr><tr><td>data.$.isJusitifie</td><td>boolean*</td><td></td></tr><tr><td>data.$.motif</td><td>string</td><td></td></tr></tbody></table>

**Response**

{% tabs %}
{% tab title="200: OK " %}

{% endtab %}
{% endtabs %}
