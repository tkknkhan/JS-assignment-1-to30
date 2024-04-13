// Q#1
// var cityName = prompt("Enter your city name:");

// if (cityName && cityName.toLowerCase() === "karachi") {

//     document.write("<h2>Welcome to the city of lights!</h2>");
// } else {
 
//     document.write("<h2>Welcome!</h2>");
// }


// Q#2
// var gender = prompt("Enter your gender (male/female):");


// gender = gender.toLowerCase();

// if (gender === "male") {
//     document.write("<h2>Good Morning Sir.</h2>");
// } else if (gender === "female") {
//     document.write("<h2>Good Morning Ma'am.</h2>");
// } else {
//     document.write("<h2>Invalid gender. Please enter 'male' or 'female'.</h2>");
// }

// Q#3
// var remainingFuel = prompt("Enter the remaining fuel in your car (in liters):");

    
//   if (remainingFuel < 0.25) {
//       document.write("<h2>Please refill the fuel in your car.</h2>");
//   } else {
//      document.write("<h2> Safe travels!</h2>");
//  }

// Q#4
// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true"); 
// } 

// // b.
// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// } 

// // c.
// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } 
// if (c === 13){ 
//     alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
//     alert("condition 3 is true"); 
// } 
// if(c === 14){ 
//     alert("condition 4 is true"); 
// } 

// // d.
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// } 

// // e.
// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
// }

// // f.
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// }

// Q#7
// var secretNumber = Math.floor(Math.random() * 10) + 1;

//         // Prompt the user to guess the secret number
//         var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

//         // Check if the guess matches the secret number
//         if (guess === secretNumber) {
//             alert("Bingo! Correct answer.");
//         } else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
//             alert("Close enough to the correct answer.");
//         } else {
//             alert("Sorry, incorrect guess. The secret number was " + secretNumber + ".");
//         }

//Q#9
// var number = prompt("Enter a number: ");
// if (number % 2 === 0) {
//     console.log(number + " is an even number.");
// } else {
//     console.log(number + " is an odd number.");
// }

// Q#10
// var temperature = prompt("Enter the temperature: ");

// if (temperature > 40) {
//     console.log("It is too hot outside.");
// } else if (temperature > 30) {
//     console.log("The Weather today is Normal.");
// } else if (temperature > 20) {
//     console.log("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     console.log("OMG! Today’s weather is so Cool.");
// } else {
//     console.log("It's freezing outside!");
// }

// Q#11
// let firstNumber = parseFloat(prompt("Enter the first number: "));
// let secondNumber = parseFloat(prompt("Enter the second number: "));
// let operation = prompt("Enter the operation (+, -, *, /, %): ");

// let result;

// if (operation === '+') {
//     result = firstNumber + secondNumber;
// } else if (operation === '-') {
//     result = firstNumber - secondNumber;
// } else if (operation === '*') {
//     result = firstNumber * secondNumber;
// } else if (operation === '/') {
//     if (secondNumber !== 0) {
//         result = firstNumber / secondNumber;
//     } else {
//         console.log("Error: Division by zero.");
//         result = undefined;
//     }
// } else if (operation === '%') {
//     result = firstNumber % secondNumber;
// } else {
//     console.log("Invalid operation.");
//     result = undefined;
// }

// if (result !== undefined) {
//     console.log("Result: " + result);
// }