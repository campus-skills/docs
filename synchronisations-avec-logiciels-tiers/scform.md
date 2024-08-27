# SCForm/Galia

[L'ERP Galia](https://www.sc-form.com/logiciel-gestion-centre-de-formation-longue-galia/) de l'éditeur SCForm

Pour pouvoir faire l'intégration nous aurons besoin d'accès APIs ainsi que l'url de votre application.

Le plus simple est de demander à votre contact chez SCForm de vous fournir ça en mettant l'équipe technique en copie ( ils sont habitués et connaissent très bien l'éditeur Campus Skills ) dev@campus-skills.com

Une fois fait nous pourrons sélectionner ensemble les actions de formation que vous souhaitez synchroniser.





Connection sans mot de passe depuis SCForm

<mark style="color:green;">`GET`</mark> `/api/auth/galia`

Pour récupérer une URL sans mot de passe pour un utilisateur GALIA

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

{% tab title="400" %}
```json
{
  "error": "Invalid request"
}
```
{% endtab %}
{% endtabs %}
