//my logic

//1. The user clicks the button *
//2. The quiz begins and the first question is displayed
//2a The timer starts and counts back from 30 seconds *

//if the user chooses the wrong answer then display a message at the
//bottom of the code that says 'wrong'

//then also decrease the timer by 10 seconds each time it's chosen incorrectly
//the next question won't appear if they get it wrong.

//if they choose the correct option then display a message at the bottom in green
//that will say 'Correct!'

//the score they get will be added to a variable which is accessible via the
//view high scores link.

//the next question in the array will display to the screen
//the timer will reset back to 30 seconds

//3. When all questions have been answered correctly:
//3a. A messaging saying 'all done!' will display
//3b. The total score they achieved will display under that
//3c. A text box will be there and a message asking them to enter their initials, with a
//submit button.
//if they click the button, the program will check first if they entered incorrect info
//if the use enters anything other than the initials it won't work and display an message
// that says please enter your initials
//3b. Once they enter the initials and click submit it will open a new webpage that will be displayed
// for the highscores called highscores.html

//4. When they click the clear highscores it should clear all the current data.

var questionsArr = [
  {
    question:
      "What is the best variable to use so that it can be used everywhere in the code?",
    answers: ["const", "var", "let", "run"],
    correctAnswer: "var",
  },

  {
    question: "Which one of the following is a Javascript loop?",
    answers: ["console.log", "var", "for", "loop"],
    correctAnswer: "for",
  },

  {
    question: "Which method is used to add a new item to an array?",
    answers: ["push()", "pop()", "snap()", "crackle()"],
    correctAnswer: "push()",
  },

  {
    question: "What is the syntax for a Javascript function?",
    answers: [
      "var function functionName() {}",
      "function functionName() {}",
      "functionName function() {}",
      "{function, functionName()}",
    ],
    correctAnswer: "function functionName() {}",
  },
];

//Creating variables
var countEl = document.querySelector("#time"); //link to the time ID in html
var startButton = document.getElementById("start"); //link to the start button
var startScreen = document.getElementById("start-screen"); //link to the first screen
var showElement = document.getElementById("questions"); //link to the questions div
var questionTitle = document.getElementById("question-title"); //link ro the title of the question
var choice = document.getElementById("choices"); //link to the choices div.
var finalScore = document.getElementById("final-score");
var showLastScreen = document.getElementById("end-screen");
var initialsInput = document.getElementById("initials");

var currentQuestion = 0; //variable to keep track of what question we are on
var secondsLeft = 30; //variable to start timer at 30 seconds.
var timerInterval; //variable to assign timer to
var score = 0; //variable to keep track of user's score
var scoreArr = []; //to hold the data of the initials and score

//Code to start game.
//1. User presses the start quiz button
//2. 30 second timer counts down
//3. First page is hidden
//4.Question and answer options appear
//5. Need to check their answer
//if its correct, add a point to score variable
//move to the next question
//reset the timer.

//---------------Game Start--------------//

//hide startscreen and show question screen then run updateCounter()
function startGame() {
  

  //takes the first variable created (so that we can target the html text content and manipulate it) then makes it equal to 1st element of the questions array and points to the question item in the object.
  questionTitle.textContent = questionsArr[currentQuestion].question;
  //
  choice.textContent = "";

  // displayCorrectOrWrong.textContent = "";

  // for loop to iterate through the array
  for (var i = 0; i < questionsArr[currentQuestion].answers.length; i++) {
    console.log("testing loop");
    //creating a button
    var button = document.createElement("button");

    //add the question in the array to the button created above
    //and make it show on the page using textContent.
    button.textContent = questionsArr[currentQuestion].answers[i];

    //assigns the choice answers to the button created and displays it on the page.
    choice.appendChild(button);

    //add event listener to do something once the buttons are clicked
    button.addEventListener("click", checkAnswer);
  }
}

// when start button clicked run function
  startButton.addEventListener("click", function () {
    startScreen.style.display = "none"; //hides startscrren
    showElement.style.display = "block"; //shows showElement which is linked to html questions div.
    startGame(); //calling start game function to begin the quiz.
    updateCounter(); //starts the timer countdown from 30 to 0.
  });

//function to check if the user's answer is correct.
function checkAnswer(event) {
  console.log("check answer function just ran");
  var displayCorrectOrWrong = document.getElementById("correctOrWrong");
  displayCorrectOrWrong.textContent;
  var selectedAnswer = event.target.textContent;
  // var scoreEl = document.getElementById("final-score");
  if (selectedAnswer === questionsArr[currentQuestion].correctAnswer) {
    displayCorrectOrWrong.textContent = "Correct!";
    displayCorrectOrWrong.style.color = "green";

    score++;
  } else {
    displayCorrectOrWrong.textContent = "Wrong!";
    displayCorrectOrWrong.style.color = "red";
    secondsLeft -= 10;
  }
  currentQuestion++;
  if (currentQuestion < questionsArr.length) {
    startGame();
  } else {
    endQuiz();
  }
}

function trackScore() {
  // document.getElementById("final-score").textContent = score;
  // const checkStorage = localStorage.getItem("initial",)
  // scoreArr.push({score: score, initials: initials});
  // console.log("This is the output of the array" + JSON.stringify(scoreArr));
  var userInitials = initialsInput.value; //assigns initials user inputs to a variable.
  if (userInitials === null || userInitials.length > 3) {
    //do something here
    alert("You entered an invalid entry, please try again");
    return;
  }
  let anotherUser = { score, userInitials }; //create a new array with the score and initials entered by the user
  let existingScores = JSON.parse(localStorage.getItem("scores")); //

  //if the existing score is equal to an empty string then
  if (existingScores == null) {
    existingScores = [anotherUser];
  } else {
    existingScores.push(anotherUser);
  }
  localStorage.setItem("scores", JSON.stringify(existingScores));

  //where are the initials and score stored?
  //score = score, initials = userInitials.
  // put it into the empty array (scoreArr)
  //display the array to the screen into the 'final-score'
}

function navigateToPage() {
  window.location.href = "highscores.html";
}

//Update counter on page
function updateCounter() {
  timerInterval = setInterval(function () {
    secondsLeft--;

    if (secondsLeft < 0) {
      clearInterval(timerInterval);
      endQuiz();
    } else {
    countEl.textContent = secondsLeft;

    }
  }, 1000);
  //seconds left needs to count down from 30
}

function endQuiz() {
  // var initials = prompt("Game finished, please enter your initials:"); //change this to the second page
  
    showElement.style.display = "none"; //hides the questions
    showLastScreen.style.display = "block"; //shows the last screen.
    document.getElementById("final-score").textContent = score;
    // document.getElementById("highscores").textContent = userInitials;
  }


//should change  
document.getElementById('submit').addEventListener('click', function() {
  trackScore();
  navigateToPage();

});



/////////////BUTTONS////////////////
//need to create 4 buttons
//the buttons need to link to each individual answer
//the buttons need to display in a column
//there needs to be something checking if the right answer has been chosen
//else display the message 'Wrong!'
//then deduct 15 seconds from the timer.

// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock

// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score
