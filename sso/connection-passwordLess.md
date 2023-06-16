# Authentification passwordLess

Un moyen simple pour un utilisateur de se connecter à la plateforme depuis un environnement existant est de récupérer un lien ne nécessitant pas de mot de passe.

Vous pouvez ainsi mettre un bouton sur votre plateforme, et quand l'utilisateur clique dessus ouvrir une nouvelle page web avec le lien retourné par l'URL suivante :

{% swagger method="get" path="" baseUrl="{{base_url}}/api/sync/v1/passwordLessLink" summary="Récupérer un lien sans mot de passe" %}
{% swagger-description %}
{% endswagger-description %}

{% swagger-parameter in="query" name="email" required="true" type="string" %}
Email de l'utilisateur
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}

```javascript
{
  url: "Lien passwordLess";
}
```
