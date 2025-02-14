const lyrics = document.querySelectorAll(".lyrics p");
const first = document.querySelector(".first");
const container = document.querySelector(".lyrics-container");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
let currentIndex = 0; // Commencer au premier paragraphe

function updateLyrics() {
  // Retirer la classe 'active' de tous les paragraphes
  lyrics.forEach((p) => p.classList.remove("active"));

  // Ajouter la classe 'active' au paragraphe actuel
  lyrics[currentIndex].classList.add("active");

  // Passer au paragraphe suivant
  currentIndex = (currentIndex + 1) % lyrics.length;
}

// Changer de paragraphe toutes les 2 secondes
setInterval(updateLyrics, 7000);

// Initialiser l'affichage du premier paragraphe
updateLyrics();

yes.addEventListener("click", () => {
  first.style.display = "none";
  container.style.display = "block";
  confetti({
    particleCount: 300,
    spread: 100,
    origin: { y: 0.6 },
  });
});
no.addEventListener("click", () => {
  alert("It's not an option please try again");
});
