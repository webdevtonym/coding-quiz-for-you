function displayUserScore(userScores) {
   var elOL = document.getElementById('highscores');
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

