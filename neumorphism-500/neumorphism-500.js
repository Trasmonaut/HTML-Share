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
        await addFileToZip('neumorphism-500.html', 'neumorphism-500.html');
        await addFileToZip('neumorphism-500.css', 'neumorphism-500.css');
        await addFileToZip('neumorphism-500.js', 'neumorphism-500.js');

        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, 'neumorphism-500.zip');
    } catch (err) {
        alert('Error creating zip: ' + err.message);
    }
}

// Note: Ensure the download button in HTML calls downloadFile() on click

//MODIFY BELOW ONLY. CHANGE FILE PATHS ABOVE IF NEEDED