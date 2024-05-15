# Tu commences demain

La synchronisation des contrats se fait via notre API dont la description est ici : [https://app.gitbook.com/o/bidCurKndlx9Rc0YlO5f/s/-MdGXj\_IchYujmJOF-0s/\~/changes/28/synchronisations-avec-logiciels-tiers/apis](apis.md)



Pour la connexion sans mot de passe



<mark style="color:green;">`GET`</mark> `/api/auth/tcd`

Pour récupérer une URL sans mot de passe pour un utilisateur Tu Commences Demain

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

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

{% tab title="400" %}
```json
{
  "error": "Invalid request"
}
```
{% endtab %}
{% endtabs %}
