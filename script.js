// make a way for the computer to pull a result
//create an array with rock,paper and scissors for the computer to pull from.
const rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];

//create a function for the computer to get a random result from an array to play against user input
const rockButton = document.querySelector('#rockBtn');
const paperButton = document.querySelector('#paperBtn');
const scissorsButton = document.querySelector('#scissorsBtn');
let wins = 0;
let losses = 0;
let ties = 0;
let scoreP = document.createElement('p');
const container = document.querySelector('#scoreContainer');
const resultP = document.createElement('p');
scoreP.innerHTML = `The score is ${wins} - ${ties} - ${losses}`

rockButton.addEventListener('click', () => {
  playRound("rock");
  scoreP.innerHTML = `The score is ${wins} - ${ties} - ${losses}`;  
  container.appendChild(scoreP);
  gameOver();
  
});

paperButton.addEventListener('click', () => {
  playRound("paper");
  scoreP.innerHTML = `The score is ${wins} - ${ties} - ${losses}`;
  container.appendChild(scoreP);
  gameOver();
});

scissorsButton.addEventListener('click', () => {
  playRound("scissors");
  scoreP.innerHTML = `The score is ${wins} - ${ties} - ${losses}`;
  container.appendChild(scoreP);
  gameOver();
});









//get an input from a user of rock, paper, or scissors.
//prompt user to enter rock paper scissors to the console


//compare playerSelection with the computerSelection and return a result stating whether the player won or lost and the choice of the computer stated in a string. ex. "you lose _____ beats _____" or "You won! ______ beats ______"

// playRound function needs examples for wins and losses. Tie is taken care of


//--------Functions--------------




function compSelection () {
  return rockPaperScissors[(Math.floor(Math.random() * rockPaperScissors.length))];
}



function playRound(playerSelection) {
  const computerSelection = compSelection();
  playerSelection = playerSelection.toUpperCase();
  
  


  
  if(playerSelection == computerSelection) {
            resultP.textContent = tieMessage(playerSelection, computerSelection);
            container.appendChild(resultP);
            ++ties;
            return "tie";
  } else if (playerSelection == "ROCK"){
          if (computerSelection == "PAPER") {
            resultP.textContent = "You lose. Paper beats rock."
            ++losses;
            container.appendChild(resultP);
            return "loss";
          } else if (computerSelection == "SCISSORS"){
            resultP.textContent = "You win. Rock beats Scissors"
            ++wins;
            container.appendChild(resultP);
            return "win";
    }
  } else if (playerSelection == "PAPER"){
          if (computerSelection == "SCISSORS") {
            resultP.textContent = "You lose. Scissors beats paper."
            container.appendChild(resultP);
            losses++;
            return "loss";
          } else if(computerSelection == "ROCK") {
            resultP.textContent = "You win. Paper beats Rock"
            container.appendChild(resultP);
            wins++;
            return "win";
    }
  } else if (playerSelection == "SCISSORS") {
          if(computerSelection == "ROCK") {
            resultP.textContent = "You lose. Rock beats Scissors"
            container.appendChild(resultP);
            losses++;
            return "loss";
          } else if(computerSelection == "PAPER") {
            resultP.textContent = "You win. Scissors beats paper."
            container.appendChild(resultP);
            wins++;
            return "win";
          }

  }
  
}


function game(play) {
  
  let result = play();
  if(result == "tie"){
    tie++;
  } else if (result == "win"){
    win++;
    } else if (result == "loss"){
    loss++;
    }
    


  console.log(`You finished with ${win} wins, ${tie} tie, and ${loss} losses`)
}

function tieMessage(playerSelection, computerSelection){
  return `Its a tie! ${playerSelection} and ${computerSelection} cancel out!`
}

function gameOver() {
  if(wins >= 10) {
    resultP.textContent = "Game Over. You win!";
    scoreP.textContent = "";
    container.appendChild(scoreP);
    container.appendChild(resultP);

  }else if (losses >= 10) {
    resultP.textContent = "Game Over. You Lose!";
    scoreP.textContent = "";
    container.appendChild(scoreP);
    container.appendChild(resultP);
    }
  };






