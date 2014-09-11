$(function()
{
	$(canvasDes).click(function()
	{
		if(disposition.doitLancerDes)
		{
			disposition.nbCases = Math.floor((Math.random()*9));
			disposition.doitLancerDes = false;
			alert("Dés lancés : "+disposition.nbCases);
			plateau.cases[disposition.joueurs[disposition.tourJoueur].position].light(disposition.nbCases);
			plateau.setFlicker();
		}
	});

	$(canvas).click(function(evt)
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
								var caseJoueur = plateau.cases[disposition.joueurs[disposition.tourJoueur].position];
								if(plateau.cases[plateau.memories[i][j]].memory == caseJoueur.memory && plateau.cases[plateau.memories[i][j]].index != caseJoueur.index)
								{
									plateau.cases[plateau.memories[i][j]].revealed = true;
									plateau.cases[plateau.memories[i][j]].addVoisin(plateau.cases[disposition.joueurs[disposition.tourJoueur].position]);
									plateau.cases[disposition.joueurs[disposition.tourJoueur].position].addVoisin(plateau.cases[plateau.memories[i][j]]);
									alert("C'est ça !");
								} else {
									plateau.cases[plateau.memories[i][j]].revealed = true;
									plateau.repaint();
									alert("C'est pas ça !");
									plateau.cases[plateau.memories[i][j]].revealed = false;
									caseJoueur.revealed = false;
								}
									
								disposition.memory = false;
								nextTurn();
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
	}
	
}


function nextTurn()
{
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

	plateau.drawCases();
	$("#indication").dialog(
	{
		autoOpen: true,
		modal: true,
		title: disposition.joueurs[disposition.tourJoueur].pseudo+", à votre tour !",
		close: null,
		buttons:
		{
			"Ok" : function()
			{
				$(this).dialog("close");
				lancerDes();
			}
		}
	}).html("Cliquez sur les dés pour effectuer un lancer.");
}

function lancerDes()
{
	disposition.doitLancerDes = true;
}