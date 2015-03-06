$(function()
{
	$(overlay).mousemove(function(evt)
	{
		contextOver.clearRect(0, 0, 1080, 1080);
		if(!lockHover)
		{
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
		}

		if(disposition.movingCube != 0)
		{
			disposition.nbCases = -1;
			for(var i = 0 ; i < plateau.NB_CASES_TOTAL ; i++)
			{
				if(plateau.cases[i].type == typeCaseEnum.QUESTION)
				{
					if((plateau.cases[i].vert && disposition.movingCube == 2) || (!plateau.cases[i].vert && disposition.movingCube == 1))
						continue;

					var xOffset=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
					var yOffset=Math.max(document.documentElement.scrollTop,document.body.scrollTop);
					var mouseX = evt.clientX + xOffset;
					var mouseY = evt.clientY + yOffset;
					var tailleCase = 150;

					//alert("Mouse : ("+mouseX+", "+mouseY+") Case : ("+plateau.cases[i].x/coefReduc+", "+plateau.cases[i].y/coefReduc+")");

					if(plateau.cases[i].x/coefReduc < mouseX && plateau.cases[i].x/coefReduc + (tailleCase/coefReduc) > mouseX)
					{
						if(plateau.cases[i].y/coefReduc < mouseY && plateau.cases[i].y/coefReduc + (tailleCase/coefReduc) > mouseY)
						{
							plateau.cases[i].lit = true;
						} else {
							plateau.cases[i].lit = false;
						}
					} else {
						plateau.cases[i].lit = false;
					}
				}
			}
			plateau.isLighting = true;
			plateau.repaint();
		}

		
	});

	$(overlay).click(function(evt)
	{
		if(disposition.memory || disposition.erreurAcheminement)
		{
			contextOver.clearRect(0, 0, 1080, 1080);
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
								if(disposition.erreurAcheminement)
								{
									console.log("hey");
									plateau.cases[plateau.memories[i][j]].revealed = true;
									plateau.repaint();
									if(disposition.chosenCase[0] == 0)
									{
										disposition.chosenCase[0] = plateau.memories[i][j];
									} else if(disposition.chosenCase[0] != plateau.memories[i][j]){

										disposition.erreurAcheminement = false;
										disposition.chosenCase[1] = plateau.memories[i][j];

										var txtMemory;
										if(plateau.cases[disposition.chosenCase[0]].memory == plateau.cases[disposition.chosenCase[1]].memory && disposition.chosenCase[0] != disposition.chosenCase[1])
										{
											disposition.memory = false;
											txtMemory = "Correct ! Les routeurs sont maintenant reliés.";
											plateau.cases[disposition.chosenCase[1]].revealed = true;
											plateau.repaint();
											plateau.cases[plateau.memories[i][j]].addVoisin(plateau.cases[disposition.getCurrentPlayer().position]);
											plateau.cases[disposition.chosenCase[0]].addVoisin(plateau.cases[disposition.chosenCase[1]]);
										} else {
											txtMemory = "Incorrect ! Ces routeurs ne sont pas connectés, vous perdez un cube de données !";
											plateau.cases[disposition.chosenCase[0]].revealed = false;
											plateau.repaint();
											plateau.cases[disposition.chosenCase[1]].revealed = false;
											if(disposition.getCurrentPlayer().points > 0)
												disposition.getCurrentPlayer().points--;
										}
										lockHover = true;

										disposition.chosenCase[0] = 0;
										disposition.chosenCase[1] = 0;

										$("#dialog").dialog(
										{
											modal: true,
											height: 300,
											title: "Erreur d'acheminement !",
											buttons:
											{
												"Ok": function()
												{
													$(this).dialog("close");
													if(disposition.memory)
														askQuestion();
													else
														nextTurn();
													lockHover = false;
												}
											}
										}).html("<p>"+txtMemory+"</p>");

										

										timer = setTimeout(function()
										{
											plateau.repaint();
											contextOver2.clearRect(0, 0, 1080, 1080);
											plateau.drawCases();
										}, 4000);

									}
								} else {

									found = true;
									var txtMemory;
									var caseJoueur = plateau.cases[disposition.getCurrentPlayer().position];
									if(plateau.cases[plateau.memories[i][j]].memory == caseJoueur.memory && plateau.cases[plateau.memories[i][j]].index != caseJoueur.index)
									{
										disposition.memory = false;
										txtMemory = "Correct ! Les routeurs sont maintenant reliés.";
										plateau.cases[plateau.memories[i][j]].revealed = true;
										plateau.repaint();
										plateau.cases[plateau.memories[i][j]].addVoisin(plateau.cases[disposition.getCurrentPlayer().position]);
										plateau.cases[disposition.getCurrentPlayer().position].addVoisin(plateau.cases[plateau.memories[i][j]]);
									} else {
										txtMemory = "Incorrect ! Ces routeurs ne sont pas connectés.";
										plateau.cases[plateau.memories[i][j]].revealed = true;
										plateau.repaint();
										plateau.cases[plateau.memories[i][j]].revealed = false;
										caseJoueur.revealed = false;
									}
									lockHover = true;

									$("#dialog").dialog(
									{
										modal: true,
										height: 300,
										title: "Memory !",
										buttons:
										{
											"Ok": function()
											{
												$(this).dialog("close");
												if(disposition.memory)
													askQuestion();
												else
													nextTurn();
												lockHover = false;
											}
										}
									}).html("<p>"+txtMemory+"</p>");

									

									timer = setTimeout(function()
									{
										plateau.repaint();
										contextOver2.clearRect(0, 0, 1080, 1080);
										plateau.drawCases();
									}, 4000);

								}
							}
						}
					}

				}

			}
		}

		if(disposition.movingCube != 0)
		{
			disposition.nbCases = -1;
			for(var i = 0 ; i < plateau.NB_CASES_TOTAL ; i++)
			{
				if(plateau.cases[i].type == typeCaseEnum.QUESTION)
				{
					if((plateau.cases[i].vert && disposition.movingCube == 2) || (!plateau.cases[i].vert && disposition.movingCube == 1))
						continue;

					var xOffset=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
					var yOffset=Math.max(document.documentElement.scrollTop,document.body.scrollTop);
					var mouseX = evt.clientX + xOffset;
					var mouseY = evt.clientY + yOffset;
					var tailleCase = 150;

					//alert("Mouse : ("+mouseX+", "+mouseY+") Case : ("+plateau.cases[i].x/coefReduc+", "+plateau.cases[i].y/coefReduc+")");

					if(plateau.cases[i].x/coefReduc < mouseX && plateau.cases[i].x/coefReduc + (tailleCase/coefReduc) > mouseX)
					{
						if(plateau.cases[i].y/coefReduc < mouseY && plateau.cases[i].y/coefReduc + (tailleCase/coefReduc) > mouseY)
						{
							if(plateau.cases[i].lit)
							{
								disposition.chosenCase[disposition.movingCube-1] = i;
								disposition.movingCube--;
							}
						}
					}
				}
			}
			plateau.isLighting = true;
			plateau.repaint();
			if(disposition.movingCube == 0)
			{
				plateau.cases[disposition.chosenCase[0]].vert = false;
				plateau.cases[disposition.chosenCase[1]].vert = true;
				disposition.chosenCase[0] = 0;
				disposition.chosenCase[1] = 0;
				plateau.cancelCases();
				nextTurn();
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
							plateau.movePlayer(disposition.getCurrentPlayer(), plateau.cases[i].index);
							disposition.getCurrentPlayer().position = plateau.cases[i].index;
							plateau.repaint();
						}
					}
				}
			}
			if(found)
			{
				plateau.cancelCases();
				plateau.repaint();

				switch(plateau.cases[disposition.getCurrentPlayer().position].type)
				{
					case typeCaseEnum.QUESTION:
						if(!plateau.cases[disposition.getCurrentPlayer().position].vert)
							askQuestion();
						else
							nextTurn();
						break;
					case typeCaseEnum.BONUS_MALUS:
						bonusMalus();
						break;
					case typeCaseEnum.MEMORY:
						if(plateau.cases[disposition.getCurrentPlayer().position].isBroken)
							repairMemory();
						else
							memory();
						break;
					default:
						nextTurn();
				}
			}

		}
	})
});

