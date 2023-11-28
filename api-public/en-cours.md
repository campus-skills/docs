---
description: >-
  Vous trouverez ici les routes permettant de récupérer des infos pour un
  apprenant.
---

# En cours



{% swagger method="get" path="api/v1/grades" baseUrl="{{URL}}/" summary="Récupérer les notes et les validations de compétences d'un apprenant" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="studentId" required="true" %}
L'id de l'utilisateur dans votre SI
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```json
// La réponse sera de type et vous permet d'accéder à la moyenne globale et aussi à la moyenne par bloc

{
    "studentName": "ALICIA THEROND",
    "userId": "jcBg3T6ARNrs28HEL",
    "sessions": [
        "sessionId": "id de la session",
	"sessionName": "nom de la session",
	"autoValidationMean": "Moyenne autoévaludation",
	"validationMean": "Moyenne évaluation",
	"companyValidationMean": "Moyenne validation tuteur entreprise",
        "blocks": [
		"blockId": "BC8HdEuZeBzgxFniy",
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
```
{% endswagger-response %}
{% endswagger %}

Toutes les données de notre application sont accessibles via APIs, nous les documentons au fur et à mesure de vos besoins.
