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

#### Poinst de discussions

* VP: index.html?joueur=1&solo=true&animateur=false*tours=15 marche correctement, cependant, je demande toujours le nom et la couleur des joueurs, dois-je �galement passer cette �tape et appeler les joueurs "Joueur n" ?
  * Ouioui de l'automatique !

* VP: En ce qui concerne les questions non g�rables de la V1, avais-tu des propositions de transformations, ou est-ce que j'applique celles que j'avais d�taill�, et je me d�brouille pour les autres ? �a ne me d�range pas.
  * TV: � voir ensemble en hangout

* VP: Pour le lien vers pixees.fr, je dois seulement indiquer l'id de la question dans l'url ? Le lien de la forme https://pixees.fr/?page_id=3405?fscf_field4_4=3&fscf_field4_2=Blabla%20et%20tralala me trouble un peu.
  * TV:

Autres points (voir ci-dessous) : corrections des questions (plus pour TV que VP), bonus/malus quels choix, questions hors v1 et questions "toujours justes", 

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

* On ajoute la possibilit� d'illustrer la r�ponsse aux questions avec une image (les images anevrisme.jpg flamands.jpg hopper.jpg INRIA-CDR0053-0081.jpg iter.jpg lovelace.jpg sont pr�vues pour �a).
  * VP: Possibilit� d'ajouter une image � l'explication des questions ajout�e, un argument "imageExplications" a �t� ajout� aux questions, il vous suffira de remplacer les "Question.SANS_IMAGE_EXPLICATION" par le lien vers l'image.
  * TV: Ok des que je prends la main j implemente

* On ajoute un m�canisme de d�tection du mot cl� qui donne la r�ponse pour les questions de type Directe

* Pour les questions non prises en compte dans la v1 on regarde comment les (i) �liminer (ii) transformer en questions g�rables (iii) inventer une astuce

## Relecture des questions

Voici pas encore trait� le test de toutes les questions (� traiter par _TV_ avant retour vers _VP_).

* 6	R�ponse : des majuscules aux noms communs pour le choix 3

* 10	"4 cartes sont repr�sent�es (dont 1 noire qu'il faut comprendre �tre la carte � cacher) : pas �vident / R�ponse 1+2+3 : texte explicatif dupliqu�. dommage ce renvoi vers CU sans lien pr�cis vers le binaire, je crains que les gens ne s'arr�te � cette page et ne creuse pas (vraiment aucune indication vers ou trouver la r�ponse)"

* 11	"dommage ce renvoi vers CU sans lien pr�cis vers le binaire, je crains que les gens ne s'arr�te � cette page et ne creuse pas (vraiment aucune indication vers ou trouver la r�ponse)"

* 12	ing�ni�rie = pas accent sur le 1e "e"

* 13	on acc�de pas � l'image via le lien phototh�que "Vous n'�tes pas autoris� � visualiser ce document". Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication.

* 14	"Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication."

* 18	"Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication."

* 19	"Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication. Le lien ne fonctionne pas (404 not found)"

* 20	Le lien ne fonctionne pas

* 21	"Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication. "

* 22	Ce serait bien d'avoir les 8 solutions

* 24	"Il faudrait citer la bonne r�ponse pour introduite l'explication. "

* 25	"Je ferai plut�t un renvoi vers Pixees ou wikipedia (plus lisible je trouve). Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle  soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la  bonne r�ponse pour introduite l'explication. "

* 26	"Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication. "

* 27	"Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication. "

* 28	"Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication surtout que l� il n'y a que le lien pour expliquer la bonne r�ponse. Il faut au moins la citer."

* 29	"Je ne comprends pas bien le lien cit� : on s'attend plut�t � avoir un doc sur ce 1er document cryp�. Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite le renvoi vers le lien. Je mettrais donc plut�t ce lien : http://fr.wikipedia.org/wiki/Histoire_de_la_cryptologie#Le_plus_vieux_document_chiffr.C3.A9"

* 30	"Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication"

* 31	Je ne comprends pas bien le contenu du bandeau orange qui est par ailleurs tronqu� (enfin je comprends mais les joueurs vont ils comprendre)

* 32	les liens de fonctionnent pas (404...)

* 38	Les trois liens sont faux

* 39	"Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication"

* 40	"Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication."

