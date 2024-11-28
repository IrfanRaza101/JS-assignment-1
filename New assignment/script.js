let resultField = document.getElementById("result");

// Function to append value to the display
function appendValue(value) {
    const lastChar = resultField.value.slice(-1); // Last character of the input
    const operators = ['.', '/', '*', '+', '-'];

    // Prevent multiple consecutive operators
    if (operators.includes(lastChar) && operators.includes(value)) {
        return; // Stop if consecutive operator is pressed
    }

    // Prevent operator as the first character
    if (resultField.value === '' && operators.includes(value)) {
        return; // Stop if first input is an operator
    }

    // Append the value to the display
    resultField.value += value;
}

// Function to calculate the result
function calculateResult() {
    const operators = ['.', '/', '*', '+', '-'];
    let expression = resultField.value.trim(); // Trim spaces for safety

    // Automatically remove the trailing operator if it exists
    if (operators.includes(expression.slice(-1))) {
        expression = expression.slice(0, -1); // Remove the last operator
    }

    // Check if the expression is valid before evaluating
    if (expression === "") {
        resultField.value = "Error"; // Show error for empty expression
        return;
    }

    try {
        resultField.value = eval(expression); // Calculate the result
    } catch (error) {
        resultField.value = "Error"; // Display error if the expression is invalid
    }
}

// Function to clear the display
function clearResult() {
    resultField.value = ""; // Clear the input
}

// Function to delete the last character
function deleteLast() {
    resultField.value = resultField.value.slice(0, -1); // Remove the last character
}

// **Keyboard Support**
document.addEventListener("keydown", function (event) {
    const key = event.key; // Get the key pressed
    const operators = ['+', '-', '*', '/', '.'];

    // Handle number keys (0-9) and operators
    if (!isNaN(key) || operators.includes(key)) {
        appendValue(key); // Append the key to the display
    }

    // Handle "Enter" key for calculation
    if (key === "Enter") {
        event.preventDefault(); // Prevent default form submission or behavior
        calculateResult(); // Trigger calculation
    }

    // Handle "Backspace" key for deleting the last character
    if (key === "Backspace") {
        deleteLast(); // Trigger delete
    }

    // Handle "Escape" key for clearing the display
    if (key === "Escape") {
        clearResult(); // Clear the input
    }
});
