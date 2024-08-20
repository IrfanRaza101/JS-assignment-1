// // assignment 4




// // 3 variables in one statement:

// var var1, var2, var3;

// // 5 legal variable names:

// var myVariable;
// var _myVariable;
// var $myVariable;
// var variable1;
// var myVariableName;

// // 5 illegal variable names:

// // var 1variable;   
// // var my-variable;  
// // var var;          
// // var my variable;  
// // var myVariable!;


// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable<br>");
// document.write("Variables must begin with a letter, underscore, or dollar sign. For example $name, _name or name<br>");
// document.write("Variable names are case sensitive.<br>");
// document.write("Variable names should not be JS keywords.<br><br>");




// // assignment 5




// var num1 = 10;
// var num2 = 2;

// // Subtraction
// var subtraction = num1 - num2;
// console.log("Subtraction: " + subtraction);

// // Multiplication
// var multiplication = num1 * num2;
// console.log("Multiplication: " + multiplication);

// // Division
// var division = num1 / num2;
// console.log("Division: " + division);

// // Modulus
// var modulus = num1 % num2;
// console.log("Modulus: " + modulus);

// // a.
// var number;

// // b. 
// document.write("Value after variable declaration is: " + number + "<br>");

// // c.
// number = 5;

// // d. 
// document.write("Initial value: " + number + "<br>");

// // e.
// number++;

// // f. 
// document.write("Value after increment is: " + number + "<br>");

// // g. 
// number += 7;

// // h. 
// document.write("Value after addition is: " + number + "<br>");

// // i. 
// number--;

// // j. 
// document.write("Value after decrement is: " + number + "<br>");

// // k.
// var remainder = number % 3;
// document.write("The remainder is: " + remainder + "<br><br>");



// // Store the ticket price in a variable
// var ticketPrice = 600;

// // Calculate the cost of buying 5 tickets
// var totalCost = ticketPrice * 5;
// // Display the result in the browser
// document.write("The cost of buying 5 movie tickets is: " + totalCost + " PKR");



// // table section
// var number = 9;

// // table in the browser
// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }




// // assignment 6




// // Step 1: Declare a variable and assign a number to it
// var number = 10;

// // Step 2: Perform arithmetic operations
// var addResult = number + 5;
// var subtractResult = number - 3;
// var multiplyResult = number * 2;
// var divideResult = number / 2;
// var modulusResult = number % 4;

// // Step 3: Display the results in the browser
// document.write("<h2>Arithmetic Operations on the Number " + number + "</h2>");
// document.write("Adding 5: " + number + " + 5 = " + addResult + "<br>");
// document.write("Subtracting 3: " + number + " - 3 = " + subtractResult + "<br>");
// document.write("Multiplying by 2: " + number + " * 2 = " + multiplyResult + "<br>");
// document.write("Dividing by 2: " + number + " / 2 = " + divideResult + "<br>");
// document.write("Modulus 4: " + number + " % 4 = " + modulusResult + "<br>");


var a = 2;
var b = 1;

var result = --a - --b + ++b + b--; 

// Final Output
console.log("a =", a);        // a = 1
console.log("b =", b);        // b = 0
console.log("result =", result);  // result = 3

