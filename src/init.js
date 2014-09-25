var plateau = new PlateauJeu();
var couleurActuelle = 0; // Variable utile pour la sélection des couleurs de chaque joueur
var difficulteActuelle = 0; // Variable utile pour la sélection des difficultés de chaque joueur

var canvas  = document.querySelector('#plateau'); // Plateau de jeu
var context = canvas.getContext('2d');

var overlay  = document.querySelector('#overlay'); // Plateau de jeu
var contextOver = overlay.getContext('2d');

var imgSurbrillanceRouge = new Image();
imgSurbrillanceRouge.src = pathImages+"/plateau_surbrillance_rouge.png";

var imgSurbrillanceNoir = new Image();
imgSurbrillanceNoir.src = pathImages+"/plateau_surbrillance_noir.png";

var imgSurbrillanceMemory = new Image();
imgSurbrillanceMemory.src = pathImages+"/plateau_surbrillance_memory.png";

var imgVert = new Image();
imgVert.src = pathImages+"/plateau_vert.png";

var imgTest = new Image();
imgTest.src = pathImages+"/plateau-final-pgd-v2.png";

var imgMemory = new Image();
imgMemory.src = pathImages+"/symboles.jpg";

var imgMemoryOff = new Image();
imgMemoryOff.src = pathImages+"/recto.jpg";

var imgDes = new Image();
imgDes.src = pathImages+"/des.png";

var imgDifficulte = [new Image(), new Image(), new Image()];
imgDifficulte[0].src = pathImages+"/carte-bug.png";
imgDifficulte[1].src = pathImages+"/carte-defaillance.png";
imgDifficulte[2].src = pathImages+"/carte-panne-systeme.png";

//drawImage(image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur) Modèle de dessin d'image

imgTest.onload = function() // Provisoire, dessin du plateau
{
    context.drawImage(imgTest, 0, 0, 1080, 1080);
    //context.drawImage(imgSurbrillance, 0, 0, 1080, 1080);
    //context.drawImage(imgVert, 0, 0, 1080, 1080);
    plateau.initialiser();
}


function getCanvasId(canvas) // Permet de ne sélectionner que le chiffre de l'identifiant des canvas
{
	return parseInt((canvas.id).substring(canvas.id.length-1, canvas.id.length));
}

function choixNombreJoueurs(dialog)
{
	$(dialog).dialog(
	{
		modal: true,
		title: "Combien de participants ?",
		width: 300,
		height : 200,
		//position: { my: "center", at: "center", of: window },
		buttons: 
		{
	        "1": function() {
	          disposition.nbJoueurs = 1;
	          $( this ).dialog( "close" );
	          choixPseudoCouleurDifficulte(this, 1);
	        },
	        "2": function() {
	          disposition.nbJoueurs = 2;
	          $( this ).dialog( "close" );
	          choixPseudoCouleurDifficulte(this, 1);
	        },
	        "3": function() {
	        	disposition.nbJoueurs = 3;
	          $( this ).dialog( "close" );
	          choixPseudoCouleurDifficulte(this, 1);
	        },
	        "4": function() {
	        	disposition.nbJoueurs = 4;
	          $( this ).dialog( "close" );
	          choixPseudoCouleurDifficulte(this, 1);
	        }
	    }
	}).html("Indiquez le nombre de joueurs/équipes prenant part au jeu");
}

