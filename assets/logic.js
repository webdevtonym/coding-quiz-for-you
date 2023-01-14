// import {questionsArr} from "./questions";

var countEl = document.querySelector("#time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");

var secondsLeft = 30;

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//my logic

//1. The user clicks the button *
//2. The quiz begins and the first question is displayed
//2a The timer starts and counts back from 30 seconds.
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

// Create a code quiz that contains the following requirements:

//Update counter on page
function updateCounter(){
    //seconds left needs to count down from 30 
    countEl.textContent = secondsLeft
}

// A start button that when clicked a timer starts and the first question appears.
var startButton = document.getElementById("start");



// function startQuiz() {
//   var secondsLeft = 30;
//   startButton.addEventListener("click", function () {
//     updateCounter();
//     var timerInterval = setInterval(function () {
//       secondsLeft--;
//       countEl.textContent = secondsLeft;
//       if (secondsLeft === 0) {
//         clearInterval(timerInterval);
//       }
//     });
//   });

  function startQuiz(){
    console.log("startQuiz function is running");
    startButton.addEventListener('click', function(){
    console.log("button is working");
    startScreen.remove(); //works
    // next need to get the questions to display
    
    

    
    
    })
    }


    //question div


  startQuiz();

  // if (clicked === null) {
  //   time--;
  //


// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock

// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score
