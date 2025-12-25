function unlock() {
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;
  const year = document.getElementById("year").value;

  if (month == 12 && day == 31 && year == 2024) {
    document.getElementById("lock-screen").classList.add("hidden");
    document.getElementById("letter-screen").classList.remove("hidden");

    const music = document.getElementById("music");
    music.volume = 0.25;
    music.play();

    startHearts();
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
