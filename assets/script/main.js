// Function to open TikTok link
function openTikTok() {
  // Replace this URL with your TikTok video link
  const tiktokUrl = "https://vt.tiktok.com/ZS6KXtJno/";
  window.open(tiktokUrl, "_blank");
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
