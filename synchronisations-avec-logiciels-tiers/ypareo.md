# Ypareo

[L'ERP Ypareo](https://www.logiciels.pro/logiciel-saas/ypareo/) de l'éditeur YMAG est un logiciel métier dédié à la gestion de l'activité de formation des organismes. Il permet d'assurer une gestion totale des processus mis en place au sein d'un établissement de formation. Il est simple, modulable et évolutif et s'inscrit donc dans la dynamique que nous suivons chez Campus Skills.

Pour pouvoir faire l'intégration nous aurons besoin de votre clef d'API basic de YPareo uniquement ( nous ne faisons que lire des données ).

Pour cela vous devez la configurer grâce à  l'interface de création d'un prestataire permettant de créer un profil d'utilisation spécifique

Elle permet ainsi de gérer et de limiter l'accès à vos données selon les besoins de votre prestataire.

Vous pouvez donc ajouter un nouveau prestataire et le nommer Campus Skills, ensuite voici les autorisations dont nous avons besoins :

* `/r/v1/sites`
* `/r/v1/formations`
* `/r/v1/periodes`
* `/r/v1/statuts`
* `/r/v1/annees`
* `/r/v1/formation-longue/groupes`
* `/r/v1/formation-longue/apprenants`
* `/r/v1/contrats `
* `/r/v1/entreprises/${codeEntreprise}/interlocuteurs`
* `/r/v1/entreprises/${codeEntreprise}`
* `/r/v1/groupes/${codeGroupe}`
* `/r/v1.1/personnels/${groupe.codePersonnel}`,

Ensuite l'application s'occupe de tout

 
