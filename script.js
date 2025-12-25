function unlock() {
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;
  const year = document.getElementById("year").value;

  if (month == 12 && day == 31 && year == 2024) {
    // Esconde el lock-screen y muestra el letter-screen
    document.getElementById("lock-screen").style.display = "none"; 
    document.getElementById("letter-screen").style.display = "block"; 

    const music = document.getElementById("music");
    music.volume = 0.25;  // Volume 25%
    music.play();  // Reproduce la canción

    startHearts();  // Comienza los corazones flotando
  } else {
    document.getElementById("error").innerText = "Wrong date 💔";
  }
}

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = "22px";
    document.body.appendChild(heart);

    let pos = -20;
    const float = setInterval(() => {
      pos += 2;
      heart.style.bottom = pos + "px";
      if (pos > window.innerHeight) {
        heart.remove();
        clearInterval(float);
      }
    }, 20);
  }, 300);
}
