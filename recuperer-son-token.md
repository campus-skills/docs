# Récupérer son token

Pour que l'API fonctionne il vous faut votre token qui permettra d'identifier et de sécuriser toutes les requêtes.

Pour l'obtenir merci de nous contacter : dev@campus-skills.com, ce token est strictement confidentiel et vous permettra de récupérer les données de la plateforme Campus Skills via une authentification par Bearer Token, c'est à dire que toutes vos requêtes doivent contenir le header :

```javascript
{
    Authorization: Bearer $token
}
```

Sans ça vous aurez un retour du type 

{% hint style="danger" %}
{ "error": "invalid token", "reason": "Your token is invalid please contact the administrator" }
{% endhint %}

### Tester son token

{% api-method method="get" host="{{URL}}/api/sync/v1/test" path="" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
token valid
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

