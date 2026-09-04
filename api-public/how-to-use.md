# Utilisation de l'API

## URL des requêtes

Les requêtes présentes dans cette documentation doivent être préfixées par l'URL de l'application Ypareo Skills.

Si vous utilisez l'application au format marque blanche, c'est cette URL qu'il faudra utiliser.

Sinon, l'URL de base est `https://app.ypareo-skills.com`

## Récupérer son token

Pour que l'API fonctionne il vous faut un token qui permettra d'identifier et de sécuriser toutes les requêtes.

Pour l'obtenir, merci de nous contacter à <support-campus-skills-ymag@septeo.com> ou de contacter votre CSM.

Ce token est strictement confidentiel et vous permettra de récupérer les données de la plateforme Ypareo Skills via une authentification par Bearer Token, c'est à dire que toutes vos requêtes doivent contenir le header :

```javascript
{
    Authorization: Bearer $token
}
```

Sans ça vous aurez un retour du type 

{% hint style="danger" %}
{ "error": "UNAUTHORIZED", "reason": "Vous n'êtes pas autorisé à effectuer cette action." }
{% endhint %}

### Tester son token

{% swagger baseUrl="{{URL}}/api/sync/v1/test" path="" method="get" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200" description="" %}
```json
{
    "value": "token valid",
    "name": "Nom de votre compte sur la plateforme"
}
```
{% endswagger-response %}
{% endswagger %}
