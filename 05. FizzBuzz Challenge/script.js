//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 05: FizzBuzz Challenge


//TODO 📝 Step 1: Theoretical Exploration

//  🎯 Goal: Practice applying everything you’ve learned about loops, conditions, and control flow.

//* 🔁 The FizzBuzz Problem (classic version):
//  Write a loop that prints the numbers from 1 to 100.
//  • For multiples of 3, print "Fizz" instead of the number.
//  • For multiples of 5, print "Buzz".
//  • For numbers that are multiples of both 3 and 5, print "FizzBuzz".

//* 🧠 Reflect or answer these prompts:
//? ❔ 1. What kind of loop is best for this problem — and why?
//! ☑️ Answer: The best solution to develop this project is a `for` loop because is simpler and easier to understand.

//? ❔ 2. How would you check if a number is divisible by both 3 and 5?
//! ☑️ Answer: To check if a number is divisible by both 3 and 5, we divide the whole number by 15.

//? ❔ 3. What’s the best order to check: both, then 3, then 5 — or the other way around?
//! ☑️ Answer: The best way to check the order to divide a number is to start with both numbers first, followed by 3, and the last number is 5.

//? ❔ 4. How would you describe FizzBuzz to someone without using code?
//! ☑️ Answer: You are presented with a basket containing 100 apples and are instructed to count and print the numbers from 1 to 100. During this process, specific actions you are tied to particular numerical properties: whenever a number that is a multiple of 3 is encountered, you should pick a green apple from the basket and print "Fizz" in place of the number; if a number is a multiple of 5, a yellow apple should be selected and "Buzz" printed instead; and for numbers that are multiples of both 3 and 5, a red apple is to be chosen and "FizzBuzz" printed.


//TODO  🔁 Step 2: Inquiry & Application

//  🎯 Goal: Plan the logic before you code by writing clean pseudocode.

//* 🧠 Task Recap (Simplified):
//  Loop through numbers 1 to 100:
//  • If the number is divisible by both 3 and 5, print "FizzBuzz"
//  • If it’s only divisible by 3, print "Fizz"
//  • If it’s only divisible by 5, print "Buzz"
//  • Otherwise, just print the number

//* ✅ Your Task
//  Please write pseudocode to describe that logic step by step.
//  Use clear, readable steps — no need for perfect syntax, just structure.

//? ☑️ Pseudocode

//  FOR let i = 1; i <= 100; i++
//      IF i % 15 == 0
//          PRINT "FizzBuzz"
//      ELSE IF i % 3 == 0
//          PRINT "Fizz"
//      ELSE IF i % 5 == 0
//          PRINT "Buzz"
//      ELSE
//          PRINT i


//TODO  ✅ Step 3: FizzBuzz JavaScript Implementation

//  Based on your excellent pseudocode, go ahead and implement the FizzBuzz logic in JavaScript.
//  Your task: Loop from 1 to 100 and apply the rules you already planned.

//* ✅ Quick Checklist:
//  • Use a for loop
//  • Use console.log() for output
//  • Handle "FizzBuzz" before "Fizz" or "Buzz"
//  • Print the number if no condition is met

//! 🧮 Solution

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//* ✅ Breakdown of what you did well:
//  • Loop range is correct → 1 to 100
//  • Order of checks is perfect → % 15 first to catch "FizzBuzz"
//  • Uses else if → avoids overlapping matches
//  • Fallback else → prints the number if no condition matches
//  • No unnecessary complexity → exactly what FizzBuzz needs


//TODO  🧠 Step 4: Reflection & Discussion

//  🎯 Goal: Deepen your understanding through introspection and real-world thinking.
//  Please reflect on or respond to the following prompts in your own words:

//? 🔹 1. What did you find easiest about building FizzBuzz?
//! ☑️ Answer: The easiest part about implementing FizzBuzz is translating the problem statement directly into code. The lack of complex data structures or algorithms make both understanding and implementing FizzBuzz straightforward with basic programming knowledge. 

//? 🔹 2. What was the most challenging part (if any)?
//! ☑️ Answer: The most challenging part of building FizzBuzz, was usually ensuring the correct order of the conditional checks. Specifically, checking for multiples of both 3 and 5 (i.e., 15) must come before checking for multiples of only 3 or only 5. If this order is switched, the logic will not produce the correct result because numbers divisible by 15 would be caught by the earlier 3 or 5 checks instead of the combined case.

//? 🔹 3. If you had to explain FizzBuzz to someone new to loops and conditionals, how would you break it down?
//! ☑️ Answer: FizzBuzz is a simple counting game where I replaced numbers divisible by 3 with "Fizz," numbers divisible by 5 with "Buzz," and numbers divisible by both 3 and 5 with "FizzBuzz," using loops to go through the numbers and conditionals to decide what to print.


//TODO  🚀 Step 5: Stretch Goals – FizzBuzz Variations

//  🎯 Goal: Strengthen mastery by modifying or extending the FizzBuzz pattern.
//  Here are a few optional challenges — pick one (or more), or feel free to invent your own:

//* 🔁 1. Custom Range FizzBuzz
//  Ask the user to enter a start and end number, and then apply FizzBuzz within that range.

//? ☑️ Pseudocode 1

//  SET num1 TO Number(prompt("Please, introduce first number.").trim());
//  SET num2 TO num2 = Number(prompt(Please, introduce the second number (must be greater than the first number).").trim())

//  IF num2 <= num1
//      PRINT "Second number must be greater than the first number."
//      STOP or repeat prompt

