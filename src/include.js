// Liens vers les ressources graphiques
// COULEUR DE FOND 3399B2
var pathImages = "../ressources/images/questions";
var pathImagesQuestions = "../ressources/images/questions";
var pathImagesBonusMalus = "../ressources/images/bonus-malus";

var coefReduc = 3.255;
var timer;
var lockHover = false;
var move;

var reponse = Object.freeze(
{
	type:
	{
		CM : 0,
		ENTREE : 1,
		OKKO : 2
	}
})

var question = Object.freeze(
{
	type:
	{
		DIRECTE : 0,
		DUO : 1,
		IMAGE : 2,
		REBUS : 3,
		CASSE_TETE : 4,
		JUSTE_PRIX : 5,
		MIME : 6,
		BACCALAUREAT : 7,
		DEBAT : 8,
		ENUMERATION : 9,
		EXERCICE : 10
	},
	categorie:
	{
		SANTE : 0,
		ENVIRONNEMENT : 1,
		SOCIETE : 2,
		FONDAMENTAUX : 3,
		HISTOIRE : 4,
		TECHNOLOGIE : 5
	},
	difficulte:
	{
		BUG : 1,
		DEFAILLANCE : 2,
		PANNE_SYSTEME : 3,
	},
	SANS_IMAGE: null,
	SANS_COMMENTAIRE: "",
	SANS_SOURCE: ""
});

var typeQuestionEnum = Object.freeze( // Les différents types de question sous forme d'énumération
{
	DIRECTE : 0,
	DUO : 1,
	IMAGE : 2,
	REBUS : 3,
	CASSE_TETE : 4,
	JUSTE_PRIX : 5,
	MIME : 6,
	BACCALAUREAT : 7,
	DEBAT : 8,
	ENUMERATION : 9,
	EXERCICE : 10
});

var categorieEnum = Object.freeze( // Les différents thèmes sur lesquels portent les questions sous forme d'énumération
{
	SANTE : 0,
	ENVIRONNEMENT : 1,
	SOCIETE : 2,
	FONDAMENTAUX : 3,
	HISTOIRE : 4,
	TECHNOLOGIE : 5
});

var difficulteEnum = Object.freeze( // Les trois difficultés de question et leurs descriptions
{
	BUG : 1,
	DEFAILLANCE : 2,
	PANNE_SYSTEME : 3,
	DIFFICULTE_LIBELLE : ["Bug", "Défaillance", "Panne système"],
	DIFFICULTE_TEXTE : ["Pour les plus jeunes (8-13 ans, 3ème cycle primaire à 4ème)", 
						"Pour les 13-17 ans (4ème à Terminale) et leurs familles (grand public)", 
						"Pour les curieux de sciences ou filières scientifique"]
});

var typeReponseEnum = Object.freeze( // Les trois types de réponses traitables
{
	CM : 0,
	ENTREE : 1,
	OKKO : 2
});

var typeCaseEnum = Object.freeze( // Les différents types de cases du plateau de jeu
{
	DEPART : 0,
	QUESTION : 1,
	BONUS_MALUS : 2,
	MEMORY : 3,
	SORTIE : 4
})

var couleursJoueurs = // Les couleurs disponibles pour les joueurs
[
	{
		col:"#00d00f",
		col2:"#10e01f",
		disp: true
	},
	{
		col:"#000000", // Couleur en hexadécimal
		col2:"#101010",
		disp: true // Disponible : Propriété définissant si la couleur a été prise ou non par un joueur précédent
	},
	{
		col:"#666666",
		col2:"#767676",
		disp: true
	},
	{
		col:"#ee0b00",
		col2:"#fe1b10",
		disp: true
	},	
	{
		col:"#0060ff",
		col2:"#1070ff",
		disp: true
	}

]

