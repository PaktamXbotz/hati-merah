// Function to open TikTok link
function openTikTok() {
  window.open("https://www.tiktok.com/", "_blank");
}

// Play background music
const music = document.getElementById('background-music');
const playMusicButton = document.getElementById('play-music');

playMusicButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playMusicButton.textContent = 'Pause Music 🎵';
  } else {
    music.pause();
    playMusicButton.textContent = 'Play Music 🎵';
  }
});

// Ensure music autoplay works on mobile devices
document.addEventListener('touchstart', () => {
  if (music.paused) {
    music.play();
  }
}, { once: true });
