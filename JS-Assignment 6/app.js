// assignment 17

// var matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];

// console.log(matrix);

// // assignment 18

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // Prompt the user for input
// var number = parseInt(prompt("Enter the number:"));
// var length = parseInt(prompt("Enter the length:"));

// // Loop to print the multiplication table
// for (var a = 1; a <= length; a++) {
//   console.log(`${number} x ${a} = ${number * a}`);
// }

// //   assignment 19

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   document.write(`Index ${i}: ${fruits[i]}<br>`);
// }

// //   assignment 20

// // a. Counting from 1 to 15
// var counting = [];
// for (var i = 1; i <= 15; i++) {
//   counting.push(i);
// }
// console.log("Counting: " + counting.join(", "));

// // b. Reverse counting from 10 to 1
// var reverseCounting = [];
// for (var i = 10; i >= 1; i--) {
//   reverseCounting.push(i);
// }
// console.log("Reverse Counting: " + reverseCounting.join(", "));

// // c. Even numbers from 0 to 20
// var evenNumbers = [];
// for (var i = 0; i <= 20; i += 2) {
//   evenNumbers.push(i);
// }
// console.log("Even: " + evenNumbers.join(", "));

// // d. Odd numbers from 1 to 19
// var oddNumbers = [];
// for (var i = 1; i < 20; i += 2) {
//   oddNumbers.push(i);
// }
// console.log("Odd: " + oddNumbers.join(", "));

// // e. Series: 2k, 4k, 6k, ..., 20k
// var series = [];
// for (var i = 2; i <= 20; i += 2) {
//   series.push(i + "k");
// }
// console.log("Series: " + series.join(", "));

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user for input
// var userInput = prompt("Enter the item you want to search for:");

// // Initialize a variable to track if the item is found
// var found = false;

// // Loop through the array to check for the item
// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput.toLowerCase()) {
//     found = true; // Item is found
//     break; // Exit the loop
//   }
// }

// // Display the result to the user
// if (found) {
//   alert(`${userInput} is found in the list.`);
// } else {
//   alert(`${userInput} is not found in the list.`);
// }


// var A = [24, 53, 78, 91, 12];

// // Initialize a variable to store the largest number
// var largest = A[0]; // Assume the first element is the largest initially

// // Loop through the array to find the largest number
// for (var i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i]; // Update the largest number if a bigger number is found
//   }
// }

// // Output the largest number
// console.log("The largest number is: " + largest);




let A = [24, 53, 78, 91, 12];

// Initialize a variable to store the smallest number
let smallest = A[0]; // Assume the first element is the smallest initially

// Loop through the array to find the smallest number
for (let i = 1; i < A.length; i++) {
  if (A[i] <= smallest) {
    smallest = A[i]; // Update the smallest number if a smaller number is found
  }
}

// Output the smallest number
console.log("The smallest number is: " + smallest);