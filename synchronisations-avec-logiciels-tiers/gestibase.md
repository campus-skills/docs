# GestiBase

[L'ERP GestiBase](https://www.aimaira.fr/)

La synchronisation des contrats se fait via notre API dont la description est ici : [https://app.gitbook.com/o/bidCurKndlx9Rc0YlO5f/s/-MdGXj\_IchYujmJOF-0s/\~/changes/28/synchronisations-avec-logiciels-tiers/apis](apis.md)



Pour la connexion sans mot de passe



Le token mentionné ici est différent de celui utilisé dans les APIs de synchronisation et il vous ai transféré par email



<mark style="color:green;">`GET`</mark> `/api/auth/gestibase`

Pour récupérer une URL sans mot de passe pour un utilisateur gestibase

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**query**

| Name       | Type   | Description            |
| ---------- | ------ | ---------------------- |
| `email`    | string | Email de l'utilisateur |
| `clientId` | string | Client Id transmis     |

**Response**

{% tabs %}
{% tab title="200" %}
```json
urlpasswordLess
```
{% endtab %}
{% endtabs %}
