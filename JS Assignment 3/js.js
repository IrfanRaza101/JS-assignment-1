// assignment 7

// // Prompt the user to enter their name
// var userName = prompt("Add Your Name");

// // Greet the user with an alert message
// alert("Hello, " + userName + "! Welcome to our website.");

// function generateTable() {
//     // Get the input value
//     var number = document.getElementById("numberInput").value;

//     // Default to 5 if no number is entered
//     if (number === "") {
//         number = 5;
//     }

//     // Generate the multiplication table
//     var table = `<table><tr><th>Multiplication Table of ${number}</th></tr>`;
//     for (var i = 1; i <= 10; i++) {
//         table += `<tr><td>${number} x ${i} = ${number * i}</td></tr>`;
//     }
//     table += "</table>";

//     // Display the table in the tableContainer div
//     document.getElementById("tableContainer").innerHTML = table;
// }

// assignment 8

// Step a: Take three subjects name from user and store them in different variables
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

// Step b: Total marks for each subject is 100, store it in a variable
var totalMarksPerSubject = 100;

// Step c: Take obtained marks for first subject from user and store it in a variable
var obtainedMarks1 = parseFloat(
  prompt(`Enter obtained marks for ${subject1}:`)
);
var obtainedMarks2 = parseFloat(
  prompt(`Enter obtained marks for ${subject2}:`)
);
var obtainedMarks3 = parseFloat(
  prompt(`Enter obtained marks for ${subject3}:`)
);

// Step e: Calculate total marks and percentage
var totalPossibleMarks = totalMarksPerSubject * 3; // Since there are 3 subjects
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / totalPossibleMarks) * 100;

// Display the result in the browser using a table
document.write(`
     <table border="1" cellpadding="5" cellspacing="0">
         <tr>
             <th>Subject</th>
             <th>Obtained Marks</th>
             <th>Total Marks</th>
         </tr>
         <tr>
             <td>${subject1}</td>
             <td>${obtainedMarks1}</td>
             <td>${totalMarksPerSubject}</td>
         </tr>
         <tr>
             <td>${subject2}</td>
             <td>${obtainedMarks2}</td>
             <td>${totalMarksPerSubject}</td>
         </tr>
         <tr>
             <td>${subject3}</td>
             <td>${obtainedMarks3}</td>
             <td>${totalMarksPerSubject}</td>
         </tr>
         <tr>
         <td><strong>Total Obtained Marks</strong></td>
         <td><strong>${totalObtainedMarks}</strong></td>
         <td><strong>${totalPossibleMarks}</strong></td>
         </tr>
         <tr>
         <td colspan="1"><strong>Percentage</strong></td>
         <td colspan="1"></td>
         <td><strong>${percentage.toFixed(2)}%</strong></td>
             
         </tr>
     </table>
 `);