var disposition = // Règles de la partie
{
	nbJoueurs : 0, // Le nombre de joueurs
	joueurs : [], // Le tableau des joueurs
	nbTours : 5, // -1 si en mode sortie, nombre de tours choisis sinon
	tourCourant : 0, // Le numéro du tour
	tourJoueur : 0, // L'index du joueur dont c'est le tour
	doitLancerDes : false, // Doit-on attendre que le joueur lance les dés ?
	nbCases : 0, // Le nombre que le joueur a effectué aux dés
	animateur : true,
	equipes : false,
	memory : false,

	movingCube : 0,
	chosenCase : [0, 0],
	erreurAcheminement : false,
	tabMemories : [],

	getCurrentPlayer : function()
	{
		return this.joueurs[this.tourJoueur];
	},

	tooLate : function()
	{
		chronometer.stop();
		chronometer.reset();
		$("#question").dialog({close: null});
		$("#question").dialog("close");
		$("#indication").dialog(
		{
			autoOpen: true,
			modal: true,
			title: "Trop tard !",
			close: null,
			minHeight: 400,
			buttons:
			{
				"Ok" : function()
				{
					$(this).dialog("close");
					nextTurn();
				}
			}

		}).html("<p>Vous avez dépassé le temps imparti !</p><br/>");
	}
};