function choixPseudoCouleurDifficulte(dialog, i) // On envoit une div, et 1, la méthode s'occupe de la sélection des couleurs et difficultés des joueurs
{
	
	$(dialog).dialog( // Ouvre les x boîtes de dialogue pour les x joueurs
	{
		modal: true, // Prend le focus et le garde
		title: "Joueur/équipe n°"+i, // S'adresse au joueur i
		width: 500,
		height: 700,
		buttons: 
		{
			"Ok": function() 
			{
				$(this).dialog("close"); // On valide la couleur et la difficulté
				couleursJoueurs[couleurActuelle].disp = false; // La couleur choisie est rendu indisponible pour les autres joueurs
				disposition.joueurs.push(new Joueur((input.value == "") ? "Joueur "+i : input.value, couleurActuelle, difficulteActuelle)); // On entre le joueur dans les règles s'il n'a pas de pseudo, alors "Joueur i" sera choisi
				if(i < disposition.nbJoueurs) // Si ce n'était pas le dernier joueur
				{
					choixPseudoCouleurDifficulte(dialog, i+1); // On relance la méthode pour le joueur suivant
				} else {
					$(this).dialog(
					{
						modal: true,
						title: "Détails de la partie",
						height: 500,
						buttons:
						{
							"OK": function()
							{
								$(this).dialog("close");
								plateau.spawnJoueurs();
    							plateau.disposeMemories();
    							game();
    							console.log(disposition.nbTours);
							}
						}
					}).html("<p>Choisissez si chaque équipe est composée d'un seul joueur, ou de plusieurs (dans le cas où un joueur se retrouve seul, choisissez joueur)</p>");

					var btnsEquipe = document.createElement('div');
					var btnEquipe = document.createElement('input');
					var btnSolo = document.createElement('input');

					var labelEquipe = document.createElement('label');
					var labelSolo = document.createElement('label');

					btnEquipe.type = "radio";
					btnEquipe.id = "radioEquipe";
					btnEquipe.name = "equipe";
					
					btnSolo.type = "radio";
					btnSolo.id = "radioSolo";
					btnSolo.name = "equipe";
					btnSolo.checked = true;

					$(btnEquipe).click(function(evt){disposition.equipes = true;});
					$(btnSolo).click(function(evt){disposition.equipes = false;});

					labelEquipe.htmlFor = "radioEquipe";
					labelSolo.htmlFor = "radioSolo";

					$(labelEquipe).html("Equipes");
					$(labelSolo).html("Solo");

					$(btnSolo).appendTo($(btnsEquipe));
					$(btnEquipe).appendTo($(btnsEquipe));
					
					$(labelSolo).appendTo($(btnsEquipe));
					$(labelEquipe).appendTo($(btnsEquipe));
					
					$(btnsEquipe).buttonset();

					$(btnsEquipe).appendTo($(this));

					$("<p>Avez-vous une personne qui fera office d'animateur pour la partie ?</p>").appendTo($(this));

					var btnsAnim = document.createElement('div');
					var btnAnim = document.createElement('input');
					var btnNA = document.createElement('input');

					var labelAnim = document.createElement('label');
					var labelNA = document.createElement('label');

					btnAnim.type = "radio";
					btnAnim.id = "radioAnim";
					btnAnim.name = "anim";
					btnAnim.checked = true;

					btnNA.type = "radio";
					btnNA.id = "radioNA";
					btnNA.name = "anim";

					$(btnAnim).click(function(evt){disposition.animateur = true;});
					$(btnNA).click(function(evt){disposition.animateur = false;});


					labelAnim.htmlFor = "radioAnim";
					labelNA.htmlFor = "radioNA";

					$(labelAnim).html("Avec");
					$(labelNA).html("Sans");

					$(btnAnim).appendTo($(btnsAnim));
					$(btnNA).appendTo($(btnsAnim));
					
					$(labelAnim).appendTo($(btnsAnim));
					$(labelNA).appendTo($(btnsAnim));
					
					$(btnsAnim).buttonset();

					$(btnsAnim).appendTo($(this));

					$("<p>Choisissez les conditions de victoire </p>").appendTo($(this));

					var btnsVictoire = document.createElement('div');
					var btn5Tours = document.createElement('input');
					var btn10Tours = document.createElement('input');
					var btn15Tours = document.createElement('input');
					var btnSortie = document.createElement('input');

					var label5Tours = document.createElement('label');
					var label10Tours = document.createElement('label');
					var label15Tours = document.createElement('label');
					var labelSortie = document.createElement('label');

					btn5Tours.type = "radio";
					btn5Tours.id = "radio5Tours";
					btn5Tours.name = "victoire";
					btn5Tours.checked = true;

					btn10Tours.type = "radio";
					btn10Tours.id = "radio10Tours";
					btn10Tours.name = "victoire";

					btn15Tours.type = "radio";
					btn15Tours.id = "radio15Tours";
					btn15Tours.name = "victoire";

					btnSortie.type = "radio";
					btnSortie.id = "radioSortie";
					btnSortie.name = "victoire";

					$(btn5Tours).click(function(evt){disposition.nbTours = 5;});
					$(btn10Tours).click(function(evt){disposition.nbTours = 10;});
					$(btn15Tours).click(function(evt){disposition.nbTours = 15;});
					$(btnSortie).click(function(evt){disposition.nbTours = -1;});

					label5Tours.htmlFor = "radio5Tours";
					label10Tours.htmlFor = "radio10Tours";
					label15Tours.htmlFor = "radio15Tours";
					labelSortie.htmlFor = "radioSortie";

					$(label5Tours).html("5 Tours");
					$(label10Tours).html("10 Tours");
					$(label15Tours).html("15 Tours");
					$(labelSortie).html("Sortie");

					$(btn5Tours).appendTo($(btnsVictoire));
					$(btn10Tours).appendTo($(btnsVictoire));
					$(btn15Tours).appendTo($(btnsVictoire));
					$(btnSortie).appendTo($(btnsVictoire));
					
					$(label5Tours).appendTo($(btnsVictoire));
					$(label10Tours).appendTo($(btnsVictoire));
					$(label15Tours).appendTo($(btnsVictoire));
					$(labelSortie).appendTo($(btnsVictoire));
					
					$(btnsVictoire).buttonset();
					$(btnsVictoire).appendTo($(this));

				}
			},
		}
	}).html("<p>Choisissez un pseudo</p>"); // Explications au joueur

	var input = document.createElement('input');
	input.type = "text";
	input.name = "pseudo";

	$(input).appendTo($(dialog));

	$("<p>Choisissez une couleur parmi celles disponibles.</p>").appendTo($(dialog));

	for(var j = 0, c = 6-i ; j<c ; j++) // Affichage des couleurs
	{
		if(!couleursJoueurs[j].disp) // Si la couleur n'est pas disponible
		{
			c++; // On incrémente le compteur
			continue; // On passe à la couleur suivante
		}

		var canvasCouleur = document.createElement('canvas'); // Carré contenant la couleur j
		var contextCouleur = canvasCouleur.getContext('2d');
		
		canvasCouleur = $(canvasCouleur).attr("width", "50").attr("height", "50").css("margin", "3px").attr("id", "couleur"+j).addClass("couleur"); // Mise en forme et indexation
		contextCouleur.fillStyle = couleursJoueurs[j].col; // Application de la couleur j
		contextCouleur.fillRect(0, 0, 50, 50); // Dessin du carré de couleur j

		canvasCouleur.click(function() // Si l'on clique sur ce carré
		{
			if(getCanvasId(this) != couleurActuelle) // Si ce carré n'était pas celui sélectionné
			{
				$("#couleur"+couleurActuelle).css("border", "0px solid black"); // On retire la bordure de celui précédemment sélectionné
				$("#couleur"+couleurActuelle).css("margin", "3px"); // On remet le margin à celui précedemment sélectionné
			}
			$(this).css("border", "3px solid grey"); // On applique la bordure au carré sélectionné
			$(this).css("margin", "0px"); // On retire son margin pour ne pas créer de décalage
			couleurActuelle = getCanvasId(this); // Et la couleur actuelle devient l'id du carré sélectionné
		})
		canvasCouleur.appendTo($(dialog));// On positionne le carré j dans la fenêtre de dialogue
	}
	$($("canvas.couleur")[0]).css("border", "3px solid grey"); // On sélectionne le premier carré disponible
	$($("canvas.couleur")[0]).css("margin", "0px"); // On retire son margin
	couleurActuelle = getCanvasId($("canvas.couleur")[0]); // On donne la couleur du premier carré disponible

	$("<p>Choisissez une difficulté</p>").appendTo($(dialog));

	for(var k = 0 ; k < 3 ; k++)
	{
		var canvasDifficulte = document.createElement('canvas'); // Carré contenant la difficulté k
		var contextDifficulte = canvasDifficulte.getContext('2d');

		canvasDifficulte = $(canvasDifficulte).attr("width", "131").attr("height", "197").css("margin", "3px").attr("id", "difficulte"+k); // Mise en forme et indexation	
		contextDifficulte.drawImage(imgDifficulte[k], 0, 0, 131, 197);

		canvasDifficulte.click(function()
		{
			if(getCanvasId(this) != difficulteActuelle)
			{
				$("#difficulte"+difficulteActuelle).css("border", "0px solid black"); // On retire la bordure de celui précédemment sélectionné
				$("#difficulte"+difficulteActuelle).css("margin", "3px"); // On remet le margin à celui précedemment sélectionné
				$('#texteDifficulte').replaceWith("<p id='texteDifficulte'>Difficulté "
												+difficulteEnum.DIFFICULTE_LIBELLE[getCanvasId(this)]+" : "
												+difficulteEnum.DIFFICULTE_TEXTE[getCanvasId(this)]+"</p>"); // Mise-à-jour du texte de description de la difficulté
			}
			$(this).css("border", "3px solid grey"); // On applique la bordure au carré sélectionné
			$(this).css("margin", "0px"); // On retire son margin pour ne pas créer de décalage
			difficulteActuelle = getCanvasId(this); // Et la couleur actuelle devient l'id du carré sélectionné
		})
		canvasDifficulte.appendTo($(dialog)); // On positionne l'image dans la fenêtre de dialogue

	}
	$("#difficulte0").css("border", "3px solid grey"); // On sélectionne le premier carré disponible
	$("#difficulte0").css("margin", "0px"); // On retire son margin
	difficulteActuelle = 0; // On donne la difficulté Bug par défaut

	$("<p id='texteDifficulte'>Difficulté Bug : "+difficulteEnum.DIFFICULTE_TEXTE[0]+"</p>").appendTo($(dialog)); // Texte de description de la difficulté Bug à la suite

}

