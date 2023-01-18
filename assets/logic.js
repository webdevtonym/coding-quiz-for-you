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

var countEl = document.querySelector("#time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var showElement = document.getElementById("questions");

var currentQuestion = 0;
var secondsLeft = 30;
var timerInterval;
var score = 0;

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

// Create a code quiz tha at contains the following requirements:

//Update counter on page
function updateCounter() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        countEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    } ,1000)
  //seconds left needs to count down from 30
 
}

function endQuiz() {
    var initials = prompt("Please enter your initials:");//change this to the second page
    if(initials != null) {
        //do something here
    }
}

function displayQuestion() {

    startScreen.style.display = "block"; //show startscreen
    showElement.style.display = "none"; // hide startscreen
    startButton.addEventListener("click", function() { // when start button clicked run function
        console.log("button works");
        startScreen.style.display = "none";
        showElement.style.display = "block";
        updateCounter();
        showElement();

    });
  //assigns a new variable to the h2 id of the questions div
  var questionTitle = document.getElementById("question-title");

  //assigns a new variable to the id choices child div of parent div questions
  var choice = document.getElementById("choices");

  //takes the first variable created (so that we can target the html text content and manipulate it) then makes it equal to 1st element of the questions array and points to the question item in the object.
  questionTitle.textContent = questionsArr[currentQuestion].question;

  choice.textContent = "";


  // for loop to iterate through the array
  for (var i = 0; i < questionsArr[currentQuestion].answers.length; i++) {

    //create buttons
    var button = document.createElement('button');

    //add questions in array to the button and make it show on the page using textContent.
    button.textContent = questionsArr[currentQuestion].answers[i];

    //add event listener to do something once the buttons are clicked
    button.addEventListener("click", checkAnswer);

    choice.appendChild(button);
  }

}

displayQuestion();
function checkAnswer(event){
    var selectedAnswer = event.target.textContent;
    if(selectedAnswer === questionsArr[currentQuestion].correctAnswer) {
        score++;
    } else {
        secondsLeft -= 10;
    }
    currentQuestion++;
    if(currentQuestion < questionsArr.length) {
        displayQuestion();
    } else {
        endQuiz();
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
