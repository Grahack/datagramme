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

#### Poinst de discussions

* VP: index.html?joueur=1&solo=true&animateur=false*tours=15 marche correctement, cependant, je demande toujours le nom et la couleur des joueurs, dois-je également passer cette étape et appeler les joueurs "Joueur n" ?
  * Ouioui de l'automatique !

* VP: En ce qui concerne les questions non gérables de la V1, avais-tu des propositions de transformations, ou est-ce que j'applique celles que j'avais détaillé, et je me débrouille pour les autres ? Ça ne me dérange pas.
  * TV: à voir ensemble en hangout

* VP: Pour le lien vers pixees.fr, je dois seulement indiquer l'id de la question dans l'url ? Le lien de la forme https://pixees.fr/?page_id=3405?fscf_field4_4=3&fscf_field4_2=Blabla%20et%20tralala me trouble un peu.
  * TV:

Autres points (voir ci-dessous) : corrections des questions (plus pour TV que VP), bonus/malus quels choix, questions hors v1 et questions "toujours justes", 

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

* On ajoute la possibilité d'illustrer la réponsse aux questions avec une image (les images anevrisme.jpg flamands.jpg hopper.jpg INRIA-CDR0053-0081.jpg iter.jpg lovelace.jpg sont prévues pour ça).
  * VP: Possibilité d'ajouter une image à l'explication des questions ajoutée, un argument "imageExplications" a été ajouté aux questions, il vous suffira de remplacer les "Question.SANS_IMAGE_EXPLICATION" par le lien vers l'image.
  * TV: Ok des que je prends la main j implemente

* On ajoute un mécanisme de détection du mot clé qui donne la réponse pour les questions de type Directe

* Pour les questions non prises en compte dans la v1 on regarde comment les (i) éliminer (ii) transformer en questions gérables (iii) inventer une astuce

## Relecture des questions

Voici pas encore traité le test de toutes les questions (à traiter par _TV_ avant retour vers _VP_).

* 6	Réponse : des majuscules aux noms communs pour le choix 3

* 10	"4 cartes sont représentées (dont 1 noire qu'il faut comprendre être la carte à cacher) : pas évident / Réponse 1+2+3 : texte explicatif dupliqué. dommage ce renvoi vers CU sans lien précis vers le binaire, je crains que les gens ne s'arrête à cette page et ne creuse pas (vraiment aucune indication vers ou trouver la réponse)"

* 11	"dommage ce renvoi vers CU sans lien précis vers le binaire, je crains que les gens ne s'arrête à cette page et ne creuse pas (vraiment aucune indication vers ou trouver la réponse)"

* 12	ingéniérie = pas accent sur le 1e "e"

* 13	on accède pas à l'image via le lien photothèque "Vous n'êtes pas autorisé à visualiser ce document". Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite l'explication.

* 14	"Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite l'explication."

* 18	"Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite l'explication."

* 19	"Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite l'explication. Le lien ne fonctionne pas (404 not found)"

* 20	Le lien ne fonctionne pas

* 21	"Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite l'explication. "

* 22	Ce serait bien d'avoir les 8 solutions

* 24	"Il faudrait citer la bonne réponse pour introduite l'explication. "

* 25	"Je ferai plutôt un renvoi vers Pixees ou wikipedia (plus lisible je trouve). Pour les mauvais choix, l'explication de la bonne réponse (sans quelle  soit par ailleurs citée) est mal compréhensible. Il faudrait citer la  bonne réponse pour introduite l'explication. "

* 26	"Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite l'explication. "

* 27	"Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite l'explication. "

* 28	"Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite l'explication surtout que là il n'y a que le lien pour expliquer la bonne réponse. Il faut au moins la citer."

* 29	"Je ne comprends pas bien le lien cité : on s'attend plutôt à avoir un doc sur ce 1er document crypé. Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite le renvoi vers le lien. Je mettrais donc plutôt ce lien : http://fr.wikipedia.org/wiki/Histoire_de_la_cryptologie#Le_plus_vieux_document_chiffr.C3.A9"

* 30	"Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite l'explication"

* 31	Je ne comprends pas bien le contenu du bandeau orange qui est par ailleurs tronqué (enfin je comprends mais les joueurs vont ils comprendre)

* 32	les liens de fonctionnent pas (404...)

* 38	Les trois liens sont faux

