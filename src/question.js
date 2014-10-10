function commentSourcePopUp(dialog, question, isOk)
{
	var titre;
	var texte;
	

	if(question.reponses.typeReponse == typeReponseEnum.OKKO)
	{
		if(isOk)
		{
			titre = "Bien joué !";
			texte = "Félicitations, vous remportez un point !";
		}
		else {
			titre = "Raté !"
			texte = "Dommage, vous réussirez mieux la prochaine fois !";
		}
	} else {
		if(isOk)
		{
			titre = "Bonne réponse !";
			texte = "Félicitations, vous avez correctement répondu, vous gagnez un point.";
		}
		else {
			titre = "Mauvaise réponse !"
			texte = "Dommage, ce n'était pas la bonne réponse.";
		}

	}
		

	$(dialog).dialog(
	{
		title: titre,
		modal: true,
		autoOpen: true,
		minWidth: 500,
		minHeight: 300,
		buttons: 
		{
			"Ok" : function()
			{
				$(dialog).dialog("close");
				nextTurn();
			}
		},
		close: null
	}).html("<p>"+texte+"</p><p>"+question.explications+"</p><a href='"+question.source+"'>"+question.source+"</a>");
}

function generateQuestionPopUp(dialog, question)
{
	var typeQuestion = question.typeQuestion;
	var typeReponse = question.reponses.typeReponse;
	var boutonsReponse;
	var validateFc;
	var closeFc;
	var tabReponses = [];
	var titreQuestion;

	$(dialog).html("");

	switch(typeQuestion)
	{
		case typeQuestionEnum.DIRECTE:
		case typeQuestionEnum.CASSE_TETE:
			titreQuestion = "Question directe ! "+disposition.joueurs[disposition.tourJoueur].pseudo+" répondez à la question !";
			closeFc = function()
			{
				var isOk = false;
				if(tabReponses[0] == question.reponses.bonneReponse)
				{
					isOk = true;
					disposition.joueurs[disposition.tourJoueur].points++;
					plateau.cases[disposition.joueurs[disposition.tourJoueur].position].vert = true;
				}

				commentSourcePopUp(dialog, question, isOk);
				
			}
			validateFc = function()
			{

			}
			dialog.html("<p>"+question.intitule+"</p>");

			if(typeReponse == typeReponseEnum.ENTREE)
			{
				
			}
		break;



		case typeQuestionEnum.IMAGE:
			titreQuestion = "Question image ! "+disposition.joueurs[disposition.tourJoueur].pseudo+" répondez à la question !";
			closeFc = function()
			{
				var isOk = false;
				if(tabReponses[0] == question.reponses.bonneReponse)
				{
					isOk = true;
					disposition.joueurs[disposition.tourJoueur].points++;
					plateau.cases[disposition.joueurs[disposition.tourJoueur].position].vert = true;
				}

				commentSourcePopUp(dialog, question, isOk);
				
			}
			validateFc = function()
			{

			}
			dialog.html("<p>"+question.intitule+"</p>");

			if(question.urlImage == question.SANS_IMAGE)
			{
				$("<p><img src='"+pathImages+"/mascotte-plateau.png"+"' /></p>").appendTo(dialog);
			} else {
				if(typeof question.urlImage === "string")
				{
					$("<p><img src='"+pathImages+"/question/"+question.urlImage+"' /></p>").appendTo(dialog);
				} else {

					$("<p>").appendTo(dialog);

					for(var i = 0, c = question.urlImage.length ; i < c ; i++)
					{
						$("<img src='"+pathImages+"/question/"+question.urlImage[i]+"'/>").appendTo(dialog);
					}

					$("</p>").appendTo(dialog);
				}
			}

			

			if(typeReponse == typeReponseEnum.ENTREE)
			{
				
			}
		break;



		case typeQuestionEnum.DUO:
			if(question.intitule.length == 2)
				titreQuestion = "Question Duo ! "+disposition.joueurs[disposition.tourJoueur].pseudo+" répondez à la première question !";
			else
				titreQuestion = "Question Duo ! "+disposition.joueurs[disposition.tourJoueur].pseudo+" répondez à la seconde question !";
			closeFc = function()
			{
				if(tabReponses[0] == question.reponses.bonneReponse[0])
				{
					if(question.intitule.length == 2)
					{
						question.intitule.shift();
						question.reponses.choixReponses.shift();
						question.reponses.choixReponses.shift();
						question.reponses.choixReponses.shift();
						question.reponses.bonneReponse.shift();
						question.reponses.bonneReponse[0] -= 3;
						generateQuestionPopUp(dialog, question);
					} else {
						disposition.joueurs[disposition.tourJoueur].points++;
						plateau.cases[disposition.joueurs[disposition.tourJoueur].position].vert = true;
						commentSourcePopUp(dialog, question, true);
					}
				} else {
					commentSourcePopUp(dialog, question, false);
				}
			}
			dialog.html("<p>"+question.intitule[0]+"</p>");
		break;



		case typeQuestionEnum.JUSTE_PRIX:
			titreQuestion = "Question Juste Prix !"
			validateFc = function()
			{
				for(var i = 0, c = disposition.nbJoueurs ; i < c ; i++)
				{
					if(inputs[i].value == "" || inputs[i].value == null)
					{
						tabReponses = [];
						return;
					}
					tabReponses.push(inputs[i].value);
				}
				dialog.dialog("close");
			}

			closeFc = function()
			{
				var bestAnswer = tabReponses[0];
				var player = 0;

				for(var i = 0, c = disposition.nbJoueurs ; i < c ; i++)
				{
					if(Math.abs(tabReponses[i] - question.getBonneReponse()) < Math.abs(bestAnswer - question.getBonneReponse()))
					{
						bestAnswer = tabReponses[i];
						player = i;
					}
				}

				$(dialog).dialog(
				{
					title: "Le joueur le plus proche est : " + disposition.joueurs[player].pseudo,
					modal: true,
					autoOpen: true,
					buttons:
					{
						"Ok" : function()
						{
							$(dialog).dialog("close");
							disposition.joueurs[player].nbPoints++;
							disposition.tourJoueur =(player+(disposition.nbJoueurs-1))%disposition.nbJoueurs;
							nextTurn();
						}
					},
					close: function()
					{

					}
				}).html("<p>"+disposition.joueurs[player].pseudo+" a remporté le juste prix, tu gagnes un point, et c'est à toi de jouer !</p><p>La bonne réponse était "+question.getBonneReponse()+"</p>");
			}

			$("<p>"+question.intitule+"<br/><br/>Chaque joueur indique sa réponse :</p>").appendTo(dialog);
			var inputs = [];
			for(var i = 0, c = disposition.nbJoueurs ; i < c ; i++)
			{
				var input = document.createElement('input');
				input.type = "text";
				input.name = "reponse"+i;
				inputs.push(input);
				$("<p>"+disposition.joueurs[i].pseudo+" : </p>").appendTo(dialog);
				$(input).appendTo(dialog);
			}
		break;



		case typeQuestionEnum.MIME:
			titreQuestion = disposition.joueurs[disposition.tourJoueur].pseudo+" : "+question.intitule;
			closeFc = function()
			{
				var isOk = false;
				if(tabReponses[0] == true)
				{
					isOk = true;
					disposition.joueurs[disposition.tourJoueur].points++;
					plateau.cases[disposition.joueurs[disposition.tourJoueur].position].vert = true;
				}

				commentSourcePopUp(dialog, question, isOk);
			}

			if(typeof question.reponses.choixReponses === "string")
			{
				$("<p>Mime : <b class='invisible' id ='"+question.reponses.choixReponses+"'>???</b></p>").appendTo(dialog);
			} else {

				$("<p>Mime : <b class='invisible' id ='"+question.reponses.choixReponses[0]+"'>???</b></p>").appendTo(dialog);

				for(var i = 1, c = question.getReponses().length ; i < c ; i++)
				{
					$("<p>Ou mime : <b class='invisible' id ='"+question.reponses.choixReponses[i]+"'>???</b></p>").appendTo(dialog);
				}
			}
			var invisible = $(".invisible");
			
			for(var i = 0, c = invisible.length ; i<c ; i++)
			{
				
				$(invisible[i]).mouseenter(function(evt)
				{
					var tmp = $(evt.target).html();
					$(evt.target).html($(evt.target).attr("id"));
					$(evt.target).attr("id", tmp);
				});

				$(invisible[i]).mouseleave(function(evt)
				{
					var tmp = $(evt.target).html();
					$(evt.target).html($(evt.target).attr("id"));
					$(evt.target).attr("id", tmp);
				});
			}
		break;



		case typeQuestionEnum.DEBAT:
			titreQuestion = disposition.joueurs[disposition.tourJoueur].pseudo+", alimentez le débat !";
			closeFc = function()
			{
				var isOk = false;
				if(tabReponses[0] == true)
				{
					isOk = true;
					disposition.joueurs[disposition.tourJoueur].points++;
					plateau.cases[disposition.joueurs[disposition.tourJoueur].position].vert = true;
				}

				commentSourcePopUp(dialog, question, isOk);
			}

			$("<p>"+question.intitule+"</p>").appendTo(dialog);
		break;
	}



	switch(typeReponse)
	{
		case typeReponseEnum.CM:
			boutonsReponse = [];
			for(var i = 0, c = question.getReponses().length ; i<c ; i++)
			{
				if(question.typeQuestion == typeQuestionEnum.DUO && i == 3)
					break;
					boutonsReponse.push(
					{
						text: question.getReponses()[i],
						id: i,
						click: function(evt)
						{
							tabReponses.push(parseInt(evt.target.id)+1);
							dialog.dialog("close");
						}
					});
			}
		break;
		case typeReponseEnum.ENTREE:
			boutonsReponse =
				{
					"Valider" : function()
					{
						validateFc();
					}
				}
		break;
		case typeReponseEnum.OKKO:
			boutonsReponse = 
				{
					"OK" : function()
					{
						tabReponses.push(true);
						dialog.dialog("close");
					},
					"KO" : function()
					{
						tabReponses.push(false);
						dialog.dialog("close");
					}
				}
		break;
		case typeReponseEnum.VF:
			boutonsReponse = 
				{
					"Vrai" : function()
					{
						tabReponses.push(true);
						dialog.dialog("close");
					},
					"Faux" : function()
					{
						tabReponses.push(false);
						dialog.dialog("close");
					}
				}
		break;
	}

	dialog.dialog(
	{
		title: titreQuestion,
		modal: true,
		autoOpen: true,
		minWidth: 300,
		minHeight: 300,
		buttons: boutonsReponse,
		close: closeFc
		/*{
			"Valider" : function()
			{
				tabReponses.push(inputJustePrix.value);
				$(this).dialog("close");
				var bestAnswer = tabReponses[0];
				var player = 0;

				for(var i = 0, c = disposition.nbJoueurs ; i < c ; i++)
				{
					if(Math.abs(tabReponses[i] - question.getBonneReponse()) < Math.abs(bestAnswer - question.getBonneReponse()))
					{
						bestAnswer = tabReponses[i];
						player = i;
					}
				}

				$("#question").dialog(
				{
					title: "Le joueur le plus proche est : " + disposition.joueurs[player].pseudo,
					modal: true,
					autoOpen: false,
					buttons:
					{
						"Ok" : function()
						{
							$(this).dialog("close");
							disposition.joueurs[player].nbPoints++;
							disposition.tourJoueur = player-1;
							nextTurn();
						}
					}
				});
			}
		}*/
	});



	/*switch(typeReponse)
	{
		case typeReponseEnum.CM:

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
			var inputJustePrix = document.createElement('input');
			inputJustePrix.type = "text";
			inputJustePrix.name = "reponse";

			$(inputJustePrix).appendTo($("#question"));

		break;
	}*/
}

