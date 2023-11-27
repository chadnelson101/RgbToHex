document.getElementById('btn').addEventListener('click', convertRgbToHex);

function convertRgbToHex() {
    const rgbInput = document.getElementById('rgb').value;
    const values = rgbInput.match(/\d+/g);

    if (values && values.length === 3) {
        const [r, g, b] = values;
        const hexColor = `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`;
        
        // Set the background color
        document.body.style.backgroundColor = hexColor;

        // Update the HEX value
        document.getElementById('hex').value = hexColor;
    } else {
        alert('Please enter a valid RGB color (e.g., "255, 0, 0")');
    }
}