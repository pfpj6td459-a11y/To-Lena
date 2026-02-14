const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWin = document.querySelector(".letter-window");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// 1. Open Envelope
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";
  setTimeout(() => {
    letterWin.classList.add("open");
  }, 50);
});

// 2. The Invincible "No" Button Logic
const moveNoButton = (e) => {
  if (e) e.preventDefault();

  // Teleport to a random spot on the entire screen
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.zIndex = "9999";
};

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton); // Fix for mobile
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

// 3. "Yes" Button Clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "Yayyyyyyyyyy!!! ❤️";
  catImg.src = "cat_dance.gif"; // Make sure this file exists!
  buttons.style.display = "none";
  finalText.style.display = "block";
  letterWin.classList.add("final");
});
