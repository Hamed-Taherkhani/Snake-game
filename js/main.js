import {
  getInput,
  resetConfig
} from "./input.js";

import {
  putFood,
  getRandomCoordinate
} from './food.js';

import {
  playEatingAppleSound,
  playGameOverAudio,
  playWinningAudio
} from "./sound.js";

const buttonContainer = document.querySelector("#button-container");
const gameStartBtn = document.querySelector("#game-start-btn");
const gameDisplayArea = document.querySelector("#game-display-area");
const scoreDisplayArea = document.querySelector(".score div[scoreDisplayArea]")
const gameOverPanel = document.querySelector("#game-over-options");
const winningPanel = document.querySelector("#winning-panel")
const replayBtn = document.querySelector("#game-over-options button");
const replayBtn0 = document.querySelector("#winning-panel button");
const gameBoardDimension = 30;

let SNAKE_SPEED = 6;
let myRequest;
let food = null;
let foodCoordinate = {
  x: 0,
  y: 0
};
export let snakeSegments = [];
snakeSegments[0] = getRandomCoordinate(gameBoardDimension);

// When start button pressed, game is started.
gameStartBtn.onclick = () => {
  requestAnimationFrame();
  buttonContainer.style.transform = "scale(0)";
}

// When you lose, you have replaying option.
replayBtn.onclick = () => {
  resetConfig();
  gameOverPanel.style.transform = ("scale(0)");
  snakeSegments = [getRandomCoordinate(gameBoardDimension)];
  requestAnimationFrame();
}

// When you win, you have replaying option.
replayBtn0.onclick = () => {
  resetConfig();
  winningPanel.style.transform = ("scale(0)");
  snakeSegments = [getRandomCoordinate(gameBoardDimension)];
  requestAnimationFrame();
}

let endTime = 0;

function gameLoop(currentTime) {
  requestAnimationFrame();
  let interval = (currentTime - endTime) / 1000;
  if (interval < 1 / SNAKE_SPEED) return;

  update();
  render();
  endTime = currentTime;
}

function update() {
  const input = {
    ...getInput()
  };

  for (let i = snakeSegments.length - 2; i >= 0; i--) {
    snakeSegments[i + 1] = {
      ...snakeSegments[i]
    };
  }

  snakeSegments[0].x += input.x;
  snakeSegments[0].y += input.y;

  // Check you are winner or not.
  checkWinning();

  // Check you are losing or not.
  checkLosing(snakeSegments[0].x, snakeSegments[0].y);

  // If head of snake reaches to the food run following statements.
  if (snakeSegments[0].y === foodCoordinate.x && snakeSegments[0].x === foodCoordinate.y) {
    playEatingAppleSound();
    scoreDisplayArea.textContent = parseInt(scoreDisplayArea.textContent) + 1;

    // Remove currently food.
    gameDisplayArea.removeChild(food);
    // Activate creating new food.
    newFood = true;

    let length = snakeSegments.length;
    snakeSegments.push({
      x: snakeSegments[length - 1].x - input.x,
      y: snakeSegments[length - 1].y - input.y
    });
  }
}

let newFood = true;

function render() {
  // Remove all component inside the game main board(game display area).
  gameDisplayArea.innerHTML = "";

  if (newFood === true) {
    foodCoordinate = getRandomCoordinate(gameBoardDimension);
    newFood = false;
  }
  food = putFood(foodCoordinate, gameDisplayArea);

  // Render and put every new component inside game main board.
  snakeSegments.forEach((value) => {
    let newSegment = document.createElement("div");
    newSegment.classList.add("snake-body");
    newSegment.style.gridRowStart = value.y;
    newSegment.style.gridColumnStart = value.x;
    gameDisplayArea.appendChild(newSegment);

    if (value === snakeSegments[0]) {
      newSegment.classList.add("head");
    }
  });
}

function checkWinning() {
  let snakeLength = snakeSegments.length;
  let numOfBoardCells = gameBoardDimension * gameBoardDimension;

  if (snakeLength === numOfBoardCells) {
    winningPanel.style.transform = "scale(1)";
    cancelAnimationFrame();
    scoreDisplayArea.textContent = 0;
    playWinningAudio();
  }
}

function checkLosing(row, column) {
  let isLost = false;
  if (row > gameBoardDimension || row < 0 || column > gameBoardDimension || column < 0) {
    isLost = true;
  }

  if (!isLost) {
    let headRow = snakeSegments[0].x;
    let headColumn = snakeSegments[0].y;
    for (let i = 1; i < snakeSegments.length; i++) {
      if (headRow === snakeSegments[i].x && headColumn === snakeSegments[i].y) {
        isLost = true;
        break;
      }
    }
  }

  if (isLost) {
    cancelAnimationFrame();
    gameOverPanel.style.transform = "scale(1)";
    playGameOverAudio();

    // Return game score to zero.
    scoreDisplayArea.textContent = 0;
  }
}

export function setSpeed( value){
    SNAKE_SPEED = value;
}

export function requestAnimationFrame(){
  myRequest = window.requestAnimationFrame(gameLoop);
}

export function cancelAnimationFrame(){
  window.cancelAnimationFrame(myRequest);
}