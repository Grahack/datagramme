# Voici la todoliste d�taill�e 
### pour finaliser les v2 num�rique et m�canique de [http://datagramme.fr](http://datagramme.fr)

Starring : LG & ED (datagramme canal historique), VP (JE telecomnancy.net), SB (graphisme), CL & MC & TV (contenus)

## Datagramme version m�canique

### Production de quarante jeux � distribuer dans les centres

* _TV, d�but janvier_ lance les derni�res commandes pour produire 5 jeux x 8 sites
* _CL&SB, janvier_ r�ceptionnent les produits
* _TV, fin janvier_ contacte chaque centre et demande (i) un inventaire de ce qu'il y a (ii) propose un envoi pour arriver � 5 jeux (iii) demande le renvoi des anciens plateaux 
** Plateau de jeu (Ancien|Bricol� sur place) | Fiches Questions (Ancien|Nouveau) format | Pions et d�s | Carte memory | Cartes bonus-malus | Livrets (Ancien|R�imprim�)
* _TV+CL&SB, f�vrier_ effectuent les envois lors d'un passage � rocquencourt et on stocke les vieux plateaux au cas o�.

### Mise en ligne du mode d'emploi pour produire soi-m�me des jeux

* _TV_ cr�e un document mode d'emploi 
* _ED_ nous dit comment que on pourrait produire plateau et tout �a (fichier pour imprimante 3D) etc...
* _SB_ rassemble tous les documents envoy�s � G2000 dans un r�pertoire avec des noms bien identifiables
* _TV_ contacte les deux prestataires et leur propose d'ouvrir les donn�es sur les commandes pour permettre de les contacter en priorit�
* _all_ On valide et publie.

## Datagramme version num�rique

### Recette de la v1

#### Aspects techniques

* _VP, yet_ donne son identifiant github pour travailler sur la version Inria des sources
  * On note que la `makefile` fait la mise � jour compl�te des branches master et du site web github
* _VP+TV, yet_ �a y est les images sont toutes entr�es sour la forme "./nomdelimage.png" et il faut probablement concat�ner `../ressources/images/questions/` pour que �a marche dans le jeu
* _VP, d�but janvier_ regarde http://inriamecsci.github.io/datagramme/src/test.html et aide TV � le finaliser
  * L'appel � generateQuestionPopUp($("#question"), questions[k][i]); g�n�re l'erreur �TypeError: disposition.joueurs[disposition.tourJoueur] is undefined�, comment crr le bon contexte
* _VP, yet_, documente les fichiers source � minima : une ligne de doc pour chaque fichier et pour chaque fichier .js du jeu (pas jquery !) la liste des fonctions avec une ligne pour dire � qui elle serve et pour chaque fichier .css � quelle partie du jeu �a correspond, qq chose comme
  * index.html : fichier principal pour lancer le jeu
  * test.html : fichier pour tester les questions hors du jeu
  * jquery.js, jquery-ui.js, jquery-ui.theme.css, jquery-ui.structure.css : les fichiers de jquery, ont ils �t� patch�s ? si oui comment faire le diff avec les fichiers originels ? 
  * jquery-ui-1.11.1.custom et jquery-ui-1.11.1.custom.zip sont ils � garder ? virer ?
  * ou sont les CSS specifiques du jeu ?
  * include.js game.js  init.js question.js questions.js sont les fichiers du jeu peut on donner leur role et les fonctions
* _VP, TV, yet_ avec l'accord de VP, TV cr�e une version uncristfy/beautify des fichiers source (formattage standarr et propre des sources) et un version .min (compacte)des fichiers tiers non patch�s

#### Validation du jeu

* _TV+CL+MC+SB+LG+ED_ jouent au jeu dans sa v1 et font tous les retours en vrac sur le jeu
  * _SB_ propose une solution graphique pour la v2
  * _LG_ reformule son r�ve initial

### Cahier des charges de la v2

#### Am�lioration graphique et ergonomique

Globalement on fait en sorte que la version num�rique du jeu empreinte les �l�ments graphiques du jeu r�el

* Le fichier datagramme/src/explanations.html est (c�t� Inria) mis au propre avec des lines et illustrations
* Le site http://datagramme.fr est (c�t� Inria) finalis�

* En vrac :
  * Le jeu de d� fait l'objet d'une petite animation
  * On ajoute des sons (en option, pass� comme param�tre au lien http://inriamecsci.github.io/datagramme/src/index.html?sound=true)

#### Am�lioration des questions

* On ajoute la possibilit� d'illustrer la r�ponsse aux questions avec une image (les images anevrisme.jpg flamands.jpg hopper.jpg INRIA-CDR0053-0081.jpg iter.jpg lovelace.jpg sont pr�vues pour �a).
* On ajoute un m�canisme de d�tection du mot cl� qui donne la r�ponse pour les questions de type Directe
* Pour les questions non prises en compte dans la v1 on regarde comment les (i) �liminer (ii) transformer en questions g�rables (iii) inventer une astuce

#### Ajout du m�canismes de bonus-malus

* � voir ensemble 

#### Am�lioration de l'interactivit�

* Le truc du jeu des cartes m�mory est pas clair encore : qui a une bonne id�e asticieuse pour ?

* On peut lancer le jeu directement avec index.html?joueur=1&solo=true&animateur=false*tours=15 (ou 0 pour sortie) et cartes et couleurs sont donn�es par d�faut

* Sous la forme d'un lien vers le site [https://pixees.fr](https://pixees.fr) les joueurs disposent d'un menu pour poser une question suppl�mentaires � propos d'un question abord�e ou sugg�rer une autre r�ponse ou proposer une autre question ou prendre rendez vous sur un forum/r�seau social existant ou faire tout commentaire sur le jeu
  * Le lien sera de la forme https://pixees.fr/?page_id=3405?fscf_field4_4=3&fscf_field4_2=Blabla%20et%20tralala donc le seul d�veloppement sera de cr�er le lien web avec l'intitul� de sa question, son id, et tout le reste sera g�r� sur pixees.fr

* � partir du fichier test.html de la liste des questions on peut ouvrir une fichier animateur qui comme dans le [livret](http://inriamecsci.github.io/datagramme/docs/livret-datagramme.pdf) montre la question et sa r�ponse

### R�alisation de la v2

* _tou-te-s, fin janvier_ : On fait une visio de partage et mise en place de tout �a
* _TV+VP, fin janvier_ : On demande un avenant � la JE 
* _VP, f�vrier_ : fait le dev de v2
* _TV et al, f�vrier_ : met en place les �l�ments qui leur incombent
* _TV et al, mars_ : fait la recette et sabre le champagne

## R�f�rences

* D�pot github sources et documentations : [https://github.com/InriaMecsci/datagramme](https://github.com/InriaMecsci/datagramme/blob/master/README.md)

* Notepad d'ED [https://pad.inria.fr/p/AniAJ10Rb9bQADGJ]([https://pad.inria.fr/p/AniAJ10Rb9bQADGJ)
