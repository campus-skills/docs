# Connecteur Make

Le connecteur Make est une solution puissante et intuitive pour gérer vos contrats.

**Synchronisation Automatisée :** gagnez du temps en synchronisant automatiquement vos contrats avec d'autres systèmes, réduisant les erreurs manuelles et améliorant l'efficacité.

**Intégration Fluide :** compatible avec une large gamme de logiciels, notre connecteur assure une intégration sans interruption et personnalisable selon vos besoins spécifiques.
Simplifiez et sécurisez la gestion de vos contrats avec le connecteur Make, optimisant ainsi votre productivité et votre flux de travail.

# Connecter Campus Skills à Make

1. Installez notre [connecteur](https://www.make.com/en/hq/app-invitation/1940aa4cbb6d06c7130357317bc45dec)
2. Connectez-vous à votre compte Make, ajouter un module Campus Skills à votre scénario, et cliquez sur “Create a connection”
3. [Récupérez votre token d’authentification](https://docs.campus-skills.com/recuperer-son-token)
4. Entrez le token d’authentification dans le champ “API Key”
5. Optionnel: modifier le champ “Connection name”
6. Cliquez sur “Save”

# Construire un scénario Campus Skills dans Make

## Actions

### Tester la connexion
Module pour tester la validité de votre token d’authentification.
#### Entrées
Pas d’entrées.
#### Sorties
Vous recevez un objet vous indiquant si votre token est valide ou non.
Plus d'infos [ici](https://docs.campus-skills.com/recuperer-son-token#tester-son-token).


### Simuler une synchronisation
Module permettant de tester la synchronisation avant d’appliquer les changements. C’est une mesure de sécurité. Vous recevrez la différence entre vos contrats actuellement sur la plateforme et les modifications que vous souhaitez faire.
#### Entrées 
En entrée, vous fournissez un tableau de contrats (nommé “contrats”) selon les paramètres définis [ici](https://docs.campus-skills.com/synchronisations-avec-logiciels-tiers/apis#synchroniser-les-contrats).
#### Sorties 
Vous recevez un objet contenant 4 tableaux : same, added, updated, removed. Ces tableaux sont remplis de contrats ayant été, non mis à jour, ajoutés, mis à jour et supprimés.


### Synchroniser les contrats
Ce module vous permet de synchroniser vos contrats avec Campus Skills.
#### Entrées 
En entrée, vous fournissez un tableau de contrats (nommé “contrats”) selon les paramètres décrits [ici](https://docs.campus-skills.com/synchronisations-avec-logiciels-tiers/apis#synchroniser-les-contrats).
#### Sorties 
Vous recevrez le statut de votre opération, le nombre de contrats que vous nous avez transmis et enfin un warning si besoin est.

### Réinitialiser la synchronisation
Ce module vous permet de remettre à 0 la synchronisation. Cela ne supprime pas les contrats, cela supprime l’état de la synchronisation. Une fois que vous avez fait cette opération tous les contrats transmis après seront considérés comme nouveaux. Il faut utiliser ce module sur un changement d’année par exemple.
#### Entrées 
Pas d’entrée.
#### Sorties
Vous recevez la même réponse que pour le module “Synchroniser les contrats”, mais cette fois-ci avec un nombre de contrats transmis à 0.


## Searches

### Récupérer les contrats transmis
Ce module vous permet de récupérer tous les contrats que nous avons reçus de votre part.
#### Entrées
Pas d’entrée.
#### Sorties
Vous recevrez un objet contenant le nombre de contrats transmis et un tableau des contrats (nommé "contrats").

### Récupérer les contrats intégrés
Ce module vous permet de récupérer tous les contrats que nous avons reçus et que nous avons transmis à la plateforme. 
- Un contrat transmis est une donnée que nous recevons via API.
- Un contrat intégré est un contrat transmis que nous avons su associer à une session ( cela nécessite que l'équipe intégration a configuré les modèles )
#### Entrées
Pas d’entrée.
#### Sorties
Vous recevrez un objet contenant le nombre de contrats intégrés et un tableau des contrats (nommé "contrats").

### Récupérer les contrats transmis
Ce module vous permet de récupérer tous les contrats que nous avons reçus de votre part.
#### Entrées
Pas d’entrée.
#### Sorties
Vous recevrez un objet contenant le nombre de contrats transmis et un tableau des contrats (nommé "contrats").

### Récupérer les validation d'un étudiant
Ce module vous permet de récupérer les validations d'un étudiant.
#### Entrées
Vous devez fournir l'id de l'étudiant que vous nous avez transmis au moment de la synchronisation.
#### Sorties
Vous recevrez un objet contenant le nom de l'étudiant, son id, et les validations par session. Pour savoir plus, voir [la documentation](https://docs.campus-skills.com/api-public/en-cours#recuperer-les-notes-et-les-validations-de-competences-dun-apprenant).


# Tips & Tricks

## Scénario type :

**Fréquence :** ce scénario peut tourner une fois par semaine pendant la nuit par exemple.

1. Récupérer vos données dans votre outil
2. Tester la connexion (condition d’arrêt)
3. Formater les données selon le format “Contrat” de Campus Skills avec un “Array aggregator" par exemple. Pour avoir accès à ce format il vous suffit d’ajouter le module de synchronisation et il vous le proposera dans “Target structure type”. Cette étape vous permet de créer une table de correspondance entre vos données et celles sur Campus Skills.
    ![Exemple d'Array aggregator](https://campus-skills.s3-eu-west-1.amazonaws.com/gtbxaf9TZ88iJKR7H/9/18/2024,%202:53:32%20PM-Capture%20decran%202024-09-18%20a%2016.49.41.png)
4. Simuler une synchronisation avec vos données. Si vous repérez un nombre anormal de contrats qui se trouvent dans le tableau “Updated” ou “Deleted”, c’est une condition d’arrêt.
5. Synchroniser vos contrats
