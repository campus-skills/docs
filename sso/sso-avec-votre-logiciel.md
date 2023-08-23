# SSO avec votre logiciel

Nous pouvons nous connecter avec un SSO que vous avez chez vous afin d'éviter la duplication des identifiants d'accès.

Nous privilégions l'authentification avec le protocole SAML2, il vous suffit pour celà de nous fournir un certain nombre d'informations.

Pour le moment nous parlons les protocoles suivants :

- [openidp](https://openidp.feide.no/)
- [openam](https://www.forgerock.com/)
- [adfs](https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services)

## Bénéfices

Si vous disposez d'une interface existante pour vos utilisateurs ( LMS ou autres ), il vous suffit de créer un bouton à un endroit de cette interface et qui ouvre l'application Campus Skills dans un nouvel onglet et un utlisateur connecté dans votre application arrivera directement connecté sur le notre.

## SSO SAML avec Microsoft AD 

Pour une authentification avec l'AD de microsoft il nous faudra :

- Le tenant id : "https://login.microsoftonline.com/TENANT_ID/saml2",
- Un certificat permettant d'assurer l'authentification

Toutes ces informations sont fournies lors de la création d'une application dont voici la documentation de Microsoft

[Documentation microsoft](https://learn.microsoft.com/fr-fr/power-apps/maker/portals/configure/configure-saml2-settings-azure-ad)

Voici les informations à remplir : 

- Provider Name : Campus Skills
- Reply Url ou URL de redirection : `https://[nom de domaine choisi pour l'application]/_saml/validate/${identifiantuniqueapplication}`. Pour l'identifiant unique de l'application nous consulter => dev@campus-skills.com
- Url de connexion : `https://[nom de domaine]/login`

Une fois fait merci de nous transmettre le XML de certificat fédéré.

[](https://campus-skills.s3.eu-west-1.amazonaws.com/image001.png)
