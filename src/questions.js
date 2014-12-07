var questionTest = 	new Question("???", question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.SOCIETE,
				   		new Reponse(reponse.type.CM,
			["!", "!!", "!!!"],
			3), "?!");
/*
Modèle :

	new Question("Intitulé de la question",
			question.SANS_IMAGE OU 	"lien/vers/une/image.png",
	 		question.type.TYPE_DE_LA_QUESTION, 
	 		question.difficulte.DIFFICULTE_QUESTION, 
	 		question.categorie.CATEGORIE_QUESTION, 	
	 		question.SANS_COMMENTAIRE OU "Commentaire sur le sujet de la question",
	 		question.SANS_SOURCE OU "http://urldelasource.com/source",
			new Reponse(reponse.type.TYPE_DE_LA_REPONSE, 
				["réponse 1", "réponse 2", "réponse 3"] OU "Réponse de type Entrée" OU Reponse.SANS_REPONSE, 
				1/2/3 OU Reponse.SANS_BONNE_REPONSE));

	TYPE_DE_LA_QUESTION:
		DIRECTE,
		DUO,
		IMAGE,
		REBUS,
		CASSE_TETE,
		JUSTE_PRIX,
		MIME,
		BACCALAUREAT,
		DEBAT,
		ENUMERATION,
		EXERCICE

	CATEGORIE_QUESTION:
		SANTE,
		ENVIRONNEMENT,
		SOCIETE,
		FONDAMENTAUX,
		HISTOIRE,
		TECHNOLOGIE

	DIFFICULTE_QUESTION:
		BUG,
		DEFAILLANCE,
		PANNE_SYSTEME

	TYPE_DE_LA_REPONSE:
		CM,
		ENTREE,
		OKKO

	SANS_IMAGE

	SANS_COMMENTAIRE

	SANS_SOURCE
});

*/


