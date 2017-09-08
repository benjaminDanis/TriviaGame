$(document).ready(function(){

	var gamePlay = $("#gamePlay");

	var question1 = {
		q : "When did the titanic sink?",
		a1 : "a",
		a2 : "d",
		a3 : "1912",
		a4 : "b",
		correct : "answer3",
		key : "1912"
	}

	var question2 = {
		q : "Who discovered America?",
		a1 : "Christopher Columbus",
		a2 : "x",
		a3 : "q",
		a4 : "z",
		correct : "answer1",
		key : "Christopher Columbus"
	}

	var question3 = {
		q : "How tall is the Statue of Liberty?",
		a1 : "305'",
		a2 : "565'",
		a3 : "607'",
		a4 : "945'",
		correct : "answer1",
		key : "305'"
	}

	var question4 = {
		q : "How many states are in the U.S.?",
		a1 : "40",
		a2 : "49",
		a3 : "50",
		a4 : "51",
		correct : "answer3",
		key : "50"
	}

	var question5 = {
		q : "What is the world record for hot dogs eaten in 10 minutes?",
		a1 : "38",
		a2 : "68",
		a3 : "49",
		a4 : "72",
		correct : "answer4",
		key : "72"
	}

	var question6 = {
		q : "Which artist wrote the song 'Friends in Low Places'?",
		a1 : "Keith Richards",
		a2 : "Garth Brooks",
		a3 : "Toby Keith",
		a4 : "Hank Williams",
		correct : "answer2",
		key : "Garth Brooks"
	}

	var clockRunning = false;

	var questionArray = [question1, question2, question3, question4, question5, question6];

	
	
	var count = 0;
	
	

		var gameDiv = $("#gamePlay");
		var answerDiv = $("<div>", {id: "displayAnswer", class:"answerDisplay"});
		var startButton = $("<button>", {id: "startButton"});
		gameDiv.append(startButton);
		startButton.prop("value", "Start Game");
		startButton.html("Start Game");

		 var timer = $("<div>", {id:"clock", class: "timer"});
		timer.html(clock.time);
		gameDiv.append(timer);

		$(gamePlay).append(startButton);

		var wins = 0;
		var losses = 0;
		var unanswered = 0;

		

	


	$("#startButton").on("click", function newQuestion(){

		var clock = {
		time : 5,

		start : function(){

			if (!clockRunning) {

            intervalId = setInterval(clock.count , 1000);
            clockRunning = true;
      }

		},

		count : function() {

			timer.html(clock.time);
			clock.time--;
			


			if(clock.time === -1)
						{
							clock.stop();
							answerScreen();
							unanswered++;
						}
			
					
					
				
			
		},

		stop : function(){

			clearInterval(intervalId);
			clockRunning = false;

		}
	}


					$(".answer").remove();
					$(".question").remove();
					$(".timer").remove();
					$(".answerDisplay").remove();

						clock.start();
						
					 startButton.remove();
					 var timerLbl = $("<div>", {id: "timerLbl", class: "timer"});
					 timerLbl.html("<h2>Time Remaining: </h2>");
					 gameDiv.append(timerLbl);
					

						
					 
					 var question = $("<div>", {id: "question1", class:"question"});
					 question.html("<h2>" + questionArray[count].q +"</h2>");
					 gameDiv.append(question);

					 var answer1 = $("<button>", {id: "answer1", class:"answer"});
					 gameDiv.append(answer1);
					 answer1.html(questionArray[count].a1);
					 var answer2 = $("<button>", {id: "answer2", class:"answer"});
					 gameDiv.append(answer2);
					 answer2.html(questionArray[count].a2);
					 var answer3 = $("<button>", {id: "answer3", class:"answer"});
					 gameDiv.append(answer3);
					 answer3.html(questionArray[count].a3);
					 var answer4 = $("<button>", {id: "answer4", class:"answer"});
					 gameDiv.append(answer4);
					 answer4.html(questionArray[count].a4);

					 $(".answer").on("click", function guess(){

					 	

				 		var userGuess = this.id;

							if (userGuess == questionArray[count].correct) {
								
								wins++;
								answerScreen();
								clock.stop();
								// clearInterval(timerVal);
							}
							else
							{
								console.log(questionArray[count].correct);
								
								losses++;
								answerScreen();
								clock.stop();
								// clearInterval(timerVal);
							}
						}); 

					 function answerScreen(){

					 	clock.stop();
					 	var secondTimerVal = setTimeout(newQuestion, 5000);

					 	
					 	
					 	
					 	$(".answer").remove();
					 	$(".question").remove();
					 	$(".timer").remove();

					 	
					 	answerDiv.html(questionArray[count].key);

					 	gameDiv.append(answerDiv);
					 	console.log("Wins: " + wins + " --- Losses: " + losses + " --- unanswered: " + unanswered);
					 	
					 	count++;
					 	



					 }

			

				})
	

	 




	


})


