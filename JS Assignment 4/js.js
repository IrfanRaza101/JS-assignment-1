
// assignment 10

function calculateGrade() {
    // Get values from input fields
    let marks1 = parseFloat(document.getElementById("subject1").value);
    let marks2 = parseFloat(document.getElementById("subject2").value);
    let marks3 = parseFloat(document.getElementById("subject3").value);
    let totalMarks = parseFloat(document.getElementById("totalMarks").value);

    // Calculate total obtained marks
    let obtainedMarks = marks1 + marks2 + marks3;

    // Calculate percentage
    let percentage = (obtainedMarks / totalMarks) * 100;

    // Determine grade based on percentage
    let grade;
    let remarks;
    if (percentage >= 90) {
        grade = 'A+';
        remarks = 'Excellent';
    } else if (percentage >= 80) {
        grade = 'A';
        remarks = 'Very Good';
    } else if (percentage >= 70) {
        grade = 'B';
        remarks = 'Good';
    } else if (percentage >= 60) {
        grade = 'C';
        remarks = 'Satisfactory';
    } else if (percentage >= 50) {
        grade = 'D';
        remarks = 'Pass';
    } else {
        grade = 'F';
        remarks = 'Fail';
    }

    // Display results
    document.getElementById("totalObtained").innerHTML = `Total Marks Obtained: ${obtainedMarks}`;
    document.getElementById("percentage").innerHTML = `Percentage: ${percentage.toFixed(2)}%`;
    document.getElementById("grade").innerHTML = `Grade: ${grade}`;
    document.getElementById("remarks").innerHTML = `Remarks: ${remarks}`;
    document.getElementById("result").style.display = "block";
}




// assignment 11


// Function to display message based on temperature
function showTemperatureMessage(temperature) {
    if (temperature > 40) {
        alert("It is too hot outside.");
    } else if (temperature > 30) {
        alert("The Weather today is Normal.");
    } else if (temperature > 20) {
        alert("Today’s Weather is cool.");
    } else if (temperature > 10) {
        alert("OMG! Today’s weather is so Cool.");
    } else {    
        alert("The temperature is too low.");
    }
}

// Input: Temperature from the user
var temperatureInput = parseFloat(prompt("Enter the current temperature:"));

// Call the function to show temperature message
showTemperatureMessage(temperatureInput);


 
function performCalculation() {
    // Get the input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value.trim();

    // Variable to hold the result
    var result;
    
    // Check the operation and perform the calculation
    if (operation === '+') {
        result = num1 + num2;
        document.getElementById('result').innerText = `The result of ${num1} + ${num2} is: ${result}`;
    } else if (operation === '-') {
        result = num1 - num2;
        document.getElementById('result').innerText = `The result of ${num1} - ${num2} is: ${result}`;
    } else if (operation === '*') {
        result = num1 * num2;
        document.getElementById('result').innerText = `The result of ${num1} * ${num2} is: ${result}`;
    } else if (operation === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
            document.getElementById('result').innerText = `The result of ${num1} / ${num2} is: ${result}`;
        } else {
            document.getElementById('result').innerText = "Error: Division by zero is not allowed.";
        }
    } else if (operation === '%') {
        if (num2 !== 0) {
            result = num1 % num2;
            document.getElementById('result').innerText = `The result of ${num1} % ${num2} is: ${result}`;
        } else {
            document.getElementById('result').innerText = "Error: Division by zero is not allowed.";
        }
    } else {
        document.getElementById('result').innerText = "Invalid operation. Please enter one of +, -, *, /, or %.";
    }
}
// assignment 12

function checkCharacterType(char) {
    if (char.length !== 1) {
        alert("Please enter only a single character.");
    } else {
        var asciiCode = char.charCodeAt(0);

        if (asciiCode >= 48 && asciiCode <= 57) {
            alert("The character is a number.");
        } else if (asciiCode >= 65 && asciiCode <= 90) {
            alert("The character is an uppercase letter.");
        } else if (asciiCode >= 97 && asciiCode <= 122) {
            alert("The character is a lowercase letter.");
        } else {
            alert("The character is neither a number, an uppercase letter, nor a lowercase letter.");
        }
    }
}

// Input: Character from the user
var char = prompt("Enter a character:");

// Call the function to check character type
checkCharacterType(char);



var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

alert(greeting);


// assignment 13

var correctPassword = "irfan";

// b. Ask the user to enter his/her password
var userPassword = prompt("Please enter your password:");

// c. Validate the two passwords:
if (userPassword === null || userPassword === "") {
    // i. Check if user has entered a password. If not, then give a message “Please enter your password”
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    // ii. If both passwords are the same, show the message “Correct! The password you entered matches the original password”.
    alert("Correct! The password you entered matches the original password.");
} else {
    // Show “Incorrect password” otherwise.
    alert("Incorrect password.");
}






function determineTimeOfDay() {
    // Get the time input from the user
    var timeInput = document.getElementById('time').value.trim();
    var timeNumber = parseInt(timeInput, 10);

    // Variable to hold the results
    var results;

    // Validate the input
    if (isNaN(timeNumber) || timeInput.length !== 4 || timeNumber < 0 || timeNumber > 2359) {
        results = "Invalid input. Please enter a valid time in 24-hour format (e.g., 1900).";
    } else {
        // Extract hours and minutes
        var hours = Math.floor(timeNumber / 100);
        var minutes = timeNumber % 100;

        // Ensure valid minutes range
        if (minutes < 0 || minutes >= 60) {
            results = "Invalid time. Minutes must be between 00 and 59.";
        } else {
            // Determine the time of day
            if (hours >= 0 && hours < 12) {
                results = "Morning";
            } else if (hours >= 12 && hours < 17) {
                results = "Afternoon";
            } else if (hours >= 17 && hours < 21) {
                results = "Evening";
            } else if (hours >= 21 && hours < 24) {
                results = "Night";
            }
        }
    }

    // Display the results
    document.getElementById('results').innerText = results;
}