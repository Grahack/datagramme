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
	});

	$(overlay).click(function(evt)
	{
		if(disposition.memory)
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
								found = true;
								var txtMemory;
								var caseJoueur = plateau.cases[disposition.joueurs[disposition.tourJoueur].position];
								if(plateau.cases[plateau.memories[i][j]].memory == caseJoueur.memory && plateau.cases[plateau.memories[i][j]].index != caseJoueur.index)
								{
									txtMemory = "Correct ! Les routeurs sont maintenant reliés.";
									plateau.cases[plateau.memories[i][j]].revealed = true;
									plateau.repaint();
									plateau.cases[plateau.memories[i][j]].addVoisin(plateau.cases[disposition.joueurs[disposition.tourJoueur].position]);
									plateau.cases[disposition.joueurs[disposition.tourJoueur].position].addVoisin(plateau.cases[plateau.memories[i][j]]);
								} else {
									txtMemory = "Incorrect ! Ces routeurs ne sont pas connectés.";
									plateau.cases[plateau.memories[i][j]].revealed = true;
									plateau.repaint();
									plateau.cases[plateau.memories[i][j]].revealed = false;
									caseJoueur.revealed = false;
								}
								lockHover = true;
								
									
								disposition.memory = false;

								timer = setTimeout(function()
								{
									plateau.repaint();
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
												nextTurn();
												lockHover = false;
											}
										}
									}).html("<p>"+txtMemory+"</p>");
								}, 4000);
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
							askQuestion();
						else
							nextTurn();
						break;
					case typeCaseEnum.BONUS_MALUS:
						//bonusMalus();
						askQuestion();
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

function nextTurn()
{
	if(disposition.joueurs[disposition.tourJoueur].position == plateau.CASE_SORTIE && disposition.nbTours == -1)
	{
		alert(disposition.joueurs[disposition.tourJoueur].pseudo+" a remporté la victoire en atteignant la sortie !");
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
	$("#indication").dialog({autoOpen:false});
	$("#question").dialog({autoOpen:false});

	$(".ui-widget-header, .ui-dialog-titlebar").css("background-color", couleursJoueurs[disposition.joueurs[disposition.tourJoueur].couleur].col2);
	$(".ui-widget-header, .ui-dialog-titlebar").css("border-color", couleursJoueurs[disposition.joueurs[disposition.tourJoueur].couleur].col);

	if((disposition.nbTours*disposition.nbJoueurs) == disposition.tourCourant)
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
			plateau.cases[disposition.joueurs[disposition.tourJoueur].position].light(disposition.nbCases);
			plateau.setFlicker();
			var texte = "<p>Vous avez fait : </p>"
			$(texte).appendTo($("#indication"));
			canvasDesResult.appendTo($("#indication"));
		}
	});
	canvasDes.appendTo($("#indication")); // On positionne l'image dans la fenêtre de dialogue
}