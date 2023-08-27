"use strict";
// Understanding the Problem
// 1.Rock Paper Scissor game
// 2.Playing against computer
// 3.5 Rounds
// 4.Declare who wins the round after each round
// 5.Declare the winner in the end
// 6.Draws dont count as a round
// ----------------------------------------------
// Sub-sections
// 1.a function called getComputerChoice that returns either rock,paper or scissor
// 2.a function called playround that takes user and computer choice and determines the winner of round
// 3.a function called game that is inside of the play function and determines the winner by repeating it five times

function getComputerChoice() {
  let x = Math.floor(Math.random() * 3) + 1;
  if (x === 1) return "Rock";
  else if (x === 2) return "Paper";
  else return "Scissor";
}

function getPlayerChoice() {
  let x = prompt("Enter your choice");
  if (x === "Rock" || x === "rock" || x === "ROCK") return "Rock";
  if (x === "Paper" || x === "paper" || x === "PAPER") return "Paper";
  if (x === "Scissor" || x === "scissor" || x === "SCISSOR") return "Scissor";
}

function play(p, c) {
  let cwin = "Computer wins!!";
  let pwin = "PLayer wins!!";
  if (p == "Scissor" && c == "Paper") return cwin;
  else if (c == "Scissor" && p == "Paper") return pwin;
  else if (c == "Rock" && p == "Paper") return pwin;
  else if (p == "Rock" && c == "Paper") return cwin;
  else if (p == "Rock" && c == "Scissor") return pwin;
  else if (p == "Scissor" && c == "Rock") return cwin;
  else return "Draw!";
}

let counterPlayer = 0;
let counterComputer = 0;

function game() {
  let cwin = "Computer wins!!";
  let pwin = "PLayer wins!!";
  let p = getPlayerChoice();
  let c = getComputerChoice();
  //   console.log(p);
  //   console.log(c);
  let round = play(p, c);
  if (round === cwin) counterComputer++;
  else if (round === pwin) counterPlayer++;
  console.log(round);
  console.log(counterPlayer, counterComputer);
  return 1;
}

for (
  counterComputer, counterPlayer;
  counterComputer != 5, counterPlayer != 5;

) {
  game();
}

if (counterComputer === 5) console.log("Computer Won!! 💻");
if (counterPlayer === 5) console.log("Player Won!! 🫅");
