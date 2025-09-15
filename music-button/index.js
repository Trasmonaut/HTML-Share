// Requires JSZip and FileSaver.js
async function downloadFile() {
    const zip = new JSZip();

    // Helper to fetch and add file to zip
    async function addFileToZip(path, name) {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to fetch ${name}`);
        const data = await response.text();
        zip.file(name, data);
    }

    try {

        // example usage await addFileToZip('/neumorphism-404.html', 'neumorphism-404.html');
        await addFileToZip('index.html', 'index.html');
        await addFileToZip('index.css', 'index.css');
        await addFileToZip('index.js', 'index.js');

        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, 'music-button.zip');
    } catch (err) {
        alert('Error creating zip: ' + err.message);
    }
}

// Note: Ensure the download button in HTML calls downloadFile() on click

//MODIFY BELOW ONLY. CHANGE FILE PATHS ABOVE IF NEEDED

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
