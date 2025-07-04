//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 01.01: Introduction


//TODO 📝 Step 1: Theoretical Aspects

//* 📘 A. In-depth Exposition

//? 1. What is Iteration?
//  Iteration is the process of repeating a set of instructions until a condition is met. In JavaScript, it is how we process data structures like arrays or objects.

//? 2. Types of Loops

//  • for loop
//      Ideal for when you know how many times to repeat.

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//  • while loop
//      Best when the number of iterations is unknown.

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// • do...while loop
//      Guarantees the code block runs at least once.

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

//  • for...in
//      Iterates over keys in an object.

const user = { name: "Alex", age: 30 };
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

//  • for...of
//      Iterates over values in iterable objects like arrays or strings.

const fruits = ["apple", "banana"];
for (let fruit of fruits) {
    console.log(fruit);
}

//* 📚 B. Contextual Understanding

//? Why Do We Use Iteration?
//  Iteration allows us to:
//  • Efficiently handle large datasets
//  • Apply changes across multiple items
//  • Perform calculations or aggregations
//  • Build dynamic user interfaces from data sources

//! Example Context:
//  • When rendering a list of products in an online store, you might use .map() to create a product card for each item in an array.

//* 🕰 C. Historical Perspective

//  Before ES5, JavaScript relied primarily on for, while, and do...while. ES5 introduced:
//  • .forEach(), enabling a cleaner syntax for array iteration

//  ES6 and beyond brought:
//  • .map(), .filter(), .reduce() for declarative, functional-style programming
//  • for...of loop, enhancing readability for iterable objects
//  These additions aligned JavaScript more closely with modern programming paradigms.

//* ✅ D. Best Practices and Pitfalls

//? Best Practices:
//  • Use .map() for transforming data
//  • Use .filter() to exclude elements based on condition
//  • Use .reduce() to accumulate values (e.g., sums, counts)
//  • Prefer for...of over for when index is not needed

//? Common Pitfalls:
//  • Using .forEach() expecting a return value — it returns undefined
//  • Forgetting to return from .map() — leads to an array of undefined
//  • Misusing .reduce() — poor readability or improper initial value

//* 🔄 E. Real-World Analogies

//? Concept                     Analogy
//  forEach()                   Reading every email in your inbox (without changing them)
//  map()                       Applying a filter to each photo in a gallery
//  filter()                    Skipping songs with explicit lyrics from a playlist
//  reduce()                    Adding up shopping cart prices for a total

//  These metaphors help make abstract concepts intuitive and relatable.

//* 🧩 F. Segmented Learning
//  We will break this topic into the following chunks:
//  1. Classic Loops (for, while, do...while)
//  2. Modern Looping Constructs (for...in, for...of)
//  3. High-Order Methods (.forEach(), .map(), .filter(), .reduce())
//  4. Comparison Chart – Pros/cons and return types
//  5. Performance & Readability considerations


//TODO 🔍 Step 2: Inquiry & Application

//* 🧠 1. Guided Inquiry-Based Learning
//  Use these prompts to encourage exploration, reflection, and discussion. A student should be challenged to justify their choices and reason through their logic:

//? 🔎 Conceptual Exploration Prompts
//  • What are the trade-offs between using a for loop and .map()?
//      Leads to discussion on readability, functional programming, and performance.
//  • How does .filter() differ from .forEach() when handling conditional logic?
//      Promotes understanding of return values and immutability.
//  • In what situations would using .reduce() be more efficient than chaining .map() and .filter()?
//      Encourages evaluating optimization and function composition.

//? ⚖️ Critical Thinking Challenges
//  • Compare Outputs:

const num = [1, 2, 3];

const result1 = num.map(x => x * 2);
console.log(result1);

const result2 = num.forEach(x => x * 2);
console.log(result2);

//  Expected discussion: .map() returns a new array; .forEach() does not.

//  • Debug This Code:

