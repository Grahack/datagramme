# Voici la todoliste détaillée 
### pour finaliser les v2 numérique et mécanique de [http://datagramme.fr](http://datagramme.fr)

Starring : LG & ED (datagramme canal historique), VP (JE telecomnancy.net), SB (graphisme), CL & MC & TV (contenus)

## Datagramme version mécanique

### Production de quarante jeux à distribuer dans les centres

* _TV, début janvier_ lance les dernières commandes pour produire 5 jeux x 8 sites
* _CL&SB, janvier_ réceptionnent les produits
* _TV, fin janvier_ contacte chaque centre et demande (i) un inventaire de ce qu'il y a (ii) propose un envoi pour arriver à 5 jeux (iii) demande le renvoi des anciens plateaux 
** Plateau de jeu (Ancien|Bricolé sur place) | Fiches Questions (Ancien|Nouveau) format | Pions et dés | Carte memory | Cartes bonus-malus | Livrets (Ancien|Réimprimé)
* _TV+CL&SB, février_ effectuent les envois lors d'un passage à rocquencourt et on stocke les vieux plateaux au cas où.

### Mise en ligne du mode d'emploi pour produire soi-même des jeux

* _TV_ crée un document mode d'emploi 
* _ED_ nous dit comment que on pourrait produire plateau et tout ça (fichier pour imprimante 3D) etc...
* _SB_ rassemble tous les documents envoyés à G2000 dans un répertoire avec des noms bien identifiables
* _TV_ contacte les deux prestataires et leur propose d'ouvrir les données sur les commandes pour permettre de les contacter en priorité
* _all_ On valide et publie.

## Datagramme version numérique

### Recette de la v1

#### Aspects techniques

* _VP, yet_ donne son identifiant github pour travailler sur la version Inria des sources
  * On note que la `makefile` fait la mise à jour complète des branches master et du site web github
* _VP+TV, yet_ ça y est les images sont toutes entrées sour la forme "./nomdelimage.png" et il faut probablement concaténer `../ressources/images/questions/` pour que ça marche dans le jeu
* _VP, début janvier_ regarde http://inriamecsci.github.io/datagramme/src/test.html et aide TV à le finaliser
  * L'appel à generateQuestionPopUp($("#question"), questions[k][i]); génère l'erreur «TypeError: disposition.joueurs[disposition.tourJoueur] is undefined», comment crr le bon contexte
* _VP, yet_, documente les fichiers source à minima : une ligne de doc pour chaque fichier et pour chaque fichier .js du jeu (pas jquery !) la liste des fonctions avec une ligne pour dire à qui elle serve et pour chaque fichier .css à quelle partie du jeu ça correspond, qq chose comme
  * index.html : fichier principal pour lancer le jeu
  * test.html : fichier pour tester les questions hors du jeu
  * jquery.js, jquery-ui.js, jquery-ui.theme.css, jquery-ui.structure.css : les fichiers de jquery, ont ils été patchés ? si oui comment faire le diff avec les fichiers originels ? 
  * jquery-ui-1.11.1.custom et jquery-ui-1.11.1.custom.zip sont ils à garder ? virer ?
  * ou sont les CSS specifiques du jeu ?
  * include.js game.js  init.js question.js questions.js sont les fichiers du jeu peut on donner leur role et les fonctions
* _VP, TV, yet_ avec l'accord de VP, TV crée une version uncristfy/beautify des fichiers source (formattage standarr et propre des sources) et un version .min (compacte)des fichiers tiers non patchés

#### Validation du jeu

* _TV+CL+MC+SB+LG+ED_ jouent au jeu dans sa v1 et font tous les retours en vrac sur le jeu
  * _SB_ propose une solution graphique pour la v2
  * _LG_ reformule son rêve initial

### Cahier des charges de la v2

#### Amélioration graphique et ergonomique

Globalement on fait en sorte que la version numérique du jeu empreinte les éléments graphiques du jeu réel

* Le fichier datagramme/src/explanations.html est (côté Inria) mis au propre avec des lines et illustrations
* Le site http://datagramme.fr est (côté Inria) finalisé

* En vrac :
  * Le jeu de dé fait l'objet d'une petite animation
  * On ajoute des sons (en option, passé comme paramètre au lien http://inriamecsci.github.io/datagramme/src/index.html?sound=true)

#### Amélioration des questions

* On ajoute la possibilité d'illustrer la réponsse aux questions avec une image (les images anevrisme.jpg flamands.jpg hopper.jpg INRIA-CDR0053-0081.jpg iter.jpg lovelace.jpg sont prévues pour ça).
* On ajoute un mécanisme de détection du mot clé qui donne la réponse pour les questions de type Directe
* Pour les questions non prises en compte dans la v1 on regarde comment les (i) éliminer (ii) transformer en questions gérables (iii) inventer une astuce

#### Ajout du mécanismes de bonus-malus

* À voir ensemble 

#### Amélioration de l'interactivité

* Le truc du jeu des cartes mémory est pas clair encore : qui a une bonne idée asticieuse pour ?

* On peut lancer le jeu directement avec index.html?joueur=1&solo=true&animateur=false*tours=15 (ou 0 pour sortie) et cartes et couleurs sont données par défaut

* Sous la forme d'un lien vers le site [https://pixees.fr](https://pixees.fr) les joueurs disposent d'un menu pour poser une question supplémentaires à propos d'un question abordée ou suggérer une autre réponse ou proposer une autre question ou prendre rendez vous sur un forum/réseau social existant ou faire tout commentaire sur le jeu
  * Le lien sera de la forme https://pixees.fr/?page_id=3405?fscf_field4_4=3&fscf_field4_2=Blabla%20et%20tralala donc le seul développement sera de créer le lien web avec l'intitulé de sa question, son id, et tout le reste sera géré sur pixees.fr

* À partir du fichier test.html de la liste des questions on peut ouvrir une fichier animateur qui comme dans le [livret](http://inriamecsci.github.io/datagramme/docs/livret-datagramme.pdf) montre la question et sa réponse

### Réalisation de la v2

* _tou-te-s, fin janvier_ : On fait une visio de partage et mise en place de tout ça
* _TV+VP, fin janvier_ : On demande un avenant à la JE 
* _VP, février_ : fait le dev de v2
* _TV et al, février_ : met en place les éléments qui leur incombent
* _TV et al, mars_ : fait la recette et sabre le champagne

## Références

* Dépot github sources et documentations : [https://github.com/InriaMecsci/datagramme](https://github.com/InriaMecsci/datagramme/blob/master/README.md)

* Notepad d'ED [https://pad.inria.fr/p/AniAJ10Rb9bQADGJ]([https://pad.inria.fr/p/AniAJ10Rb9bQADGJ)