function nextTurn()
{
	if(disposition.getCurrentPlayer().position == plateau.CASE_SORTIE && disposition.nbTours == -1)
	{
		alert(disposition.getCurrentPlayer().pseudo+" a remporté la victoire en atteignant la sortie !");
		return;
	}

	disposition.tourJoueur++;
	disposition.tourCourant++;
	disposition.nbCases = -1;
	if(disposition.tourJoueur == disposition.nbJoueurs)
	{
		disposition.tourJoueur = 0;

	}

	plateau.repaint();

	for(var i = 0 ; i<disposition.nbJoueurs ; i++)
	{
		console.log(disposition.joueurs[i].pseudo + " : " + disposition.joueurs[i].points);
	}

	game();
}

function bonusMalus()
{
	var bonusMalus = Math.round(Math.random());

	var titre;
	var description;
	var imgBM = new Image();

	if(bonusMalus)
	{
		titre = "Carte Malus !";
		description = "<p>Pas de chance, vous tirez une carte Malus ! Que vous réserve le sort ?</p>";
		imgBM.src = pathImagesBonusMalus + "/bonus-verso12.png";

	} else {
		titre = "Carte Bonus !";
		description = "<p>Félicitations, vous tirez une carte Bonus ! De quel avantage allez-vous bénéficier ?</p>";
		imgBM.src = pathImagesBonusMalus + "/bonus-verso1.png";
	}
	$("#dialog").dialog(
	{
		modal: true,
		title: titre,
		height: 500,
		width: 470,
		buttons:
		{
		  "OK": function()
		  {
		    $("#dialog").dialog("close");
		    drawCard(bonusMalus);
		  }
		}
	}).html(description);
	$(imgBM).appendTo($("#dialog"));
}

