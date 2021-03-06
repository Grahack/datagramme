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

#### La r�gle du jeu

* _VP_ Retirer "afficher les r�gles" au d�part et cr�er un bouton R�gle du jeu sur le panneau principal.
* _VP_ Les r�gles du jeu sont � rappeler quand avec un bouton toujpurs accessible et ouvertes dans un pop-up

#### Le nouveau lanc� de d�

* On cr�e une image `0� et une image `1� sous forme de lettre et/ou de couleur
  * VP: Pour les d�s, je t'ai d�j� donn� mon id�e de "lumi�res" binaires, encore une fois, j'attends une animation � int�grer.
* Il y a 8 images align�es sur une ligen qui clignotent avant de se figer sur le r�sulat final

#### Les soucis avec le memory

* VP: Lorsque l'on se trompe au memory, une question nous est pos�e pour le relancer, si l'on r�pond correct, on relance le memory, sinon, c'est au joueur suivant. Les questions ne rapportent pas de point.
* VP: Lors du clic sur la deuxi�me image memory, le r�sultat est annonc� directement (connect� ou non), les images restent retourn�es un certain temps apr�s.

### Ajout du m�canismes de bonus-malus

* On retire, le vote qui compte double, le fait de "reculer de trois cases", et retoruner deux memory (la 11).

* Pour tester il suffit de forcer dans drawCard(bonusMalus) le choix au lieu du tirage al�atoire

* On va expliciter le param�tre chancedetirerbonusmalus

### Am�lioration de l'interactivit�

* On peut lancer le jeu directement avec index.html?joueur=1&solo=true&animateur=false*tours=15 (ou 0 pour sortie) et cartes et couleurs sont donn�es par d�faut

* � partir du fichier test.html de la liste des questions on peut ouvrir une fichier animateur qui comme dans le [livret](http://inriamecsci.github.io/datagramme/docs/livret-datagramme.pdf) montre la question et sa r�ponse

### Am�lioration des questions

* On ajoute la possibilit� d'illustrer la r�ponsse aux questions avec une image 
  * TV: Y a un petit souci de lien

* Pour les mauvais choix, l'explication de la bonne r�ponse (sans quelle soit par ailleurs cit�e) est mal compr�hensible. Il faudrait citer la bonne r�ponse pour introduite l'explication.

* Le lien de la source de la question affiche le lien lui m�me au lieu de �source de la question� ce serait plus joli.

* Passer une ligne avant commenter la question.

* La consigne doit pas �tre affich�e (ex Question Duo) mais dans le contenu.

* La question 77 sur au clair de la lune bloque : question.getBonneReponse(...)

* La question 104 sur �toile de mer dit que toutes les r�ponses sont fausses

* La question 109 sur Grace Hopper ne s'affiche pas dans test.html

* La question 150 sur (16 15) _ (2) _ (13 6) _ (4 16 5 6). Cassez le code et retrouvez sa signification ! ne s'affiche pas dans test.html

* Questions avec une reponse.type.OKKO, reponse.SANS_REPONSE, reponse.SANS_BONNE_REPONSE qui s interprete bizarrement c est le OK (alors que la reponse est plutot NON) qui est validee comment corriger
  * Ajouter �Arbitrage de l'animateur�

* On ajoute un m�canisme de d�tection du mot cl� qui donne la r�ponse pour les questions de type Directe avec un regex

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
