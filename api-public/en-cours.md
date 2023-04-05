# En cours

## En cours

Toutes les données de notre application sont accessibles via APIs, nous les documentons au fur et à mesure de vos besoins.

### Authentification

Un moyen simple pour un utilisateur de se connecter à la plateforme depuis un environnement existant est de récupérer un lien ne nécessitant pas de mot de passe :

{% swagger method="get" path="" baseUrl="{{base_url}}/sync/v1/linkToContract" summary="Permet de récupérer pour l'utilisateur avec l'id un lien vers le contrat" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="userId" required="true" %}
Id de l'utilisateur dans votre SI
{% endswagger-parameter %}

{% swagger-parameter in="query" name="contractId" required="true" %}
Code du contrat dans votre SI
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
Nous vous renvoyant un json avec la clef url content l'url passwordLess
{% endswagger-response %}
{% endswagger %}