var questions = 
[[
	new Question("Quel est le nom en français du symbole '@'",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM,
			["At", "Arobase", "Acrobat"],
			2)),

	new Question("Que signifie .fr à la fin d'une adresse internet ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM,
			["Que le site est en langue française uniquement", "Que l'accès au site est gratuit, et qu'il n'a rien à vendre", "Que le site est celui d'une entreprise ou d'une organisation française"],
			3 )),

	new Question("Comment s'appelle le système informatique qui permet de trouver sa route en voiture ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.TECHNOLOGIE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.ENTREE,
			reponse.SANS_REPONSE,
			"GPS (Global Positioning System)")),

	new Question("Voici trois chiffres : 1, 1 et 0. Si tu multiplies le premier par 4, le second par 2 et le troisième par 1. Combien cela fait-il ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		"Les ordinateurs utilisent des successions de 8 chiffres pour coder les informations. Ces 8 chiffres sont des bits, ils valent seulement 0 ou 1. Ensemble, ils forment un octet. Pour connaitre la valeur d'un octet, on multiplie chaque bit par une valeur, comme dans cette question. Le bit le plus à droite est multiplié par 1,  puis le second par 2, le troisième par 2x2=4, le quatrième par 2x2x2=8 etc. jusqu'à 2x2x2x2x2x2x2 (7 fois multiplié par lui même), c'est à dire 128. Ainsi, l'octet 00101011 vaut 43.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM,
			["6", "7", "2"],
			1)),

	new Question("Qu'est-ce qu'un virus ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.TECHNOLOGIE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM,
			["Un programme malveillant, qui peut se copier et se propager tout seul", "La contamination d'un logiciel à cause d'une panne matérielle", "Le nom donné aux hackers qui attaquent nos systèmes numériques"],
			1)),

	new Question("Quand plusieurs ordinateurs échangent des informations on dit qu'ils forment : ",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		"Un maillage est une grille dont on se sert pour découper un espace. On parle de maillage en infographie 3D, pour désigner les modèles 3D ou encore dans les télécoms pour la disposition des relais de téléphonie. Un court circuit est la mise en contact involontaire de deux points d'un circuit électrique qui ne sont pas prévus pour.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM,
			["Un maillage", "Un réseau", "Un court-circuit"],
			2)),

	new Question("Qu’est-ce qu’une puce électronique ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM,
			["Une puce qu’on pose sur un animal pour découvrir des informations sur son comportement", "Une partie d’un circuit électronique de la taille d’une puce", "Une Protéine Utilisée en Composant Électronique d'où son non de P.U.C.E."],
			2)),

	new Question("Que signifie « www » que l’on trouve parfois au début des adresses des sites Web ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM,
			["Wild Wild West", "War Wired Web", "World Wide Web"],
			3)),

	new Question("Qui est Bill Gates ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.SOCIETE,
		question.SANS_COMMENTAIRE,
		"https://fr.wikipedia.org/wiki/Bill_Gates",
		new Reponse(reponse.type.CM,
			["L'informaticien fondateur de l'entreprise Microsoft", "L'informaticien fondateur de l'entreprise Apple", "Un des inventeurs de l'ordinateur"],
			1)),

	new Question("Lorsque tu fais une recherche sur Google, cela consomme autant que…",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.ENVIRONNEMENT,
		"L'entreprise Google consomme au total le quart de ce que consomme une grande ville comme Marseilles (chiffre 2011 : 260 MWh).",
		"http://www.futura-sciences.com/magazines/high-tech/infos/actu/d/informatique-google-consommerait-260-megawatts-33393/",
		new Reponse(reponse.type.CM,
			["Une ampoule électrique, allumée pendant 15 secondes", "Un climatiseur pendant 15 min", "Une télécommande, lorsque l'on change de chaîne"],
			1)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Quelles cartes dois-tu cacher pour faire le nombre 10 ?",
		question.SANS_IMAGE,
		question.type.IMAGE,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		"Ce jeu est une analogie avec le calcul binaire qu'utilise les ordinateurs. Cacher la carte revient a mettre la valeur d'un bit à 0. Ce jeu est un exemple pour illustrer le calcul binaire qu'utilise les ordinateurs. Cacher la carte revient a mettre la valeur d'un bit à 0.",
		"http://csunplugged.org/",
		new Reponse(reponse.type.CM,
			["La 2nde et la 4e", "La 3e", "La 1ère et la seconde"],
			1)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Combien de points comporte, à ton avis la carte la plus à gauche, qui est face cachée ?",
		question.SANS_IMAGE,
		question.type.IMAGE,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		"Compter en binaire c'est comme compter en décimal, par exemple 123, signifie 1 centaine, 2 dizaine, 3 unités, donc 1 x 100 + 2 x 10 + 3 x 1. En binaire c'est pareil 10 en binaire signifie un deuzaine et 0 unités donc 1 x 2 + 0 x 1 = 2. On a donc de droite à gauche des unités '1', des deuzaines '2', des quartaines '4', des octaines '8' et ainsi de suite.",
		"http://csunplugged.org/",
		new Reponse(reponse.type.CM,
			[16, 10, 4],
			1)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("À quoi correspond cette image ?",
		question.SANS_IMAGE,
		question.type.IMAGE,
		question.difficulte.BUG,
		question.categorie.ENVIRONNEMENT,
		"Avant, on testait ces aspects de l'aéronautique dans des souffleries en reproduisant le phénomène physique réel, souvent à plus petite échelle. Maintenant, l'ingéniérie numérique permet de faire toutes sortes de tests uniquement avec des simulations, des expériences numériques. C'est un changement majeur.",
		"http://phototheque.inria.fr/phototheque/media/3918", 
		new Reponse(reponse.type.CM,
			["Un avion accidenté pris dans les glaces","La visualisation de l'écoulement de l'air autour d'un avion", "Une photo d'avion sur un coucher de soleil"],
			2)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Que représente cette image?",
		question.SANS_IMAGE,
		question.type.IMAGE,
		question.difficulte.BUG,
		question.categorie.SANTE,
		"Visualisation des grandes voies de connexion entre les différentes aires du cortex (à partir d'images IRM).",
		"http://phototheque.inria.fr/phototheque/media/3915", 
		new Reponse(reponse.type.CM,
			["Une plante carnivore prise en photo","L’activité du cerveau sur un ordinateur", "Une étoile qui explose dans l’univers"],
			2)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

  	new Question("Qu’est-ce que c'est ?",
		question.SANS_IMAGE,
		question.type.IMAGE,
		question.difficulte.BUG,
		question.categorie.ENVIRONNEMENT,
		"La croissance des racines ou des feuilles d'une plante est un système complexe à modéliser, car la plante change de forme au fur et à mesure de son évolution, ce qui modifie au fur et à mesure les règles de sa croissance. Un peu comme un glaçon qui glisse sur une pente tout en fondant.  De tels systèmes sont appelés systèmes dynamiques à structure dynamique.",
		"https://interstices.info/jcms/c_10928/modeliser-le-vivant-creer-des-plantes-virtuelles-pour-comprendre-simuler-tester?hlText=plante+virtuelle&part=2", 
    		new Reponse(reponse.type.CM,
			["L'intérieur d'une dent cariée","La croissance d'une plante entièrement simulée sur ordinateur","Un orage simulé sur ordinateur"],
			2)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

  	new Question("Trouvez à quel mot renvoie le rébus",
		question.SANS_IMAGE,
		question.type.REBUS,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.ENTREE,
			reponse.SANS_REPONSE,
			"Ordinateur")),

  	new Question("Mime ce mot : ",
		question.SANS_IMAGE,
		question.type.MIME,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.OKKO,
			"Ordinateur",
			reponse.SANS_BONNE_REPONSE)),

  	new Question("Citez 3 réseaux sociaux",
		question.SANS_IMAGE, question.type.ENUMERATION,
		question.difficulte.BUG,
		question.categorie.SOCIETE,
		"Le terme réseaux sociaux a été inventé en 1954. Il ne désigne pas forcément un outil web dédié à connecter les personnes. Le terme est aussi utilisé en sciences sociales par exemple et peut désigner un réseau constitué de personnes reliées par des liens réels, non informatiques.",
		"http://www.topyweb.com/divertissement/top-sites-reseaux-sociaux.php", 
    		new Reponse(reponse.type.ENTREE,
			["Facebook", "twitter", "tumblr", "pinterest", "google+", "viadeo", "linkedin"],
			reponse.SANS_BONNE_REPONSE)),

  	new Question("Qu'est-ce qu'un hacker ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.SOCIETE,
		"Les hackers sont de réels spécialistes de la sécurité et sont parfois embauchés par de grandes entreprises. Certains ne font que \"jouer\" à repérer les failles, sans avoir de mauvaises intentions.",
		"https://fr.wikipedia.org/wiki/Hacker_(s%C3%A9curit%C3%A9_informatique)", 
    		new Reponse(reponse.type.CM,
			["Une personne cherchant les failles d'un système informatique et ayant la capacité de les exploiter","Une personne collectionnant les logiciels et jeux piratés","Une personne pouvant briser n'importe quel cryptage ou code de sécurité"],
			1)),

  	new Question("Comment peut-on sauver des vies avec des équations mathématiques ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.ENVIRONNEMENT,
		"Les équations du second degré, ou équations différentielles sont des outils mathématiques très puissants. Elles sont utilisées pour modéliser les vibrations des tremblements de terre par exemple, mais aussi le mouvement des planètes ou encore l'évolution des populations d'un pays.",
		"http://www-fourier.ujf-grenoble.fr/~lbessier/m111ch5bis.pdf", 
    		new Reponse(reponse.type.CM,
			["En calculant à quels types d'allergies une personne sera sensible","En améliorant la prédiction des tremblements de terre","Dans la Grèce antique les élèves qui ne savaient pas résoudre ces équations pouvaient être condamnés à mort"],
			2)),

  	new Question("L’informatique et les mathématiques sont-elles des sciences où les garçons réussissent mieux ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.SOCIETE,
		"Bien sûr que non ! Et en commençant par le lycée, où les résultats en maths des filles sont égaux aux garçons. Ces dernières ont de plus de meilleurs taux de réussite au bac et au brevet. Mais dans les faits, la majorité des développeurs ou mathématiciens sont des hommes, pour des raisons d’exclusion, de culture, de choix sociaux...",
		"http://media.education.gouv.fr/file/2012/66/0/DEPP-filles-garcons-2012_209660.pdf\nhttp://www.monde-diplomatique.fr/2007/06/COLLET/14834", 
    		new Reponse(reponse.type.CM,
			["C'est une observation des neurosciences : les cerveaux des garçons et des filles ne sont pas les mêmes","Il y a une vraie différence, mais purement sociale","Les maths et l'informatique n'ont pas été inventés par et pour des filles"],
			2)),

  	new Question("Pourquoi les Grecs n’utilisaient-ils pas le chiffre 0 ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.HISTOIRE,
		"En effet, le zéro signifie l’absence et le vide, ce qui était parfois difficilement acceptable dans certaines civilisations qui rejetaient aussi bien le néant que l’infini.",
		"http://www.maths-et-tiques.fr/index.php/histoire-des-maths/nombres/zero", 
    		new Reponse(reponse.type.CM,
			["Parce qu’ils refusaient l'idée du vide","Parce qu’ils ne comptaient qu’à partir de deux","Parce que le 0 était un chiffre maudit"],
			1)),

  	new Question("Si trois chiffres peuvent valoir soit 0, soit 1, combien y a-t-il de combinaisons possibles ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			[8, 9, 3],
			1)),
    
  	new Question("Qu'est-ce que la simulation numérique ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["C’est reproduire un phénomène réel sur ordinateur, pour l’étudier","C'est faire semblant de connaître les dernières technologies","C'est le pilotage d'ordinateur à distance"],
			1)),

	new Question("Parmi ces hommes, qui est un des pères de l’ordinateur ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.HISTOIRE,
		"Charles Babbage était un mathématicien et inventeur britannique. En 1834, pendant le développement d'une machine à calculer, il eut l'idée d'y incorporer des cartes du métier Jacquard, dont la lecture séquentielle donnerait des instructions à sa machine, et donc imagina l'ancêtre mécanique des ordinateurs d'aujourd'hui.",
		"http://aconit.inria.fr/omeka/exhibits/show/figures-de-l-informatique/precurseurs/charles-babbage", 
    		new Reponse(reponse.type.CM,
			["Benjamin Franklin","Louis Pasteur","Charles Babbage"],
			3)),

	new Question("Le premier programme informatique a été publié par…",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.HISTOIRE,
		"Ada Lovelace est l'auteure du premier algorithme publié, destiné à être exécuté par une machine. Elle travaillait avec Charles Babbage, mathématicien, sur la « machine analytique ». Pour faire marcher cette future machine, Ada créait des « diagrammes » qui avaient pour but d’expliquer comment devait procéder la machine pour arriver au résultat recherché… et ceci indépendamment de la façon dont étaient réalisées ces opérations. Ada fût ainsi la 1ère développeuse.",
		"https://wiki.inria.fr/sciencinfolycee/Portrait:Ada_Lovelace_:_19%C3%A8me_si%C3%A8cle_:_Notion_de_programme", 
    		new Reponse(reponse.type.CM,
			["Une mathématicienne du XIXe siècle, Ada de Lovelace","Un physicien du XXe siècle, Paul Dirac","Un savant du Moyen-Âge, Ibn Al-Hazin"],
			1)),

	new Question("D’où vient le mot « calcul » ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.HISTOIRE,
		"Le mot « calcul » vient du latin calculus et rappelle l’utilisation de cailloux dans les procédures de comptage depuis au moins le IVe millénaire avant notre ère. Des cailloux jetés dans un bol à l’entrée de la bergerie pour vérifier qu’il y avait autant de moutons qui rentraient le soir que d’animaux qui en étaient sortis le matin.",
		"http://fr.wiktionary.org/wiki/calcul", 
    		new Reponse(reponse.type.CM,
			["De l’anglais « calculator » qui signifie machine à calculer","Du latin calculus qui signifie « caillou »","De la ville de Calcutta, en Inde, pays de grands mathématiciens"],
			2)),

	new Question("D’où vient le mot « ordinateur » ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.HISTOIRE,
		"Extrait de la lettre de Jacques Perret : \nLe 16 IV 1955 \nCher Monsieur, \nQue diriez-vous d’ordinateur? C’est un mot correctement formé, qui se trouve même dans le Littré comme adjectif désignant Dieu qui met de l’ordre dans le monde. Un mot de ce genre a l’avantage de donner aisément un verbe ordiner, un nom d’action ordination. L’inconvénient est que ordination désigne une cérémonie religieuse ; mais les deux champs de signification (religion et comptabilité) sont si éloignés et la cérémonie d’ordination connue, je crois, de si peu de personnes que l’inconvénient est peut-être mineur. D’ailleurs votre machine serait ordinateur (et non ordination) et ce mot est tout à fait sorti de l’usage théologique. (texte coupé)",
		"http://blog.museeinformatique.fr/Decouvrez-l-origine-du-mot-ordinateur-invente-il-y-a-pres-de-55-ans-par-Jacques-Perret-a-la-demande-de-IBM_a212.html", 
    		new Reponse(reponse.type.CM,
			["C'est la traduction directe de l’anglais computer","C'est un terme proposé par un homme de lettre à la société IBM en 1955","C'est le nom de Gustave Ordinateur, l'inventeur français [de cette machine]"],
			2)),

	new Question("Qu'est-ce que la robotique chirurgicale ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.SANTE,
		question.SANS_COMMENTAIRE,
		"http://www.futura-sciences.com/magazines/sante/infos/dossiers/d/medecine-robotique-appliquee-chirurgie-152/", 
    		new Reponse(reponse.type.CM,
			["Une technologie qui permet au chirurgien d'opérer de manière plus précise","Des robots qui remplacent complètement les chirurgiens","La conception de robots avec des pièces très petites"],
			1)),

	new Question("À quand remonte le plus vieux document crypté connu ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.HISTOIRE,
		question.SANS_COMMENTAIRE,
		"http://fr.wikipedia.org/wiki/HISTOIRE_de_la_cryptographie", 
    		new Reponse(reponse.type.CM,
			["Une recette secrète de poterie qui date 2500 ans av. J.-C., découverte dans l'actuel Irak","Une lettre de Marie-Antoinette à son amant avant de mourir guillotinée","Un parchemin chinois sur la technique pour fabriquer la poudre à canon"],
			1)),

	new Question(["Dans la comptine suivante, que remplacent les chiffres 1 et 2 ? \nUn petit chat g2s\nqui 1ngeait du 2z\nsur un tapis g2s\nsa 1m1 lui dit\nce n’est pas poli\nde 1nger du 2z\nsur un tapis g2s.", "Quel intérêt d'écrire la comptine comme cela ?"],
		question.SANS_IMAGE, question.type.DUO,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		"On appelle ça de la compression. Les ordinateurs font cela pour réduire l'espace que prennent les images par exemple. (Exemple, compression JPEG.)\nOn appelle ça de la compression. Les ordinateurs font cela pour réduire l'espace que prennent les images par exemple, comme pour les formats JPEG.",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM, ["ri et ra","mi et ra","ri et ma","On a fait des économies de taille, car un chiffre remplace deux lettres","C'est pour rendre la comptine illisible","Ça ne sert à rien"],
			[3, 4])),

	new Question(["Combien de tentacules a une pieuvre, aussi appelée  octopus ?", "Combien de chiffres comporte un octet ?"],
		question.SANS_IMAGE, question.type.DUO,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		"Octo- désigne le chiffre 8 ! Comme dans mégaoctet, où octet désigne une suite de huit chiffres, en fait 8 bits valant chacun 0 ou 1.",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM, [2, 6, 8, 8, 6, 1],
			[3, 4])),

	new Question(["Qu’est-ce qui depuis 2008 pollue le plus entre les avions et les ordinateurs ?", "Comment peut-on intelligemment diminuer la consommation des ordinateurs ?"],
		question.SANS_IMAGE, question.type.DUO,
		question.difficulte.BUG,
		question.categorie.ENVIRONNEMENT,
		"La consommation d'énergie de l'informatique est celle qui augmente le plus actuellement : en 2008, elle a rattrapé celle du transport aérien. Depuis, elle l'a dépassé. Le greenIT est une démarche globale qui vise à créer des équipements informatiques, à la fois par le hardware et le software, moins gourmands énergétiquement.",
		"http://www.futura-sciences.com/magazines/environnement/infos/actu/d/developpement-durable-emissions-co2-liees-internet-polluent-autant-avion-43802/\nhttp://www.20minutes.fr/sciences/198534-informatique-pollue-autant-aviation", 
    		new Reponse(reponse.type.CM, ["Les avions (le transport aérien)","Les ordinateurs et le réseau Internet","Les deux sont équivalents","En améliorant la conception des logiciels pour les rendre moins gourmands","En interdisant l'achat de certains périphériques","En utilisant plus souvent le papier et les impressions, plutôt que les écrans"],
			[2, 5])),

	new Question(["Qu’est-ce qu’un nanorobot ?", "À quoi peut servir un nanorobot ?"],
		question.SANS_IMAGE, question.type.DUO,
		question.difficulte.BUG,
		question.categorie.TECHNOLOGIE,
		"Les nanorobots sont des robots qui ne mesurent que quelques dizaines de milliardièmes de mètre (quelques dizaines de nano-mètres). Ils sont constitués de composants moléculaires ou de fragments d’ADN. Ils sont encore en phase expérimentale mais ils ont des applications prometteuses en médecine, pour repérer et détruire les cancers, ou encore en environnement pour la détection de produits toxiques.",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM, ["Un robot qui ressemble à un animal","Un robot qui a une taille infime","Le robot d'un dessin animé célébré","À aller sur Mars","À cibler des zones très précises, comme l’intérieur du corps humain","À remplacer l'homme dans des tâches répétitives"],
			[2, 5])),

	new Question(["De combien de temps notre cerveau a-t-il besoin pour reconnaître un animal dans une image ?", "Les ordinateurs sont-ils plus rapides que nous pour ça ?"],
		question.SANS_IMAGE,
		question.type.DUO,
		question.difficulte.BUG,
		question.categorie.SANTE,
		question.SANS_COMMENTAIRE,
		"https://interstices.info/jcms/c_14155/reconnaitre-un-animal-notre-cerveau-est-plus-rapide-que-nous?hlText=reconnaissance+image", 
    		new Reponse(reponse.type.CM, ["un dixième de seconde","1 seconde","2 secondes","Oui, bien plus rapide","Non, on recherche donc des algorithmes inspirés de notre cerveau","Ils vont aussi vite"],
			[1, 5])),

	new Question("Le chiffre ou code de César consiste à décaler les lettres d'un message pour le crypter. Par exemple A devient B, M devient N. Que veut alors ici dire CSBWP ?",
		question.SANS_IMAGE, question.type.CASSE_TETE,
		question.difficulte.BUG,
		question.categorie.HISTOIRE,
		"Le chiffre de César doit son nom à Jules CÉSAR (Rome, en 100 av. J.-C. - 44 av. J.-C) qui, selon l'érudit romain SUÉTONE (1er - 2ème siècle), l'utilisait avec un décalage de trois sur la gauche pour certaines de ses correspondances secrètes, notamment militaires\nLe chiffre de César doit son nom à Jules César (Rome, en 100 av. J.-C. - 44 av. J.-C) qui l'utilisait avec un décalage de trois sur la gauche pour certaines de ses correspondances secrètes, notamment militaires.",
		"http://www.math93.com/index.php/314-code-de-cesar", 
    		new Reponse(reponse.type.ENTREE,
			reponse.SANS_REPONSE,
			"BRAVO")),

	new Question("Pour un grand garçon, laquelle de ces phrases est vraie",
		question.SANS_IMAGE, question.type.CASSE_TETE,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		"En informatique, ET et OU sont appelés des opérateurs logiques. Ils permettent, quand on écrit des programmes, d'exécuter des opérations seulement sous certaines conditions. Nous utilisons ET et OU dans le langage courant. L'opérateur XOR en revanche, est spécifique à l'informatique. Il permet de tester si telle condition OU telle condition est vraie, mais il faut alors qu'une seule d'entre elles soit vraie seulement.",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["Il est grand ET il est une fille","Il est petit OU il est un garçon","Il est un garçon ET il est petit"],
			2)),

	new Question("Si tu lances deux fois de suite une pièce de monnaie en l'air, pour jouer à pile ou face, combien de combinaisons sont possibles en tout ?",
		question.SANS_IMAGE, question.type.CASSE_TETE,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		"Les combinaisons sont : pile face, face pile, pile pile, face face. Une succession de deux \"pile ou face\" est comme l’association de deux chiffres binaires (qui valent 1 ou 0). Ansi, avec une paire de chiffres binaires on peut écrire 4 combinaisons : 00, 01, 10 et 11. Avec une telle paire, on peut coder un nombre de 0 à 3 (00 vaut 0, 01 vaut 1, 10 vaut deux et 11 vaut 3). On utilise un tel codage en informatique avec des successions de 8 chiffres binaires. (texte coupé)",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			[4, 2, 3],
			1)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Laquelle de ces images correspond à une modélisation ?",
		question.SANS_IMAGE,
		question.type.IMAGE,
		question.difficulte.BUG,
		question.categorie.SANTE,
		"C'est la modélisation d'un foie. Cela permet de mieux comprendre comment celui-ci évolue et d'aider les chirurgiens à préparer et effectuer une opération.",
		"http://phototheque.inria.fr/phototheque/media/17313\nhttp://phototheque.inria.fr/phototheque/media/19969\nhttp://phototheque.inria.fr/phototheque/media/10197", 
    		new Reponse(reponse.type.CM,
			[1, 2, 3],
			3)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Que simule-t-on sur cette image ?",
		question.SANS_IMAGE,
		question.type.IMAGE,
		question.difficulte.BUG,
		question.categorie.ENVIRONNEMENT,
		"Un container en acier, rempli d'explosif PBX-9501, est soumis à la chaleur intense d'un incendie. La simulation montre les étapes de la vaporisation de celui-ci. La simulation a été effectuée sur un serveur Redstorm & Atlas, avec 512->3072 processeurs. Le temps de calcul a été d'environ 180,000 heures CPU.\nUn container en acier, rempli d'explosif PBX-9501, est soumis à la chaleur intense d'un incendie. La simulation montre les étapes de la vaporisation de celui-ci.",
		"http://www.csafe.utah.edu/gallery.php?year=2008&title=Parametric%20Study", 
    		new Reponse(reponse.type.CM,
			["Le Soleil en éruption","La détonation d'un explosif militaire","L'infection d'une cellule vivante par un virus"],
			2)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Que représente cette image ?",
		question.SANS_IMAGE,
		question.type.IMAGE,
		question.difficulte.BUG,
		question.categorie.ENVIRONNEMENT,
		"Grâce à des algorithmes qui extraient des données de façon automatique, le comptage manuel de flamants roses, par exemple, a laissé place à un comptage automatique. Ici, vue aérienne d'une colonie de flamants roses en Camargue. \nEn médaillon : la détection des flamants roses. La méthode utilisée, fondée sur des équations différentielles stochastiques, permet d'obtenir des résultats sur des images de grande taille en quelques dizaines de minutes.",
		"http://phototheque.inria.fr/phototheque/media/9554", 
    		new Reponse(reponse.type.CM,
			["La simulation d'une colonie de microbes","Le comptage automatique par ordinateur d'une population de flamants roses","La modélisation d'un écoulement de sable"],
			2)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Que voit-on sur cette image ?",
		question.SANS_IMAGE,
		question.type.IMAGE,
		question.difficulte.BUG,
		question.categorie.ENVIRONNEMENT,
		"La cartographie des zones brûlées est un maillon essentiel dans la gestion de la situation post-crise. Elle fournit des renseignements précieux pour tous les acteurs responsables de la gestion de ces territoires. (texte coupé)",
		"http://phototheque.inria.fr/phototheque/media/9541", 
    		new Reponse(reponse.type.CM,
			["La cartographie automatique par ordinateur de dégâts de feux de forêt","La mesure de la pollution d'un fleuve par produits chimiques","Les embouteillages générés par un accident"],
			1)),

	new Question("Mime ce mot : ",
		question.SANS_IMAGE,
		question.type.MIME,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.OKKO,
			"Réseau",
			reponse.SANS_BONNE_REPONSE)),

	new Question("Mime ce mot : ",
		question.SANS_IMAGE,
		question.type.MIME,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.OKKO,
			"Mathématique",
			reponse.SANS_BONNE_REPONSE)),

	new Question("Quelle quantité de carburant (en grammes) faut-il pour fabriquer une puce électronique, qui pèse elle 2 grammes ?",
		question.SANS_IMAGE, question.type.JUSTE_PRIX,
		question.difficulte.BUG,
		question.categorie.ENVIRONNEMENT,
		"Une puce électronique a beau être minuscule, pour produire deux grammes d'électronique, on consomme 1,7 kg d'énergie fossile, 1 m3 d'azote, 72 g de produits chimiques et 32 litres d'eau.",
		"http://www.eurekalert.org/pub_releases/2002-11/acs-ttp110502.php", 
    		new Reponse(reponse.type.ENTREE,
			reponse.SANS_REPONSE,
			1700)),

	new Question("Quelle est date d’invention du Web ?",
		question.SANS_IMAGE, question.type.JUSTE_PRIX,
		question.difficulte.BUG,
		question.categorie.HISTOIRE,
		"1990 est la date de l’annonce publique du World Wide Web  comme ensemble de protocoles et techniques que l'on utilise aujourd'hui (HTTP, HTML…). Mais l'histoire d'Internet commence dès les années 60 avec le réseau militaire américain ARPANET.",
		"http://fr.wikipedia.org/wiki/World_Wide_Web#HISTOIRE", 
    		new Reponse(reponse.type.ENTREE,
			reponse.SANS_REPONSE,
			1990)),

	new Question("Écrivez des noms de composants constituant un smartphone",
		question.SANS_IMAGE,
		question.type.BACCALAUREAT,
		question.difficulte.BUG,
		question.categorie.SOCIETE,
		"Mémoire vive, mémoire flash, carte mère, processeur, carte vidéo, carte son, écran, puce GPS, caméra, ports USB",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.OKKO,
			reponse.SANS_REPONSE,
			reponse.SANS_BONNE_REPONSE)),

	new Question("Que sont des robots téléopérés ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.SANTE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["Des robots qui réparent nos télévisions","Des robots qui sont contrôlés à distance avec une télécommande","Des robots qui permettent à un chirurgien d'opérer à distance"],
			3)),

	new Question("Qu'est-ce qu'un cheval de Troie ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.TECHNOLOGIE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["Un programme insignifiant au premier abord, souvent un jeu, qui permet de prendre discrètement le contrôle d'un ordinateur à distance","Sous forme de souris ou de clé mémoire c'est un objet qui se connecte au port USB et qui permet de détruire l'ordinateur électriquement","Un jeu vidéo interdit à cause des dangers psychologiques qu'il peut entraîner"],
			1)),

	new Question("Quelle est la différence entre Internet et le Web ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.SOCIETE,
		"Le Web n’est qu'une des applications d’Internet. C'est un réseau de sites utilisant tous le même protocole, interconnectés par des hyperliens. Le Web a été inventé par Tim Berners-Lee plusieurs années après Internet.",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["Le Web n’est qu'une application particulière d’Internet. Il y en a d'autres, comme l'email ou le peer-to-peer","Aucune, c’est la même chose","Internet est le mot français pour Web"],
			1)),

	new Question("Comment peut-on techniquement savoir où je suis, via mon smartphone allumé ?\n(plusieurs réponses possibles)",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.BUG,
		question.categorie.SOCIETE,
		"Toutes les applications peuvent utiliser les techniques 1 et 2 sauf si je leur interdis, et la police/justice peut utiliser la technique 3 au cours d'une enquête.",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM, ["Grâce aux informations données par le GPS intégré","Grâce à l'emplacement du réseau WiFi où mon smartphone est connecté","Grâce à l'emplacement des antennes de mon opérateur, auxquelles mon téléphone se connecte en permanence"],
			[1, 2, 3])),

	new Question(["Quel est, en moyenne pour un adulte, le nombre de battements par minute de notre cœur ?", "En quoi les sciences du numérique peuvent-elles aider les chirurgiens ?"],
		question.SANS_IMAGE, question.type.DUO,
		question.difficulte.BUG,
		question.categorie.SANTE,
		"Une des difficultés pour un chirurgien est le mouvement du patient ou de l’organe à opérer. Les recherches en cours chez Inria portent sur la conception d’outils robotisés de chirurgie capable de compenser le mouvement respiratoire du patient par exemple, ou du cœur, afin de donner au chirurgien un environnement de travail stable.",
		"http://emergences.inria.fr/lettres2013/newslettern26/l26asservissementvisuel", 
    		new Reponse(reponse.type.CM, [70, 30, 200, "Savoir avant l'opération où placer très précisément le pacemaker", "Rechercher des outils intelligents capables d’anticiper les mouvements du patient pendant l'opération", "Évaluer les risques d’arrêt cardiaque après une opération"],
			[1, 5])),

	new Question(["Combien de couleurs totales peuvent afficher couramment nos écrans ?", "Combien de couleurs notre œil peut-il distinguer naturellement ?"],
		question.SANS_IMAGE,
		question.type.DUO,
		question.difficulte.BUG,
		question.categorie.FONDAMENTAUX,
		"Les écrans ont justement été conçus pour afficher plus de couleurs que ce que l'oeil peut discriminer pour éviter la perception des «défauts» chromatiques. De même que les vidéos s'affichent à environ 50 à 60 trames par secondes un peu plus vite que ce que l'oeil peut percevoir en terme de mouvement pour lui donner une impression de continuité.\nLes écrans ont justement été conçus pour afficher plus de couleurs que ce que l'oeil peut détecter pour éviter la perception des \"défauts\" chromatiques. De même que les vidéos s'affichent à environ 50 à 60 trames par secondes un peu plus vite que ce que l'oeil peut percevoir en terme de mouvement pour lui donner une impression de continuité.",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM, ["16 millions de couleurs","16 000 couleurs","1600 couleurs", "Exactement le même nombre que le nombre de couleurs d'un écran", "Beaucoup plus", "Sensiblement moins"],
			[1, 6])),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Que représente cette scène ?",
		question.SANS_IMAGE,
		question.type.IMAGE,
		question.difficulte.BUG,
		question.categorie.SANTE,
		"L’objectif de ce système est d’obtenir une véritable sensation d’immersion pour un utilisateur unique.\nCe cube immersif est une des composantes de la salle Gouraud-Phong, salle immersive à dimensions  variables de l'INRIA Sophia Antipolis - Méditerranée.\nL’objectif de ce système est d’obtenir une véritable sensation d’immersion pour un utilisateur unique.",
		"http://phototheque.inria.fr/phototheque/media/16922", 
    		new Reponse(reponse.type.CM,
			["L'intervention de deux policiers et leur chien lors d'une recherche de stupéfiants","Un environnement immersif pour le traitement de la phobie des chiens","Un jeu vidéo de dressage"],
			2)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Qu’est-ce que c’est ?",
		question.SANS_IMAGE,
		question.type.IMAGE,
		question.difficulte.BUG,
		question.categorie.SANTE,
		"Des chercheurs de l'équipe VISAGES (commune  à Inria et à l'INSERM), et des psychiatres du CHS Guillaume Régnier de Rennes, proposent un outil de neuronavigation 3D temps réel pour faciliter l'utilisation de la stimulation magnétique transcranienne (TMS) dans la thérapie de la dépression.\nDes chercheurs proposent un outil de neuronavigation 3D en temps réel pour faciliter l'utilisation de la stimulation magnétique transcranienne (TMS) dans la thérapie de la dépression. Ce sont des algorithmes qui permettent de garantir le bon fonctionnement de cet appareil non invasif.",
		"http://phototheque.inria.fr/phototheque/media/10189", 
    		new Reponse(reponse.type.CM,
			["Une machine pour faire une image 3D du cerveau","Une machine pour lire dans les pensées","Un outil de stimulation pour soigner la dépression"],
			3)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Qu’est-ce que c’est ?",
		question.SANS_IMAGE,
		question.type.IMAGE,
		question.difficulte.BUG,
		question.categorie.SOCIETE,
		"Les points correspondent à des membres du réseau social, et les liens entre ces points des relations de type «ami» ou «follower». Avoir une vue de ces relations permet d'étudier les phénomènes qui émergent dans ces grands réseaux (regroupements de personnes...).",
		"https://interstices.info/jcms/i_60056/une-revolution-permanente\nhttp://www.opte.org/maps/", 
    		new Reponse(reponse.type.CM,
			["Un papillon numérique"," Une modélisation des échanges sur les réseaux sociaux","Un plan de labyrinthe d'un jeu vidéo"],
			2)),

	new Question("Mime un de ces mots",
		question.SANS_IMAGE,
		question.type.MIME,
		question.difficulte.BUG,
		question.categorie.TECHNOLOGIE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.OKKO,
			["Un pacemaker","Un robot aspirateur","Twitter"],
			reponse.SANS_BONNE_REPONSE)),

],
[
	new Question("Vous êtes dans un labyrinthe où chaque couloir se divise en deux puis à nouveau en deux, puis à nouveau en deux, à la façon d’un arbre. Combien existe-t-il de chemins différents ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		"Comptez les branches manuellement, si vous ne voulez pas utiliser de formule mathématique.\nCe qui impressionnant c'est que au bout de 10 branches il y aura 1,2,4,8,16,32,…,1024 chemins, de 20 branches plus d'un million et de 30 branches plus d'un millards !",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["8 chemins, soit 2 à la puissance 3 ou encore 2^3", "4 chemins, soit 2 fois 2", "beaucoup plus en fait, les calculs précédents sont faux"],
			1)),

	new Question("En informatique, un bit est une information qui vaut 0 ou 1 c'est-à-dire qui peut prendre deux valeurs. Laquelle de ces informations n'est PAS binaire ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["Le sexe d'une personne","Le département de naissance d'une personne","Le fait qu'une personne soit décédée"],
			2)),

	new Question("Comment sont codés les images, les sons et toutes les données qui sont dans un système informatique ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		"Tous les objets : textes, sons, images, et toutes nos données sont codées en binaire, ce sont de grandes suites de 0 et de 1. À cause de cette homogénéité, beaucoup de mécanismes (mémorisation, compression, transmission…) sont universels et s'appliquent à toutes ces informations différentes.",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["Ils sont stockés tels quels","Ils sont codés en binaire avec des 0 et des 1","C'est l’ordinateur qui s’en occupe donc personne ne sait comment c’est codé"],
			2)),

	new Question("L'unité de mesure des longueurs est le mètre, mais quelle est l'unité de mesure de l'information ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		"C'est le \"bit\", c’est-à-dire 0/1 ou oui/non ou vrai/faux. Savoir si c'est un homme ou une femme ou qu'une pièce est tombée sur pile ou face correspond à un bit d'information. Que 10 pièces sont tombées sur pile ou face donne 10 bits d'information.",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["Le bit","L’infogramme","Le sievert"],
			1)),

	new Question("Vous devez déterminer un nombre, de 0 à 100, auquel pense un ami. Quelle est la logique la plus efficace pour le trouver ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		"L’algorithme 1 semble le plus simple mais si le nombre est à la fin (100), on perd du temps pour rien. L’algorithme 2 est du même ordre de longueur que le 1. Le bon nombre peut sortir tout de suite, ou en dernier.\nL’algorithme 3 est le plus performant, c’est celui qui demande le moins d’opérations en moyenne. Pour deviner un nombre de 0 à 100, il faut au maximum 7 essais !",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["Linéaire : Lui proposer, dans l’ordre, le 1,2,3,4, etc.","Au hasard : Lui proposer des nombres complètement au hasard, sans jamais reprendre le même","Dichotomie : lui proposer le nombre 50 et lui demander si c’est plus ou moins. Garder seulement la série de nombres correspondants et couper de nouveau en 2"],
			3)),

	new Question("Que signifie qu'une valeur est \"binaire\" ou \"booléenne\" ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["C’est une valeur qui vaut soit 1 soit 0","C’est une valeur très grande","C’est une valeur qui vaut tout le temps zéro"],
			1)),

	new Question("En pantoufles, je siffle, ronfle, souffle.\nComment réduire la longueur de cette phrase sans perdre d'information ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		"En informatique, on utilise de telles astuces pour réduire la taille des fichiers. On appelle ça un algorithme de compression. Le JPEG, que l'on utilise beaucoup pour nos photos, est un de ces algorithmes de compression.",
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["En supprimant la ponctuation et le pronom personnel","En décidant que <fle> s'écrit z","En décidant de supprimer le mot pantoufle"],
			2)),

	new Question("Qu'est-ce qu’un datagramme ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.TECHNOLOGIE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["Un paquet de données qui voyage dans un réseau","Le poids d'une quantité de mémoire","Un schéma représentant l'organisation d'une base de données"],
			1)),

	new Question("Qu’est-ce qu’un transistor ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.TECHNOLOGIE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["Une vieille radio de nos parents","Un composant électronique qui permet de contrôler un courant","Les deux !"],
			3)),

	new Question("Que signifie “IA” en informatique et qui a été l’objet d’un film ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
    		new Reponse(reponse.type.CM,
			["Image Accélérée","Intelligence Artificielle","Informatique Adaptative"],
			2)),

	new Question("À partir de quelles couleurs de base sont créées toutes leurs couleurs dans les images numériques ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		"Ces trois couleurs sont les couleurs primaires, en synthèse additive. Elles correspondent en fait à peu près aux trois longueurs d’ondes auxquelles répondent les trois types de cônes de l’œil humain (voir trichromie). L’addition des trois primaires donne du blanc.\nCes trois couleurs sont les couleurs primaires de la lumière, dans ce que l'oeil humain peut voir.",
		"https://fr.wikipedia.org/wiki/Rouge_vert_bleu", 
    		new Reponse(reponse.type.ENTREE,
			["Rouge, Vert et Bleu (RVB)"],
			2000)),

	new Question("Les outils numériques ne permettent PAS de prédire",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.ENVIRONNEMENT,
		"Les résultats d'une roulette sont le pur fruit du hasard. Les outils numériques seuls ne peuvent pas permettre de prédire le résultat d'un tirage. À chaque nouveau tirage les différents nombres auront toujours tous autant de chance de sortir. En théorie, si on plaçait un ensemble de capteurs de vitesse, de frottement, de position et qu'on mesurait tous les paramètres liés à la roulette on pourrait prédire alors où la bille va tomber. Et encore, cela sera sujet à la théorie du chaos, qui dit qu'une erreur minime sur la mesure des paramètres faussera complètement le calcul.",
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["L’écoulement de l’air autour du casque d’un skieur","L’évolution d’un feu de forêt","Le résultat d'une roulette de casino"],
			3)),

	new Question("À quoi sert la simulation du mouvement des mers et océans ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.ENVIRONNEMENT,
		"L’étude par simulation numérique des transferts de masses d'eaux de l'océan Indien vers l'océan Atlantique permet d'anticiper le changement climatique global.",
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Cela permet de savoir où il est préférable d’aller en congés","Cela permet de prévoir le réchauffement climatique","Cela permet de mettre les bateaux en pilote automatique"],
			2)),

	new Question("Qu'est-ce qu'un algorithme ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Une suite d’opérations ou d’instructions à effectuer, comme dans une recette de cuisine","La vitesse à laquelle un ordinateur calcule","Un composant électronique présent dans les ordinateurs"],
			1)),

	new Question("Pourquoi les marins répètent-ils trois fois les mots dans leurs communications radio ?\nPANNE, PANNE, PANNE \nA TOUS, A TOUS, A TOUS \nICI \nNEPTUNE, NEPTUNE, NEPTUNE",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		"C'est le principe de la correction d'erreur qu'utilisent les mémoires d'ordinateurs ou les réseaux. Si un des mots répété est brouillé, le destinataire peut tout de même comprendre le message.",
		"http://www.anfr.fr/fileadmin/mediatheque/documents/radiomaritime/manuel_crr.pdf", 
		new Reponse(reponse.type.CM,
			["C'est le principe de la correction d'erreur : pour être sûr que l'information soit comprise, même en cas de mauvaise réception","Pour attirer l'attention d'interlocuteurs distraits en cas d'urgence","C'est un usage traditionnel qui date du premier code de la marine"],
			1)),

	new Question("Que se passe-t-il quand l'adresse d'un site Web commence par https et non http ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.SOCIETE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Cela permet d’y accéder sur un Smartphone (s comme Smartphone)","Rien de spécial, c'est juste comme souvent deux mots pour dire la même chose","Avec le « s » le contenu est crypté donc illisible pour quelqu'un qui observerait le réseau"],
			3)),

	new Question("Dans l'adresse https://lamediatheque.be/downloads/himehajime.mp3 : Quelle partie me donne le nom du serveur d'où provient le contenu ? Quelle partie m'indique que c'est probablement un morceau de musique ? Dans quel pays est probablement situé le serveur ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.SOCIETE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.ENTREE,
			["Serveur : lamediatheque.be; \nMusique : .mp3 ;\nPays : Belgique (.be) ;\nWeb : http://"],
			reponse.SANS_BONNE_REPONSE)),

	new Question("Un outil mathématique d’optimisation ne permet PAS de",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.ENVIRONNEMENT,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Aider à organiser la consommation d’énergie dans des villages du désert","Prévoir la production d’énergie de bactéries","Continuer à consommer autant d'énergie que par le passé"],
			3)),

	new Question("Que fait notre télévision s'il y a des pertes de données pendant une émission ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Elle attend que le signal revienne ","Elle ajoute des données aléatoires, pour aller vite","Elle extrapole les données, pour inventer ce qui manque"],
			3)),

	/*new Question("Voici un code A=1, B=2, C=3, etc., Z=26. Écrire le mot SCIENCE à l’aide de ce code",
		question.SANS_IMAGE,
		question.type.CASSE_TETE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		"Ceci est une méthode de cryptographie, pour transmettre des messages codés. Des méthodes plus efficaces existent comme transmettre le décalage à opérer sur les chiffres (A = 3 par exemple) dans un autre message. On appelle cela le cryptage asymétrique, et c'est sur celui-ci que repose la cryptographie moderne.",
		"http://fr.wikipedia.org/wiki/Cryptographie_asym%C3%A9trique", 
		new Reponse(reponse.type.ENTREE,
			["19 - 3 - 9 - 5 - 14 – 3 – 5"],
			reponse.SANS_BONNE_REPONSE)),*/

	new Question("En anglais les notes se codent avec des lettres par exemple DO se code C, RE se code D, MI se code E. Chanter la petite chanson : CCCDEDCEDDC",
		question.SANS_IMAGE, question.type.CASSE_TETE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		"Le fait de remplacer un élément toujours par le même élément est une méthode de cryptographie, pour transmettre des messages codés.",
		question.SANS_SOURCE, 
		new Reponse(reponse.type.ENTREE,
			["Au clair de la lune"],
			reponse.SANS_BONNE_REPONSE)),

	new Question("Si une page Web me demande mon mot de passe Facebook ou Twitter comment être sûr que ce n'est pas une \"fausse\" page pour me pirater ?",
		question.SANS_IMAGE,
		question.type.SOCIETE,
		question.difficulte.DEFAILLANCE,
		question.categorie.DIRECTE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Elle doit commencer par https://","Il ne faut jamais rentrer son mot de passe sur une page Web","Il faut regarder l'adresse Internet. Elle doit finir par facebook.com  ou twitter.com"],
			3)),

	new Question("Qui est un serveur et qui est un routeur ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.TECHNOLOGIE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Je suis une machine informatique puissante qui stocke de nombreuses données ","Je suis une machine informatique puissante qui sert de relais entre les réseaux qui forment Internet"],
			1)),

	new Question("Qu’est-ce qu’un cloud ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.TECHNOLOGIE,
		question.SANS_COMMENTAIRE,
		"https://fr.wikipedia.org/wiki/Cloud_computing", 
		new Reponse(reponse.type.CM,
			["Un ordinateur tellement gros qu'on peut comparer sa taille à celle d'un nuage (d'où son nom)","Un réseau d'ordinateurs offrant un service centralisé,  auquel je peux me connecter avec n'importe lequel de mes appareils","Le parc d'ordinateurs que l'on trouve dans de grosses compagnies et dont le refroidissement à l'eau produit beaucoup de vapeur qui s'élève dans le ciel, tel un nuage"],
			2)),

	new Question("Comment s’appelle le composant qui permet à nos téléphones et tablettes de détecter leur orientation ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.TECHNOLOGIE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Un accéléromètre ou un gyroscope","Un orientomètre","Un occulomètre"],
			1)),

	new Question("Grâce à quoi nos GPS fonctionnent-ils ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.TECHNOLOGIE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Grâce à des satellites en orbite","Grâce à Internet","Grâce au réseau de téléphonie mobile"],
			1)),

	new Question("Comment s’appelle le logiciel destiné à gérer l’ensemble des fonctionnalités d’un ordinateur?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Le système d’exploitation","Le navigateur Web","L'éditeur de texte"],
			1)),

	new Question("Classez dans l’ordre croissant : giga, kilo, méga, tera, exa, peta",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		"kilo = 10^3 (ou encore mille, un 1 avec 3 zéros derrière), méga = 10^6 (un 1 avec 6 zéros derrière), giga = 10^9, tera = 10^12, peta = 10^15, exa = 10^18.",
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["kilo, méga, giga, tera, peta, exa."],
			reponse.SANS_BONNE_REPONSE)),

	new Question("Peut-on tout prédire grâce aux simulations ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		"Phénomènes chaotiques : un tout petit changement de condition initiale peut créer un changement explosif et imprévisible à cause des erreurs de calcul. C'est l'effet papillon, qui dit qu'un battement d'aile de papillon en Asie peut provoquer un ouragan à New York, par accumulation de causes et d'effets.",
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Oui, il suffit d'entrer les bons paramètres dans l'ordinateur et de le laisser calculer un résultat approché","Non, la nature se comporte de façon aléatoire et reste imprédictible totalement","Non, certains phénomènes dits chaotiques sont si complexes qu'une toute petite erreur change complètement les résultats"],
			3)),

	new Question("Pourquoi les médecins coopèrent-ils avec les mathématiciens et informaticiens ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.SANTE,
		question.SANS_COMMENTAIRE,
		"https://interstices.info/jcms/i_53813/les-mathematiques-cachees-de-la-medecine?hlText=m%C3%A9decins", 
		new Reponse(reponse.type.CM,
			["Pour créer des algorithmes d'analyse d'images médicales ou modéliser des organes","Pour expérimenter sur leur cerveau : le relief cérébral se modifie au fil du temps, lorsque l'on calcule toute la journée","Pour assurer la maintenance des supercalculateurs des hôpitaux"],
			1)),

	new Question("Dans quel cas les sciences du numérique peuvent-elles aider les neurochirurgiens ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.SANTE,
		"La neurochirurgie est affaire de précision. On ne taille pas au hasard dans le cerveau humain, c'est pourquoi le chirurgien prépare son intervention avec des images acquises avant l'opération, par imagerie par résonance magnétique (IRM) notamment. Toutefois, la topologie du cerveau évolue, avec l'anesthésie, la pression artérielle, etc. Plusieurs études internationales ont montré que l'ouverture de la boîte crânienne, sans intervention directe sur le cerveau, pouvait entraîner des modifications de topologie de plus d'un centimètre.",
		"https://interstices.info/jcms/c_12343/christian-barillot-ce-que-pourraient-voir-les-chirurgiens-pendant-une-intervention", 
		new Reponse(reponse.type.CM,
			["Pour simuler et anticiper les mouvements du cerveau lors d'une neurochirurgie","Pour améliorer le dosage des anesthésiants","Pour calculer les probabilités de décès du patient"],
			1)),

	new Question("Parmi ces propositions, que ne peuvent PAS faire aujourd’hui les chirurgiens grâce aux sciences du numérique ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.SANTE,
		"De l’acquisition au simulateur de chirurgie, l’image médicale subit de nombreux traitements informatiques. L’intérêt : disposer d’une « copie virtuelle » du patient, qui pourra être utilisée du diagnostic jusqu’à la chirurgie assistée par ordinateur.\nLa visualisation en temps réel de l'intérieur du patient est à l'étude, mais pas encore opérationnelle.", "https://interstices.info/jcms/i_58396/le-patient-virtuel-au-service-de-la-chirurgie?hlText=chirurgie\nhttps://interstices.info/jcms/c_12343/christian-barillot-ce-que-pourraient-voir-les-chirurgiens-pendant-une-intervention?hlText=chirurgie", 
		new Reponse(reponse.type.CM,
			["Voir l’intérieur du patient en train d’être opéré, sans inciser","S’entraîner au geste chirurgical et élaborer des théories\nS’entraîner au geste chirurgical","Créer un avatar numérique du patient pour s'adapter spécifiquement à son anatomie"],
			1)),

	new Question("Comment marchera le défibrillateur cardiaque du futur ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.SANTE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Il  n'y aura plus de défibrillateur cardiaque dans un proche futur, car on  vient de montrer que l'objet peut être dangereux, donc à proscrire par  principe de précaution","Il n'y aura plus de défibrillateur cardiaque dans un proche futur, car les  maladies cardiaques sont amenées à disparaître, avec les progrès médicaux","De nouveaux modèles informatiques de la physiologie du muscle cardiaque vont permettre d'optimiser son fonctionnement"],
			3)),

	new Question("Va-t-on mettre une connexion réseau dans des interrupteurs électriques ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.TECHNOLOGIE,
		"La domotique est l’ensemble des techniques de l'électronique, de physique du bâtiment, d'automatisme, de l'informatique et des télécommunications permettant de centraliser le contrôle des différents systèmes de la maison. Les systèmes permettant de contrôler sa maison à distance existent déjà aujourd'hui, et devraient se développer largement dans un avenir proche.",
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Non : le rayonnement lié à la multiplication des calculs au niveau des processeurs serait dangereux pour la santé","Oui : cela permettra à l'interrupteur d'être piloté à distance pour automatiser la commande électrique de la maison","Non : ce n'est envisageable que dans les films de science-fiction"],
			2)),

	new Question("Peut-on piloter un ordinateur avec la pensée ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.SANTE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["C'est infaisable dans l'état actuel de nos connaissances. Le cerveau et les ordinateurs sont incompatibles","On peut mesurer l'activité cérébrale générale d'une personne et la comparer à des activités types pour en déduire des commandes","On peut mesurer l'activité de chaque neurone et établir une séquence de bits de données, afin de déterminer exactement ce à quoi pense le sujet"],
			2)),

	new Question("Je (l’animateur) peux deviner en 7 questions maximum n’importe quel nombre entier, entre 0 et 100, auquel tu penses. Vrai ou faux ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		"Il faut utiliser le principe de dichotomie, qui consiste à proposer à chaque fois le chiffre médian et de demander si le chiffre à trouver est supérieur ou inférieur. On commence par 50. Si c'est plus, on annonce 75, etc.",
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Vrai", "Faux"],
			1)),

	new Question("À quoi fut due l’explosion d’Ariane 5 en 1996 avec à son bord 500 millions de dollars de satellites ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.HISTOIRE,
		"En effet, un morceau de programme utilisé pour Ariane 5 avait été repris tel quel, à partir de celui d'Ariane 4 et sans adaptation à la nouvelle fusée. Plus puissante, elle provoqua un dépassement dans un calcul. Celui qui trouva le problème fut Gilles Kahn, premier informaticien de l'académie des sciences.",
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["À une erreur de calcul de la trajectoire","À un bug informatique","À un défaut de conception du réacteur principal"],
			2)),

	new Question("L’inventeur du mot « algorithme » était…",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.HISTOIRE,
		"C’était Al Khwarismi mathématicien, géographe, astrologue et astronome perse.",
		"https://wiki.inria.fr/sciencinfolycee/Portrait:Al_Khwarismi_%28notion_d%27algorithme%29", 
		new Reponse(reponse.type.CM,
			["Perse","Français","Américain"],
			1)),

	new Question("Pour quelles raisons (au pluriel) les scientifiques doivent-ils rendre publics leurs données et les logiciels de leurs travaux ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.SOCIETE,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["Car c'est un bien public créé avec l'argent des impôts","Car c'est indispensable pour pouvoir vérifier et valider leurs travaux et permettre que d'autres scientifiques fassent avancer la science à partir de leurs résultats","Pour prouver l'antériorité de leurs travaux","C'est la loi qui veut ça"],
			2)),

	new Question("D’où vient le mot mathématiques ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.HISTOIRE,
		question.SANS_COMMENTAIRE,
		"https://fr.wikipedia.org/wiki/Math%C3%A9matiques#.C3.89tymologie", 
		new Reponse(reponse.type.CM,
			["Du grec mathêma qui signifie \"science, connaissance, apprentissage\"","Du latin mathematicum qui signifie \"qui aime apprendre\"","Du vieux français \"ma thématique\" qui signifiait \"ma passion\""],
			2000)),

	new Question("Si je crée un logiciel libre et ouvert protégé par une licence Open Source en partage, en quoi cela peut-il m'aider ?",
		question.SANS_IMAGE,
		question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.SOCIETE,
		question.SANS_COMMENTAIRE,
		"https://fr.wikipedia.org/wiki/Open_source", 
		new Reponse(reponse.type.CM,
			["À ce que les utilisateurs testent le produit et m'aident à l'améliorer","À me faire connaitre à travers ce produit pour vendre d'autres services","À récolter des subventions de l'État"],
			1)),

	new Question("Qu'est-ce que la neutralité du net ?",
		question.SANS_IMAGE, question.type.DIRECTE,
		question.difficulte.DEFAILLANCE,
		question.categorie.SOCIETE,
		"La neutralité du net est un principe qui garantit l'égalité de traitement de tous les flux de données sur internet, sans discrimination à l'égard de la source, de la destination ou du contenu. Ce principe est nécessaire pour garantir plusieurs autres droits : liberté d'expression, accès à l'information…", "https://fr.wikipedia.org/wiki/Neutralit%C3%A9_du_r%C3%A9seau", 
		new Reponse(reponse.type.CM,
			["L'obligation pour chacune et chacun de rester neutre quand il s'exprime devant 4 milliards d'internautes","Elle garantit l'égalité de traitement de tous les flux de données sur Internet","Le fait de ne jamais interférer entre les individus qui échangent sur internet"],
			2)),

	new Question(["Combien ai-je de chances d’obtenir un 6 sur un dé à 6 faces ?"], ["Combien ai-je de chances d’obtenir un double 6 en lançant deux dés à 6 faces ?"],
		question.SANS_IMAGE, question.type.DUO,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		"Pour calculer les probabilités de plusieurs événéments simultanés, comme des lancers de dés, on multiplie les probabilités de chaque événement. Ici 6x6 = 36.",
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM,
			["1/6", "1/36"],
			1)),

	new Question(["Comment appelle-t-on un groupe de 8 bits dans la mémoire d’un ordinateur, le bit étant un chiffre valant 0 ou 1 ?", "Combien de combinaisons possibles existent dans un octet (sachant que chacun des huit bits peut valoir indépendamment 0 ou 1) ?"],
		question.SANS_IMAGE,
		question.type.DUO,
		question.difficulte.DEFAILLANCE,
		question.categorie.FONDAMENTAUX,
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE, 
		new Reponse(reponse.type.CM, ["Un octet","Un octopus","Un quartet", "2x2x2x2x2x2x2x2 ou 2^8 = 256 combinaisons", "2x8 = 16 combinaisons", "8 combinaisons, tout simplement"],
			[1, 4])),

	new Question(["Où est stockée dans notre corps l’information qui détermine la couleur de nos yeux ou la forme de notre visage ?", "On utilise des ordinateurs et des algorithmes complexes pour décoder l’ADN d’une personne. Combien ce décodage prend-il de temps ?"],
		question.SANS_IMAGE, question.type.DUO,
		question.difficulte.DEFAILLANCE,
		question.categorie.SANTE,
		"Le séquençage d’un ADN (la lecture de celui-ci) est une opération très complexe qui correspond essentiellement à reconstruire un texte (la séquence ADN) en mettant bout à bout des petits morceaux à recoller entre eux, et c'est un algorithme qui résout cette tâche.",
		"https://interstices.info/jcms/n_50779/decoder-le-vivant?hlText=s%C3%A9quencage", 
		new Reponse(reponse.type.CM, ["Dans l’ADN, contenu dans chacune de nos cellules","Dans notre cerveau","Dans notre sang", "Quelques secondes", "Quelques heures","Quelques jours"],
			[1,5])),

	new Question(["On dit qu’entre vous et n’importe quelle autre personne dans le monde (David Guetta, François Hollande…), il existe une chaîne d’un certain nombre d’intermédiaires qui se connaissent deux à deux. Quel est le nombre estimé de ces intermédiaires ?", "En quoi cet effet \"petit monde\" est intéressant pour l'informatique ?"],
		question.SANS_IMAGE,
		question.type.DUO, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SOCIETE, 	
		"L’utilisation du terme « petit monde » remonte à l’expérience sociologique de Stanley Milgram effectuée en 1967. Il s’agissait de demander à un échantillon de 300 Américains du Nebraska de faire parvenir une lettre à un individu cible dont ils n’avaient pas l’adresse, mais sur lequel ils possédaient des informations (sa profession, lieu de travail). La règle était de ne transmettre la lettre qu’à une de ses connaissances propres. Le résultat surprenant fut que la longueur moyenne d’une chaîne de porteurs du message de son origine jusqu’à sa destination était très faible (environ 6). Pourtant, le nombre d’individus potentiellement concernés par le réseau social mis en jeu était très important (plusieurs centaines de millions).  Toutefois, les réseaux sociaux comme Facebook ont la particularité d’être très cloisonnés, c’est-à-dire que les relations d’un même individu ont de grandes chances de se connaître entre elles.",
		"https://interstices.info/jcms/c_15920/routage-dans-les-petits-mondes?hlText=sociaux",
		new Reponse(reponse.type.CM, 
			[ "6, selon l’expérience de Milgram", "50, selon la même expérience", "12, selon la même expérience","Il sert à étudier le routage de l'information dans un réseau d'ordinateurs ou un réseau social", "Il sert à faire des rencontres entre chercheurs", "Il sert à déterminer la hiérarchie dans un laboratoire"], 
			[1, 4])),

	new Question(["De quelle nature sont les signaux qui ordonnent à nos muscles de se contracter ?", "En quoi les sciences du numérique peuvent-elles aider une personne handicapée ?"],
		question.SANS_IMAGE,
		question.type.DUO, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SANTE, 	
		"La rupture de la moelle épinière engendre souvent une paraplégie à cause d’un arrêt de la communication entre le centre nerveux et les muscles. Une voie de traitement consiste à activer les neurones moteurs avec une puce électronique. Mais pour ce faire, il faut comprendre comment la chaîne musculaire est activée ; quand les muscles doivent-ils être stimulés, avec quelle intensité, pendant combien de temps ?",
		"https://interstices.info/jcms/c_19186/restaurer-la-marche-grace-a-une-puce?hlText=muscles",
		new Reponse(reponse.type.CM, 
			["Électrochimique","Magnétique","Thermique", "En créant des algorithmes pour stimuler électriquement le muscle,  via une puce", "En calculant le risque de claquage musculaire", "En étudiant le magnétisme dans le muscle"], 
			[1, 4])),

	new Question(["Combien de branches possède une étoile de mer ?", "En quoi les sciences du numérique peuvent-elles aider les biologistes sur ce sujet ?"],
		question.SANS_IMAGE,
		question.type.DUO, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SANTE, 	
		"Les symétries observées dans le vivant sont très différentes de celles des cristaux par exemple qui, elles, découlent de leur organisation régulière à l'échelle atomique. On montre qu'un réseau cristallin simple ne peut présenter que des symétries d'ordre 2, 3, 4 ou 6, mais jamais une symétrie d'ordre 5. En revanche, la symétrie d'ordre 5 est présente dans le vivant, par exemple chez les étoiles de mer et les oursins. De la même façon, il existe beaucoup de fleurs à cinq pétales (par exemple le bouton d'or ou la mauve), parfois même avec de la variabilité : par exemple le camélia, qui peut avoir de cinq à neuf pétales. Comment ces formes et symétries apparaissent-elles ?  Un modèle général de formation de motifs a été proposé par le mathématicien et père de l'ordinateur Alan Turing, en 1952. Le modèle est utilisé pour expliquer certaines formes observées dans le vivant : motifs sur le pelage ou la peau de certains animaux (guépard, zèbre, poisson-ange), positionnement des bourgeons de plumes chez le poulet, organisation en rosettes des feuilles le long de la tige de certaines plantes.",
		"https://interstices.info/jcms/int_69853/symetries-et-morphogenese",
		new Reponse(reponse.type.CM, 
			[5, 8, 10, "Pour comprendre l’origine des différentes symétries dans le vivant (pelages, pattes, branches, couches)", "Pour calculer le risque d’extinction des étoiles de mer", "Pour calculer le nombre de ventouses sur chaque branche de l’étoile de mer"], 
			2000)),

	new Question("Intitulé de la question",
		question.SANS_IMAGE,
		question.type.TYPE_DE_LA_QUESTION, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.CATEGORIE_QUESTION, 	
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["réponse 1", "réponse 2", "réponse 3"], 
			2000)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Que représente cette image ?",
		question.SANS_IMAGE,
		question.type.IMAGE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SANTE, 	
		"Simulation haptique de chirurgie ophtalmologique : exercice d'opération de la cataracte.",
		"http://phototheque.inria.fr/phototheque/media/6955",
		new Reponse(reponse.type.CM, 
			["Réglage d’un œil de robot", "Un outil de peinture numérique", "Un simulateur d'opération de la cataracte"], 
			3)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Que représente cette image?",
		question.SANS_IMAGE,
		question.type.IMAGE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SANTE, 	
		"Visualisation de la pression sur la paroi d'un anévrisme sacculaire cérébral.",
		"http://phototheque.inria.fr/phototheque/media/260",
		new Reponse(reponse.type.CM, 
			["La modélisation de l’écoulement dans un anévrisme cérébral", "La modélisation de tuyaux de chauffage", "La modélisation des racines d’un bananier"], 
			1)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Que représente cette image ?",
		question.SANS_IMAGE,
		question.type.IMAGE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SANTE, 	
		"L'équipe BANG a développé un modèle mathématique de la régénération du foie après destruction des tissus provoquée par une injection toxique.\nModèle mathématique de la régénération du foie après destruction des tissus provoquée par une injection toxique.",
		"http://phototheque.inria.fr/phototheque/media/21786",
		new Reponse(reponse.type.CM, 
			["La modélisation d'une molécule de chocolat sur ordinateur", "Une carte virtuelle des températures", "Une simulation de la régénération du foie"], 
			3)),

	new Question("Il est un des pères fondateurs de l’informatique en comprenant ce qu'est l'intelligence mécanique. Il a contribué à sauver des milliers de vies humaines en automatisant le décryptage des codes secrets des nazis.",
		question.SANS_IMAGE,
		question.type.REBUS, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.HISTOIRE, 	
		question.SANS_COMMENTAIRE,
		"https://fr.wikipedia.org/wiki/Alan_Turing",
		new Reponse(reponse.type.ENTREE, 
			reponse.SANS_REPONSE, 
			"Alan Turing")),

	new Question("Elle était informaticienne, vice-amiral de la marine, elle a démocratisé le mot « débugger » en informatique et est co-auteure du mécanisme permettant de traduire un langage informatique en langage machine.",
		question.SANS_IMAGE,
		question.type.REBUS, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.HISTOIRE, 	
		question.SANS_COMMENTAIRE,
		"https://fr.wikipedia.org/wiki/Grace_Hopper",
		new Reponse(reponse.type.CM, 
			reponse.SANS_REPONSE, 
			"Grace Hopper")),

	new Question("De quand datent les premiers algorithmes ?",
		question.SANS_IMAGE,
		question.type.JUSTE_PRIX, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.HISTOIRE, 	
		"Les premiers algorithmes dont on a retrouvé des descriptions datent des Babyloniens, au IIIe millénaire av. J.-C. Ils décrivent des méthodes de calcul et des résolutions d'équations à l'aide d'exemples. Un algorithme célèbre est celui qui se trouve dans le livre 7 des Éléments d'Euclide, et appelé algorithme d'Euclide. (texte coupé)",
		"https://fr.wikipedia.org/wiki/Algorithmique#HISTOIRE",
		new Reponse(reponse.type.ENTREE, 
			reponse.SANS_REPONSE, 
			-3000)),

	new Question("En quelle année a été inventé le disque dur ?",
		question.SANS_IMAGE,
		question.type.JUSTE_PRIX, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.TECHNOLOGIE, 	
		"L’IBM 350, le premier disque dur, utilisait 50 plateaux (disques) d’un diamètre de 24 pouces (environ 60 cm) en métal, tournant à 1 200 tr/min, avec 100 pistes par face. Deux têtes de lecture/écriture pouvaient se déplacer d’un plateau à un autre en moins d’une seconde. Sa capacité en données était d’environ 5 Mo et le débit de 8,8 ko/s ; son prix était de 50 000 $ US. Ce géant pesait plus d’une tonne et sa taille était équivalente à deux grands réfrigérateurs.",
		"https://fr.wikipedia.org/wiki/IBM_RAMAC_305",
		new Reponse(reponse.type.ENTREE, 
			reponse.SANS_REPONSE, 
			1956)),

	new Question("Écrivez des noms de sites, objets ou documents qui contiennent certaines de vos données personnelles",
		question.SANS_IMAGE,
		question.type.BACCALAUREAT, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SOCIETE, 	
		"Compte Facebook, compte Google, ma carte bleue, mon compte bancaire, ma carte vitale, les voyages en train/avion, les nuits à l'hôtel, mon abonnement à l'électricité, les abonnements nominatifs (bibliothèque, piscine), mon téléphone mobile, mon abonnement à Internet, les emails, les impôts...",
		question.SANS_SOURCE,
		new Reponse(reponse.type.OKKO, 
			reponse.SANS_REPONSE, 
			reponse.SANS_BONNE_REPONSE)),

	new Question("Tout devrait-il être gratuit sur Internet ?",
		question.SANS_IMAGE,
		question.type.DEBAT, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SOCIETE, 	
		"Si tout est gratuit qui paye les infrastructures, les salaires ? Quelqu'un doit payer en bout de chaîne, et donc nécessité d'un modèle économique basé sur des partenariats, de la publicité ou autre. De plus la gratuité ne concerne que les services. On ne peut pas donner les marchandises. D'ailleurs, paradoxalement, les Français veulent un Web entièrement gratuit mais 72 % des internautes français sont des e-acheteurs (produits multimédias, nourriture, vêtements...). Cela pose en fait la question de ce qui a de la valeur, ou non, aux yeux des internautes.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.OKKO, 
			reponse.SANS_REPONSE, 
			reponse.SANS_BONNE_REPONSE)),

	new Question("Comment un site gratuit fait-il pour vivre ?",
		question.SANS_IMAGE,
		question.type.DEBAT, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SOCIETE, 	
		"Si tout est gratuit qui paye les infrastructures, les salaires ? Quelqu'un doit payer en bout de chaîne, et donc nécessité d'un modèle économique basé sur des partenariats, de la publicité ou autre. De plus la gratuité ne concerne que les services. On ne peut pas donner les marchandises. D'ailleurs, paradoxalement, les Français veulent un Web entièrement gratuit mais 72 % des internautes français sont des e-acheteurs (produits multimédias, nourriture, vêtements...). Cela pose en fait la question de ce qui a de la valeur, ou non, aux yeux des internautes.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.OKKO, 
			reponse.SANS_REPONSE, 
			reponse.SANS_BONNE_REPONSE)),

	new Question("Si je dépose un grain de riz sur la première case d'un échiquier, puis deux grains sur la deuxième case, puis quatre grains sur la troisième case, etc. en doublant à chaque fois. Combien de grains de riz ai-je déposés en tout, arrivé à la 64e case ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.FONDAMENTAUX, 	
		"Il y aura 1+2+2^2+2^3+...+2^63 grains de riz. Cela fait plus de 18 milliards de milliards. Quel est le rapport avec l'informatique ? La complexité. Faire calculer le plus court chemin par un GPS, prévoir les phénomènes météorologiques ou encore l'évolution de l'Univers, tous ces calculs peuvent croître exponentiellement avec le nombre de paramètres, de particules ou d'embranchements. Des algorithmes informatiques astucieux doivent donc être mis en place pour éviter des temps de calcul faramineux.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Plus de 18 milliards de milliards de grains, soit 1000 fois la production mondiale annuelle", "2048 grains de riz", "Environ 30 000 grains de riz, soit l'équivalent d'un sachet d'un kilo"], 
			1)),

	/*new Question("Parmi ces deux définitions, laquelle se rapporte à modélisation et laquelle se rapporte à simulation ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.FONDAMENTAUX, 	
		"En modélisant, on construit un modèle qui sert de base à des simulations futures. Par exemple, on peut modéliser la façon dont une bombe atomique explose et faire par la suite des tirs d'essai nucléaires, simulés sur ordinateur. C'est ce que l'on fait aujourd'hui, puisque les tirs d'essais nucléaires sont interdits.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Déterminer les équations régissant un phénomène à partir des mesures réelles. \nPar exemple les ouragans, ou la façon dont une bombe explose", "Reproduire de façon virtuelle, sur un ordinateur, un phénomène réel, à partir d'équations connues"], 
			modélisation 1 simulation 2)),*/

	/*new Question("Parmi ces deux définitions, laquelle se rapporte à statistiques et laquelle se rapporte à probabilités ? ",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.FONDAMENTAUX, 	
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Je suis l'activité qui consiste à recueillir, traiter et interpréter un ensemble de données réelles",
       "Je suis la prévision mathématique des phénomènes aléatoires"], 
			"1/ statistiques et 2/ probabilités")),*/

	new Question("Cherchez l’intrus : C++, PHP, HTML, JavaScript, Firefox",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.FONDAMENTAUX, 	
		"Firefox est un logiciel, les autres sont des langages informatiques.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.ENTREE, 
			reponse.SANS_REPONSE, 
			"Firefox")),

	new Question("Lequel de ces termes n’est pas un programme ? Éliminez l’intrus.",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.FONDAMENTAUX, 	
		"Les documents OpenOffice ou Word n'exécutent pas de suite d'opérations. Ils stockent juste des données. On peut cependant émettre l'exception des MACROs qui sont des programmes pouvant être créés dans un document Word pour que celui-ci effectue des opérations automatiques sur lui-même.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Un jeu vidéo", "Un navigateur comme Firefox ou Internet Explorer ", "Un document OpenOffice ou Word"], 
			3)),

	new Question("Que sont les serious games ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SOCIETE, 	
		question.SANS_COMMENTAIRE,
		"https://fr.wikipedia.org/wiki/Jeu_s%C3%A9rieux",
		new Reponse(reponse.type.CM, 
			["Des logiciels ressemblant à des jeux mais traitant de sujets éducatifs", "Des jeux pour les joueurs les plus avertis", "Des jeux utilisés par les armées pour simuler une guerre mondiale"], 
			1)),

	new Question("Qu'est-ce que la CNIL ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SOCIETE, 	
		"La Commission Nationale Informatique et Libertés. La CNIL est chargée de veiller à ce que l’informatique soit au service du citoyen et qu’elle ne porte atteinte ni à l’identité humaine, ni aux droits de l’homme, ni à la vie privée, ni aux libertés individuelles ou publiques.",
		"http://www.cnil.fr/linstitution/qui-sommes-nous/",
		new Reponse(reponse.type.ENTREE, 
			reponse.SANS_REPONSE, 
			"Commission Nationale Informatique et Libertés")),

	new Question("Va-t-on mettre des puces qui communiquent à distance (RFID) dans des stylos-billes ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.TECHNOLOGIE, 	
		"Les radio-étiquettes sont de petits objets, tels que des étiquettes autoadhésives, qui peuvent être collés ou incorporés dans des objets ou produits et même implantés dans des organismes vivants (animaux, corps humain). Les radio-étiquettes comprennent une antenne associée à une puce électronique qui leur permet de recevoir et de répondre aux requêtes radio émises depuis l’émetteur-récepteur.",
		"http://fr.wikipedia.org/wiki/Radio-identification",
		new Reponse(reponse.type.CM, 
			["Non : le rayonnement lié à la multiplication des calculs au niveau des processeurs serait dangereux pour la santé\nNon : le rayonnement des processeurs serait dangereux pour la santé", "Oui : cela permettra au stylo d'écrire de manière autonome", "Oui : cela permettra de retrouver l'objet lorsqu'il est perdu"], 
			3)),

	new Question("Qu’est-ce que la médaille Fields ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SOCIETE, 	
		"La médaille Fields est l’une des plus prestigieuses récompenses pour la reconnaissance de travaux en mathématiques, souvent comparée au prix Nobel. Elle est attribuée tous les quatre ans au cours du congrès international des mathématiques à quatre mathématiciens devant avoir moins de 40 ans.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Une des plus prestigieuses récompenses dans le domaine des mathématiques", "Une prestigieuse récompense dans le domaine de l’informatique"], 
			1)),

	new Question("Qu’est-ce que le prix Turing ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SOCIETE, 	
		"Le prix Turing est attribué tous les ans depuis 1966 à une personne sélectionnée pour sa contribution de nature technique faite à la communauté informatique. Les contributions doivent être d’une importance technique majeure et durable dans le domaine informatique.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Une des plus prestigieuses récompenses dans le domaine des mathématiques", "Une prestigieuse récompense dans le domaine de l’informatique"], 
			2)),

	new Question("Mon lave-linge est \"programmable\", car il est doté d'un processeur. Que peut-il calculer d'autre ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.FONDAMENTAUX, 	
		"En effet dès qu'il exécute les instructions de base des algorithmes, il peut exécuter tous les algorithmes du monde : séquence, test, variable, boucle. Il exécute une séquence d'opérations, fait des tests pour vérifier l'absence d'anomalies, travaille avec comme variable la température de l'eau et boucle tant que l'essorage n’est pas fini.\nEn effet dès qu'un processeur exécute les instructions de base des algorithmes, il peut exécuter tous les algorithmes du monde : séquence, test, variable, boucle. Il exécute une séquence d'opérations, fait des tests pour vérifier l'absence d'anomalies, travaille avec comme variable la température de l'eau et boucle tant que l'essorage n’est pas fini.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Trouver le plus court chemin entre Glasgow et Londres", "Faire le pilote automatique d'un avion", "Trouver les 100 premières décimales du nombre pi", "Aucune de ces réponses", "Toutes ces réponses"], 
			5)),

	new Question(["Comment s’appelle l’immense courant marin qui part des États-Unis et réchauffe l'Europe ?", "Pourquoi modéliser et simuler les courants marins sur ordinateur ?"],
		question.SANS_IMAGE,
		question.type.DUO, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.ENVIRONNEMENT, 	
		"Les courants à grande échelle, parmi lesquels figure le célèbre Gulf Stream, jouent un rôle primordial dans la dynamique des océans, et bien entendu dans l’équilibre thermodynamique de notre planète. Il est donc essentiel de pouvoir les comprendre afin d’anticiper d’éventuels déséquilibres qui pourraient advenir, par exemple, dans le cadre du réchauffement climatique.",
		"https://interstices.info/jcms/int_70245/comprendre-la-circulation-oceanique?hlText=stream",
		new Reponse(reponse.type.CM, 
			["Le Gulf Stream", "Le courant sud équatorial", "Le courant nord pacifique", "Pour les dévier afin de préserver la faune aquatique", "Pour anticiper d'éventuels déséquilibres", "Pour en exploiter l'abondante énergie"], 
			[2, 5])),

	new Question(["Qu’est-ce que la biomasse ?", "Quel type de biomasse étudie-t-on sur ordinateur ?"],
		question.SANS_IMAGE,
		question.type.DUO, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.ENVIRONNEMENT, 	
		"La modélisation, la simulation et l'optimisation mathématiques fournissent des outils décisifs pour mieux comprendre et optimiser la production de biomasse de microalgues riches en huile. Ces recherches pourraient déboucher d'ici une dizaine d'années sur des productions industrielles de ce biocarburant de troisième génération. (texte coupé)",
		"https://interstices.info/jcms/c_24036/projet-shamash-production-de-biocarburants-lipidiques-par-des-microalgues?hlText=biomasse",
		new Reponse(reponse.type.CM, 
			["C'est le poids que fait une personne si on ne compte pas son squelette", "Ce sont les matières d'origine végétale ou animale pouvant devenir source d'énergie", "C'est l'ensemble des animaux vivants sur un territoire donné", "Des animaux, pour mieux gérer un parc naturel", "Des muscles, pour concevoir des plats diététiques de nouvelle génération", "Des algues, pour développer un nouveau carburant"], 
			[2, 6])),

	new Question(["Les étoiles comme notre Soleil sont constituées…", "Pour quelle raison simule-t-on cette substance sur ordinateur ?"],
		question.SANS_IMAGE,
		question.type.DUO, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.ENVIRONNEMENT, 	
		"Le réacteur ITER, en construction vers Bordeaux, vise à reproduire sur terre la réaction qui a lieu au cœur des étoiles. On vise un jour de pouvoir produire ainsi de l'électricité de façon beaucoup plus écologique que dans un réacteur nucléaire à fission, ceux existant aujourd'hui. Dans le réacteur ITER, un plasma d'hydrogène est comprimé par de gigantesques aimants, avec une telle force que cela amorcera des réactions de fusion, comme au sein d'une étoile.",
		"https://interstices.info/jcms/c_5818/turbulence-piegee-sur-image",
		new Reponse(reponse.type.CM, 
			["De plasma", "De lave", "De feu", "Pour construire une centrale électrique fonctionnant comme une étoile", "Pour améliorer les crèmes solaires et mieux se protéger du Soleil", "Pour découvrir quel mécanisme mystérieux se cache derrière la lumière des étoiles"], 
			[1, 4])),

	new Question(["Quel est le plus grand nombre connu de fourmis habitant une fourmilière ?", "Quel est l'intérêt de programmer un ensemble de processeurs comme une société de fourmis ?"],
		question.SANS_IMAGE,
		question.type.DUO, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.ENVIRONNEMENT, 	
		"Les insectes, individuellement très limités, sont capables, collectivement, de produire des réponses complexes. On s'inspire de ce phénomène pour concevoir des systèmes dotés d'intelligence artificielle.",
		"https://interstices.info/jcms/c_7083/lintelligence-en-essaim-ou-comment-faire-complexe-avec-du-simple",
		new Reponse(reponse.type.CM, 
			["200 millions de fourmis, soit 3 fois la population française", "500 000 fourmis", "1000 fourmis", "Chaque processeur a une tâche simple mais collectivement ils peuvent résoudre des problèmes complexes", "Les processeurs peuvent ainsi se déplacer dans l’ordinateur et avoir des tâches différentes", "Les processeurs peuvent apprendre et se multiplier"], 
			[1, 4])),

	new Question("Qu'est ce que c'est ?",
		question.IMAGE,
		question.type.TYPE_DE_LA_QUESTION, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.FONDAMENTAUX, 	
		"L'attracteur de Lorenz, baptisé d'après son découvreur, est une figure mathématique que l'on obtient lorsque l'on veut prédire des systèmes où de nombreux corps sont en interaction, comme la météorologie. Cet objet mathématique montre qu'on peut, en météo par exemple, avoir des phénomènes cycliques tout en ayant des changements abrupts et en apparence aléatoires. Cette figure fait partie de la théorie du Chaos.",
		"https://fr.wikipedia.org/wiki/Attracteur_de_Lorenz",
		new Reponse(reponse.type.CM, 
			["Le trajet lumineux de phares dans la nuit", "Une figure issue de la théorie du chaos représentant l'évolution du climat", "La simulation de courants marins en 3 dimensions"], 
			2)),

	new Question("À qui appartiennent nos données Facebook après notre mort ?",
		question.SANS_IMAGE,
		question.type.DEBAT, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SOCIETE, 	
		"Concrètement, 11% des personnes qui meurent aujourd’hui ont un compte Facebook , et cette part augmentera dans les années à venir. En 2011, 1 780 000 de ses utilisateurs sont décédés. Sept internautes sur dix utilisent au moins un réseau social, la question des données après la mort a donc toute son importance. Les entreprises du Web ont une approche variée de la transmission de ces données : Google et Hotmail envoient vos mails et votre liste de contacts à votre parent le plus proche, sur demande. Twitter transmet à la personne la plus proche une copie de l’ensemble des tweets envoyés publiquement. De manière générale, lorsque vous stockez des données sur des serveurs distants (cloud computing) et que vous mourrez, ce sont les fournisseurs des services qui récupèrent la propriété de vos données.",
		"http://www.indexwebmarketing.com/facebook-apres-la-mort/",
		new Reponse(reponse.type.OKKO, 
			reponse.SANS_REPONSE, 
			reponse.SANS_BONNE_REPONSE)),

	new Question("Est-il possible de rester anonyme sur Internet ?",
		question.SANS_IMAGE,
		question.type.DEBAT, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SOCIETE, 	
		"Il y a l'anonymat à un instant donné, qui peut être assuré grâce à des outils (proxy…) et l'anonymat dans l'absolu. Nous laissons nombre de traces numériques et d'informations personnelles sur la toile. De plus les fournisseurs d'accès sont tenus de garder une mémoire des activités d'un internaute en cas de besoin pour les autorités. En pratique, l'anonymat total sur Internet n'existe pas, on ne peut que rendre plus difficile l'identification.",
		"http://fr.wikipedia.org/wiki/Trace_num%C3%A9rique",
		new Reponse(reponse.type.OKKO, 
			reponse.SANS_REPONSE, 
			reponse.SANS_BONNE_REPONSE)),

	new Question("Si vous créiez des contenus (vidéos, images, programmes …), les rendriez-vous Open source ou sous une License de diffusion libre de type creative commons ?",
		question.SANS_IMAGE,
		question.type.DEBAT, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SOCIETE, 	
		"La licence creative commons protège  l'usage que peuvent faire les autres de mon œuvre, par exemple, toujours me citer quand ils l'utilisent, ou bien ne jamais la modifier, ou bien ne pas la commercialiser. En revanche, je peux Ce qui n'empêche pas de demander des dons ou vendre d'autres produits par l'intermédiaire de celui-ci. Pour l'Open source, cela peut permettre de trouver une large aide extérieure et accélérer les développements. De la même façon, l'Open source peut servir de tremplin pour vendre d'autres prestations aux professionnels par exemple. Le tout gratuit n'est cependant pas forcément une vraie solution. Dans certains cas, il faut savoir rentrer dans une logique commerciale.\nIl manque une négation apès le \"En revanche\" ?",
		"http://fr.wikipedia.org/wiki/Creative_Commons",
		new Reponse(reponse.type.OKKO, 
			reponse.SANS_REPONSE, 
			reponse.SANS_BONNE_REPONSE)),

	new Question("La loi de Moore nous dit que la puissance des machines double tous les 18 mois environ. Pensez-vous que cela va durer ?",
		question.SANS_IMAGE,
		question.type.DEBAT, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.TECHNOLOGIE, 	
		"D'une part, on peut dire que la technologie va arriver à saturation. La taille et la densité des microprocesseurs vont se heurter à des limites physiques. Et si le progrès ralentit, le public renouvellera moins souvent son ordinateur, ce qui créera un phénomène de tassement économique en boucle. Par ailleurs, on peut s'attendre à un changement de paradigme : la technologie peut basculer vers un tout nouveau champ d'application, comme les ordinateurs quantiques ou biologiques.",
		"http://fr.wikipedia.org/wiki/Loi_de_Moore",
		new Reponse(reponse.type.OKKO, 
			reponse.SANS_REPONSE, 
			reponse.SANS_BONNE_REPONSE))
],
[
	new Question("Qu'est-ce qu'une table de routage ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.TECHNOLOGIE, 	
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["C'est une information qui, à la façon d'une carte, permet de trouver un destinataire dans un réseau", "C'est un ensemble de routeurs : des ordinateurs chargés de distribuer l'information dans un réseau", "C'est un algorithme qui permet de compresser l'information dans un réseau"], 
			1)),

	new Question("À quoi cela sert-il de simuler la production et la consommation sur le réseau électrique ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.ENVIRONNEMENT, 	
		"Les réseaux de distribution électrique subissent des variations à cause de pique ou creux de consommation, ou à cause de pannes ou phénomènes météos. Simuler le comportement de ces réseaux face aux variations permet de mieux anticiper les problèmes et d'optimiser les réseaux futurs.",
		"http://www.techniques-ingenieur.fr/base-documentaire/energies-th4/reseaux-electriques-de-transport-et-de-repartition-42263210/outils-de-simulation-dynamique-des-reseaux-electriques-d4120/",
		new Reponse(reponse.type.CM, 
			["À réaliser des économies d'énergies", "À contrôler les fraudes", "À anticiper des accidents"], 
			1)),

	new Question("Que gagne-t-on à utiliser une reconstruction 3D plutôt qu'une photo 2D pour étudier un objet ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Rien, la preuve : on reconnait très bien un visage avec un seul œil ! Donc en 2D et non en 3D.", "Il est plus simple d'utiliser un modèle 3D d'un objet que sa projection 2D sur une image pour le tourner ou le déplacer numériquement", "Il est en fait impossible de faire du traitement d'image sur une photo 2D : seule la méthode 3D marche"], 
			2)),

	new Question(["Combien de tonnes de déchets radioactifs à longue durée de vie la France produit-elle par an ?", "Que simule-t-on sur ordinateur à propos de ces déchets ?"],
		question.SANS_IMAGE,
		question.type.DUO, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.ENVIRONNEMENT, 	
		"Les numériciens Inria collaborent avec des géologues et des hydrogéologues pour simuler le devenir des déchets nucléaires enfouis dans le sol et évaluer la fiabilité d'un futur site de stockage sur des milliers voire des centaines de milliers d'années.",
		"http://www.irsn.fr/FR/connaissances/Installations_nucleaires/dechets-radioactifs/gestion-dechets-radioactifs/Pages/1-Que_savoir_sur_les_dechets_radioactifs.aspx",
		new Reponse(reponse.type.CM, 
			["1000 tonnes", "100 tonnes", "10 tonnes", "Leur impact sur la santé", "Leur durée de vie", "Leur comportement s'ils sont enfouis dans le sol"], 
			[1, 6])),

	new Question(["Combien de kilomètres de ligne à haute tension y a-t-il en France ?", "En quoi les sciences du numérique aident-elles à la gestion de l’énergie ?"],
		question.SANS_IMAGE,
		question.type.DUO, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.ENVIRONNEMENT, 	
		"Les réseaux de distribution électrique intelligents sont appelés smartgrids, qui signifie \"grilles intelligentes\".",
		"http://www.rslnmag.fr/post/2012/04/12/Quest-ce-quun-171;-smart-grid-187;-Zoom-sur-lenergie-intelligente-de-demain.aspx",
		new Reponse(reponse.type.CM, 
			["100 000 kilomètres, soit 100 fois la taille de la France, du Nord au Sud", "1000 kilomètres, soit la taille de la France", "100 kilomètres, soit un dixième de la taille de la France.", "En simulant les besoins et en optimisant le réseau de distribution électrique en conséquence", "En estimant la consommation annuelle des Français", "En calculant le risque de panne électrique"], 
			[1, 4])),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// La réponse est très difficile à donner, le joueur pourrait penser à l'infini, mais je le vois mal rentrer "Une infinité".