function drawCard(bonusMalus)
{
	var carte;
	var next = false;
	
	do
	{
		if(bonusMalus)
		{
			carte = Math.floor(Math.random()*5)+13;
		} else {
			carte = Math.floor(Math.random()*5)+2;
		}
	} while(carte == 2 || carte == 16 && disposition.joueurs == 1);

	if(!disposition.getCurrentPlayer().protection)
		carte = 22;
	else
		carte = 2;

	switch(carte)
	{
		case 2:
			
			if(disposition.tourJoueur == 0)
			{
				if(disposition.joueurs[disposition.nbJoueurs-1].points > 0)
				{
					if(disposition.joueurs[disposition.nbJoueurs-1].protection)
					{
						disposition.joueurs[disposition.nbJoueurs-1].protection = false;
					} else {
						disposition.joueurs[disposition.nbJoueurs-1].points--;
						disposition.getCurrentPlayer().points++;
					}
					
				}
				
			} else {
				if(disposition.joueurs[disposition.tourJoueur-1].points > 0)
				{
					if(disposition.joueurs[disposition.tourJoueur-1].protection)
					{
						disposition.joueurs[disposition.tourJoueur-1].protection = false;
					} else {
						disposition.joueurs[disposition.tourJoueur-1].points--;
						disposition.getCurrentPlayer().points++;
					}
					
				}
			}
			next = true;

		break;

		case 3 :

			if(disposition.getCurrentPlayer().points > 0)
			{
				disposition.nbCases = 0;
				disposition.getCurrentPlayer().points--;
				plateau.lightAll();
			} else {
				next = true;
			}

		break;

		case 4 :

			var found = false;

			for(var i = 0 ; i < plateau.NB_CASES_TOTAL ; i++)
			{
				if(plateau.cases[i].vert)
				{
					found = true;
					break;
				}
			}

			if(found)
				disposition.movingCube = 2;
			else
				next = true;

		break;

		case 5 :

			disposition.getCurrentPlayer().movingAlt = 3;
			next = true;

		break;

		case 6 :

			disposition.getCurrentPlayer().protection = true;
			next = true;

		break;

		case 7 :

			disposition.getCurrentPlayer().doublePoints = true;
			next = true;

		break;

		case 8 :

			disposition.getCurrentPlayer().secondeChance = true;
			next = true;

		break;

		case 10 :

			disposition.getCurrentPlayer().protection = true;
			next = true;

		break;

		case 13 :

			disposition.getCurrentPlayer().movingAlt = -1;
			next = true;

		break;

		case 14 :

			disposition.getCurrentPlayer().doubleQuestion = true;
			next = true;

		break;

		case 15 :

			virus.revive(disposition.tourJoueur);
			if(disposition.getCurrentPlayer().protection)
				disposition.getCurrentPlayer().protection = false;
			else
				virus.update();

		break;

		case 16 : 

			disposition.getCurrentPlayer().spiedOn = true;
			next = true;

		break;

		case 18 :

			disposition.erreurAcheminement = true;

		break;

		case 19 :

			disposition.getCurrentPlayer().movingAlt = -2;
			next = true;

		case 20 :

			var brokenCase = plateau.cases[disposition.getCurrentPlayer().position].getNearestMemory();
			if(brokenCase != -1)
				plateau.cases[brokenCase].isBroken = true;
			next = true;

		break;

		case 21 :

			disposition.doitLancerDes = true;

			$("#indication").dialog(
			{
				autoOpen: true,
				modal: true,
				title: "Données corrompues !",
				close: null,
				minHeight: 400,
				buttons:
				{
					"Ok" : function()
					{
						if(!disposition.doitLancerDes)
						{
							$(this).dialog("close");
							disposition.nbCases = -1;
							nextTurn();
						}
							

					}
				}

			}).html("<p>Cliquez sur les dés pour effectuer un lancer. Vous devez faire au moins 4 !</p><br/>");

			throwDice(true);

		break;

		case 22 :

			disposition.getCurrentPlayer().chrono = true;
			next = true;

		break;

		default:

		break;
	}

	

	var imgCarte = new Image();
	imgCarte.src = pathImagesBonusMalus + "/bonus-verso"+carte+".png";

	$("#dialog").dialog(
	{
		modal: true,
		height: 430,
		width: 470,
		buttons:
		{
		  "OK": function()
		  {
		    $("#dialog").dialog("close");
		    if(next)
		    	nextTurn();
		  }
		}
	}).html("");
	$(imgCarte).appendTo($("#dialog"));
}