function pickQuestion(difficulte)
{
	var qt;
	var satisfied = false;
	while(!satisfied)
	{
		qt = questions[difficulte][Math.floor(Math.random()*questions[difficulte].length)];
		satisfied = true;
		if(disposition.nbJoueurs == 1)
		{
			if(qt.typeQuestion == typeQuestionEnum.JUSTE_PRIX)
				satisfied = false;
		}
		if(!disposition.animateur)
		{
			if(qt.typeQuestion == typeQuestionEnum.BACCALAUREAT || qt.typeQuestion == typeQuestionEnum.DEBAT || qt.typeQuestion == typeQuestionEnum.MIME)
				satisfied = false;
		}
		if(disposition.equipes)
		{
			if(qt.typeQuestion == typeQuestionEnum.MIME)
				satisfied = false;
		}
		if(qt.typeQuestion == typeQuestionEnum.DIRECTE && qt.reponses.typeReponse == typeReponseEnum.ENTREE)
			satisfied = false;
		if(qt.typeQuestion == typeQuestionEnum.REBUS || qt.typeQuestion == typeQuestionEnum.ENUMERATION || qt.typeQuestion == typeQuestionEnum.BACCALAUREAT)
			satisfied = false;
		
	}

	console.log(qt.intitule);


	/*qt = new Question("Tout devrait-il être gratuit sur Internet ?",
		question.SANS_IMAGE,
		question.type.DEBAT, 
		question.difficulte.DEFAILLANCE, 
		question.categorie.SOCIETE, 	
		"Si tout est gratuit qui paye les infrastructures, les salaires ? Quelqu'un doit payer en bout de chaîne, et donc nécessité d'un modèle économique basé sur des partenariats, de la publicité ou autre. De plus la gratuité ne concerne que les services. On ne peut pas donner les marchandises. D'ailleurs, paradoxalement, les Français veulent un Web entièrement gratuit mais 72 % des internautes français sont des e-acheteurs (produits multimédias, nourriture, vêtements...). Cela pose en fait la question de ce qui a de la valeur, ou non, aux yeux des internautes.",
		question.SANS_SOURCE,
		new Reponse(reponse.type.OKKO, 
			reponse.SANS_REPONSE, 
			reponse.SANS_BONNE_REPONSE));*/
	/*qt = new Question("Quelle quantité de carburant (en grammes) faut-il pour fabriquer une puce électronique, qui pèse elle 2 grammes ?",
		question.SANS_IMAGE, question.type.JUSTE_PRIX,
		question.difficulte.BUG,
		question.categorie.ENVIRONNEMENT,
		"Une puce électronique a beau être minuscule, pour produire deux grammes d'électronique, on consomme 1,7 kg d'énergie fossile, 1 m3 d'azote, 72 g de produits chimiques et 32 litres d'eau.",
		"http://www.eurekalert.org/pub_releases/2002-11/acs-ttp110502.php", 
    		new Reponse(reponse.type.ENTREE,
			reponse.SANS_REPONSE,
			1700));
	return qt;*/
	/*qt = new Question("Quel est le nom en français du symbole '@'", null, typeQuestionEnum.DIRECTE, difficulteEnum.BUG, categorieEnum.FONDAMENTAUX,
		
		
		new(typeReponseEnum.CM, ["At", "Arobase", "Acrobat"], 2), "", null);
	return qt;*/
	/*qt = new Question(["Dans la comptine suivante, que remplacent les chiffres 1 et 2 ? \nUn petit chat g2s\nqui 1ngeait du 2z\nsur un tapis g2s\nsa 1m1 lui dit\nce n’est pas poli\nde 1nger du 2z\nsur un tapis g2s.", "Quel intérêt d'écrire la comptine comme cela ?"],
		question.SANS_IMAGE, question.type.DUO, question.difficulte.BUG,
		question.categorie.FONDAMENTAUX, "On appelle ça de la compression. Les ordinateurs font cela pour réduire l'espace que prennent les images par exemple. (Exemple, compression JPEG.)\nOn appelle ça de la compression. Les ordinateurs font cela pour réduire l'espace que prennent les images par exemple, comme pour les formats JPEG.", question.SANS_SOURCE, 
    
		
		new(typeReponseEnum.CM, ["ri et ra","mi et ra","ri et ma","On a fait des économies de taille, car un chiffre remplace deux lettres","C'est pour rendre la comptine illisible","Ça ne sert à rien"], [3, 4]));
	*/return qt;

	if(disposition.nbJoueurs == 1)
	{
		while (qt.typeQuestion == typeQuestionEnum.JUSTE_PRIX || qt.typeQuestion == typeQuestionEnum.DEBAT)
		{
			return;
		}
	}
}

function askQuestion()
{
	var question = pickQuestion(disposition.joueurs[disposition.tourJoueur].difficulte);
	generateQuestionPopUp($("#question"), question);
	/*
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
	
	/*disposition.joueurs[disposition.tourJoueur].points++;
	alert("bonne réponse !");
	plateau.cases[disposition.joueurs[disposition.tourJoueur].position].vert = true;
	nextTurn();*/
}