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

var currentQuestion = 0; //variable to keep track of what question we are on
var secondsLeft = 30; //variable to start timer at 30 seconds.
var timerInterval; //variable to assign timer to
var score = 0; //variable to keep track of user's score


//Code to start game.

//1. User pressed the start quiz button
//2. 30 second timer counts down
//3. First page is hidden
//4.Question and answer options appear
//5. Need to check their answer 
    //if its correct, add a point to score variable
        //move to the next question
        //reset the timer.

startGame(); //calling start game function to begin the quiz.

//hide startscreen and show question screen then run updateCounter()
//
function startGame() {
  // when start button clicked run function
  startButton.addEventListener("click", function () {
    startScreen.style.display = "none"; //hides startscrren
    showElement.style.display = "block"; //shows showElement which is linked to html questions div.
    updateCounter(); //starts the timer countdown from 30 to 0.
  });


  //takes the first variable created (so that we can target the html text content and manipulate it) then makes it equal to 1st element of the questions array and points to the question item in the object.
  questionTitle.textContent = questionsArr[currentQuestion].question;
  //
  choice.textContent = "";

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

//function to check if the user's answer is correct.
function checkAnswer(event) {
 console.log("check answer");
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
    secondsLeft - 10;

  }
  currentQuestion++;
  if (currentQuestion < questionsArr.length) {
    startGame();
  } else {
    endQuiz();
  }
}

//Update counter on page
function updateCounter() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    countEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
  //seconds left needs to count down from 30
}

function endQuiz() {
  var initials = prompt("Game finished, please enter your initials:"); //change this to the second page
  if (initials === null) {
    //do something here
    alert("You entered an invalid entry, please try again");
  } else {
    alert(initials);
    window.location.href = "highscores.html";

  }

}




/////////////BUTTONS////////////////
//need to create 4 buttons
//the buttons need to link to each individual answer
//the buttons need to display in a column
//there needs to be something checking if the right answer has been chosen
//else display the message 'Wrong!'
//then deduct 15 seconds from the timer.

// A start button that when clicked a timer starts and the first question appears.
var startButton = document.getElementById("start");

// function startQuiz() {
//   console.log("startQuiz function is running");
//   startButton.addEventListener("click", function () {
//     updateCounter();
//     console.log("button is working");
//     startScreen.remove(); //works
//     // Questions to display
//     if ((showElement.style.display = "none")) {
//       showElement.style.display = "block";
//     }
//   });
//   displayQuestion();
// }

// startQuiz();

// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock

// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score
