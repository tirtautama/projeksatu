/* ==========================================
   OPEN INVITATION + MUSIC
========================================== */
const openBtn = document.getElementById("open-invitation-btn");
const coverPage = document.getElementById("cover-page");
const mainContent = document.getElementById("main-invitation-content");
const music = document.getElementById("background-music");
const playPauseBtn = document.getElementById("play-pause-btn");

openBtn.addEventListener("click", () => {
    coverPage.classList.add("hide");
    mainContent.classList.add("show");
    music.play();
});

/* ==========================================
   MUSIC CONTROL
========================================== */
let isPlaying = true;

playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        music.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

/* ==========================================
   COUNTDOWN TIMER
========================================== */
const weddingDate = new Date("May 23, 2026 09:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

/* ==========================================
   COPY BUTTON
========================================== */
document.querySelectorAll(".btn-copy").forEach(btn => {
    btn.addEventListener("click", () => {
        navigator.clipboard.writeText(btn.dataset.text);
        btn.innerText = "Tersalin ✓";
        setTimeout(() => btn.innerText = "Salin", 1500);
    });
});

/* ==========================================
   GUEST NAME FROM URL
========================================== */
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");

if (guestName) {
    document.getElementById("guest-name-placeholder").innerText = decodeURIComponent(guestName);
}
