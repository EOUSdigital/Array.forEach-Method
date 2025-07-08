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

//? 🧩 Basic Exercise

//  Requirements: Print all numbers between 1 and 20 that are divisible by 3.
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//? 🧰 Intermediate Exercise

// Use .filter() to get all even numbers from an array
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);                                                             // [2, 4, 6]

//? 🧠 Advanced Exercise

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


//? 🗨️ Programming Discussion Prompt
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


//TODO ✅ Step 3: Assessment & Feedback

//? 📋 1. Formative Assessment – Quiz (10 Questions)

// 🎯 Goal: Assess understanding of loop syntax, iteration logic, and high-order methods behavior.

//*  1. What is the return value of .forEach()?

//  A. A new array
//  B. Undefined
//  C. The original array
//  D. A boolean

//! Answer: B

//* 2. Which method would you use to create a new array with transformed data?

//  A. .forEach()
//  B. .filter()
//  C. .map()
//  D. .reduce()

//! Answer: C

//* 3. What does .reduce() require in order to work properly?

//  A. A return statement inside .map()
//  B. An initial value and a reducer function
//  C. Only an initial value
//  D. A boolean condition

//! Answer: B

//* 4. What is the key difference between .filter() and .map()?

//  A. .map() modifies the array in-place
//  B. .filter() always shortens the array
//  C. .filter() returns values that meet a condition
//  D. They are functionally identical

//! Answer: C

//* 5. When using a for...in loop on an array, what is returned on each iteration?

//  A. The value
//  B. The index
//  C. The key-value pair
//  D. The array length

//! Answer: B

//* 6. Which loop guarantees execution at least once?

//  A. for
//  B. while
//  C. do...while
//  D. for...of

//! Answer: C

//* 7. Which of the following mutates the original array?

//  A. .map()
//  B. .filter()
//  C. .reduce()
//  D. array.splice()

//! Answer: D

//* 8. What is the purpose of the break statement in a loop?

//  A. To skip an iteration
//  B. To restart the loop
//  C. To exit the loop early
//  D. To prevent infinite loops

//! Answer: C

//* 9. What would be best used to total all values in an array?

//  A. .map()
//  B. .forEach()
//  C. .reduce()
//  D. for...of

//! Answer: C

//* 10. Which of the following loops is most appropriate for iterating over an object’s keys?

//  A. for
//  B. for...of
//  C. for...in
//  D. .map()

//! Answer: C


//? 📝 2. Coding Challenge Assessment
//  Challenge:
//  Write a function that takes an array of student test scores and returns the average, rounded to two decimal places, using .reduce().

//* 🔬 Pseudocode

//  DEFINE FUNCTION calculateAverage(scores)
//      SET sum equal TO numbers.reduce((acc, num) equal TO or grater than acc + num, 0)
//      RETURN sum divides scores.length 

//  PRINT calculateAverage

//! Solution

function calculateAverage(scores) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / scores.length.toFixed(2);
}

console.log(calculateAverage([85, 90, 92, 78]));

//* 💡 Follow-Up Questions (for Review Discussion):
//  What if one of the scores is missing or undefined?
//! Answer: If one of the scoreS is missing or undefined values would cause NaN results unless filtered.

const validScores = scores.filter(score => typeof score === 'number');

//  How would a function change if scores were stored as objects with score and student properties?
//! Answer: The function must reference the score property of each object. This approach is more flexible and aligns with object-oriented programming principles, allowing us to associate more data with each score and extend the structure easily in the future.

//  Example

function calculateAverage(scores) {
    const validScores = scores.filter(s => typeof s.score === 'number');
    const sum = validScores.reduce((acc, s) => acc + s.score, 0);
    return parseFloat((sum / validScores.length).toFixed(2));
}

const students = [
    { student: "Alice", score: 85 },
    { student: "Bob", score: 90 },
    { student: "Charlie", score: 92 },
    { student: "Diana", score: 78 }
];

