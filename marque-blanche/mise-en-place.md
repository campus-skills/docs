---
description: >-
  Si vous avez choisi l'option marque blanche dans la formule Campus Skills,
  cette page est là pour détailler les éléments nécessaire à sa mise en place.
---

# Mise en place

Pour mettre en place la marque blanche nous avons besoin de :

* Un nom pour l'application.
*  Définir un nom de domaine où l'application sera accessible. Cela peut être 
  * un nom de domaine à vous ( dans ce cas nous écrire à dev@campus-skills.com pour connaître les enregistrements DNS à créer chez vous )
  * un sous domaine de Campus Skills, par exemple : mon-cfa.campus-skills.com ( dans ce cas nous sommes autonomes )
* Un logo de l'application au format carré 1024x1024 pixels avec fond transparent.
* Une couleur primaire et une couleur secondaire pour l'application au[ format RGB](https://en.wikipedia.org/wiki/RGB_color_model)
* Un site internet pour être redirigé au moment où l'utilisateur se déconnecte

Il est aussi recommandé d'utiliser une adresse email de chez vous pour l'envoi des emails ( les boites mails des tuteurs entreprises ont plus de chances de faire confiance à email venant d'une adresse de votre CFA que de l'application Campus Skills ).

## Mise en place du nom de domaine

Vous devez mettre en place un enregistrement DNS CNAME.

L'enregistrement CNAME (pour Canonical Name ou nom canonique) est une entrée du système de noms de domaines (Domain Name System ou DNS) désignant l'emplacement où les internautes peuvent accéder à l'application.

La procédure dépend de votre hebergeur, quelques liens vers des hebergeurs connus :
- [Godaddy](https://fr.godaddy.com/help/ajouter-un-enregistrement-cname-19236)
- [OVH](https://help.ovhcloud.com/csm/fr-email-cname-record?id=kb_article_view&sysparm_article=KB0053252)
- [NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)
- [Microsoft](https://learn.microsoft.com/fr-fr/windows-server/networking/core-network-guide/cncg/server-certs/create-an-alias-cname-record-in-dns-for-web1)

Vous devez faire pointer le CNAME vers `eu-west-1.galaxy-ingress.meteor.com`

## Mise en place de l'email d'envoi

Nous utilisons notre serveur STMP pour envoyer les emails mais celui ci doit être configuré pour pouvoir envoyer les emails depuis un nom de domaine qui vous appartient.

La vérification de domaine est basée sur DKIM (DomainKeys Identified Mail), une norme d'authentification des e-mails que les serveurs de messagerie récepteurs utilisent pour valider l'authenticité d'un e-mail. La configuration de DKIM dans les paramètres DNS de votre domaine confirme que vous êtes le propriétaire de l'identité.

Ecrivez nous à dev@campus-skills.com afin d'obtenir les enregistrements DNS à configurer