* 41	"Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication"

* 48	pourquoi ne donne t-on pas la bonne r�ponse quand le choix est mauvais (comme pour les autres questions)

* 55	lien interstices cass�

* 67	peux pas tester question directe
* 73	peux pas tester question directe
* 76	peux pas tester question directe
* 77	question pas reprise et pas de solution cliquable
* 83	peux pas tester question directe
* 87	dans la 2i�me proposition il y a 2 fois le m�me bout de phrase "s'entrainer au geste chirurgical" + dans la r�ponse le lien cliquable comprends 2 liens interstices ; un copi� coll� qui a gard� le lien des r�ponses question 86 (� garder https://interstices.info/jcms/i_58396/le-patient-virtuel-au-service-de-la-chirurgie?hlText=chirurgie) 

* 94	question : pour quelles raisons (au pluriel) ? or il n'y a  qu'une solution possible

* 95	toutes les r�ponses possibles sont fausses :-( ; je vote pour la 1i�re proposition !!

* 104	difficile de r�pondre !!! Il n'y a pas de question :-)

* 1:47#104    Intitul� de la question ...
  * y a un bug dans la question

* 1:53#110    De quand datent les premiers algorithmes ? ...
  * comemnt fonctionne les qst en juste prix

* #109    ./rebus-hopper.JPG Elle �tait informaticienne, vice-amiral de la marine, elle a d�mocratis� le mot � d�bugger � en informatique et est co
  ne s affiche pas

* 1:70#127    Quel est le plus grand nombre connu de fourmis habitant une fourmili�re ?
  * ce n est pas un bug : mais on note que le systeme qd il y a une double question garde en memoire le fait d avoi rbien repondu a la 1ere et ne la repose jamais
   
* 2:24#157    Pensez-vous possible dans un avenir proche qu~un �tre humain pourra �changer des messages �crits, sur
* 2:23#156    Que pensez-vous de l'influence de Wikip�dia, des cours disponibles en ligne et les exercices corrig�s
* 2:22#155    Les pr�dictions m�t�o sont-elles fiables ? ...
* 2:21#154    Comment les informaticiens peuvent-ils aider � convaincre de l'urgence de la crise climatique ? ...
* 1:74#131    Si vous cr�iez des contenus (vid�os, images, programmes ~), les rendriez-vous Open source ou
* 1:72#129    � qui appartiennent nos donn�es Facebook apr�s notre mort ? ...
  * on a une reponse.type.OKKO, reponse.SANS_REPONSE, reponse.SANS_BONNE_REPONSE
qui s interprete bizarrement c est le OK (alors que la reponse est plutot NON) qui est validee comment corriger : en fait le OK ne devrait pas s afficher et on devrait toujours gagner

* 2:20#153    Citez des fonctions d'un syst�me d~exploitation d~ordinateur ou de t�l�phone ...
  * on a une reponse.type.OKKO, reponse.SANS_REPONSE, reponse.SANS_BONNE_REPONSE et il faudraot d�tecter des mots cl�s

2:17#150    La phase suivante est cod�e : (16 15) _ (2) _ (13 6) _ (4 16 5 6). Cassez le code et retrouvez sa signification !
  * la question en s affiche pas

---

## Datagramme version m�canique

### Production de quarante jeux � distribuer dans les centres

* _CL et al, f�vrier_ effectuent les envoiset on stocke les vieux plateaux au cas o�.

### Mise en ligne du mode d'emploi pour produire soi-m�me des jeux

* _TV_ cr�e un document mode d'emploi 
* _ED_ nous dit comment que on pourrait produire plateau et tout �a (fichier pour imprimante 3D) etc...
* _SB_ rassemble tous les documents envoy�s � G2000 dans un r�pertoire avec des noms bien identifiables
* _TV_ contacte les deux prestataires et leur propose d'ouvrir les donn�es sur les commandes pour permettre de les contacter en priorit�
* _all_ On valide et publie.

## R�f�rences

* D�pot github sources et documentations : [https://github.com/InriaMecsci/datagramme](https://github.com/InriaMecsci/datagramme/blob/master/README.md)

* Notepad d'ED [https://pad.inria.fr/p/AniAJ10Rb9bQADGJ]([https://pad.inria.fr/p/AniAJ10Rb9bQADGJ)
