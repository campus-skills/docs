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
403 - Unauthorized
{% endhint %}

