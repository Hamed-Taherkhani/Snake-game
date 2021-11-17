const eatAppleAudio = document.getElementById("eating-apple-audio");
const keyPressAudio = document.getElementById("click-audio");
const gameOverAudio = document.getElementById("game-over-audio");

const soundStateBtn = document.querySelector("#sound-state button");
const soundOnButton = document.getElementById("sound-on-icon");
const soundOffButton = document.getElementById("sound-off-icon");

export function playEatingAppleSound() {
    eatAppleAudio.play();
}

export function playKeyPressAudio() {
    keyPressAudio.play();
}

export function playGameOverAudio() {
    gameOverAudio.play();
}

// To turn on or off the sounds of game.
let isSoundOn = true;
soundStateBtn.onclick = () => {
    if (isSoundOn === true) {
        eatAppleAudio.volume = 0;
        keyPressAudio.volume = 0;
        gameOverAudio.volume = 0;
        soundOnButton.style.display = "none";
        soundOffButton.style.display = "inline-block";
        isSoundOn = false;
    } else {
        eatAppleAudio.volume = 1;
        keyPressAudio.volume = 1;
        gameOverAudio.volume = 1;
        soundOnButton.style.display = "inline-block";
        soundOffButton.style.display = "none";
        isSoundOn = true;
    }
}