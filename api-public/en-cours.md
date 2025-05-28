---
description: >-
  Vous trouverez ici les routes permettant de récupérer des infos pour un
  apprenant.
---

# API Public

### &#x20;Synchroniser un calendrier de groupe au format ICS

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

## Récupérer les notes et les validations de compétences d'un apprenant

<mark style="color:blue;">`GET`</mark> `{{URL}}/api/v1/grades`



#### Query Parameters

Un des deux est obligatoire

| Name                                        | Type   | Description                         |
| ------------------------------------------- | ------ | ----------------------------------- |
| studentId<mark style="color:red;">\*</mark> | String | L'id de l'utilisateur dans votre SI |
| email                                       | String | L'email de l'utilisateur            |

{% tabs %}
{% tab title="200: OK " %}
<pre class="language-json"><code class="lang-json">// La réponse sera de type et vous permet d'accéder à la moyenne globale et aussi à la moyenne par bloc

{
    "studentName": "Prénom nom de l'apprenant",
    "userId": "id dans le SI Campus skills",
    "sessions": [
<strong>        "sessionId": "id de la session dans le SI Campus skills",
</strong>	"sessionName": "nom de la session",
	"autoValidationMean": "Moyenne autoévaludation",
	"validationMean": "Moyenne évaluation",
	"companyValidationMean": "Moyenne validation tuteur entreprise",
        "blocks": [
		"blockId": "id dans le SI Campus skills",
		"blockName": "CONSEIL EN INGÉNERIE IMMOBILIER",
		"autoValidationMean": "Moyenne autoévaludation",
	        "validationMean": "Moyenne évaluation",
	        "companyValidationMean": "Moyenne validation tuteur entreprise",
		"skills": [
		{
							"skillName": "Nom de la compétence",
							"autoValidationScore": "Score d'autoevaluation",
							"autoValidationGrade": "Note d'autoevaluation de la compétence sur 1",
							"autoValidationLegend": "Signification sur l'échelle du score",
							"validationGrade": "Note d'evaluation par le centre sur 1",
							"validationLegend": "Signification sur l'échelle du score",
							"validationScore": "Score d'evaluation",
							"companyValidationScore": "Score d'evaluation par l'entreprise",
							"companyValidationGrade": "Note d'evaluation par l'entreprise sur 1",
							"companyValidationLegend": "Signification sur l'échelle du score",
	       },
        ],
        
    ],

}
</code></pre>
{% endtab %}
{% endtabs %}

### Récupérer l'avancement des livrets pour une session

<mark style="color:blue;">`GET`</mark> `{{URL}}/api/v1/`get-training-progress-by-students

Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

#### Example Request

```json
{
  "codeSchool": "identifiant de l'ecole précédemment transmis",
}
```

```

// La réponse sera un tableau des contrats des apprenants

[
    {
        "_id": "j5LxLDrPPtu4GtHFj",
        "studentName": "Agathe BATEAU",
        "tutorName": "Eric VOITURE",
        "tutorSchoolName": "Julie AVION",
        "companyName": " APPLE",
        "reports": [
            {
                "name": "Intégration en entreprise",
                "reportDone": true,
                "isLate": true,
                "dateOfReport": "2023-09-27T00:00:00.000Z"
            },
         {
                "name": "Attestation d'expérience au milieu professionnel",
                "reportDone": false,
                "isLate": false,
                "dateOfReport": "2025-05-07T07:17:00.000Z"
            },
            ...
```



### Synchroniser les absences d'un apprenant

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