* 39	"Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite l'explication"

* 40	"Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite l'explication."

* 41	"Pour les mauvais choix, l'explication de la bonne réponse (sans quelle soit par ailleurs citée) est mal compréhensible. Il faudrait citer la bonne réponse pour introduite l'explication"

* 48	pourquoi ne donne t-on pas la bonne réponse quand le choix est mauvais (comme pour les autres questions)

* 55	lien interstices cassé

* 67	peux pas tester question directe
* 73	peux pas tester question directe
* 76	peux pas tester question directe
* 77	question pas reprise et pas de solution cliquable
* 83	peux pas tester question directe
* 87	dans la 2ième proposition il y a 2 fois le même bout de phrase "s'entrainer au geste chirurgical" + dans la réponse le lien cliquable comprends 2 liens interstices ; un copié collé qui a gardé le lien des réponses question 86 (à garder https://interstices.info/jcms/i_58396/le-patient-virtuel-au-service-de-la-chirurgie?hlText=chirurgie) 

* 94	question : pour quelles raisons (au pluriel) ? or il n'y a  qu'une solution possible

* 95	toutes les réponses possibles sont fausses :-( ; je vote pour la 1ière proposition !!

* 104	difficile de répondre !!! Il n'y a pas de question :-)

* 1:47#104    Intitulé de la question ...
  * y a un bug dans la question

* 1:53#110    De quand datent les premiers algorithmes ? ...
  * comemnt fonctionne les qst en juste prix

* #109    ./rebus-hopper.JPG Elle était informaticienne, vice-amiral de la marine, elle a démocratisé le mot « débugger » en informatique et est co
  ne s affiche pas

* 1:70#127    Quel est le plus grand nombre connu de fourmis habitant une fourmilière ?
  * ce n est pas un bug : mais on note que le systeme qd il y a une double question garde en memoire le fait d avoi rbien repondu a la 1ere et ne la repose jamais
   
* 2:24#157    Pensez-vous possible dans un avenir proche qu~un être humain pourra échanger des messages écrits, sur
* 2:23#156    Que pensez-vous de l'influence de Wikipédia, des cours disponibles en ligne et les exercices corrigés
* 2:22#155    Les prédictions météo sont-elles fiables ? ...
* 2:21#154    Comment les informaticiens peuvent-ils aider à convaincre de l'urgence de la crise climatique ? ...
* 1:74#131    Si vous créiez des contenus (vidéos, images, programmes ~), les rendriez-vous Open source ou
* 1:72#129    À qui appartiennent nos données Facebook après notre mort ? ...
  * on a une reponse.type.OKKO, reponse.SANS_REPONSE, reponse.SANS_BONNE_REPONSE
qui s interprete bizarrement c est le OK (alors que la reponse est plutot NON) qui est validee comment corriger : en fait le OK ne devrait pas s afficher et on devrait toujours gagner

* 2:20#153    Citez des fonctions d'un système d~exploitation d~ordinateur ou de téléphone ...
  * on a une reponse.type.OKKO, reponse.SANS_REPONSE, reponse.SANS_BONNE_REPONSE et il faudraot détecter des mots clés

2:17#150    La phase suivante est codée : (16 15) _ (2) _ (13 6) _ (4 16 5 6). Cassez le code et retrouvez sa signification !
  * la question en s affiche pas

---

## Datagramme version mécanique

### Production de quarante jeux à distribuer dans les centres

* _CL et al, février_ effectuent les envoiset on stocke les vieux plateaux au cas où.

### Mise en ligne du mode d'emploi pour produire soi-même des jeux

* _TV_ crée un document mode d'emploi 
* _ED_ nous dit comment que on pourrait produire plateau et tout ça (fichier pour imprimante 3D) etc...
* _SB_ rassemble tous les documents envoyés à G2000 dans un répertoire avec des noms bien identifiables
* _TV_ contacte les deux prestataires et leur propose d'ouvrir les données sur les commandes pour permettre de les contacter en priorité
* _all_ On valide et publie.

## Références

* Dépot github sources et documentations : [https://github.com/InriaMecsci/datagramme](https://github.com/InriaMecsci/datagramme/blob/master/README.md)

* Notepad d'ED [https://pad.inria.fr/p/AniAJ10Rb9bQADGJ]([https://pad.inria.fr/p/AniAJ10Rb9bQADGJ)
