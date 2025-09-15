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

        // example usage await addFileToZip('/neumorphism-404/neumorphism-404.html', 'neumorphism-404.html');
        await addFileToZip('/flippycards.html', 'flippycards.html');
        await addFileToZip('flippycards.css', 'flippycards.css');
        await addFileToZip('flippycards.js', 'flippycards.js');

        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, 'flippycards.zip');
    } catch (err) {
        alert('Error creating zip: ' + err.message);
    }
}

// Note: Ensure the download button in HTML calls downloadFile() on click

//MODIFY BELOW ONLY. CHANGE FILE PATHS ABOVE IF NEEDED