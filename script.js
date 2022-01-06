// As a user, I want to play Rock, Paper, Scissors against an automated opponent.
  // we need our options Rock. Paper. Scissors
    // we can select from this
    // computer can select from this

// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.
  // R, P, S respresents Rock, Paper, Scissors.
  // nice to show what each player chose

// As a user, I expect the computer to choose R, P, or S in return.

// As a user, I want the option to play again whether I win or lose.

  // will show win or lose

// As a user, I want to see my `total wins, ties, and losses` after each round.

// Scoreboard start
var wins = 0;
var ties = 0;
var losses = 0;

// Options available for 
var options = ["R", "P", "S"];

var playGame = function () {
  var userChoice = window.prompt("Enter R, P, or S:");

  if (!userChoice) {
    return;
  }

// Make all of userchoice selection uppercase
  userChoice = userChoice.toUpperCase();