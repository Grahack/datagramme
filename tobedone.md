# Voici la todoliste d�taill�e 
### pour finaliser les versions num�rique et m�canique de [http://datagramme.fr](http://datagramme.fr)

Starring : LG & ED (datagramme canal historique), VP (JE telecomnancy.net), SB (graphisme), CL & MC & TV (contenus)

## Datagramme v2 version num�rique

### Aspects techniques

#### Documentation et formattage du code

* _VP, yet_, documente les fichiers source � minima : une ligne de doc pour chaque fichier et pour chaque fichier .js du jeu (pas jquery !) la liste des fonctions avec une ligne pour dire � qui elle serve et pour chaque fichier .css � quelle partie du jeu �a correspond, qq chose comme
  * index.html : fichier principal pour lancer le jeu
  * test.html : fichier pour tester les questions hors du jeu
  * jquery.js, jquery-ui.js, jquery-ui.theme.css, jquery-ui.structure.css : les fichiers de jquery, ont ils �t� patch�s ? si oui comment faire le diff avec les fichiers originels ? 
  * jquery-ui-1.11.1.custom et jquery-ui-1.11.1.custom.zip sont ils � garder ? virer ?
  * ou sont les CSS specifiques du jeu ?
  * include.js game.js  init.js question.js questions.js sont les fichiers du jeu peut on donner leur role et les fonctions
* _VP, TV, yet_ avec l'accord de VP, TV cr�e une version uncristfy/beautify des fichiers source (formattage standarr et propre des sources) et un version .min (compacte)des fichiers tiers non patch�s

#### Bugs de fonctionnement relev�s

* Toutes les r�ponses aux questions sont consid�r�es comme fausses sous Google Chrome sous Mac OS X 10.9.5 et Safari
  * VP: Pour le probl�me de mauvaise r�ponse, c'est sur ma todo, �a vient de Chrome et Safari qui ne veulent pas d'un attribut de jQuery, il faudra que je trouve une alternative.

#### Points � discuster

* VP: index.html?joueur=1&solo=true&animateur=false*tours=15 marche correctement, cependant, je demande toujours le nom et la couleur des joueurs, dois-je �galement passer cette �tape et appeler les joueurs "Joueur n" ?
  * TV: Ouioui de l'automatique !

* VP: En ce qui concerne les questions non g�rables de la V1, avais-tu des propositions de transformations, ou est-ce que j'applique celles que j'avais d�taill�, et je me d�brouille pour les autres ? �a ne me d�range pas.
  * TV: � voir ensemble en hangout

* VP: Pour le lien vers pixees.fr, je dois seulement indiquer l'id de la question dans l'url ?
  * TV: il faut aussi le titre de la question s'il te plait
  * TV: Le lien final est https://pixees.fr/?page_id=4278&fscf_field5_5=id-question&fscf_field5_4=titre-question

#### Site Inria et lien avec pixees

* Le site http://datagramme.fr est (c�t� Inria) � finaliser

### Am�lioration graphique et ergonomique

* Inverser dans le panneau de config Solo/�quipes et nombre de groupe 
* Appeler 1 �quipe 2 �quipes etc.. plut�t que joueur

#### Aspect graphique g�n�ral

* _VP, yet_, fournit les th�mes grahiques de jquery � SB, pour choisir un environnement minimal
* _SB_ fait une proposition de th�me et propose les adapatations (fontes, couleurs)

* _SB_ fournit � VP une version updat�e du plateau de jeu ET la sortie bien clarifi�e
  * VP: Pour la sortie, je sais que ce n'est pas clair, je l'avais �galement d�j� soulign�, je n'ai pas vraiment d'alternative "design" � proposer, mais je serai ravi d'int�grer un �l�ment graphique que vous me fournirez.

* _VP_ Il faut centrer et non pas coller � gauche le plateau de jeu

Vue de l'�cran centr� avec un titre, la sortie explicit�e et la r�gle du jeu en popup

![�cran1](img/tmp/Capture d~�cran 2015-03-06 � 15.44.01.png)

#### La r�gle du jeu

* _VP_ Retire afficher les r�gles et cr�e un boutin R�gle du jeu sur le panneau principal.
* _VP_ Les r�gles du jeu sont � rappeler quand avec un bouton toujpurs accessible et ouvertes dans un pop-up

#### Le nouveau lanc� de d�

* On cr�e une image `0� et une image `1� sous forme de lettre et/ou de couleur
  * VP: Pour les d�s, je t'ai d�j� donn� mon id�e de "lumi�res" binaires, encore une fois, j'attends une animation � int�grer.
* Il y a 8 images align�es sur une ligen qui clignotent avant de se figer sur le r�sulat final

#### Les soucis avec le memory

* Pourrait on avoir droit � plusieurs essais � chaque m�mory pour se balader plus votre � travers le jeu ?
  * VP: Lorsque l'on se trompe au memory, une question nous est pos�e pour le relancer, si l'on r�pond correct, on relance le memory, sinon, c'est au joueur suivant. Les questions ne rapportent pas de point.
  * VP: Lors du clic sur la deuxi�me image memory, le r�sultat est annonc� directement (connect� ou non), les images restent retourn�es un certain temps apr�s.

