import {
  playKeyPressAudio
} from './sound.js';

let inputValue = {
    x: 0,
    y: 0
  },
  perviousMovement = "";

window.addEventListener("keyup", (event) => {
  let code = event.keyCode;
  if ((code === 37 || code === 65) && perviousMovement !== "H") {
    // Go left
    inputValue = {
      x: -1,
      y: 0
    };
    perviousMovement = "H"; // Horizontally
    playKeyPressAudio();
  }
  if ((code === 39 || code === 68) && perviousMovement !== "H") {
    // Go right
    inputValue = {
      x: 1,
      y: 0
    };
    perviousMovement = "H"; // Horizontally
    playKeyPressAudio();
  }
  if ((code === 38 || code === 87) && perviousMovement !== "V") {
    // Go up
    inputValue = {
      x: 0,
      y: -1
    };
    perviousMovement = "V"; // Vertically
    playKeyPressAudio();
  }
  if ((code === 40 || code === 83) && perviousMovement !== "V") {
    // Go down
    inputValue = {
      x: 0,
      y: 1
    };
    perviousMovement = "V"; // Vertically
    playKeyPressAudio();
  }
});

export function getInput() {
  return inputValue;
}

export function resetConfig() {
  inputValue = {
    x: 0,
    y: 0
  }
  perviousMovement = "";
}