$(function()
{

	$(overlay).mousemove(function(evt)
	{
		contextOver.clearRect(0, 0, 1080, 1080);
		var xOffset=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
		var yOffset=Math.max(document.documentElement.scrollTop,document.body.scrollTop);
		var mouseX = evt.clientX + xOffset;
		var mouseY = evt.clientY + yOffset;
		for(var i = 0, c = plateau.memories.length ; i < c ; i++)
		{
			for(var j = 0, cc = plateau.memories[i].length ; j < cc ; j++)
			{
				var tailleCase = 210;
				if(plateau.cases[plateau.memories[i][j]].x/coefReduc < mouseX && plateau.cases[plateau.memories[i][j]].x/coefReduc + (tailleCase/coefReduc) > mouseX)
				{
					if(plateau.cases[plateau.memories[i][j]].y/coefReduc < mouseY && plateau.cases[plateau.memories[i][j]].y/coefReduc + (tailleCase/coefReduc) > mouseY)
					{
						if(plateau.cases[plateau.memories[i][j]].revealed)
							contextOver.drawImage(imgMemory, 5+(310*(plateau.cases[plateau.memories[i][j]].memory%2)), 5+(310*(Math.floor(plateau.cases[plateau.memories[i][j]].memory/2))), 277, 277, mouseX, mouseY, 80, 80);
						else
							contextOver.drawImage(imgMemoryOff, mouseX, mouseY, 80, 80);
					}
				}
			}
		}
	});

	$(overlay).click(function(evt)
	{
		if(disposition.memory)
		{
			var found = false;
			for(var i = 0 ; i < plateau.memories.length ; i++)
			{
				for(var j = 0 ; j < plateau.memories[i].length ; j++)
				{
					var xOffset=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
					var yOffset=Math.max(document.documentElement.scrollTop,document.body.scrollTop);
					var mouseX = evt.clientX + xOffset;
					var mouseY = evt.clientY + yOffset;

					if(!plateau.cases[plateau.memories[i][j]].revealed)
					{

						var tailleCase = 210;
						if(plateau.cases[plateau.memories[i][j]].x/coefReduc < mouseX && plateau.cases[plateau.memories[i][j]].x/coefReduc + (tailleCase/coefReduc) > mouseX)
						{
							
							if(plateau.cases[plateau.memories[i][j]].y/coefReduc < mouseY && plateau.cases[plateau.memories[i][j]].y/coefReduc + (tailleCase/coefReduc) > mouseY)
							{
								found = true;
								var txtMemory;
								var caseJoueur = plateau.cases[disposition.joueurs[disposition.tourJoueur].position];
								if(plateau.cases[plateau.memories[i][j]].memory == caseJoueur.memory && plateau.cases[plateau.memories[i][j]].index != caseJoueur.index)
								{
									txtMemory = "Correct ! Les routeurs sont maintenant reliés.";
									plateau.cases[plateau.memories[i][j]].revealed = true;
									plateau.cases[plateau.memories[i][j]].addVoisin(plateau.cases[disposition.joueurs[disposition.tourJoueur].position]);
									plateau.cases[disposition.joueurs[disposition.tourJoueur].position].addVoisin(plateau.cases[plateau.memories[i][j]]);
								} else {
									txtMemory = "Incorrect ! Ces routeurs ne sont pas connectés.";
									plateau.cases[plateau.memories[i][j]].revealed = true;
									plateau.repaint();
									plateau.cases[plateau.memories[i][j]].revealed = false;
									caseJoueur.revealed = false;
								}
									
								disposition.memory = false;

								$("#dialog").dialog(
								{
									modal: true,
									title: "Bienvenue sur Datagramme !",
									buttons: 
									{
										"Ok": function()
										{
											$(this).dialog("close");
											nextTurn();
										}
									}
								}).html("<p>"+txtMemory+"</p>");	

								var canvasMem1 = document.createElement('canvas');
								var contextMem1 = canvasMem1.getContext('2d');	
								var canvasMem2 = document.createElement('canvas');
								var contextMem2 = canvasMem2.getContext('2d');	

								canvasMem1 = $(canvasMem1).attr("width", "150").attr("height", "150").css("margin", "3px");	
								contextMem1.drawImage(imgMemory, 5+(310*(plateau.cases[disposition.joueurs[disposition.tourJoueur].position].memory%2)), 5+(310*(Math.floor(plateau.cases[disposition.joueurs[disposition.tourJoueur].position].memory/2))), 277, 277, 0, 0, 150, 150);		
								canvasMem2 = $(canvasMem2).attr("width", "150").attr("height", "150").css("margin", "3px");	
								contextMem2.drawImage(imgMemory, 5+(310*(plateau.cases[plateau.memories[i][j]].memory%2)), 5+(310*(Math.floor(plateau.cases[plateau.memories[i][j]].memory/2))), 277, 277, 0, 0, 150, 150);						
								
								$(canvasMem1).appendTo($("#dialog"));
								$(canvasMem2).appendTo($("#dialog"));

								//$("#dialog").open();
							}
						}
					}

				}
				
			}
		}
		if(disposition.nbCases != -1)
		{
			var found = false;
			for(var i = 0 ; i < plateau.NB_CASES_TOTAL ; i++)
			{
				if(plateau.cases[i].lit)
				{
					var xOffset=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
					var yOffset=Math.max(document.documentElement.scrollTop,document.body.scrollTop);
					var mouseX = evt.clientX + xOffset;
					var mouseY = evt.clientY + yOffset;

					var tailleCase = 150;

					//alert("Mouse : ("+mouseX+", "+mouseY+") Case : ("+plateau.cases[i].x/coefReduc+", "+plateau.cases[i].y/coefReduc+")");
					if(plateau.cases[i].type == typeCaseEnum.MEMORY)
					{
						tailleCase = 210;
					}
					if(plateau.cases[i].x/coefReduc < mouseX && plateau.cases[i].x/coefReduc + (tailleCase/coefReduc) > mouseX)
					{
						if(plateau.cases[i].y/coefReduc < mouseY && plateau.cases[i].y/coefReduc + (tailleCase/coefReduc) > mouseY)
						{
							found = true;
							plateau.movePlayer(disposition.joueurs[disposition.tourJoueur], plateau.cases[i].index);
							disposition.joueurs[disposition.tourJoueur].position = plateau.cases[i].index;
							plateau.repaint();
						}
					}
				}
			}
			if(found)
			{
				plateau.cancelCases();
				
				switch(plateau.cases[disposition.joueurs[disposition.tourJoueur].position].type)
				{
					case typeCaseEnum.QUESTION:
						if(!plateau.cases[disposition.joueurs[disposition.tourJoueur].position].vert)
							question();
						else
							nextTurn();
						break;
					case typeCaseEnum.BONUS_MALUS:
						bonusMalus();
						break;
					case typeCaseEnum.MEMORY:
						memory();
						break;
					default:
						nextTurn();
				}
			}
			
		}
	})
});

