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
        saveAs(content, 'base.zip');
    } catch (err) {
        alert('Error creating zip: ' + err.message);
    }
}

// Note: Ensure the download button in HTML calls downloadFile() on click

//MODIFY BELOW ONLY. CHANGE FILE PATHS ABOVE IF NEEDED


document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.modal');
var instances = M.Modal.init(elems, options);
});

// Or with jQuery
$(document).ready(function(){
$('.modal').modal();
});

var options = {
  opacity: 0.5,
  inDuration: 300,
  outDuration: 200,
  dismissible: true,
  startingTop: '4%',
  endingTop: '10%'
};

var instance = M.Modal.getInstance(elem);
instance.open();
instance.close();