var chronometer = 
{
	deci : 0,
	sec : 0,
	compte : 0,

	launch : function()
	{
		$("#chrono").dialog(
		{
			autoOpen: true,
			modal: false,
			title: "Chrono",
			close: null,
			minHeight: 200,
			buttons: null,
			position: { my: "left top", at: "left top", of: window }

		}).html("<p>"+chronometer.sec+"."+chronometer.deci+" / 10</p><br/>");
		this.compte=setInterval(function(){ chronometer.chrono(10, 0, disposition.tooLate); },100);
	},

	chrono : function(sec, deci, callback)
	{
		this.deci++;
		if(this.deci > 9)
		{
			this.deci = 0;
			this.sec++;
		}

		$("#chrono").html("<p>"+chronometer.sec+"."+chronometer.deci+" / 10</p><br/>");

		if(this.sec == sec && this.deci == deci)
			callback();
	},

	stop : function()
	{
		clearInterval(this.compte);
		$("#chrono").dialog("close");
	},

	reset : function()
	{
		this.deci = 0;
		this.sec = 0;
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function Reponse(typeReponse, choixReponses, bonneReponse) // Objet réponse, définissant les trois types de réponse possible
{
	this.typeReponse = typeReponse; // De type typeReponseEnum
	this.choixReponses = choixReponses; // Seulement si Choix Multiple
	this.bonneReponse = bonneReponse; // Seulement si non OKKO
}

function Question(intitule, urlImage, typeQuestion, difficulte, categorie, explications, imageExplications, source, reponses) // Objet question, définissant les propriétés des questions
{
	this.intitule = intitule; // Intitulé de la question
	this.numId = 0;
	this.urlImage = urlImage; // S'il y a une image, son url, sinon null
	this.typeQuestion = typeQuestion; // De type typeQuestionEnum
	this.difficulte = difficulte; // De type difficulteEnum
	this.categorie = categorie; // De type categorieEnum
	this.reponses = reponses; // De type Reponse
	this.explications = explications; // Texte d'explication + image le cas échéant
	this.imageExplications = imageExplications;
	this.source = source; // Lien de la source

	this.getReponses = function() {
        return this.reponses.choixReponses;
    }; 

    this.getBonneReponse = function() {
    	if(this.getReponses() != null)
        	return this.getReponses()[(this.reponses.bonneReponse-1)];
        else
        	return this.reponses.bonneReponse;
    }; 

}

function Joueur(pseudo, couleur, difficulte) // Objet joueur, définissant les propriétés d'un joueur/équipe
{
	this.pseudo = pseudo; // Le pseudo du joueur/équipe anonyme
	this.couleur = couleur; // La couleur qu'il aura choisi
	this.difficulte = difficulte; // La difficulté qu'il aura choisi
	this.points = 0; // Le nombre de points marqués par le joueur
	this.position = 0; // L'index de la case sur laquelle se trouve le joueur
	this.movingAlt = 0;
	this.protection = false;
	this.doublePoints = false;
	this.secondeChance = false;
	this.doubleQuestion = false;
	this.spiedOn = false;
	this.chrono = false;
}

var virus =
{
	nbTours : 0,
	joueur : -1,
	dead : true,

	update : function()
	{
		if(!this.checkDead())
		{
			askQuestion();
		}
		
	},

	checkDead : function()
	{
		if(this.nbTours >= disposition.nbJoueurs || this.dead)
		{
			this.dead = true;
			this.joueur = -1;
			return true;
		}
		return false;
	},

	next : function()
	{

		if(!this.checkDead())
		{
			this.joueur--;
			this.nbTours++;

			if(this.joueur < 0)
				this.joueur = disposition.nbJoueurs-1;
		}

		console.log(this.joueur + " + " + this.nbTours);
	},

	revive : function(idJoueur)
	{
		this.dead = false;
		this.nbTours = 0;
		this.joueur = idJoueur;
	}
}

function Case(index, type, voisin, x, y) // Objet case, définissant les propriétés d'une case du plateau de jeu
{

	this.index = index; // Identifiant unique de la case, également sa place dans le tableau du plateau
	this.vert = false; // Si la case est de type typeCaseEnum.QUESTION, représente si la question a déjà été répondue ou non
	this.type = type; // De type typeCaseEnum
	this.memory = 0; // Si la case est de type typeCaseEnum.MEMORY, représente l'indice du symbole memory associé
	this.revealed = 0; // Si la case est de type typeCaseEnum.MEMORY, vrai si la case est découverte, faux sinon
	this.x = x; // Les coordonnées de la case en x
	this.y = y; // Les coordonnées de la case en y
	this.voisins = []; // Le tableau des cases accessibles directement depuis celle-ci
	this.isBroken = false;
	
	if(voisin !== null && voisin !== undefined) // On ajoute le voisin si le paramètre voisin n'est pas null
	{
		this.voisins.push(voisin);
		voisin.addVoisin(this);
	}
		
	this.lit = false; // Si la case est accessible depuis le lancer de dés du joueur
	this.accessed = false; // Si la case a été visitée dans l'algorithme de calcul de déplacement

	this.addVoisin = function(v) // Ajouter un voisin au tableau
	{
		if(v !== null && v !== undefined)
			this.voisins.push(v);
	}

	this.getNearestMemory = function()
	{
		this.getNearestMemoryRecur(-1, 0);

		if(disposition.tabMemories.length == 0)
			return -1;

		var nearestMemory = disposition.tabMemories[0];

		for(var i = 0 ; i < disposition.tabMemories.length ; i++)
		{
			if(nearestMemory.dist > disposition.tabMemories[i].dist)
				nearestMemory = disposition.tabMemories[i];
		}

		disposition.tabMemories = [];

		return nearestMemory.mem;
	}

	this.getNearestMemoryRecur = function(pos, distance)
	{
		var memory = -1;

		console.log(this.index);
		if(this.type == typeCaseEnum.MEMORY && !this.revealed && !this.isBroken)
			return this.index;
		for(var i = 0, c = this.voisins.length ; i < c ; i++)
		{
			if(this.voisins[i].index != pos)
			{
				memory = this.voisins[i].getNearestMemoryRecur(this.index, (distance+1));
				if(memory != -1)
					disposition.tabMemories.push({mem:memory, dist:distance});
			}
		}
		return -1;
	}

	this.light = function(index) // Fonction récursive de calcul de déplacement (index est la distance restante à parcourir)
	{
		if(this.type == typeCaseEnum.DEPART && this.index != disposition.getCurrentPlayer().position)
			return;

		if(this.lit)
			return;

		this.lit = true;

		if(index == 0)
			return;

		index--; // On décrémente l'index de 1 pour les destinations voisines
		for(var i = 0, c = this.voisins.length ; i < c ; i++)
		{
			if(this.type == typeCaseEnum.MEMORY && this.voisins[i].type == typeCaseEnum.MEMORY)
				this.voisins[i].light(index+1);
			else
				this.voisins[i].light(index); // On visite chaque case voisine de celle-ci, avec l'index décrémenté
		}

		/*if(this.accessed) // Si l'on a déjà visité la case, les calculs sont déjà faits, on sort
			return;

		this.accessed = true; // On indique que l'on a visité la case

		if(index == 0 || (this.type == typeCaseEnum.MEMORY && this.revealed == false)) // Si l'index est de 0 on est arrivés, si la case est une MEMORY non retournée, on est arrivés
		{
			this.lit = true; // On allume la case, elle est accessible
			if(index == 0) // On arrête l'algo si l'index est à 0, on ne peut pas aller plus loin
				return;
		}

		index--; // On décrémente l'index de 1 pour les destinations voisines
		for(var i = 0, c = this.voisins.length ; i < c ; i++)
		{
			this.voisins[i].light(index); // On visite chaque case voisine de celle-ci, avec l'index décrémenté
		}*/
	}

	this.cancel = function() // Remettre la case à 0 pour les prochains déplacements
	{
		this.lit = false;
		this.accessed = false;
	}
}

function PlateauJeu() // Objet plateau, définissant les propriétés du plateau, support de jeu
{
	this.NB_CASES_TOTAL = 94; // Nombre total de cases
	this.NB_CASES_MEMORY = 20; // Nombre total de cases MEMORY
	this.NB_CASES_QUESTION = 35; // Nombre total de cases Question
	this.NB_CASES_BM = 33; // Nombre total de cases Bonus/Malus
	this.NB_CASES_DEPART = 5; // Nombre total de cases de départ
	this.NB_ILOTS = 8; // Nombre total de parties de terrain de jeu séparées par des cases MEMORY
	this.CASE_SORTIE = 93; // Index de la case de sortie

	this.cases = []; // Tableau des cases du plateau
	this.departs = [0, 21, 31, 49, 71]; // Indices des cases de départ
	this.memories = [[8, 10], [11, 18, 20], [27, 30], [36, 45, 48], [53, 56, 60], [61, 65, 70], [76, 81], [82, 91]]; // Indices des cases MEMORY, réunies en îlots
	this.departsJoueurs = []; // Tableau des départs des joueurs
	this.departsIlots = [0, 2, 3, 4, 6]; // Indices des îlots de départ

	this.isLighting = false;

	this.disposeMemories = function() // Fonction de placement des symboles sur les cases MEMORY (En travaux)
	{
		var copie = $.extend(true, [], this.memories); // Copie de tableau à vider au fil des paires effectuées
		var memos = [0,1,2,3,4,5,6,7,8,9]; // Index des memories à vider au fil des paires effectuées

		var sortie = Math.floor(Math.random()*copie[1].length); // Choix sur le premier îlot du memory de sortie

		var indexMemo = Math.floor(Math.random()*memos.length);
		var memo = memos[indexMemo]; // Choix du symbole de memory sélectionné

		this.cases[copie[1][sortie]].memory = memo; // Affecte le memory à la case du plateau de jeu
		copie[1].splice(sortie, 1); // Dégage la sortie choisie du premier îlot de la copie

		sortie = Math.floor(Math.random()*copie[7].length);
		this.cases[copie[7][sortie]].memory = memo; // Affecte le memory à la case de sortie du plateau de jeu
		copie[7].splice(sortie, 1); // Dégage la sortie choisie du dernier îlot de la copie

		memos.splice(indexMemo, 1); // Dégage le symbole retenu de la liste
		
		sortie = Math.floor(Math.random()*copie[5].length); // On recommence avec le deuxième îlot

		indexMemo = Math.floor(Math.random()*memos.length);
		memo = memos[indexMemo]; // On reprend un deuxième symbole

		this.cases[copie[5][sortie]].memory = memo; // Affecte le memory à la case du plateau de jeu
		this.cases[copie[7][0]].memory = memo; // Affecte le memory à la case restante de sortie du plateau de jeu

		copie[5].splice(sortie, 1); // Dégage la sortie choisie du premier îlot de la copie
		copie[7].splice(0, 1); // Dégage la sortie choisie du premier îlot de la copie

		memos.splice(indexMemo, 1); // Dégage le symbole retenu de la liste

		for(var i = 0, c = this.departsJoueurs.length ; i < c ; i++) // Installation des memories d'avancée pour les joueurs
		{
			var avance = Math.floor(Math.random()*copie[this.departsIlots[this.departsJoueurs[i]]].length); 
			var choixZone;
			if(copie[1].length > 0)
			{
				if(copie[5].length > 0)
				{
					choixZone = Math.floor(Math.random()*2);
				} else {
					choixZone = 0;
				}
			} else {
				choixZone = 1;
			}
			if(choixZone == 0)
				choixZone = 1;
			else
				choixZone = 5;

			var choixMemo = Math.floor(Math.random()*copie[choixZone].length);

			indexMemo = Math.floor(Math.random()*memos.length);
			memo = memos[indexMemo];

			this.cases[copie[choixZone][choixMemo]].memory = memo;
			this.cases[copie[this.departsIlots[this.departsJoueurs[i]]][avance]].memory = memo;

			copie[choixZone].splice(choixMemo, 1);
			copie[this.departsIlots[this.departsJoueurs[i]]].splice(avance, 1);
			memos.splice(indexMemo, 1);
		}

		var copieMemory = memos.slice();

		for(var i = 0, c = copieMemory.length ; i < c ; i++)
		{
			copieMemory[i] = [copieMemory[i], 2];
		}

		for(var i = 0, c = copie.length ; i < c ; i++)
		{
			for(var j = 0, cc = copie[i].length ; j < cc ; j++)
			{
				var index = Math.floor(Math.random()*copieMemory.length);
				var memo = copieMemory[index][0];

				this.cases[copie[i][j]].memory = memo;

				copieMemory[index][1]--;
				if(copieMemory[index][1] == 0)
				{
					copieMemory.splice(index, 1);
				}
			}
		}
	}

	this.lightAccessible = function(nbCases)
	{
		this.cases[disposition.getCurrentPlayer().position].light(nbCases);
		this.setFlicker();
	}

	this.lightAll = function()
	{
		for(var i = 0 ; i < this.NB_CASES_TOTAL ; i++)
		{
			this.cases[i].light(0);
		}
		this.setFlicker();
	}

	this.drawCases = function() // Fonction de dessin des carrés d'état des cases
	{
		for(var i = 0 ; i < this.NB_CASES_TOTAL ; i++)
		{
			if(this.cases[i].type == typeCaseEnum.MEMORY)
			{
				if(this.cases[i].isBroken)
					context.drawImage(imgSurbrillanceMemory, this.cases[i].x, this.cases[i].y, 210, 210, this.cases[i].x/coefReduc, this.cases[i].y/coefReduc, 210/coefReduc, 210/coefReduc)

				if(this.cases[i].revealed)
					contextOver2.drawImage(imgMemory, 5+(310*(this.cases[i].memory%2)), 5+(310*(Math.floor(this.cases[i].memory/2))), 277, 277, 50+this.cases[i].x/coefReduc, 50+this.cases[i].y/coefReduc, 50, 50);
				/*else
					context.drawImage(imgMemoryOff, 50+this.cases[i].x/coefReduc, 50+this.cases[i].y/coefReduc, 50, 50);
				*/if(this.cases[i].lit && this.isLighting)
					context.drawImage(imgSurbrillanceMemory, this.cases[i].x, this.cases[i].y, 210, 210, this.cases[i].x/coefReduc, this.cases[i].y/coefReduc, 210/coefReduc, 210/coefReduc)

			} else
			{
				if(this.cases[i].vert && (!this.cases[i].lit || !this.isLighting))
				{
					context.drawImage(imgVert, this.cases[i].x, this.cases[i].y, 150, 150, this.cases[i].x/coefReduc, this.cases[i].y/coefReduc, 150/coefReduc, 150/coefReduc);
				}
				if(this.cases[i].lit && this.isLighting)
				{
					context.drawImage((this.cases[i].type == typeCaseEnum.QUESTION ? imgSurbrillanceRouge : imgSurbrillanceNoir), this.cases[i].x, this.cases[i].y, 150, 150, this.cases[i].x/coefReduc, this.cases[i].y/coefReduc, 150/coefReduc, 150/coefReduc);
				}
			}			
		}

		for(var j = 0, c = disposition.nbJoueurs ; j < c ; j++)
		{
			context.fillStyle = couleursJoueurs[disposition.joueurs[j].couleur].col;
			context.beginPath(); // Le cercle extérieur
			context.arc(20+this.cases[disposition.joueurs[j].position].x/coefReduc, 20+this.cases[disposition.joueurs[j].position].y/coefReduc, 50/coefReduc, 0, Math.PI * 2); // Ici le calcul est simplifié
			context.fill();
		}
	}

	this.repaint = function()
	{
		context.drawImage(imgTest, 0, 0, 1080, 1080);
		this.drawCases();
	}

	this.setFlicker = function()
	{
		timer = setInterval(function()
		{
			plateau.isLighting = !plateau.isLighting;
			plateau.repaint();
		}, 500);
	}

	this.cancelCases = function()
	{
		for(var i = 0 ; i < this.NB_CASES_TOTAL ; i++)
		{
			this.cases[i].cancel();
		}

		clearInterval(timer);
	}

	this.spawnJoueurs = function()
	{
		for(var i = 0 ; i < disposition.joueurs.length ; i++)
		{
			disposition.joueurs[i].position = plateau.departs[disposition.joueurs[i].couleur];
			plateau.departsJoueurs.push(disposition.joueurs[i].couleur);
		}
	}

	this.getPath = function(caseDepart, caseArrivee)
	{
		//var tableau = [caseDepart];
		//return this.getPathRec(caseArrivee, tableau);
	}

	this.getPathRec = function(caseArrivee, tab)
	{
		if(tab.length == 0)
			return tab;
		caseDepart = tab[tab.length-1];

		if(caseDepart == caseArrivee)
			return tab;

		for(var i = 0, c = this.cases[caseDepart].voisins.length ; i<c ; i++)
		{
			if(tab.indexOf(this.cases[caseDepart].voisins[i].index) == -1 && this.cases[caseDepart].voisins[i].lit)
			{
				tab.push(this.cases[caseDepart].voisins[i].index);
				this.getPathRec(caseArrivee, tab);
				if(tab[tab.length-1] == caseArrivee)
					return tab;
				else
					tab.pop();
			}
		}
		return tab;
	}

	this.movePlayer = function(joueur, caseCible) // Déplace un pion vers une case cible
	{
		
	}

	this.initialiser = function() // Créer le plateau de jeu, en partant du coin haut/gauche
	{
		// BLOC A

		this.cases.push(new Case(0, typeCaseEnum.DEPART, null, 520, 320));
		this.cases.push(new Case(1, typeCaseEnum.BONUS_MALUS, this.cases[0], 770, 585));
		this.cases.push(new Case(2, typeCaseEnum.QUESTION, this.cases[1], 905, 530));
		this.cases.push(new Case(3, typeCaseEnum.BONUS_MALUS, this.cases[2], 1035, 470));

		this.cases.push(new Case(4, typeCaseEnum.QUESTION, this.cases[3], 1165, 500));
		this.cases.push(new Case(5, typeCaseEnum.BONUS_MALUS, this.cases[4], 1290, 565));
		this.cases.push(new Case(6, typeCaseEnum.QUESTION, this.cases[5], 1430, 605));

		this.cases.push(new Case(7, typeCaseEnum.BONUS_MALUS, this.cases[6], 1445, 460));
		this.cases.push(new Case(8, typeCaseEnum.MEMORY, this.cases[7], 1435, 130));

		this.cases.push(new Case(9, typeCaseEnum.BONUS_MALUS, this.cases[6], 1490, 740));
		this.cases.push(new Case(10, typeCaseEnum.MEMORY, this.cases[9], 1460, 930));

		// BLOC B

		this.cases.push(new Case(11, typeCaseEnum.MEMORY, null, 1925, 840));
		this.cases.push(new Case(12, typeCaseEnum.QUESTION, this.cases[11], 1925, 630));
		this.cases.push(new Case(13, typeCaseEnum.BONUS_MALUS, this.cases[12], 1955, 490));
		this.cases.push(new Case(14, typeCaseEnum.QUESTION, this.cases[13], 2090, 455));
		this.cases.push(new Case(15, typeCaseEnum.QUESTION, this.cases[14], 2240, 450));
		this.cases.push(new Case(16, typeCaseEnum.BONUS_MALUS, this.cases[15], 2380, 450));

		this.cases.push(new Case(17, typeCaseEnum.QUESTION, this.cases[16], 2520, 450));
		this.cases.push(new Case(18, typeCaseEnum.MEMORY, this.cases[17], 2715, 400));

		this.cases.push(new Case(19, typeCaseEnum.QUESTION, this.cases[16], 2380, 560));
		this.cases.push(new Case(20, typeCaseEnum.MEMORY, this.cases[19], 2380, 760));

		// BLOC C

		this.cases.push(new Case(21, typeCaseEnum.DEPART, null, 290, 1200));
		this.cases.push(new Case(22, typeCaseEnum.BONUS_MALUS, this.cases[21], 550, 1365));
		this.cases.push(new Case(23, typeCaseEnum.QUESTION, this.cases[22], 690, 1365));
		
		this.cases.push(new Case(24, typeCaseEnum.BONUS_MALUS, this.cases[23], 820, 1325));
		this.cases.push(new Case(25, typeCaseEnum.QUESTION, this.cases[24], 835, 1170));
		this.cases.push(new Case(26, typeCaseEnum.BONUS_MALUS, this.cases[25], 835, 1035));
		this.cases.push(new Case(27, typeCaseEnum.MEMORY, this.cases[26], 810, 780));

		this.cases.push(new Case(28, typeCaseEnum.BONUS_MALUS, this.cases[23], 695, 1490));
		this.cases.push(new Case(29, typeCaseEnum.QUESTION, this.cases[28], 655, 1645));
		this.cases.push(new Case(30, typeCaseEnum.MEMORY, this.cases[29], 450, 1830));

		// BLOC D

		this.cases.push(new Case(31, typeCaseEnum.DEPART, null, 2185, 1650));
		this.cases.push(new Case(32, typeCaseEnum.QUESTION, this.cases[31], 1870, 1800));
		this.cases.push(new Case(33, typeCaseEnum.BONUS_MALUS, this.cases[32], 1800, 1715));

		this.cases.push(new Case(34, typeCaseEnum.QUESTION, this.cases[33], 1670, 1755));
		this.cases.push(new Case(35, typeCaseEnum.BONUS_MALUS, this.cases[34], 1535, 1755));
		this.cases.push(new Case(36, typeCaseEnum.MEMORY, this.cases[35], 1260, 1700));

		this.cases.push(new Case(37, typeCaseEnum.QUESTION, this.cases[33], 1830, 1545));
		this.cases.push(new Case(38, typeCaseEnum.BONUS_MALUS, this.cases[37], 1830, 1400));
		this.cases.push(new Case(39, typeCaseEnum.QUESTION, this.cases[38], 1815, 1245));
		this.cases.push(new Case(40, typeCaseEnum.BONUS_MALUS, this.cases[39], 1660, 1225));
		this.cases.push(new Case(41, typeCaseEnum.QUESTION, this.cases[40], 1500, 1225));
		this.cases.push(new Case(42, typeCaseEnum.BONUS_MALUS, this.cases[41], 1335, 1225));

		this.cases.push(new Case(43, typeCaseEnum.QUESTION, this.cases[42], 1335, 1345));
		this.cases.push(new Case(44, typeCaseEnum.BONUS_MALUS, this.cases[43], 1350, 1475));
		this.cases.push(new Case(45, typeCaseEnum.MEMORY, this.cases[44], 1550, 1470));

		this.cases.push(new Case(46, typeCaseEnum.QUESTION, this.cases[42], 1190, 1190));
		this.cases.push(new Case(47, typeCaseEnum.BONUS_MALUS, this.cases[46], 1190, 1035));
		this.cases.push(new Case(48, typeCaseEnum.MEMORY, this.cases[47], 1155, 730));

		// BLOC E

		this.cases.push(new Case(49, typeCaseEnum.DEPART, null, 3130, 1390));
		this.cases.push(new Case(50, typeCaseEnum.BONUS_MALUS, this.cases[49], 2740, 1480));
		this.cases.push(new Case(51, typeCaseEnum.QUESTION, this.cases[50], 2610, 1470));

		this.cases.push(new Case(52, typeCaseEnum.BONUS_MALUS, this.cases[51], 2610, 1330));
		this.cases.push(new Case(53, typeCaseEnum.MEMORY, this.cases[52], 2580, 1050));

		this.cases.push(new Case(54, typeCaseEnum.BONUS_MALUS, this.cases[51], 2610, 1620));

		this.cases.push(new Case(55, typeCaseEnum.QUESTION, this.cases[54], 2610, 1770));
		this.cases.push(new Case(56, typeCaseEnum.MEMORY, this.cases[55], 2585, 1970));

		this.cases.push(new Case(57, typeCaseEnum.QUESTION, this.cases[54], 2470, 1620));
		this.cases.push(new Case(58, typeCaseEnum.BONUS_MALUS, this.cases[57], 2335, 1560));
		this.cases.push(new Case(59, typeCaseEnum.QUESTION, this.cases[58], 2315, 1410));
		this.cases.push(new Case(60, typeCaseEnum.MEMORY, this.cases[59], 2275, 1125));

		// BLOC F

		this.cases.push(new Case(61, typeCaseEnum.MEMORY, null, 785, 1945));
		this.cases.push(new Case(62, typeCaseEnum.BONUS_MALUS, this.cases[61], 1035, 1980));

		this.cases.push(new Case(63, typeCaseEnum.QUESTION, this.cases[62], 1035, 1840));
		this.cases.push(new Case(64, typeCaseEnum.QUESTION, this.cases[63], 1035, 1695));
		this.cases.push(new Case(65, typeCaseEnum.MEMORY, this.cases[64], 1015, 1420));

		this.cases.push(new Case(66, typeCaseEnum.QUESTION, this.cases[62], 1180, 1980));
		this.cases.push(new Case(67, typeCaseEnum.BONUS_MALUS, this.cases[66], 1330, 1975));
		this.cases.push(new Case(68, typeCaseEnum.QUESTION, this.cases[67], 1485, 1995));
		this.cases.push(new Case(69, typeCaseEnum.QUESTION, this.cases[68], 1530, 2140));
		this.cases.push(new Case(70, typeCaseEnum.MEMORY, this.cases[69], 1560, 2355));

		// BLOC G

		this.cases.push(new Case(71, typeCaseEnum.DEPART, null, 2850, 2385));
		this.cases.push(new Case(72, typeCaseEnum.QUESTION, this.cases[71], 2440, 2585));
		this.cases.push(new Case(73, typeCaseEnum.BONUS_MALUS, this.cases[72], 2290, 2590));

		this.cases.push(new Case(74, typeCaseEnum.QUESTION, this.cases[73], 2290, 2480));
		this.cases.push(new Case(75, typeCaseEnum.BONUS_MALUS, this.cases[74], 2290, 2340));
		this.cases.push(new Case(76, typeCaseEnum.MEMORY, this.cases[75], 2270, 2050));

		this.cases.push(new Case(77, typeCaseEnum.QUESTION, this.cases[73], 2125, 2590));
		this.cases.push(new Case(78, typeCaseEnum.BONUS_MALUS, this.cases[77], 1960, 2590));
		this.cases.push(new Case(79, typeCaseEnum.QUESTION, this.cases[78], 1950, 2450));
		this.cases.push(new Case(80, typeCaseEnum.BONUS_MALUS, this.cases[79], 1950, 2315));
		this.cases.push(new Case(81, typeCaseEnum.MEMORY, this.cases[80], 1925, 2020));

		// BLOC H

		this.cases.push(new Case(82, typeCaseEnum.MEMORY, null, 1260, 2470));
		this.cases.push(new Case(83, typeCaseEnum.BONUS_MALUS, this.cases[82], 1070, 2500));
		this.cases.push(new Case(84, typeCaseEnum.QUESTION, this.cases[83], 925, 2475));
		this.cases.push(new Case(85, typeCaseEnum.BONUS_MALUS, this.cases[84], 900, 2305));
		this.cases.push(new Case(86, typeCaseEnum.QUESTION, this.cases[85], 750, 2280));
		this.cases.push(new Case(87, typeCaseEnum.BONUS_MALUS, this.cases[86], 595, 2295));
		this.cases.push(new Case(88, typeCaseEnum.QUESTION, this.cases[87], 590, 2440));
		this.cases.push(new Case(89, typeCaseEnum.BONUS_MALUS, this.cases[88], 665, 2570));

		this.cases.push(new Case(90, typeCaseEnum.QUESTION, this.cases[89], 520, 2585));
		this.cases.push(new Case(91, typeCaseEnum.MEMORY, this.cases[90], 305, 2115));

		this.cases.push(new Case(92, typeCaseEnum.BONUS_MALUS, this.cases[90], 385, 2640));
		this.cases.push(new Case(93, typeCaseEnum.SORTIE, this.cases[92], 150, 2800));

	}
}