const num2 = [1, 2, 3];
const doubled = num2.map(num => { num * 2; });

console.log(doubled);

// Why is it [undefined, undefined, undefined]?

//  • In JavaScript, when we use curly braces {} with an arrow function, we need to explicitly use the return statement to return a value.
//  • If we omit the return, the function returns undefined by default.

//? 🎯 Mini-Scenarios for Analysis
//  Scenario 1:
//  We are building a to-do app. We want to display only completed tasks. Which method should we use, and why?
//! Answer: We use the .filter() method to display only completed tasks in your to-do app. The .filter() method creates a new array containing only the elements that satisfy a specific condition, without modifying the original array.

const completedTasks = tasks.filter(task => task.completed);

//  Scenario 2:
//  We are processing survey results to calculate the average satisfaction score. Which method(s) help us do this in the most elegant and readable way?
//! Answer: The most elegant and readable method to calculate the average satisfaction score from survey results in JavaScript is to use the .reduce() method. This method allows you to sum all the scores in a single, functional line, and then divide by the array's length to get the average.

const scores = [4, 5, 3, 4, 5];
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(average);                                                           // Output: 4.2


//* 💻 2. Hands-On Application

//! 🧩 Basic Exercise

//  Requirements: Print all numbers between 1 and 20 that are divisible by 3.
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//! 🧰 Intermediate Exercise

// Use .filter() to get all even numbers from an array
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);                                                             // [2, 4, 6]

//! 🧠 Advanced Exercise

//  Use .reduce() to count the number of times each word appears in an array
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(count);                         //  { apple: 3, Banana: 2, orange 1 }


//? 🔄 Compare and Contrast
//  Re-implement a .map() task using a traditional loop:

const num3 = [1, 2, 3];
const doubled2 = [];

for (let i = 0; i < num3.length; i++) {
    doubled.push(num3[i] * 2);
}

//  Compare the traditional approach with .map(). Discuss readability, reusability, and clarity.

const num4 = [1, 2, 3];
const doubled4 = num4.map(num => num * 2);

//! Comparison

//  1. Readability
//  • .map():
//      → Clearly expresses the intent: "Create a new array by doubling each number."
//      → Less code, easier to understand for anyone familiar with JavaScript.
//  • Traditional Loop:
//      → More verbose.
//      → Readers must parse the loop logic to understand the transformation.

//  2. Reusability
//  • .map():
//      → Easily reusable with different transformation functions.
//      → Can be chained with other array methods (like .filter(), .reduce()).
//  • Traditional Loop:
//      → Requires rewriting the loop for different transformations.
//      → Harder to generalize or compose with other operations.

//  3. Clarity
//  • .map():
//      → Focuses on what we want to do (transform each element), not how to do it (loop mechanics).
//      → Reduces the chance for off-by-one errors or mistakes with array indices.
//  • Traditional Loop:
//      → Exposes low-level details (indexing, array length).
//      → More room for mistakes, especially in more complex transformations.


//? 🗨️ Pair Programming Discussion Prompt
//  • If .map() is more readable, why would we still teach or use for loops?
//! Answer: Use for loops when we need speed, control, or side effects, or when working with non-array collections.

//  • Can we write a version of .filter() manually using a for loop?
//! Answer: Yes, we can manually implement the functionality of .filter() using a traditional for loop. This involves iterating over the array, checking each element against a condition, and pushing elements that pass the test into a new array.

//? 📓 Reflection Prompts
//  Encourage quick writing to reinforce learning:
//  • Which array method felt most intuitive? Why?
//! Answer: .filter() method felt most intuitive. 

//  • What was one challenge we faced when writing a .reduce()?
//! Answer: One common challenge when writing a .reduce() is understanding and correctly using the accumulator and initial value.

//  • How would we explain .filter() to someone new to coding?
//! Answer: The .filter() method closely matches how we describe the task in plain language (“filter out the even numbers”), which makes it feel natural and intuitive to use.
























