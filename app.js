// CHAPTER NO NINE TO ELEVEN

// 1)
// var city = prompt("Enter your city name:");
// if (city === "karachi") {
//   alert("Welcome to city of lights");
// }

// 2)
// var gender = prompt("Enter your gender (male/female):");
// if (gender === "male") {
//   alert("Good Morning Sir");
// } 
// else if(gender === "female"){
//     alert("Good morning Madam")
// }

// 3)
// var signalColor = prompt("Enter traffic signal color (Red, Yellow, Green):");

// if (signalColor === "red") {
//   alert("Must Stop");
// } 
// else if (signalColor === "yellow") {
//   alert("Ready to move");
// } 
// else if (signalColor === "green") {
//   alert("Move now");
// } 
// else{
//   alert("Invalid color");
// }

// 4)
// var remainingFuel = +prompt("Enter remaining fuel in litres:");

// if (remainingFuel < 0.25) {
//   alert("Please refill the fuel in your car");
//  }
//  else {
//   alert("You have enough fuel.");
// }

// 5)
//  var a = 4;
//  if (++a === 5) {
//  alert("given condition for variable a is true");
//  }
//  var b = 82;
// else if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// var c = 12;
// else if (c++ === 13) {
//   alert("condition 1 is true");
// }
// else if (c === 13) {
//   alert("condition 2 is true");
// }
// else if (++c < 14) {
//   alert("condition 3 is true");
// }
//else if (c === 14) {
//   alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
//else if (true) {
//   alert("True");
// }
//else if (false) {
//   alert("False");
// }
//else if(car < cat){
//     alert("Car is smaller then cat")
// }

// 6)
//  var subject2 = +prompt("Enter marks for Subject 2:");
//  var subject3 = +prompt("Enter marks for Subject 3:");
//  var subject1 = +prompt("Enter marks for Subject 1:");
//  var totalMarks = 300;
//  var obtainedMarks = subject1 + subject2 + subject3;
//  var percentage = (obtainedMarks / totalMarks) * 100;
//  var grade, remarks;


//  if (percentage >= 80) {
//      grade = "A-one";
//      remarks = "Excellent";
//  }
// else   if (percentage >= 70) {
//      grade = "A";
//      remarks = "Good";
// }
// else  if (percentage >= 60) {
//      grade = "B";
//      remarks = "You need to improve";
// }
//  else {
//      grade = "Fail";
//      remarks = "Sorry";
// }

//  document.write("<h1>Marks Sheet</h1>");
//  document.write("Total marks: " + totalMarks + "<br>");
//  document.write("Marks obtained: " + obtainedMarks + "<br>");
//  document.write("Percentage: " + percentage + "%<br>");
//  document.write("Grade: " + grade + "<br>");
//  document.write("Remarks: " + remarks + "<br>");

// 7)
// var number = 7; 
// var userGuess = +prompt("Guess the secret number (1 to 10):");

// if (userGuess === number) {
//     alert("Bingo! Correct answer");
// } 
//else  if (userGuess + 1 === number) {
//     alert("Close enough to the correct answer");
// } 
// else {
//     alert("Sorry, try again!");
// }

// 8)
// var number = +prompt("Enter a number:");
// if (number % 3 === 0) {
//     alert("The number is divisible by 3.");
// } 
// else {
//     alert("The number is not divisible by 3.");
// }

// 9)
// var number = +prompt("Enter a number to check even or odd:");
// if (number % 2 === 0) {
//     alert("The number is Even.");
// } 
// else {
//     alert("The number is Odd.");
// }

// 10)
// var temp = +prompt("Enter the current temperature:");

// if (temp > 40) {
//     alert("It is too hot outside.");
// } 
// else if (temp > 30) {
//     alert("The Weather today is Normal.");
// } 
// else if (temp > 20) {
//     alert("Today's Weather is cool.");
// } 
// else if (temp > 10) {
//     alert("OMG! Today's weather is so Cool.");
// }
//  else {
//     alert("It's freezing cold!");
// }

// 11)
// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operation = prompt("Enter operation (+, -, *, /, %):");
// var result;


// if (operation === "+") {
//     result = num1 + num2;
// } 
// else if (operation === "-") {
//     result = num1 - num2;
// } 
// else if (operation === "*") {
//     result = num1 * num2;
// } 
// else if (operation === "/") {
//   result = num1 / num2;
// } 
// else if (operation === "%") {
//     result = num1 % num2;
// } 
// else {
//     result = "Invalid operation!";
// }

// alert("The result is: " + result);

// CHAPTER NO 12 TO 13  

// 1)
// var weather = prompt("Enter a character (number or letter):");
// var asci = weather ; 


//  if (asci >= 65 && asci <= 90) {
//     alert("This input is  uppercase letter.");
// } 
// else if (asci >= 97 && asci <= 122) {
//     alert("This input is  lowercase letter.");
// } 
// else {
//     alert("This input is neither a number or a letter.");
// }

// 2)
// var num1 = +prompt("Enter the first integer:");
// var num2 = +prompt("Enter the second integer:");

// if (num1 > num2) {
//     alert(num1 + " is larger.");
// } 
// else if (num2 > num1) {
//     alert(num2 + " is larger.");
// } 
// else {
//     alert(" Numbers are equal.");
// }

// 3)
// var number = +prompt("Enter a number:");

// if (number > 0) {
//     alert("The Number is Positive.");
// } 
// else if (number < 0) {
//     alert("The Number is Negative.");
// } 
// else {
//     alert("The Number is Zero.");
// }

// 4)
// var character = prompt("Enter a single character:").toLowerCase();

// if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//     alert("True - It is a vowel.");
// } 
// else {
//     alert("False - It is not a vowel.");
// }

// 5)
// var Password = "12345"; 
// var userPassword = prompt("Enter your password:");
 
// if (userPassword === Password) {
//     alert("Correct! The password you entered  the original password.");
// }
//  else {
//     alert("Incorrect password.");
// }

// 6)
// var hour = prompt("Enter Time ")

// if(hour<18){
//     alert(" Good day");
// }
// else{
//     alert(" Good evening");
// }
    
// 7)
// var time = prompt("Enter time:");

// if(time >= "00:00" && time < "12:00" ){
//     alert("Good Morning!")
// }
// else if(time >="12:00" && time < "17:00"){
//     alert("Good afternoon!")
// }
// else if(time >="17:00" && time < "21:00"){
//     alert("Good evening!")
// }
// else if(time >="21:00" && time < "23:59"){
//     alert("Good night!")
// }
// else{
//     alert("Enter time")
// }