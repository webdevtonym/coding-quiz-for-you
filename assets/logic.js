var count = 0;
var incrementEl = document.querySelector();
var decrementEl = document.querySelector();
var countEl = document.querySelector("#time");


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

// Create a code quiz that contains the following requirements:


//Update counter on page
function setCounterText(){
    countEl.textContent = count;

}


// A start button that when clicked a timer starts and the first question appears.
var startButton = document.getElementById('start');
startButton.addEventListener('click', function(){
    count++;
    console.log("event listener click event working")

});

function timer(startButton) {
    if(startButton) {
        console.log("button clicked")
    }

    // if (clicked === null) {
    //   time--;
    // 

}

    // Questions contain buttons for each answer.
    // When answer is clicked, the next question appears
    // If the answer clicked was incorrect then subtract time from the clock
    

// The quiz should end when all questions are answered or the timer reaches 0.

    // When the game ends, it should display their score and give the user the ability to save their initials and their score