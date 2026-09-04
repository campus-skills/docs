# Marque blanche

La marque blanche permet de proposer votre propre identité pour l'application : nom, logo, couleurs et nom de domaine.

La mise en place de la marque blanche se fait avec votre CSM (Customer Success Manager), qui vous accompagne sur l'ensemble de la configuration.

## Nom de domaine

Il existe deux types de marque blanche pour le nom de domaine de l'application.

### Sous-domaine parmi une liste proposée

L'application est accessible sur un sous-domaine parmi une liste de domaines proposées, par exemple `https://votre-nom.campus-skills.com`.

Les domaines proposés sont les suivants :
- campus-skills.com
- livretalternance.com
- livretapprenant.com
- livretdapprentissage.com
- monlivretdalternance.com
- suivi-tuteur.com

Dans ce cas, la configuration est entièrement réalisée de notre côté : vous n'avez aucune action à effectuer.

### Nom de domaine vous appartenant

Si vous préférez utiliser un nom de domaine qui vous appartient, plusieurs étapes sont à réaliser chez votre registrar (l'hébergeur qui gère votre nom de domaine).

#### 1. Enregistrement DNS de type CNAME

Créez un enregistrement CNAME faisant pointer votre nom de domaine vers `votre-nom.campus-skills.com`.

#### 2. Sécurisation des emails envoyés par Ypareo Skills

Comme les emails envoyés depuis l'application seront envoyés avec une adresse d'expédition votre nom de domaine, plusieurs enregistrements DNS sont nécessaires pour que ces envois soient reconnus comme légitimes par les serveurs de messagerie destinataires.

Créez les enregistrements suivants, de type TXT :

| Type | Nom | Valeur |
|---|---|---|
| SPF | `@` (ou votre domaine) | `v=spf1 include:amazonses.com -all` |
| DMARC | `_dmarc` | `v=DMARC1; p=reject;` |
| DKIM | fourni par nos équipes | fourni par nos équipes |

Pour les enregistrements DKIM, contactez votre CSM ou écrivez-nous à <support-campus-skills-ymag@septeo.com> pour obtenir la liste des enregistrements à créer.
