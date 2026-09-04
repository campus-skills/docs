# Lien sans mot de passe

Un moyen simple pour un utilisateur de se connecter à la plateforme depuis un environnement existant est de récupérer un lien ne nécessitant pas de mot de passe.

Si vous disposez d'une interface existante pour vos utilisateurs (LMS ou autres), il vous suffit de créer un bouton à un endroit de cette interface qui effectuera une requête sur une des routes suivantes afin de récupérer un lien de connexion sans mot de passe.
Il vous suffit ensuite d'ouvrir un nouvel onglet avec l'URL récupérée afin de permettre à un utilisateur connecté dans votre application d'arriver directement connecté sur Ypareo Skills.

## Lien utilisateur

{% swagger method="get" path="" baseUrl="{{URL}}/api/sync/v1/passwordLessLink" summary="Récupérer un lien sans mot de passe" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="email" required="true" %}
Email de l'utilisateur
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    url: "Lien passwordLess"
}
```
{% endswagger-response %}
{% endswagger %}

## Lien vers un contrat

{% swagger method="get" path="" baseUrl="{{URL}}/api/sync/v1/linkToContract" summary="Permet de récupérer un lien pointant directement sur le contrat d'un apprenant" %}
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
```
{% endswagger-response %}
{% endswagger %}
