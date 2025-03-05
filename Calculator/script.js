// Function to append value to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Function to evaluate the expression and display the result
function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value); // Evaluates the mathematical expression
    } catch (e) {
        display.value = 'Error'; // In case of any error (e.g., invalid input)
    }
}
// JavaScript Document