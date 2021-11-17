const eatAppleAudio = document.getElementById("eating-apple-audio");
const keyPressAudio = document.getElementById("click-audio");
const gameOverAudio = document.getElementById("game-over-audio")

export function playEatingAppleSound() {
    eatAppleAudio.play();
    setTimeout(() => {
        eatAppleAudio.pause();
        eatAppleAudio.load();
    }, 200);
}

export function playKeyPressAudio() {
    keyPressAudio.play();
    setTimeout(() => {
        keyPressAudio.pause();
        keyPressAudio.load();
    }, 300);
}

export function playGameOverAudio() {
    gameOverAudio.play();
}