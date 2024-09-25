let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value; // Append clicked value to display
}

function clearDisplay() {
    display.value = ''; // Clear display
}

function calculate() {
    try {
        display.value = eval(display.value); // Evaluate expression
    } catch (error) {
        display.value = 'Error'; // Handle errors
    }
}
