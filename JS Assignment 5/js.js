// assignment 15

var subject = ["1<br>","2<br>","3<br>","4<br>","5<br>","6<br>","7<br>","8<br>","9<br>"]
document.write( subject)

var studentNames = ["irfan", "salman", "suffiyan"];

var studentScores = [450, 390, 475]; 

var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
    var name1 = studentNames[i];
    var score = studentScores[i];
    var percentage = (score / totalMarks) * 100;

    console.log(`Student: ${name1}`);
    console.log(`Score: ${score}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
    console.log("---------------------------");
}

// assignment 16



// Initialize an array with color names
var colors = ["Red", "Green", "Blue", "Yellow"];
console.log("Initial array:", colors);

// a. Ask the user what color they want to add to the beginning & add that color
var colorToAddAtStart = prompt("Enter the color you want to add to the beginning of the array:");
if (colorToAddAtStart) {
    colors.unshift(colorToAddAtStart);
    console.log("Array after adding color to the beginning:", colors);
}

// b. Ask the user what color they want to add to the end & add that color
var colorToAddAtEnd = prompt("Enter the color you want to add to the end of the array:");
if (colorToAddAtEnd) {
    colors.push(colorToAddAtEnd);
    console.log("Array after adding color to the end:", colors);
}

// c. Add two more colors to the beginning of the array
colors.unshift("Purple", "Orange");
console.log("Array after adding two colors to the beginning:", colors);

// d. Delete the first color in the array
colors.shift();
console.log("Array after deleting the first color:", colors);

// e. Delete the last color in the array
colors.pop();
console.log("Array after deleting the last color:", colors);

// f. Ask the user at which index they want to add a color & color name
let indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
let colorToAddAtIndex = prompt("Enter the color you want to add:");
if (!isNaN(indexToAdd) && colorToAddAtIndex) {
    colors.splice(indexToAdd, 0, colorToAddAtIndex);
    console.log("Array after adding color at index " + indexToAdd + ":", colors);
}

// g. Ask the user at which index they want to delete color(s) & how many colors to delete
let indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
let numToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
if (!isNaN(indexToDelete) && !isNaN(numToDelete)) {
    colors.splice(indexToDelete, numToDelete);
    console.log("Array after deleting " + numToDelete + " color(s) from index " + indexToDelete + ":", colors);
}
