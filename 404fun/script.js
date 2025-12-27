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

// DevTools easter egg
if (window.outerWidth - window.innerWidth > 160) {
  console.log(
    "%cYou’re not just curious. You’re dangerous 😈",
    "color: red; font-size: 16px; font-weight: bold;"
  );
}

// Konami Code
const konami = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let position = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === konami[position]) {
    position++;
    if (position === konami.length) {
      alert("🎯 Red access granted.");
      position = 0;
    }
  } else {
    position = 0;
  }
});
