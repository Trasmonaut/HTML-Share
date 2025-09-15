const heroLayers = document.querySelectorAll('.hero-layer');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Only apply scroll to first viewport
  if (scrollY < 1*window.innerHeight) {
    heroLayers.forEach(layer => {
      const speed = parseFloat(layer.dataset.speed);
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }
});

const audio = document.getElementById('background-audio');
const rainAudio = document.getElementById('rain-audio');
const lightingAudio = document.getElementById('lighting-audio');
const birdsAudio = document.getElementById('birds-audio');
const bugsAudio = document.getElementById('bugs-audio');
const cricketsAudio = document.getElementById('crickets-audio');

const audioFiles = [audio, rainAudio, lightingAudio, birdsAudio, bugsAudio, cricketsAudio];
// Preload audio files
audioFiles.forEach(file => {
  file.load();
});

const btn = document.getElementById('play-pause-btn');
const icon = document.getElementById('play-pause-icon');
// Set initial icon state
icon.textContent = 'volume_off'; // Default to play icon

btn.addEventListener('click', () => {
  if (audio.paused) {
   audioFiles.forEach(file => {
      file.currentTime = 0; // Reset audio to start
      file.play().catch(err => {
        console.error('Error playing audio:', err);
      });
    });

    icon.textContent = 'pause';
  } else {
    audioFiles.forEach(file => {
      file.pause(); // Pause all audio files
    });

    icon.textContent = 'play_arrow';
  }
});
// Update icon based on audio state
audio.addEventListener('play', () => { icon.textContent = 'audiotrack'; });
audio.addEventListener('pause', () => { icon.textContent = 'volume_off'; });


const watchTrailerButton = document.getElementById('watch-trailer-button');
watchTrailerButton.addEventListener('click', () => {
  // Open the trailer in a new tab
  window.open('https://www.youtube.com/watch?v=F_WpA-jivlI&list=PLLvVQTtcJYcgiK-NKHmiTpBmY0Bi1OeS3&index=7', '_blank');
});



