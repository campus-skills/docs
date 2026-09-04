# SSO

Ypareo Skills prend en charge l'authentification unique (SSO) via le protocole **SAML 2.0**.

La connexion SSO peut être activée pour tout ou partie de vos utilisateurs. Par exemple, les étudiants et les formateurs peuvent se connecter en SSO, tandis que les tuteurs entreprise, qui n'ont pas de compte dans votre SI, continuent à utiliser une connexion classique par email et mot de passe.

## Fonctionnement

1. L'utilisateur clique sur le bouton de connexion SSO sur la page de login.
2. Il est redirigé vers votre fournisseur d'identité (IdP) pour s'y authentifier.
3. Une fois authentifié, votre IdP renvoie une réponse SAML à Ypareo Skills.
4. Ypareo Skills retrouve l'utilisateur correspondant **par email** (voir [Résolution de l'utilisateur](#resolution-de-lutilisateur)) et le connecte automatiquement.

## Mise en place

La configuration du SSO est réalisée par nos équipes, en lien avec votre équipe technique. Contactez-nous à <support-campus-skills-ymag@septeo.com> ou contactez votre CSM pour lancer la mise en place.

### Informations que nous vous transmettrons

| Information | Description |
|---|---|
| Entity ID / Issuer | Identifiant de Ypareo Skills en tant que Service Provider, à déclarer sur votre IdP. |
| URL de callback (ACS) | URL vers laquelle votre IdP doit renvoyer la réponse SAML. |

### Informations à nous transmettre

| Information | Description |
|---|---|
| URL du endpoint SSO | URL du Single Sign-On Service de votre IdP, vers laquelle nous enverrons les demandes d'authentification. |
| Certificat de signature | Certificat public de votre IdP, utilisé pour vérifier l'authenticité des réponses SAML qu'il nous envoie. |

### Configuration attendue sur votre IdP

| Paramètre | Valeur attendue |
|---|---|
| Entity ID / Audience du client SAML | L'Entity ID / Issuer que nous vous avons transmis |
| Assertion Consumer Service (ACS) URL | L'URL de callback transmise, avec le binding **HTTP-POST** |
| Signature de la requête (AuthnRequest) | Non signée par Ypareo Skills : n'activez pas d'exigence de signature des requêtes côté IdP, sous peine de blocage de la connexion |
| Format du NameID | `email`, dans la mesure du possible (voir ci-dessous) |
| Signature de la réponse SAML | Nous vérifions la signature de la réponse à l'aide du certificat fourni. Utilisez un algorithme standard tel que RSA-SHA256. |

### Résolution de l'utilisateur

Ypareo Skills retrouve l'utilisateur à partir de son adresse email, qui doit correspondre exactement à un compte déjà existant dans la plateforme. Cette adresse est recherchée dans la réponse SAML, dans l'ordre suivant :

1. L'attribut `mail` de la réponse.
2. À défaut, l'attribut `urn:oid:0.9.2342.19200300.100.1.3` (mail LDAP standard).
3. À défaut, si le format du NameID contient `emailAddress`, la valeur du NameID elle-même.

Le plus simple est donc de configurer directement le NameID de votre IdP au format email : aucun mapping d'attribut supplémentaire n'est alors nécessaire.

!!! warning

    La connexion SSO ne crée pas automatiquement de compte utilisateur. Assurez-vous que les comptes de vos utilisateurs existent déjà dans Ypareo Skills (import, création manuelle, synchronisation...) avant d'activer le SSO. Un utilisateur dont l'email ne correspond à aucun compte existant ne pourra pas se connecter.
