import { spawn as dotSpawn } from "./dot.js"
import { spawn as playerSpawn } from "./player.js"
import { isGameStarted as isGameStarted } from "./player.js"
import { getHex as getHex } from "./randomHexColor.js";
import { difficulty as difficulty } from "./difficultyButtons.js";
import { Countdown as Countdown } from './countdown.js';
import * as Points from "./points.js"

const BACKGROUND_COLOR = document.getElementById("game-container").style.backgroundColor;

//Assignes the startGame() function to the start button
document.getElementById("start").addEventListener('click', () => startGame())

//Assignes the endGame() function to the end button
document.getElementById("end").addEventListener('click', () => endGame())

//Setting the intervals to standard functions before the game is started
let spawnInterval = () => 0;
let checkForPointsInterval = () => 0;

//Creating an instance of the Countdown class
const COUNTDOWN = new Countdown(2, 0, "countdown", endGame)

//Assigning constats for the styles of the player and opponent
const PLAYER_STYLE = document.getElementById("player").style
const DOT_STYLE = document.getElementById("dot").style

const POINTS_DISPLAY = document.getElementById("points");

/**
 * Starts the game if it is not already started
 */
function startGame() {
  if (isGameStarted.value) return;
  isGameStarted.value = true;

  POINTS_DISPLAY.innerText = "Points: 0";

  //Sets the players style to a pseudo random hex
  PLAYER_STYLE.backgroundColor = getHex()
  DOT_STYLE.backgroundColor = `black`

  //Spawns the player and dot
  playerSpawn()
  dotSpawn()

  //Sets the interval for spawning the dot
  spawnInterval = setInterval(dotSpawn, difficulty)

  //Sets the interval for checking for points
  checkForPointsInterval = setInterval(Points.incrementPoints, 10)

  COUNTDOWN.startCountdown();
}

/** 
 * Ends the game if not already ended
 */
function endGame() {
  if (!isGameStarted.value) return;
  isGameStarted.value = false;

  //Sets a default position for the player to rest while the game is inactive
  //Thus hindering situation were the player would be left a little outside the border
  PLAYER_STYLE.left = `${175}px`;
  PLAYER_STYLE.top = `${175}px`;

  //Switches the player's and dot's color to mesh with the background
  PLAYER_STYLE.backgroundColor = BACKGROUND_COLOR
  DOT_STYLE.backgroundColor = BACKGROUND_COLOR

  COUNTDOWN.reset()

  POINTS_DISPLAY.innerText = `Points: ${Points.getPoints()}`;
  Points.setPoints(0);
  clearInterval(spawnInterval)
  clearInterval(checkForPointsInterval)
}