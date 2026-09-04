# Routes d'API

## Récupérer les notes et les validations de compétences d'un apprenant

{% swagger method="get" path="" baseUrl="{{URL}}/api/v1/grades" summary="Récupérer les notes et les validations de compétences d'un apprenant" %}
{% swagger-description %}
Un des deux paramètres (`studentId` ou `email`) est obligatoire.
{% endswagger-description %}

{% swagger-parameter in="query" name="studentId" required="false" %}
L'id de l'utilisateur dans votre SI
{% endswagger-parameter %}

{% swagger-parameter in="query" name="email" required="false" %}
L'email de l'utilisateur
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="La réponse vous permet d'accéder à la moyenne globale et aussi à la moyenne par bloc" %}
```json
{
    "studentName": "Prénom nom de l'apprenant",
    "userId": "id dans le SI Campus skills",
    "sessions": [
        {
            "sessionId": "id de la session dans le SI Campus skills",
            "sessionName": "nom de la session",
            "autoValidationMean": "Moyenne autoévaluation",
            "validationMean": "Moyenne évaluation",
            "companyValidationMean": "Moyenne validation tuteur entreprise",
            "blocks": [
                {
                    "blockId": "id dans le SI Campus skills",
                    "blockName": "CONSEIL EN INGÉNERIE IMMOBILIER",
                    "autoValidationMean": "Moyenne autoévaluation",
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
                            "companyValidationLegend": "Signification sur l'échelle du score"
                        }
                    ]
                }
            ]
        }
    ]
}
```
{% endswagger-response %}
{% endswagger %}

## Récupérer l'avancement des livrets pour une session

{% swagger method="get" path="" baseUrl="{{URL}}/api/sync/v1/get-training-progress-by-students" summary="Récupérer l'avancement des livrets pour une session" %}
{% swagger-description %}
Un des deux paramètres (`studentId` ou `email`) est obligatoire.
{% endswagger-description %}

{% swagger-parameter in="query" name="studentId" required="false" %}
L'id de l'utilisateur dans votre SI
{% endswagger-parameter %}

{% swagger-parameter in="query" name="email" required="false" %}
L'email de l'utilisateur
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="La réponse est un tableau des contrats des apprenants" %}
```json
[
    {
        "_id": "j5LxLDrPPtu4GtHFj",
        "studentName": "Agathe BATEAU",
        "tutorName": "Eric VOITURE",
        "tutorSchoolName": "Julie AVION",
        "companyName": "APPLE",
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
            }
            // ... un objet "report" par livret attendu pour cet apprenant
        ]
    }
    // ... un objet par apprenant de la session
]
```
{% endswagger-response %}
{% endswagger %}

## Synchroniser un calendrier de groupe au format ICS

{% swagger method="post" path="" baseUrl="{{URL}}/api/sync/v1/calendar-group-ics" summary="Synchroniser un calendrier de groupe au format ICS" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="groupId" required="true" type="string" %}
Code du groupe transmis précédemment
{% endswagger-parameter %}

{% swagger-parameter in="body" name="calendarUrl" required="true" type="string" %}
Lien calendrier ics
{% endswagger-parameter %}

{% swagger-response status="200: OK" %}
{% endswagger-response %}
{% endswagger %}

## Synchroniser les absences d'un apprenant

Utilisez cet endpoint pour envoyer les absences d'un apprenant, qui seront affichées dans l'onglet Absences / Retard sur Ypareo Skills.

Il est important d'envoyer l'intégralité des absences que vous souhaitez rendre visible dans l'onglet.\
Concrètement, si vous envoyez d'abord une première absence, puis plus tard une deuxième, il faudra lors du deuxième appel envoyer les deux absences. Si vous n'envoyez que la deuxième, la première n'apparaitra plus.

{% swagger method="post" path="" baseUrl="{{URL}}/api/sync/v1/absences-for-student" summary="Synchroniser les absences d'un apprenant" %}
{% swagger-description %}
La syntaxe "$" indique un sous champ de l'objet (cf exemple plus bas).
{% endswagger-description %}

{% swagger-parameter in="body" name="email" required="true" type="string" %}
Email de l'apprenant
{% endswagger-parameter %}

{% swagger-parameter in="body" name="data" required="true" type="array" %}
Liste d'absences
{% endswagger-parameter %}

{% swagger-parameter in="body" name="data.$.dateStart" required="true" type="string" %}
Date de début au format DD/MM/YYYY-HH:mm
{% endswagger-parameter %}

{% swagger-parameter in="body" name="data.$.dateEnd" required="true" type="string" %}
Date de fin au format DD/MM/YYYY-HH:mm
{% endswagger-parameter %}

{% swagger-parameter in="body" name="data.$.type" required="true" type="string" %}
`absence` ou `retard`
{% endswagger-parameter %}

{% swagger-parameter in="body" name="data.$.isJustifie" required="true" type="boolean" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="data.$.motif" required="false" type="string" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" %}
{% endswagger-response %}
{% endswagger %}

**Exemple**

```json
{
   "email": "apprenant@ecole.fr",
   "data": [
        {
            "dateStart": "08/09/2025-9:00",
            "dateEnd": "08/09/2025-17:00",
            "type": "absence",
            "isJustifie": true,
            "motif": "maladie"
        },
        {
            "dateStart": "10/09/2025-14:00",
            "dateEnd": "10/09/2025-15:00",
            "type": "absence",
            "isJustifie": false,
            "motif": ""
        }
    ]
}
```