function pickQuestion(difficulte)
{
	var qt = questions[difficulte][Math.floor(Math.random()*questions[difficulte].length)];
	qt = new Question("Quelle quantité de carburant (en grammes) faut-il pour fabriquer une puce électronique, qui pèse elle 2 grammes ?", null, typeQuestionEnum.JUSTE_PRIX, difficulteEnum.BUG, categorieEnum.ENVIRONNEMENT, 
    new Reponse(typeReponseEnum.ENTREE, null, 1700), "Une puce électronique a beau être minuscule, pour produire deux grammes d'électronique, on consomme 1,7 kg d'énergie fossile, 1 m3 d'azote, 72 g de produits chimiques et 32 litres d'eau.", "http://www.eurekalert.org/pub_releases/2002-11/acs-ttp110502.php");
	return qt;
	if(disposition.nbJoueurs == 1)
	{
		while (qt.typeQuestion == typeQuestionEnum.JUSTE_PRIX || qt.typeQuestion == typeQuestionEnum.DEBAT)
		{
			return;
		}
	}
}

function question()
{
	var question = pickQuestion(disposition.joueurs[disposition.tourJoueur].difficulte);

	/*switch(question.type)
	{
		case typeQuestionEnum.CM:

		break;
		case typeQuestionEnum.JUSTE_PRIX:
			var tabReponses = [];
			for(var i = 0, c = disposition.nbJoueurs ; i < c ; i++)
			{
				$("#question").dialog(
				{
					title: question.intitule,
					modal: true,
					autoOpen: true,
					buttons:
					{
						"Valider" : function()
						{
							tabReponses.push(inputJustePrix.value);
							$(this).dialog("close");
						}
					}
				});
			}
		break;
	}

	switch(question.reponses.typeReponse)
	{
		case typeReponseEnum.OKKO:
			$("#question").dialog(
			{
				title: "Convaincus ou pas ? Question Ok-Ko",
				modal: true,
				buttons: 
				{
					"Ok" : function()
					{
						$(this).dialog("close");
						alert("Bien joué !");
						disposition.joueurs[disposition.tourJoueur].points++;
						plateau.cases[disposition.joueurs[disposition.tourJoueur].position].vert = true;
					},
					"Ko" : function()
					{
						$(this).dialog("close");
					}
				},
				close: function()
				{
					nextTurn();
				}
			}).html("<p>"+questionTest.intitule+"</p>");
			break;
		case typeReponseEnum.ENTREE:
			$("#question").dialog(
			{
				title: disposition.joueurs[disposition.tourJoueur].pseudo+" répondez à la question !",
				modal: true,
				buttons: 
				{
					"Valider" : function()
					{
						if(input.value.toUpperCase().indexOf(question.getBonneReponse().toUpperCase()) > -1 || 
							question.getBonneReponse().toUpperCase().indexOf(input.value.toUpperCase()) > -1)
						{
							disposition.joueurs[disposition.tourJoueur].points++;
							alert("bonne réponse !");
							plateau.cases[disposition.joueurs[disposition.tourJoueur].position].vert = true;
						}
						$(this).dialog("close");
					},
				},
				close: function()
				{
					nextTurn();
				}
			}).html("<p>"+question.intitule+"</p>");
			var input = document.createElement('input');
			input.type = "text";
			input.name = "reponse";

			$(input).appendTo($("#question"));
			break;
		case typeReponseEnum.CM:
			var btns = [];
			for(var i = 0, c = question.getReponses().length ; i < c ; i++)
			{
				var btn = null;
			}
			$("#question").dialog(
			{
				title: disposition.joueurs[disposition.tourJoueur].pseudo+" répondez à la question !",
				modal: true,
				buttons: [
				{
					text: question.getReponses()[0],
					click: function()
					{
						if(question.reponses.bonneReponse == 1)
						{
							disposition.joueurs[disposition.tourJoueur].points++;
							alert("bonne réponse !");
							plateau.cases[disposition.joueurs[disposition.tourJoueur].position].vert = true;
						}
						$(this).dialog("close");
					}
				},
				{
					text: question.getReponses()[1],
					click: function()
					{
						if(question.reponses.bonneReponse == 2)
						{
							disposition.joueurs[disposition.tourJoueur].points++;
							alert("bonne réponse !");
							plateau.cases[disposition.joueurs[disposition.tourJoueur].position].vert = true;
						}
						$(this).dialog("close");
					}
				},
				{
					text: question.getReponses()[2],
					click: function()
					{
						if(question.reponses.bonneReponse == 3)
						{
							disposition.joueurs[disposition.tourJoueur].points++;
							alert("bonne réponse !");
							plateau.cases[disposition.joueurs[disposition.tourJoueur].position].vert = true;
						}
						$(this).dialog("close");
					}
				}],

				close: function()
				{
					nextTurn();
				}
			}).html("<p>"+question.intitule+"</p>");
			break;
	}*/
	
	disposition.joueurs[disposition.tourJoueur].points++;
	alert("bonne réponse !");
	plateau.cases[disposition.joueurs[disposition.tourJoueur].position].vert = true;
	nextTurn();
}