### Ajout du m�canismes de bonus-malus

* � voir ensemble 

### Am�lioration de l'interactivit�

* On peut lancer le jeu directement avec index.html?joueur=1&solo=true&animateur=false*tours=15 (ou 0 pour sortie) et cartes et couleurs sont donn�es par d�faut

* Sous la forme d'un lien vers le site [https://pixees.fr](https://pixees.fr) les joueurs disposent d'un menu pour poser une question suppl�mentaires � propos d'un question abord�e ou sugg�rer une autre r�ponse ou proposer une autre question ou prendre rendez vous sur un forum/r�seau social existant ou faire tout commentaire sur le jeu
  * Le lien sera de la forme https://pixees.fr/?page_id=3405?fscf_field4_4=3&fscf_field4_2=Blabla%20et%20tralala donc le seul d�veloppement sera de cr�er le lien web avec l'intitul� de sa question, son id, et tout le reste sera g�r� sur pixees.fr

* � partir du fichier test.html de la liste des questions on peut ouvrir une fichier animateur qui comme dans le [livret](http://inriamecsci.github.io/datagramme/docs/livret-datagramme.pdf) montre la question et sa r�ponse

### Am�lioration des questions

* On ajoute la possibilit� d'illustrer la r�ponsse aux questions avec une image 
  * TV: Y a un petit souci de lien

* Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication.

* On ne peut pas tester les questions directes

* Le lien de la source de la question affiche le lien lui m�me au lieu de �source de la question� ce serait plus joli.

* La question Duo sur l octopus a un bandeau �trange avec Question Duo ! R�pondez � la .... il faut revoir la mise en page

* La question 77 sur au clair de la lune bloque

* La question 104 sur �toile de mer dit que toutes les r�ponses sont fausses

* La question 109 sur Grace Hopper ne s'affiche pas dans test.html

* La question 150 sur (16 15) _ (2) _ (13 6) _ (4 16 5 6). Cassez le code et retrouvez sa signification ! ne s'affiche pas dans test.html

* Ce n'est pas un bug : mais on note que le systeme quand il y a une double question garde en memoire le fait d'avoir bien r�pondu � la 1�re et ne la repose jamais, pas de souci en multi-joueur ?

* Le fonctionnement des question en juste prix est pas claire, exemple question 110 �De quand datent les premiers algorithmes�

* Question 153 Citez des fonctions d'un syst�me d'exploitation on a une reponse.type.OKKO, reponse.SANS_REPONSE, reponse.SANS_BONNE_REPONSE et il faudrait d�tecter des mots cl�s

* Questions avec une reponse.type.OKKO, reponse.SANS_REPONSE, reponse.SANS_BONNE_REPONSE qui s interprete bizarrement c est le OK (alors que la reponse est plutot NON) qui est validee comment corriger : en fait le OK ne devrait pas s afficher et on devrait toujours gagner
  * 2:24#157    Pensez-vous possible dans un avenir proche qu~un �tre humain pourra �changer des messages �crits, sur
  * 2:23#156    Que pensez-vous de l'influence de Wikip�dia, des cours disponibles en ligne et les exercices corrig�s
  * 2:22#155    Les pr�dictions m�t�o sont-elles fiables ? ...
  * 2:21#154    Comment les informaticiens peuvent-ils aider � convaincre de l'urgence de la crise climatique ? ...
  * 1:74#131    Si vous cr�iez des contenus (vid�os, images, programmes ~), les rendriez-vous Open source ou
  * 1:72#129    � qui appartiennent nos donn�es Facebook apr�s notre mort ? ...

* On ajoute un m�canisme de d�tection du mot cl� qui donne la r�ponse pour les questions de type Directe

* Pour les questions non prises en compte dans la v1 on regarde comment les (i) �liminer (ii) transformer en questions g�rables (iii) inventer une astuce

---

## Datagramme version m�canique

### Mise en ligne du mode d'emploi pour produire soi-m�me des jeux

* _TV_ cr�e un document mode d'emploi 
* _ED_ nous dit comment que on pourrait produire plateau et tout �a (fichier pour imprimante 3D) etc...
* _SB_ rassemble tous les documents envoy�s � G2000 dans un r�pertoire avec des noms bien identifiables
* _TV_ contacte les deux prestataires et leur propose d'ouvrir les donn�es sur les commandes pour permettre de les contacter en priorit�
* _all_ On valide et publie.

## R�f�rences

* D�pot github sources et documentations : [https://github.com/InriaMecsci/datagramme](https://github.com/InriaMecsci/datagramme/blob/master/README.md)

* Notepad d'ED [https://pad.inria.fr/p/AniAJ10Rb9bQADGJ]([https://pad.inria.fr/p/AniAJ10Rb9bQADGJ)
