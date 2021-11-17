import {
  getInput
} from "./input.js";

import {
  putFood,
  getRandomCoordinate
} from './food.js';
import {
  playEatingAppleSound
} from "./sound.js";

const buttonContainer = document.querySelector("#button-container");
const gameStartBtn = document.querySelector("#game-start-btn");
const gameDisplayArea = document.querySelector("#game-display-area");
const displayScoreArea = document.querySelector(".score div[displayScoreArea]")
const gameBoardDimension = 30;
const SNAKE_SPEED = 10;

let myRequest;
let food = null;
let foodCoordinate = {
  x: 0,
  y: 0
};
let snakeSegments = [getRandomCoordinate(gameBoardDimension)];

// When start button pressed, game is started.
gameStartBtn.onclick = () => {
  myRequest = window.requestAnimationFrame(gameLoop);
  buttonContainer.style.transform = "scale(0)";
}

let endTime = 0;

function gameLoop(currentTime) {
  myRequest = window.requestAnimationFrame(gameLoop);
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

  // Check you are losing or not.
  checkLosing(snakeSegments[0].x, snakeSegments[0].y);

  // If head of snake reaches to the food run following statements.
  if (snakeSegments[0].y === foodCoordinate.x && snakeSegments[0].x === foodCoordinate.y) {
    playEatingAppleSound();
    displayScoreArea.textContent = parseInt(displayScoreArea.textContent) + 1;

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

function checkLosing(row, column) {
  if (row > 30 || row < 0 || column > 30 || column < 0) {
    window.cancelAnimationFrame(myRequest);
    return;
  }

  let headRow = snakeSegments[0].x;
  let headColumn = snakeSegments[0].y;
  for (let i = 1; i < snakeSegments.length; i++) {
    if (headRow === snakeSegments[i].x && headColumn === snakeSegments[i].y) {
      window.cancelAnimationFrame(myRequest);
      return;
    }
  }
}