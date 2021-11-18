const eatAppleAudio = document.getElementById("eating-apple-audio");
const keyPressAudio = document.getElementById("click-audio");
const gameOverAudio = document.getElementById("game-over-audio");
const winningAudio = document.getElementById("winning-audio");

const soundStateBtn = document.querySelector("#sound-state button");
const soundOnIcon = document.getElementById("sound-on-icon");
const soundOffIcon = document.getElementById("sound-off-icon");

export function playEatingAppleSound() {
    eatAppleAudio.play();
}

export function playKeyPressAudio() {
    keyPressAudio.play();
}

export function playGameOverAudio() {
    gameOverAudio.play();
}

export function playWinningAudio() {
    winningAudio.play();
}

// To turn on or off the sounds of game.
let isSoundOn = true;
soundStateBtn.onclick = () => {
    if (isSoundOn === true) {
        eatAppleAudio.volume = 0;
        keyPressAudio.volume = 0;
        gameOverAudio.volume = 0;
        winningAudio.volume = 0;
        soundOnIcon.style.display = "none";
        soundOffIcon.style.display = "inline-block";
        isSoundOn = false;
    } else {
        eatAppleAudio.volume = 1;
        keyPressAudio.volume = 1;
        gameOverAudio.volume = 1;
        winningAudio.volume = 1;
        soundOnIcon.style.display = "inline-block";
        soundOffIcon.style.display = "none";
        isSoundOn = true;
    }
}