/// Je verrai par conséquent plus cette question comme à choix multiple. Qu'en pensez-vous ?
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/


	/*new Question("Combien de pas me faut-il pour atteindre un mur si je franchis à chaque pas la moitié de la distance qui me sépare du mur en question",
		question.SANS_IMAGE,
		question.type.CASSE_TETE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		"Mais en pratique, comme votre pied a une taille finie, il arrivera un moment où vous ne pourrez pas couper la distance en deux. En mathématique pure, par contre, ce nombre est bien infini.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.ENTREE, 
			"Une infinité !", 
			reponse.SANS_BONNE_REPONSE)),*/

	new Question("Les bits peuvent prendre deux valeurs, 0 ou 1. Dans une séquence de 4 bits, le bit le plus à gauche doit être multiplié par 8, le suivant par 4, le suivant par 2 et le dernier par 1. Quel nombre représente la séquence 1010 ?",
		question.SANS_IMAGE,
		question.type.CASSE_TETE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["10", "20", "1010"], 
			1)),

	new Question("L'opérateur XOR permet de tester, parmi deux conditions, si l'une OU l'autre est vraie, mais il faut en plus qu'une et une seule soit vraie. Lequel de ces tests est toujours vrai ?",
		question.SANS_IMAGE,
		question.type.CASSE_TETE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Il fait jour XOR il fait nuit", "Je suis breton XOR je suis un homme", "C'est une voiture XOR c'est de couleur rouge"], 
			1)),

	new Question("Pour coder une image de 100 x 100 pixels, chaque pixel a besoin de trois octets, un pour coder le niveau de rouge, un pour le vert et un pour le bleu. Quelle est la taille  en octet de toute l'image ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		"Cela fait 100 x 100 pixels x 3 octets pour les trois couleurs de base de chaque pixel = 3 x 100 x 100 = 30 000.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["30 000 octets", "10 000 octets", "3 000 octets"], 
			1)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// Je ne sais pas comment traiter cette question. Ce n'est pas un choix multiple, il faudrait reformuler la question et/ou les réponses.
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/


	/*new Question("Quand je joue à pile ou face, lequel de ces deux événements est aléatoire et lequel est prédictible  ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Le côté où elle va tomber en fonction du geste de ma main et de la taille, forme et poids de la pièce.",
       "Le nombre de piles et de faces qui vont sortir sur 100 000 lancés."], 
			"1/ Aléatoire\n2/ Prédictible")),*/

	new Question("Quel est le rapport entre l'informatique et le métier à tisser Jacquard ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		"On peut considérer que le métier à tisser de Jacquard est une des origines de l'informatique dans le sens où il est \"programmable\". Le métier va \"lire\" des \"instructions\" sur les cartes et, en fonction de ce qu'il lit, va changer la configuration des navettes (qui font passer les fils dans un ordre plutôt qu'un autre) et dessiner un motif qui correspond donc à ce qui est inscrit sur les cartes. Quand on change de carte, on change de motif. Mais on peut trouver d'autres dispositifs \"reconfigurables\" de la sorte qui sont bien plus anciens, par exemple la presse d'imprimerie de Gutenberg (on change les caractères sur la presse et ça change le texte qui est imprimé... C'est un dispositif \"reconfigurable\".",
		"https://fr.wikipedia.org/wiki/M%C3%A9tier_Jacquard",
		new Reponse(reponse.type.CM, 
			["Un métier à tisser Jacquard fonctionne avec des cartes perforées, qui sont comme un programme informatique", "Joseph Marie Jacquard est l'inventeur du premier algorithme", "Le métier Jacquard  a inspiré l'invention du disque dur"], 
			1)),

	new Question("En quoi le jeu du Sudoku est-il lié aux recherches en informatique ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		"Il n’y a pas d’informatique dans le Sudoku mais sa nature combinatoire (le résultat s’obtient en fonction de combinaisons possibles) est similaire aux recherches en  informatique. Par exemple, lorsque l’on doit définir un emploi du temps pour des équipes d’infirmiers, planifier un chantier, etc., il existe un grand nombre de combinaisons possibles. Il s’agit de trouver la meilleure solution selon un certain critère : le coût, le temps, etc. En informatique, cela correspond à la programmation par contrainte. Il s’agit d’écrire, les unes après les autres, les différentes contraintes que l’on souhaite voir respectées et l’ordinateur se débrouille tout seul !",
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Le nom du jeu vient du nom du Professeur Sudoku qui a été le 1er mathématicien sino-japonais à développer un laboratoire de sciences informatiques sur les iles Senkaku / Diaoyutai.", "Les informaticiens ont trouvé un algorithme pour résoudre toutes les grilles de Sudoku imaginables, du coup le jeu n'a plus aucun intérêt", "Les informaticiens savent qu'il est prouvé qu'on ne peut pas résoudre automatiquement en temps raisonnable n'importe quelle grille de Sudoku, mais ont une méthode pour résoudre les plus courantes"], 
			3)),

	new Question("Parmi ces sujets, lequel n'a PAS de lien avec  des simulations numériques ?",
		question.SANS_IMAGE,
		question.type.DIRECTE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		question.SANS_COMMENTAIRE,
		"https://interstices.info/jcms/c_19147/levolution-des-galaxies",
		new Reponse(reponse.type.CM, 
			["D'où vient la forme des galaxies spirales", "L'évolution de notre Univers, depuis le Big Bang jusqu'à aujourd'hui", "La découverte des satellites de saturne"], 
			3)),

	new Question(["Combien d’octets fait un fichier qui fait 1 méga (Mo) ?", "Combien de bits par seconde fait 1 Mbps ?"],
		question.SANS_IMAGE,
		question.type.DUO, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["1 048 576 octets", "1 024 octets", "1 000 octets", "1 000 000 bits par seconde", "10 000 bits par seconde", "1 000 bits par seconde"], 
			[1, 4])),

	new Question(["Qu'est-ce qu’un réseau \"ad-hoc\" ?", "Dans quel cas un réseau \"ad-hoc\" est-il particulièrement adapté ?"],
		question.SANS_IMAGE,
		question.type.DUO, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.ENVIRONNEMENT, 	
		"On peut définir un réseau ad hoc mobile comme étant un système autonome dynamique composé de noeuds mobiles interconnectés via des connexions sans fil (typiquement en WiFi) sans l’utilisation d’une infrastructure fixe de type point d'accès par exemple et sans administration centralisée. L'absence de l'infrastructure ou d'un réseau filaire composé des stations de base oblige les unités mobiles (UM) à se comporter comme des routeurs qui participent à la découverte et la maintenance des chemins pour les autres hôtes du réseau. La communication des nœuds du réseau se fait directement, à la manière d'un réseau peer-to-peer. Les noeuds sont donc libres de se déplacer aléatoirement et s’organisent arbitrairement.",
		"http://www.generation-nt.com/dumbo-reseau-sans-fil-pour-catastrophes-naturelles-actualite-19777.html",
		new Reponse(reponse.type.CM, 
			["Un réseau où tous les utilisateurs peuvent se connecter de façon non sécurisée", "Un réseau interne et privé, dans un domicile ou une entreprise", "Un réseau constitué par des appareils mobiles interconnectés entre eux, sans infrastructure existante", "Pour le travail collectif sur des documents confidentiels", "Lors d'une catastrophe naturelle, car ce réseau fonctionne même dans un milieu en ruine", "Lorsque l'on veut se protéger efficacement contre le piratage"], 
			[3, 5])),

	new Question(["Qu’est-ce que la théorie de l'Évolution ?", "En s'en inspirant, les informaticiens mettent au point des programmes capables…"],
		question.SANS_IMAGE,
		question.type.DUO, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.ENVIRONNEMENT, 	
		"L'homme ne descend pas du singe, c'est un cousin, car nous avons un ancêtre commun. De façon similaire à la mécanique de l'évolution décrite par Darwin,  les algorithmes évolutionnaires font évoluer un ensemble de solutions, dans le but de trouver les meilleurs résultats. Ils aident principalement à résoudre des problèmes d'optimisation et comme ils résolvent parfois des problèmes pour lesquels aucune autre méthode n'a fonctionné, ils sont souvent perçus comme les algorithmes de la dernière chance.",
		"https://interstices.info/jcms/c_36856/quand-des-algorithmes-sinspirent-de-la-theorie-de-levolution?hlText=darwin",
		new Reponse(reponse.type.CM, 
			["La théorie selon laquelle les espèces actuelles, dont l'Homme, descendent toutes d'une bactérie originelle", "La théorie selon laquelle l'homme descend du singe", "La théorie selon laquelle un événement identique ne peut pas se reproduire deux fois", "d'apprendre par essais- erreurs, comme pour la sélection naturelle", "d'accélérer le traitement des informations", "de se multiplier et de se copier efficacement"], 
			[1, 4])),

	new Question("Bob est plus grand qu'Arnaud, lui plus petit que Maurice. Bob est-il content, selon l'algorithme suivant ?\n\nSI Bob > Maurice ET Maurice > Arnaud\nALORS Bob = content",
		question.SANS_IMAGE,
		question.type.CASSE_TETE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		"Comme la variable Bob n'est pas définie avant le test dans l'algorithme, et que la condition n'est pas remplie, on ne peut pas conclure sur l'état de Bob. Ne pas donner de valeur initiale aux variables est souvent un problème en programmation informatique.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Oui", "Non", "Impossible de répondre avec les informations données"], 
			3)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// Qu'est censé répondre le joueur ? La réponse est bien trop compliquée à entrer. Peut-être la passer en CM ou en OKKO ?
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	/*new Question("Ce programme bogue, il n’arrive jamais au bout, pourquoi ? \n\n problèmes = 100\nbonheur = 0\nTANT QUE (problèmes > 0  ) ALORS  { problèmes = problèmes + 1 }\nLORSQUE FIN DE BOUCLE  bonheur = 1 ; Fin du programme.",
		question.SANS_IMAGE,
		question.type.CASSE_TETE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["La variable \"problèmes\" ne cesse d'augmenter. Or, pour que le programme se termine, il faut qu'elle descende à 0."], 
			1)),*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// Peut-être faire entrer Sushis au joueur au clavier, mais je préfère avoir votre confirmation.
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	/*new Question("Si on suit cet algorithme, que choisit Paul comme plat ? Paul = joyeux\nÉmilie = soucieuse\nSI ( Émilie = soucieuse ET Paul = soucieux ) ALORS  { commande[Paul] = tartare ; commande[Émilie] = sushis }\nDANS LES CAS CONTRAIRES { commande[Paul] = sushis ; commande[Émilie] = tartare }",
		question.SANS_IMAGE,
		question.type.CASSE_TETE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.ENTREE, 
			reponse.SANS_REPONSE, 
			"Sushi")),*/

	new Question("Un voleur fou te demande de lui dire une phrase au choix. Il te prévient que si tu dis une vérité, il te prendra ton portefeuille. Et si c’est un mensonge il prendra ton téléphone. Une des phrases ci-dessous te permet de ne rien perdre, laquelle :",
		question.SANS_IMAGE,
		question.type.CASSE_TETE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		"En disant « tu vas me prendre mon téléphone », on bloque le voleur. Car s’il considère la phrase vraie, selon sa logique, il devrait prendre le portefeuille. Mais la phrase devient alors fausse, et il doit prendre alors le téléphone. Mais s’il le fait, la phrase redevient vraie et il doit alors prendre le portefeuille à la place. Le voleur est coincé dans une boucle, on dit qu’il est dans une situation d’interblocage. Cela peut arriver en informatique, lorsque deux programmes s’attendent l’un et l’autre par exemple.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Je ne veux pas être volé !", "Tu vas me prendre mon téléphone", "Tu vas me prendre mon portefeuille"], 
			2)),

	new Question("Perdu dans un hôpital, tu te retrouves face à deux chemins. Deux fous se trouvent là. L’un dit toujours la vérité, l’autre ment toujours mais tu ne sais pas qui est qui. Une phrase te permet de te faire indiquer le bon chemin à coup sûr, laquelle ?",
		question.SANS_IMAGE,
		question.type.CASSE_TETE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		question.SANS_COMMENTAIRE,
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			["Demander à l’un des fous : si je demandais à ton ami, que me répondrait-il ?", "Demander aux deux fous quel est le bon chemin", "Demander à l'un des fous de t'indiquer le mauvais chemin"], 
			1)),

	new Question("La phase suivante est codée : (16 15) _ (2) _ (13 6) _ (4 16 5 6). Cassez le code et retrouvez sa signification ! Astuce : commencez par essayer de deviner les mots d’une ou deux lettres, peu nombreux en français…",
		question.SANS_IMAGE,
		question.type.CASSE_TETE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.FONDAMENTAUX, 	
		"Le code est juste un décalage de 1 du numéro correspondant à la position de la lettre dans l’alphabet. A, première lettre est codé par 1+1 = 2, O, la 15e est codée par 15+1 = 16, et ainsi de suite.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.CM, 
			reponse.SANS_REPONSE, 
			"On a le code")),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Que représente cette image ?",
		question.SANS_IMAGE,
		question.type.IMAGE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.ENVIRONNEMENT, 	
		"Adaptation de maillage anisotrope autour de cônes de Mach à l'arrière d'un avion supersonique.",
		"http://phototheque.inria.fr/phototheque/media/15442",
		new Reponse(reponse.type.CM, 
			["La simulation de l'écoulement de l'air à l'arrière d'un avion supersonique", "La zone ou le bruit du moteur d'avion est dangereux pour le tympan", "Les ondes radars autour d'un chasseur furtif"], 
			1)),

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// ALERTE : QUESTION IMAGE !
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

	new Question("Qu'est ce que cette image représente ?",
		question.SANS_IMAGE,
		question.type.IMAGE, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.SANTE, 	
		"Une étude publiée dans la revue scientifique américaine \"Current Biologie\" explique comment des scientifiques ont scanné l'activité cérébrale de trois individus, pendant que ceux-ci visionnaient des vidéos. L'activité des flux sanguins dans le cortex visuel des volontaires, soit dans la partie du cerveau qui traite les images, a ensuite été convertie en modèles informatiques. Les modèles informatiques reconstruisant en retour des reproductions floues des images visionnées à partir d'une banque de données.",
		"http://tempsreel.nouvelobs.com/societe/20110927.OBS1183/lire-dans-les-pensees-bientot-possible.html",
		new Reponse(reponse.type.CM, 
			["De la lecture de pensée expérimentale. À droite, la reconstruction de l'image de gauche à partir de l'activité cérébrale d'un patient qui regarde cette image.", "Une modélisation de la façon dont notre cerveau reconnaît les individus", "Un algorithme très puissant de compression d'image pour les futurs réseaux mobiles"], 
			1)),

	new Question("Citez des fonctions d'un système d’exploitation d’ordinateur ou de téléphone",
		question.SANS_IMAGE,
		question.type.BACCALAUREAT, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.TECHNOLOGIE, 	
		"Gérer les fichiers, interfacer avec le matériel, piloter la carte graphique, etc...",
		question.SANS_SOURCE,
		new Reponse(reponse.type.OKKO, 
			reponse.SANS_REPONSE, 
			reponse.SANS_BONNE_REPONSE)),

	new Question("Comment les informaticiens peuvent-ils aider à convaincre de l'urgence de la crise climatique ?",
		question.SANS_IMAGE,
		question.type.DEBAT, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.ENVIRONNEMENT, 	
		"En montrant par la simulation de modèles mathématiques précis les différents scénarios qui peuvent se produire, les sciences du numérique peuvent contribuer à convaincre les décideurs de l'urgence de la crise climatique.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.OKKO, 
			reponse.SANS_REPONSE, 
			reponse.SANS_BONNE_REPONSE)),

	new Question("Les prédictions météo sont-elles fiables ?",
		question.SANS_IMAGE,
		question.type.DEBAT, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.ENVIRONNEMENT, 	
		"Parfois, la météo nous apparaît incertaine. Les prévisions météorologiques se basent sur de nombreux facteurs et données qu'il est parfois difficile de maîtriser. Pourtant, cette science repose sur des recherches et modélisations très avancées de notre climat et la fiabilité a nettement augmenté sur les 20 dernières années, jusqu'à plus de 90% pour une prévision à 3 jours dans l'hémisphère nord pour certains phénomènes.",
		"https://interstices.info/jcms/c_17078/mieux-prevoir-les-phenomenes-meteorologiques?hlText=m%C3%A9t%C3%A9o",
		new Reponse(reponse.type.OKKO, 
			reponse.SANS_REPONSE, 
			reponse.SANS_BONNE_REPONSE)),

	new Question("Que pensez-vous de l'influence de Wikipédia, des cours disponibles en ligne et les exercices corrigés par un logiciel sur le système éducatif ?",
		question.SANS_IMAGE,
		question.type.DEBAT, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.SOCIETE, 	
		"Les correcteurs d'orthographe, les moteurs de recherche, les cours et encyclopédies en ligne modifient progressivement le paysage éducatif. L'information est disponible beaucoup plus facilement, ce qui peut être perçu comme une nuisance pour l'enseignement (les corrigés des questions typiques disponibles immédiatement). En revanche, la disponibilité de l'information ouvre de nouveaux modes d'enseignement : priorité au raisonnement, à la créativité, à l'inventivité.",
		"http://www.epi.asso.fr/revue/articles/a0211a.htm",
		new Reponse(reponse.type.OKKO, 
			reponse.SANS_REPONSE, 
			reponse.SANS_BONNE_REPONSE)),

	new Question("Pensez-vous possible dans un avenir proche qu’un être humain pourra échanger des messages écrits, sur n’importe quel sujet, avec un système informatique, sans qu’il se rende compte qu’il dialogue avec une machine (dotée d'intelligence artificielle) ? Si oui, dans combien d'années ?",
		question.SANS_IMAGE,
		question.type.DEBAT, 
		question.difficulte.PANNE_SYSTEME, 
		question.categorie.SOCIETE, 	
		"La réalité est qu’aujourd’hui, malgré d’immenses progrès dans le domaine de l’intelligence artificielle, on ne sait toujours pas réaliser de programmes possédant une intelligence générale permettant de passer le test ; dit test de Turing, avec succès. Les progrès ont porté sur des capacités spécialisées (jeux d’échecs, traitement de problèmes mathématiques, dialogues en langue naturelle sur des sujets limités, etc.) mais butent sur ce qu’on nomme le « sens commun ».\nDepuis 1990 se déroule un concours annuel, le prix Loebner, qui détermine, sur la base d’une procédure inspirée du test de Turing, le meilleur programme de conversation générale. Aujourd’hui aucun candidat ne s’est révélé très intéressant et il semble qu’il manque quelque chose pour réaliser de bons systèmes informatiques de dialogue réellement susceptibles de tromper un juge.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.OKKO, 
			reponse.SANS_REPONSE, 
			reponse.SANS_BONNE_REPONSE)),

]];