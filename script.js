// As a user, I want to see my `total wins, ties, and losses` after each round.
// Scoreboard start
var wins = 0;
var ties = 0;
var losses = 0;

// As a user, I want to play Rock, Paper, Scissors against an automated opponent.
// Options available for
var options = ["R", "P", "S"];

var playGame = function () {
  var userChoice = window.prompt("Enter R, P, or S:");
  // As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

  // In case user cancels
  if (!userChoice) {
    return;
  }

  // Makes all of userchoice selection uppercase
  userChoice = userChoice.toUpperCase();

  // As a user, I expect the computer to choose R, P, or S in return.
  // Computer Plays
  // Create random index for computer to choose
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  // If choices are same, tie
  if (userChoice === computerChoice) {
    ties++; //increments Tie score
    window.alert("It's a tie!");

    // check win conditions, win
  } else if (
    // using evalutation operators?
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    win++;
    window.alert("You win!");

    // player loss if different from above
  } else {
    losses++;
    window.alert("You lost!");
  }

  // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  // As a user, I want the option to play again whether I win or lose.

  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
};

playGame();
