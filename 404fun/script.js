console.log("Red team detected 👀 — check the DOM.");

const messages = [
  "Hmm… you like pressing buttons, huh?",
  "Assume breach. Always.",
  "Welcome to the lab 🛠 Red sees this.",
];

let clickCount = 0;

const button = document.getElementById("funButton");
const text = document.getElementById("secretText");

button.addEventListener("click", () => {
  clickCount++;

  if (clickCount <= messages.length) {
    text.textContent = messages[clickCount - 1];
    text.classList.remove("hidden");
  } else {
    text.textContent = "No more secrets here… or is there? 😏";
  }
});
