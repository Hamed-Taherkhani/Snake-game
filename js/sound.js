const eatAppleAudio = document.getElementById("eating-apple-audio");
const keyPressAudio = document.getElementById("click-audio");

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