//  FOR j FROM num1 TO num2
//      IF j % 3 === 0 && j % 5 === 0
//          PRINT FizzBuzz
//      ELSE IF j % 3 === 0
//          PRINT "Fizz"
//      ELSE IF j % 5 === 0
//          PRINT "Buzz"
//      ELSE
//          PRINT j

//! 🧮 Solution 1

let num1 = Number(prompt("Please, introduce the first number.").trim());
let num2 = Number(prompt("Please, introduce the second number (must be greater than the first number).").trim());

while (num2 <= num1) {
    console.log("Second number must be greater than the first number. Please try again.");
    num2 = Number(prompt("Please, introduce the second number (must be greater than the first number)."));
}

for (let j = num1; j <= num2; j++) {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log("FizzBuzz");
    } else if (j % 3 === 0) {
        console.log("Fizz");
    } else if (j % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(j);
    }
}

//* 🎨 2. Custom Words
//  Let the user enter replacement words for:
//  • multiples of 3 ("Fizz")
//  • multiples of 5 ("Buzz")
//  So if they enter "Meow" and "Woof", it prints "Meow", "Woof", or "MeowWoof".

//? ☑️ Pseudocode 2

//  FOR let q = 1; q <= 100; q++
//      IF q % 15 === 0
//          PRINT MeowWoof
//      ELSE IF q % 3 === 0
//          PRINT Meow
//      ELSE IF q % 5 === 0
//          PRINT Woof
//      ELSE
//          PRINT q

//! 🧮 Solution 2

for (let q = 1; q <= 100; q++) {
    if (q % 15 === 0) {
        console.log("MeowWoof");
    } else if (q % 3 === 0) {
        console.log("Meow");
    } else if (q % 5 === 0) {
        console.log("Woof");
    } else {
        console.log(q);
    }
}

//* 🧠 3. Extended Rule (FizzBuzzBang)
//  Add a new rule:
//  • For numbers divisible by 7, print "Bang"
//  • Combine outputs, so:
//      • 21 → "FizzBang"
//      • 35 → "BuzzBang"
//      • 105 → "FizzBuzzBang"

//? ☑️ Pseudocode 3

//  FOR let w = 1; w <= 105; w++
//      IF w % 3 === 0 && w % 5 === 0 && w % 7 === 0
//          PRINT FizzBuzzBang
//      ELSE IF w % 3 === 0 && w % 5 === 0
//          PRINT FizzBuzz
//      ELSE IF w % 3 === 0 && w % 7 === 0
//          PRINT FizzBang
//      ELSE IF w % 5 === 0 && w % 7 === 0
//          PRINT BuzzBang
//      ELSE IF w % 3 === 0
//          PRINT Fizz
//      ELSE IF w % 5 === 0
//          PRINT Buzz
//      ELSE IF w % 7 === 0
//          PRINT Bang
//      ELSE
//          PRINT w

//! 🧮 Solution 3

for (let w = 1; w <= 105; w++) {
    if (w % 3 === 0 && w % 5 === 0 && w % 7 === 0) {
        console.log("FizzBuzzBang");
    } else if (w % 3 === 0 && w % 5 === 0) {
        console.log("FizzBuzz");
    } else if (w % 3 === 0 && w % 7 === 0) {
        console.log("FizzBang");
    } else if (w % 5 === 0 && w % 7 === 0) {
        console.log("BuzzBang");
    } else if (w % 3 === 0) {
        console.log("Fizz");
    } else if (w % 5 === 0) {
        console.log("Buzz");
    } else if (w % 7 === 0) {
        console.log("Bang");
    } else {
        console.log(w);
    }
}

//* 💡 4. Only One Rule Applies
//  Change the logic so that only one rule prints, in this priority:
//  • "FizzBuzz" → "Fizz" → "Buzz" → "Bang" → number
//  So 105 would just print "FizzBuzz" — not "FizzBuzzBang".

//? ☑️ Pseudocode 4

//  FOR let m = 1; m <= 100; m++
//      IF m % 3 === 0 && m % 5 === 0
//          PRINT FizzBuzz
//      ELSE IF m % 3 === 0
//          PRINT Fizz
//      ELSE IF m % 5 === 0
//          PRINT Buzz
//      ELSE IF m % 7 === 0
//          PRINT Bang
//      ELSE
//          PRINT m

//! 🧮 Solution 4

for (let m = 1; m <= 100; m++) {
    if (m % 3 === 0 && m % 5 === 0) {
        console.log("FizzBuzz");
    } else if (m % 3 === 0) {
        console.log("Fizz");
    } else if (m % 5 === 0) {
        console.log("Buzz");
    } else if (m % 7 === 0) {
        console.log("Bang");
    } else {
        console.log(m);
    }
}


//TODO  🧾 Step 6: Exit Ticket Questions

//  🎯 Goal: Reflect on your logic, growth, and comfort level with loops and conditionals.
//  Please answer the following prompts in your own words:

//? 1. What did you enjoy most or find most rewarding about the FizzBuzz Challenge?
//! ☑️ Answer: What I find most enjoyable and rewarding about the FizzBuzz Challenge is that it clearly combines simple programming fundamentals like loops, conditionals, and modular arithmetic in a way that’s both accessible and immediately satisfying.

//? 2. What variation stretched your thinking the most — and why?
//! ☑️ Answer: The variation that I found most challenging was the Extended Rule (FizzBuzzBang) because it made me realize how important logic and conditions are.

//? 3. Do you feel confident building your own conditional loops from scratch now? Why or why not?
//! ☑️ Answer: Yes, I feel more confident building my own conditional loops in JavaScript from scratch now than I was at the start of the lesson. Working through the FizzBuzz challenge step by step really helped me understand how loops and conditionals work together to control the flow of a program.

