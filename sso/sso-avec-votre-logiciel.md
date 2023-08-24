# SSO avec votre logiciel

Nous pouvons nous connecter avec un SSO que vous avez chez vous afin d'éviter la duplication des identifiants d'accès.

Cette configuration peut s'appliquer pour des utilisateurs et d'autres peuvent bénéficier de l'authentification classique avec mot de passe et email.

Par exemple : Les tuteurs entreprise peuvent ne pas avoir de compte au sein de votre SI mais les étudiants et les formateurs ou chargés de relation entreprise oui. Dans ce cas nous configurons la plateforme pour proposer la connexion SSO et la connexion Login/MotDePasse.

* Nous privilégions l'authentification avec le protocole SAML2, il vous suffit pour celà de nous fournir un certain nombre d'informations

Pour le moment nous parlons les protocoles suivants :

- [openidp](https://openidp.feide.no/)
- [openam](https://www.forgerock.com/)
- [adfs](https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services)



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

![](https://campus-skills.s3.eu-west-1.amazonaws.com/image001.png)

## SSO Oauth2 avec Google

Si vous avez la suite Google, nous pouvons mettre en place cette authentification.

Pour celà il faut suivre [la procédure ici](https://devstory.net/11123/creation-d-un-google-api-console-project-et-oauth2-client-id)

Sachant que les origines à autoriser sont : 
* [URL application campus skills] et https://campus-skills.eu.ngrok.io pour nos tests.
* Les urls de ridirection sont [URL application campus skills]/_oauth/[identifiant unique] et https://campus-skills.eu.ngrok.io/_oauth/[identifiant unique] pour nos tests

où [URL de l'application] est celle que vous avez choisi dans la section marque blanche et [identifiant unique] est un identidiant que nous vous transmettrons.

Une fois fait il faudra nous transmettre le clientId et le clientSecret à dev@campus-skills.com

