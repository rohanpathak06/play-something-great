const games = [
  {
    name: "Stardew Valley",
    mood: "relax",
    platform: "pc",
    genre: "Simulation",
    desc: "A peaceful farming game that melts stress away."
  },
  {
    name: "Valorant",
    mood: "competitive",
    platform: "pc",
    genre: "FPS",
    desc: "Tactical shooter that rewards skill and teamwork."
  },
  {
    name: "The Witcher 3",
    mood: "story",
    platform: "console",
    genre: "RPG",
    desc: "A rich story with unforgettable characters."
  },
  {
    name: "Subway Surfers",
    mood: "casual",
    platform: "mobile",
    genre: "Endless Runner",
    desc: "Quick fun anytime, anywhere."
  },
  {
    name: "Clash Royale",
    mood: "competitive",
    platform: "mobile",
    genre: "Strategy",
    desc: "Fast-paced strategy battles in short sessions."
  }
];

function recommendGame() {
  const mood = document.getElementById("mood").value;
  const platform = document.getElementById("platform").value;
  const resultDiv = document.getElementById("result");

  if (!mood || !platform) {
    alert("Please select mood and platform");
    return;
  }

  const filtered = games.filter(
    game => game.mood === mood && game.platform === platform
  );

  if (filtered.length === 0) {
    resultDiv.innerHTML = "😕 No recommendation found.";
  } else {
    const game = filtered[Math.floor(Math.random() * filtered.length)];
    resultDiv.innerHTML = `
      <h2>${game.name}</h2>
      <p><b>Genre:</b> ${game.genre}</p>
      <p>${game.desc}</p>
    `;
  }

  resultDiv.classList.remove("hidden");
}