console.log(calculateAverage(students)); // 86.25

//? ✍️ 3. Constructive Feedback Prompts

//  When reviewing code:
//  • Can be explain why we chose this method over another?
//! Answer: When choosing a specific method in JavaScript over another, the decision is typically based on performance, readability, specificity, and the requirements of the task.

//  • What happens if the input array is empty?
//! Answer: If the input array is empty in JavaScript, it means the array contains zero elements. Most array operations on it will do nothing or return an empty result.

//  • Is there a clearer or more efficient way to write the calculateAverage function?
//! Answer: The function should use consistent variable names, apply .toFixed(2) to the calculated average (not the array length), and include input validation for clarity and correctness.

//  Example

function calculateAverage(scores) {
    if (!Array.isArray(scores) || scores.length === 0) return 0;                // Handle empty or invalid input
    
    const sum = scores.reduce((acc, num) => acc + num, 0);
    const average = sum / scores.length;
    return Number(average.toFixed(2));                          // Returns a number rounded to 2 decimal places
}

console.log(calculateAverage([85, 90, 92, 78]));                // Output: 86.25

//  • Could we refactor this into smaller functions?
//! Answer: Refactoring into smaller functions improves readability, reusability, and testability.

//  Example

function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

function averageArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return 0;
    return sumArray(arr) / arr.length;
}

function calculateAverage(scores) {
    const avg = averageArray(scores);
    return Number(avg.toFixed(2));
}

console.log(calculateAverage([85, 90, 92, 78])); // Output: 86.25


//? 🤝 4. Review Activity

//  Exchange solution and review:
//  • Clarity and readability
//  • Use of array methods
//  • Edge-case handling
//  • Best practice adherence

//  Prompts for feedback:
//  • What was strong about their approach?
//  • Is there any logic that could be made clearer or more concise?
//  • What did we learn from reviewing their code?


//? 🔁 5. Feedback Techniques
//  • Highlight strong use of method chaining, naming clarity, or efficient logic
//  • Point out over-complications or side effects in .map() /.reduce() usage
//  • Encourage resubmission after implementing feedback


//TODO  📝 Step 4: Reflection & Discussion

//* 🔍 Instructor-Guided Prompts

//  Instead of asking "a group," I’m inviting you to engage directly with me:
//  • When would a traditional for loop be more appropriate than .map()?
//! Answer: For small arrays or when clarity is more important than speed, .map() is often preferred for its readability. For large-scale or performance-sensitive tasks, or when we need more control, a traditional for loop is the better choice. Traditional for loops are preferable when side effects are required (e.g., logging or DOM mutation within the loop). They're also useful when you need to mutate external state across iterations.

//  • Which iteration method felt most natural for you personally, and why?
//! Answer: Based on common developer experiences and industry practices, I find the for...of loop or array methods like .map() and .forEach() most natural, depending on the context.

//  • Do you feel .reduce() helped simplify any challenges you’ve worked on before?
//! Answer: Yes, .reduce() has helped simplify many challenges. It is widely recognized as a powerful and versatile tool for handling arrays in JavaScript. As .reduce() is less readable to beginners, always document or structure it clearly when used in teams.

//* 📖 Journal Entry

//  Describe a scenario where .reduce() can make a code cleaner. What are the problems can appear, and how .reduce() can solve it more elegantly?
//! Answer: I can use .reduce() for an array that will have included a list of objects. 

//* 🧠 Concept Practice

//  Here's a solo practice task:

const data = [5, 10, 15, 20, 25];

//  Try to:
//  1. Use .map() to double values.
//  2. Use .filter() to keep values > 15.
//  3. Use .reduce() to sum values.
//  4. Then reflect: If you had to do this in a single pass for performance, how might you restructure it?

//  Code it and explain the process.

strings
    .map(toNumber)
    .filter(isEven)
    .reduce((sum, number) => sum + number)

