function nextTurn()
{
	if(disposition.joueurs[disposition.tourJoueur].position == plateau.CASE_SORTIE && disposition.nbTours == -1)
	{
		alert(disposition.joueurs[disposition.tourJoueur].pseudo+" a remporté la victoire en atteignant la sortie !");
		return;
	}

	disposition.tourJoueur++;
	disposition.nbCases = -1;
	if(disposition.tourJoueur == disposition.nbJoueurs)
	{
		disposition.tourJoueur = 0;
		disposition.tourCourant++;
	}

	plateau.repaint();


	game();
}

function bonusMalus()
{
	alert("BonusMalus");
	nextTurn();
}

function memory()
{	

	var idCase = disposition.joueurs[disposition.tourJoueur].position;

	if(plateau.cases[idCase].revealed == true)
	{
		nextTurn();
		return;
	}

	plateau.cases[idCase].revealed = true;
	plateau.repaint();

	disposition.memory = true;
	alert("Memory");

	/*var found = false;

	for(var i = 0, c = plateau.memories.length ; i < c ; i++)
	{
		for(var j = 0, cc = plateau.memories[i].length ; j < cc ; j++)
		{
			if(plateau.memories[i][j] != idCase && plateau.cases[plateau.memories[i][j]].memory == plateau.cases[idCase].memory)
			{
				plateau.cases[plateau.memories[i][j]].revealed = true;
				plateau.cases[plateau.memories[i][j]].addVoisin(plateau.cases[idCase]);
				plateau.cases[idCase].addVoisin(plateau.cases[plateau.memories[i][j]]);
				found = true;
				break;
			}
		}
		if(found)
			break;
	}

	nextTurn();*/
}

