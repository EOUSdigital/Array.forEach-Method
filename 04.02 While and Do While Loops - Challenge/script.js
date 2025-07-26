//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 04.02: While and Do While Loops - Challenge


//TODO 📝 Step 6: Input Validator App

//  🎯 Goal: Use `do...while` to ensure valid input is entered before continuing.

//* 🧠 Requirements
//  Simulate input validation for:
//  1. A name: must not be empty or just whitespace.
//  2. An age: must be a number and at least 18.
//  Loop until each input is valid using `do...while`.

//* 🔁 Pseudocode Prompt
//  ✍️ Please write your pseudocode for this project first.
//  Start with:
//  • How you’ll handle the name input loop.
//  • How you’ll handle the age input loop.
//  Once I review and confirm it’s solid, we’ll move to your JavaScript implementation!

//? ☑️ Pseudocode

//  SET name
//  SET age

//  DO
//      PROMPT user to enter name
//      PROMPT user to enter age
//      CONVERT age to number
//  WHILE name is empty OR name is only spaces OR age is not a number OR age < 18

//  PRINT "🎉 Welcome!"

//! Solution

let name;
let age;

do {
    name = prompt("Please enter you name:").trim();
    age = Number(prompt("Please enter your age:"));
} while (name === "" || isNaN(age) || age < 18);

console.log("🎉 Welcome!");

//* 🔍 Explanation
//? 🔹 name = prompt(...).trim();
//  • Removes extra spaces (so " " becomes "")
//  • Makes your name check stricter and cleaner.
//? 🔹 isNaN(age)
//  • Ensures the user enters an actual number.
//? 🔹 age < 18
//  • Enforces a minimum age requirement.
