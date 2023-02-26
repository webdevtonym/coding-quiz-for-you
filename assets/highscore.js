function displayUserScore(userScores) {

    //creating variable for html element
   var elOL = document.getElementById('highscores');
   //for loop used to iterate through the array so we can append the elements to the page.
   for(i = 0; i < userScores.length; i++) {
    var li = document.createElement('li');
    li.textContent = "Player: | " + userScores[i].userInitials + " | Score: " + userScores[i].score;
    elOL.appendChild(li);
   }
}

function init(){
    var getLocalStorageScore = localStorage.getItem('scores');
    if(getLocalStorageScore == null){
        return;
    }
    var userScores = JSON.parse(getLocalStorageScore);
    console.log(userScores);
    displayUserScore(userScores);
}

init();

//should remove localstorage initials and score when button clicked
document.getElementById('clear').addEventListener('click', function(userScores){
    //gets the array and sets it to a usable variable
    var userScores = localStorage.getItem('scores');
    // clears all local storage pertaining to the scores key name
  localStorage.clear(userScores);
  //reloads the webpage so user can see they have cleared the highscores
  window.location.reload();
});
