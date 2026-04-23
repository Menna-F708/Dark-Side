function openCardPage(imageSrc) {
  window.location.href = "card.html?img=" + encodeURIComponent(imageSrc);
}

document.addEventListener("DOMContentLoaded", () => {

  // ================= ELEMENTS =================
  const intro = document.querySelector(".intro");
  const playBtn = document.getElementById("playVideoBtn");
  const introVideo = document.getElementById("introVideo");
  const site = document.getElementById("site");

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // ================= SITE INITIAL STATE =================
  if (site) {
    site.style.display = "none";
  }

  // ================= INTRO LOGIC =================
  const introPlayed = sessionStorage.getItem("introPlayed");

  if (introPlayed) {
    if (intro) intro.style.display = "none";
    if (site) site.style.display = "flex";
  } else {
    if (introVideo) {
      introVideo.muted = true;
      introVideo.loop = true;

      introVideo.play().catch(() => {});
    }

    if (playBtn) {
      playBtn.addEventListener("click", () => {

        if (introVideo) {
          introVideo.classList.add("zoom-move");
        }

        playBtn.style.display = "none";

        setTimeout(() => {
          if (intro) intro.style.display = "none";
          if (site) site.style.display = "flex";

          document.body.style.overflow = "auto";

          sessionStorage.setItem("introPlayed", "true");
        }, 2000);
      });
    }
  }

  // ================= MENU TOGGLE SAFE =================
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

});