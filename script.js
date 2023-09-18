// make a way for the computer to pull a result
//create an array with rock,paper and scissors for the computer to pull from.
const rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];

//create a function for the computer to get a random result from an array to play against user input



//get an input from a user of rock, paper, or scissors.
//prompt user to enter rock paper scissors to the console


//compare playerSelection with the computerSelection and return a result stating whether the player won or lost and the choice of the computer stated in a string. ex. "you lose _____ beats _____" or "You won! ______ beats ______"

// playRound function needs examples for wins and losses. Tie is taken care of
function compSelection () {
  return rockPaperScissors[(Math.floor(Math.random() * rockPaperScissors.length))];
}



function playRound() {
  let playerSelection = prompt("Enter your choice: Rock, Paper or Scissors");
  const computerSelection = compSelection();
  playerSelection = playerSelection.toUpperCase();
  
  if(playerSelection == computerSelection) {
            console.log(tieMessage(playerSelection, computerSelection));
            return "tie";
  } else if (playerSelection == "ROCK"){
          if (computerSelection == "PAPER") {
            console.log("You lose. Paper beats rock.")
            return "loss";
          } else if (computerSelection == "SCISSORS"){
            console.log("You win. Rock beats Scissors");
            return "win";
    }
  } else if (playerSelection == "PAPER"){
          if (computerSelection == "SCISSORS") {
            console.log("You lose. Scissors beats paper.")
            return "loss";
          } else if(computerSelection == "ROCK") {
            console.log("You win. Paper beats Rock")
            return "win";
    }
  } else if (playerSelection == "SCISSORS") {
          if(computerSelection == "ROCK") {
            console.log("You lose. Rock beats Scissors")
            return "loss";
          } else if(computerSelection == "PAPER") {
            console.log("You win. Scissors beats paper.")
            return "win";
          }
  }
}


function game(play) {
  let win = 0;
  let loss = 0;
  let tie = 0;
  
  let result = play();
  if(result == "tie"){
    tie++;
  } else if (result == "win"){
    win++;
    } else if (result == "loss"){
    loss++;
    }
  
  result = play();
  if(result == "tie"){
    tie++;
  } else if (result == "win"){
    win++;
    } else if (result == "loss"){
    loss++;
    }
  
  result = play();
  if(result == "tie"){
    tie++;
  } else if (result == "win"){
    win++;
    } else if (result == "loss"){
    loss++;
    }
  
  result = play();
  if(result == "tie"){
    tie++;
  } else if (result == "win"){
    win++;
    } else if (result == "loss"){
    loss++;
    }
  
  result = play();
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

game(playRound)



