import {
  setSpeed,
  requestAnimationFrame,
  cancelAnimationFrame,
} from "./main.js";

const settingsBtn = document.getElementById("settings");
const settingsPanel = document.getElementById("settings-panel");
const close = document.getElementById("close-settings-popup");
const save = document.getElementById("save-settings");
const range = document.getElementById("range");

settingsBtn.onclick = popUpHandler;
close.onclick = popUpHandler;

function popUpHandler() {
  if (settingsPanel.classList.contains("open")) {
    settingsPanel.style.transform = "scale(0)";
    settingsPanel.classList.replace("open", "close");
    requestAnimationFrame();
  } else if (settingsPanel.classList.contains("close")) {
    settingsPanel.style.transform = "scale(1)";
    settingsPanel.classList.replace("close", "open");
    cancelAnimationFrame();
  }
}

save.onclick = saveSettingsChanges;
function saveSettingsChanges() {
  let speed = parseInt(range.value);
  setSpeed(speed);
  // Close the frame.
  popUpHandler();
}