function game()
{
	if(disposition.nbTours == disposition.tourCourant)
	{
		var gagnant = 0;
		var egalite = false;
		for(var i = 1 ; i < disposition.nbJoueurs ; i++)
		{
			if(disposition.joueurs[i].nbPoints > disposition.joueurs[gagnant].nbPoints)
			{
				gagnant = i;
				egalite = false;
			} else if(disposition.joueurs[i].nbPoints == disposition.joueurs[gagnant].nbPoints)
			{
				egalite = true;
			}
		}

		if(egalite)
			alert("Fin du jeu ! Le jeu se termine sur une égalité !");
		else
			alert("Fin du jeu ! La victoire revient à " +disposition.joueurs[gagnant].pseudo);
		return;
	}

	disposition.doitLancerDes = true;

	plateau.drawCases();
	$("#indication").dialog(
	{
		autoOpen: true,
		modal: true,
		title: disposition.joueurs[disposition.tourJoueur].pseudo+", à votre tour !",
		close: null,
		minHeight: 400,
		buttons:
		{
			"Ok" : function()
			{
				if(!disposition.doitLancerDes)
					$(this).dialog("close");
			}
		}

	}).html("<p>Cliquez sur les dés pour effectuer un lancer.</p><br/>");

	var canvasDes = document.createElement('canvas'); // Carré contenant la difficulté k
	var contextDes = canvasDes.getContext('2d');

	canvasDes = $(canvasDes).attr("width", "190").attr("height", "153").attr("id", "des"); // Mise en forme et indexation	
	contextDes.drawImage(imgDes, 0, 0, 190, 153);

	canvasDes.click(function()
	{
		if(disposition.doitLancerDes)
		{
			disposition.nbCases = Math.floor((Math.random()*8)) + 1;
			disposition.doitLancerDes = false;
			plateau.cases[disposition.joueurs[disposition.tourJoueur].position].light(disposition.nbCases);
			plateau.setFlicker();
			var texte = "<p>Vous avez fait un "+disposition.nbCases+"</p>"
			$(texte).appendTo($("#indication"));
		}
	});
	canvasDes.appendTo($("#indication")); // On positionne l'image dans la fenêtre de dialogue
}