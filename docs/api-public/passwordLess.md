# Lien sans mot de passe

Un moyen simple pour un utilisateur de se connecter à la plateforme depuis un environnement existant est de récupérer un lien ne nécessitant pas de mot de passe.

Si vous disposez d'une interface existante pour vos utilisateurs (LMS ou autres), il vous suffit de créer un bouton à un endroit de cette interface qui effectuera une requête sur une des routes suivantes afin de récupérer un lien de connexion sans mot de passe.
Il vous suffit ensuite d'ouvrir un nouvel onglet avec l'URL récupérée afin de permettre à un utilisateur connecté dans votre application d'arriver directement connecté sur Ypareo Skills.

## Lien utilisateur

`GET` `{{URL}}/api/sync/v1/passwordLessLink`

**Paramètres**

| In | Nom | Requis | Description |
|---|---|---|---|
| query | `email` | oui | Email de l'utilisateur |

**Réponse `200: OK`**

```javascript
{
    url: "Lien passwordLess"
}
```

## Lien vers un contrat

`GET` `{{URL}}/api/sync/v1/linkToContract`

**Paramètres**

| In | Nom | Requis | Description |
|---|---|---|---|
| query | `email` | oui | Email de l'utilisateur |
| query | `contractId` | oui | Code du contrat dans votre SI |

**Réponse `200: OK`** — Nous vous renvoyant un json avec la clef url content l'url passwordLess

```javascript
{
  url: "Lien passwordLess";
}
```