function repairMemory()
{
	plateau.cases[disposition.getCurrentPlayer().position].isBroken = false;
	$("#dialog").dialog(
	{
		title: "Redémarrage du routeur !",
		modal: true,
		height: 430,
		width: 470,
		buttons:
		{
		  "OK": function()
		  {
		    $("#dialog").dialog("close");
		    nextTurn();
		  }
		}
	}).html("<p>Il faut redémarrer le routeur ! Passe ton tour, tu pourras réessayer au tour suivant.</p>");
}

function memory()
{

	var idCase = disposition.getCurrentPlayer().position;

	if(plateau.cases[idCase].revealed == true)
	{
		nextTurn();
		return;
	}

	plateau.cases[idCase].revealed = true;
	plateau.repaint();

	disposition.memory = true;
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

function throwDice(malus)
{
	disposition.nbCases = Math.floor((Math.random()*7)) + 1;

	var imgDesResult = new Image();
	imgDesResult.src = pathImages+"/dices-views/dices-result-"+disposition.nbCases+".png";

	var canvasDesResult = document.createElement('canvas');
	var contextDesResult = canvasDesResult.getContext('2d');



	var canvasDes = document.createElement('canvas');
	var contextDes = canvasDes.getContext('2d');

	canvasDes = $(canvasDes).attr("width", "110").attr("height", "105").attr("id", "des"); // Mise en forme et indexation
	contextDes.drawImage(imgDes, 0, 0, 110, 105);


	canvasDes.click(function()
	{
		if(disposition.doitLancerDes)
		{
			canvasDesResult = $(canvasDesResult).attr("width", "150").attr("height", "50").attr("id", "desResult"); // Mise en forme et indexation
			contextDesResult.drawImage(imgDesResult, 0, 0, 150, 50);

			disposition.doitLancerDes = false;
			var nbCasesAlt = disposition.nbCases + disposition.getCurrentPlayer().movingAlt;

			if(nbCasesAlt < 0)
				nbCasesAlt = 0;

			if(!malus)
				plateau.lightAccessible((nbCasesAlt));

			var texte = "<p>Vous avez fait : </p>"
			$(texte).appendTo($("#indication"));
			canvasDesResult.appendTo($("#indication"));
			var alt;
			if(disposition.getCurrentPlayer().movingAlt > 0)
			{
				alt = "<p>+ ";
			} else if(disposition.getCurrentPlayer().movingAlt < 0)
			{
				alt = "<p>- ";
			}
			alt += Math.abs(disposition.getCurrentPlayer().movingAlt) + " = " + (nbCasesAlt) + "</p>";
			if(disposition.getCurrentPlayer().movingAlt != 0)
				$(alt).appendTo($("#indication"));

			disposition.getCurrentPlayer().movingAlt = 0;

			if(malus)
			{
				if(disposition.nbCases < 4)
				{
					$("<p>Vous perdez un cube de données !</p>").appendTo($("#indication"));
					if(disposition.getCurrentPlayer().points > 0)
						disposition.getCurrentPlayer().points--;
				} else {
					$("<p>Vous conservez votre cube de données !</p>").appendTo($("#indication"));
				}
			}
		}
	});
	canvasDes.appendTo($("#indication")); // On positionne l'image dans la fenêtre de dialogue

	
}

function game()
{
	$("#indication").dialog({autoOpen:false});
	$("#question").dialog({autoOpen:false});
	$("#chrono").dialog({autoOpen:false});

	$(".ui-widget-header, .ui-dialog-titlebar").css("background-color", couleursJoueurs[disposition.getCurrentPlayer().couleur].col2);
	$(".ui-widget-header, .ui-dialog-titlebar").css("border-color", couleursJoueurs[disposition.getCurrentPlayer().couleur].col);

	if((disposition.nbTours*disposition.nbJoueurs) == disposition.tourCourant)
	{
		var gagnant = 0;
		var egalite = false;
		for(var i = 1 ; i < disposition.nbJoueurs ; i++)
		{
			if(disposition.joueurs[i].points > disposition.joueurs[gagnant].points)
			{
				gagnant = i;
				egalite = false;
			} else if(disposition.joueurs[i].points == disposition.joueurs[gagnant].points)
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
		title: disposition.getCurrentPlayer().pseudo+", à votre tour !",
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

	if(!virus.dead && virus.joueur == disposition.tourJoueur)
	{
		if(disposition.getCurrentPlayer().protection)
		{
			disposition.getCurrentPlayer().protection = false;
		} else {
			virus.update();
		}
		
	}

	throwDice(false);
}
