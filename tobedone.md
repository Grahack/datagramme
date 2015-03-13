# Voici la todoliste détaillée 
### pour finaliser les versions numérique et mécanique de [http://datagramme.fr](http://datagramme.fr)

Starring : LG & ED (datagramme canal historique), VP (JE telecomnancy.net), SB (graphisme), CL & MC & TV (contenus)

## Datagramme v2 version numérique

### Aspects techniques

#### Documentation et formattage du code

* _VP, yet_, documente les fichiers source à minima : une ligne de doc pour chaque fichier et pour chaque fichier .js du jeu (pas jquery !) la liste des fonctions avec une ligne pour dire à qui elle serve et pour chaque fichier .css à quelle partie du jeu ça correspond, qq chose comme
  * index.html : fichier principal pour lancer le jeu
  * test.html : fichier pour tester les questions hors du jeu
  * jquery.js, jquery-ui.js, jquery-ui.theme.css, jquery-ui.structure.css : les fichiers de jquery, ont ils été patchés ? si oui comment faire le diff avec les fichiers originels ? 
  * jquery-ui-1.11.1.custom et jquery-ui-1.11.1.custom.zip sont ils à garder ? virer ?
  * ou sont les CSS specifiques du jeu ?
  * include.js game.js  init.js question.js questions.js sont les fichiers du jeu peut on donner leur role et les fonctions
* _VP, TV, yet_ avec l'accord de VP, TV crée une version uncristfy/beautify des fichiers source (formattage standarr et propre des sources) et un version .min (compacte)des fichiers tiers non patchés

#### Bugs de fonctionnement relevés

* Toutes les réponses aux questions sont considérées comme fausses sous Google Chrome sous Mac OS X 10.9.5 et Safari
  * VP: Pour le problème de mauvaise réponse, c'est sur ma todo, ça vient de Chrome et Safari qui ne veulent pas d'un attribut de jQuery, il faudra que je trouve une alternative.

#### Points à discuster

* VP: index.html?joueur=1&solo=true&animateur=false*tours=15 marche correctement, cependant, je demande toujours le nom et la couleur des joueurs, dois-je également passer cette étape et appeler les joueurs "Joueur n" ?
  * TV: Ouioui de l'automatique !

* VP: En ce qui concerne les questions non gérables de la V1, avais-tu des propositions de transformations, ou est-ce que j'applique celles que j'avais détaillé, et je me débrouille pour les autres ? Ça ne me dérange pas.
  * TV: à voir ensemble en hangout

* VP: Pour le lien vers pixees.fr, je dois seulement indiquer l'id de la question dans l'url ?
  * TV: il faut aussi le titre de la question s'il te plait
  * TV: Le lien final est https://pixees.fr/?page_id=4278&fscf_field5_5=id-question&fscf_field5_4=titre-question

#### Site Inria et lien avec pixees

* Le site http://datagramme.fr est (côté Inria) à finaliser

### Amélioration graphique et ergonomique

* Inverser dans le panneau de config Solo/Équipes et nombre de groupe 
* Appeler 1 Équipe 2 Ëquipes etc.. plutôt que joueur

#### Aspect graphique général

* _VP, yet_, fournit les thèmes grahiques de jquery à SB, pour choisir un environnement minimal
* _SB_ fait une proposition de thème et propose les adapatations (fontes, couleurs)

* _SB_ fournit à VP une version updatée du plateau de jeu ET la sortie bien clarifiée
  * VP: Pour la sortie, je sais que ce n'est pas clair, je l'avais également déjà souligné, je n'ai pas vraiment d'alternative "design" à proposer, mais je serai ravi d'intégrer un élément graphique que vous me fournirez.

* _VP_ Il faut centrer et non pas coller à gauche le plateau de jeu

Vue de l'écran centré avec un titre, la sortie explicitée et la règle du jeu en popup

![écran1](img/tmp/Capture d~écran 2015-03-06 à 15.44.01.png)

#### La règle du jeu

* _VP_ Retire afficher les règles et crée un boutin Règle du jeu sur le panneau principal.
* _VP_ Les règles du jeu sont à rappeler quand avec un bouton toujpurs accessible et ouvertes dans un pop-up

#### Le nouveau lancé de dé

* On crée une image `0´ et une image `1´ sous forme de lettre et/ou de couleur
  * VP: Pour les dés, je t'ai déjà donné mon idée de "lumières" binaires, encore une fois, j'attends une animation à intégrer.
* Il y a 8 images alignées sur une ligen qui clignotent avant de se figer sur le résulat final

#### Les soucis avec le memory