$(function() {
	$("#dialog").dialog(
	{
		modal: true,
		title: "Bienvenue sur Datagramme !",
		height: 200,
		buttons: 
		{
			"Oui": function()
			{
				$(this).dialog("close");
				$(this).dialog(
				{
					modal: true,
					title: "Règles du jeu",
					buttons: 
					{
						"Ok": function()
						{
							$(this).dialog("close");
							choixNombreJoueurs(this);
						}
					},
					width: 1600,
					height: 800,
					position: { my: "center", at: "center", of: window }
				}).html("<h2>Bienvenue dans la section d'aide du jeu !</h2><p><i>Datagramme</i> est un jeu de plateau dans lequel vous devez répondre à des questions pour vous frayer un chemin et réparer un réseau endommagé.</p><h3>Les deux modes de jeu</h3><p>Il existe deux modes de jeu, dans le premier, le joueur ou l'équipe ayant collecté le plus de <i>Datagrammes</i> - acquis en répondant correctement aux questions - au bout d'un certain nombre de tours remporte la partie.<br/>Dans le deuxième mode de jeu, c'est le premier joueur ou la première équipe arrivé(e) à la sortie, en bas à gauche du plateau qui l'emporte.</p><h3>Les trois types de cases</h3><p>Il existe trois types de cases dans <i>Datagramme</i>.<br/>Tout d'abord, les cases rouges représentent les cases question. Si vous répondez correctement à une question, la case devient verte, et vous gagnez un <i>Datagramme</i>. Lorsque la case est verte, la section est réparée et ne donne plus de question.<br/>Ensuite, les cases noires sont des cases vous faisant tirer des cartes Bonus/Malus. Leur effet est imprévisible.<br/>Enfin, les dernières cases sont les routeurs étoilés, aussi appelés cases <i>MEMORY</i>. Lorsque vous tombez sur une telle case, son symbole caché se retourne, vous devez ensuite le retrouver parmi les autres routeurs. Une fois que vous avez trouvé deux routeurs avec le même symbole, ces derniers se connectent, et vous pouvez les traverser pour vous retrouver dans une autre zone du réseau.</p><h3>Déroulement d'un tour</h3><p>Chaque joueur ou équipe va jouer à tour de rôle. Tout d'abord, il faut lancer les dés binaires. Le chiffre résultant indique le nombre de cases maximum que vous pourrez parcourir. Suite à cela, les cases accessibles seront alors en surbrillance, il vous suffira de cliquer sur l'une d'elles pour vous y rendre. Ensuite, une pop-up vous indiquera la marche à suivre. Si vous tombez sur une case rouge, une question vous sera posée, il vous suffira d'y répondre pour finir votre tour. Si vous tombez sur une case noire, il vous faudra alors cliquer sur le tas de cartes Bonus/Malus pour en piocher une. Enfin, si vous tombez sur une case MEMORY, il vous faudra cliquer sur un autre routeur pour retourner son symbole. Si les deux symboles concordent, vous venez de créer une nouvelle route. Sinon, les deux symboles sont de nouveau cachés. Votre tour prend fin quoiqu'il advienne.</p>");
			},
			"Non": function()
			{
				$(this).dialog("close");
				choixNombreJoueurs(this);
			}
		}
	}).html("Est-ce votre première partie, avez-vous besoin d'explications concernant les règles ?");

});


/*
Bot invite J1 à cliquer sur les dés
J1 clique sur les dés
Zone de déplacement disponible s'affiche
J1 choisit sa case
Le pion s'anime jusqu'à la case
Le bot indique ce qu'il faut faire => Répondre à une question / Tirer une carte bonus-malus / Retourner deux cartes mémory



*/