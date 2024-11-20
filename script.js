// Select the display element
const display = document.getElementById("display");

// Append value to the display
function appendValue(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value; // Replace initial "0" or "Error" with the new value
    } else {
        display.value += value; // Append to existing value
    }
}

// Clear the display
function clearDisplay() {
    display.value = "0";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1) || "0"; // Remove the last character or reset to "0"
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value) || "0"; // Use eval to calculate the expression
    } catch {
        display.value = "Error"; // Show "Error" for invalid expressions
    }
}