* Pourrait on avoir droit à plusieurs essais à chaque mémory pour se balader plus votre à travers le jeu ?
  * VP: Lorsque l'on se trompe au memory, une question nous est posée pour le relancer, si l'on répond correct, on relance le memory, sinon, c'est au joueur suivant. Les questions ne rapportent pas de point.
  * VP: Lors du clic sur la deuxième image memory, le résultat est annoncé directement (connecté ou non), les images restent retournées un certain temps après.

### Ajout du mécanismes de bonus-malus

* À voir ensemble 

### Amélioration de l'interactivité

* On peut lancer le jeu directement avec index.html?joueur=1&solo=true&animateur=false*tours=15 (ou 0 pour sortie) et cartes et couleurs sont données par défaut

* Sous la forme d'un lien vers le site [https://pixees.fr](https://pixees.fr) les joueurs disposent d'un menu pour poser une question supplémentaires à propos d'un question abordée ou suggérer une autre réponse ou proposer une autre question ou prendre rendez vous sur un forum/réseau social existant ou faire tout commentaire sur le jeu
  * Le lien sera de la forme https://pixees.fr/?page_id=3405?fscf_field4_4=3&fscf_field4_2=Blabla%20et%20tralala donc le seul développement sera de créer le lien web avec l'intitulé de sa question, son id, et tout le reste sera géré sur pixees.fr

* À partir du fichier test.html de la liste des questions on peut ouvrir une fichier animateur qui comme dans le [livret](http://inriamecsci.github.io/datagramme/docs/livret-datagramme.pdf) montre la question et sa réponse

### Amélioration des questions

* On ajoute la possibilité d'illustrer la réponsse aux questions avec une image 
  * TV: Y a un petit souci de lien

* Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite l'explication.

* On ne peut pas tester les questions directes

* Le lien de la source de la question affiche le lien lui même au lieu de «source de la question» ce serait plus joli.

* La question Duo sur l octopus a un bandeau étrange avec Question Duo ! Répondez à la .... il faut revoir la mise en page

* La question 77 sur au clair de la lune bloque

* La question 104 sur étoile de mer dit que toutes les réponses sont fausses

* La question 109 sur Grace Hopper ne s'affiche pas dans test.html

* La question 150 sur (16 15) _ (2) _ (13 6) _ (4 16 5 6). Cassez le code et retrouvez sa signification ! ne s'affiche pas dans test.html

* Ce n'est pas un bug : mais on note que le systeme quand il y a une double question garde en memoire le fait d'avoir bien répondu à la 1ère et ne la repose jamais, pas de souci en multi-joueur ?

* Le fonctionnement des question en juste prix est pas claire, exemple question 110 «De quand datent les premiers algorithmes»

* Question 153 Citez des fonctions d'un système d'exploitation on a une reponse.type.OKKO, reponse.SANS_REPONSE, reponse.SANS_BONNE_REPONSE et il faudrait détecter des mots clés

* Questions avec une reponse.type.OKKO, reponse.SANS_REPONSE, reponse.SANS_BONNE_REPONSE qui s interprete bizarrement c est le OK (alors que la reponse est plutot NON) qui est validee comment corriger : en fait le OK ne devrait pas s afficher et on devrait toujours gagner
  * 2:24#157    Pensez-vous possible dans un avenir proche qu~un être humain pourra échanger des messages écrits, sur
  * 2:23#156    Que pensez-vous de l'influence de Wikipédia, des cours disponibles en ligne et les exercices corrigés
  * 2:22#155    Les prédictions météo sont-elles fiables ? ...
  * 2:21#154    Comment les informaticiens peuvent-ils aider à convaincre de l'urgence de la crise climatique ? ...
  * 1:74#131    Si vous créiez des contenus (vidéos, images, programmes ~), les rendriez-vous Open source ou
  * 1:72#129    À qui appartiennent nos données Facebook après notre mort ? ...

* On ajoute un mécanisme de détection du mot clé qui donne la réponse pour les questions de type Directe

* Pour les questions non prises en compte dans la v1 on regarde comment les (i) éliminer (ii) transformer en questions gérables (iii) inventer une astuce

---

## Datagramme version mécanique

### Mise en ligne du mode d'emploi pour produire soi-même des jeux

* _TV_ crée un document mode d'emploi 
* _ED_ nous dit comment que on pourrait produire plateau et tout ça (fichier pour imprimante 3D) etc...
* _SB_ rassemble tous les documents envoyés à G2000 dans un répertoire avec des noms bien identifiables
* _TV_ contacte les deux prestataires et leur propose d'ouvrir les données sur les commandes pour permettre de les contacter en priorité
* _all_ On valide et publie.

## Références

* Dépot github sources et documentations : [https://github.com/InriaMecsci/datagramme](https://github.com/InriaMecsci/datagramme/blob/master/README.md)

* Notepad d'ED [https://pad.inria.fr/p/AniAJ10Rb9bQADGJ]([https://pad.inria.fr/p/AniAJ10Rb9bQADGJ)
