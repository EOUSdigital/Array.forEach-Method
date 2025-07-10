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

// const completedTasks = tasks.filter(task => task.completed);

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

//  Describe a scenario where .reduce() can make a code cleaner. What problems can appear, and how .reduce() can solve it more elegantly? 
//! Answer: I can use .reduce() for an array that includes a list of objects, transforming the array into a single value or a new data structure in a single pass. When I need to perform filtering, mapping, or grouping all at once, .reduce() avoids chaining multiple array methods, which would otherwise create intermediate arrays and require multiple passes over the data.

//? 💡 Real-World Example You Might Encounter:
//  Scenario: Group a list of transactions by category:

const transactions = [
    { category: "food", amount: 10 },
    { category: "transport", amount: 20 },
    { category: "food", amount: 15 },
];

const grouped = transactions.reduce((acc, tx) => {
    acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
    return acc;
}, {});

console.log(grouped);                                       //  Output: { food: 25, transport: 20 }

//  ✨ It was avoid .filter() + .map() + .forEach() entirely.

//! 📘 Summary of Strengths in Reflection
//? Category                            Feedback
//  Technical Accuracy                  Excellent understanding of .reduce() use cases and optimizations
//  Strategic Perspective               Recognized value of single-pass transformation
//  Realism and Practicality            Focused on transforming object arrays—common real-world scenario
//  Growth Potential                    Ready to apply .reduce() for complex aggregation challenges


//* 🧠 Concept Practice

//  Here's a solo practice task:

const data = [5, 10, 15, 20, 25];

//  Try to:
//  1. Use .map() to double values.
//  2. Use .filter() to keep values > 15.
//  3. Use .reduce() to sum values.
//  4. Then reflect: If you had to do this in a single pass for performance, how might you restructure it?

//  Code it and explain the process.

//! Solution

const str = data.map(d => d * 2).filter(d => d > 15).reduce((acc, val) => acc + val, 0);
console.log(str);

//? 🔍 What this does:
//  1 .map(d => d * 2) squares each number.
//      • [10, 20, 30, 40, 50]

//  2 .filter(d => d > 15) keeps all numbers greater than 15.
//      • Still [20, 30, 40, 50] — qualify numbers

//  3 .reduce((acc, val) => acc + val, 0) sums them:
//      • 140

//! 🟡 Conclusion: This works correctly, but it does not double the values or filter those greater than 15 from the original as per the original task.

//? ⚙️ Performance-Optimized (Single-Pass) Version
//  Using only .reduce():

const optimized = data.reduce((acc, val) => {
    const doubled = val * 2;
    if (doubled > 15) {
        acc += doubled
    }
    return acc;
}, 0);

//? ✅ Benefits:
//  • Only one traversal of the array (O(n))
//  • No intermediate arrays created
//  • Keeps logic compact and performant

//? 🧠 Reflection
//  • Solid understanding of method chaining
//  • Initiative to attempt chaining logic creatively
//  • Awareness of how data flows through transformations


//TODO  🧩 Step 5: Exercises – Progressive Skill Building


//* 🟢 1. Starter Exercises

//  Reinforce the basics of iteration and array method usage.

//  1. Odd Number Logger
//  Write a function that returns all odd numbers between 1 and 100.

//  2. Double Values with .map()
//  Given an array of numbers, return a new array with each value doubled.

//  3. String Lengths
//  Convert an array of strings into an array of string lengths using .map().

//? Pseudocode 1

//  DEFINE FUNCTION getOddNumbers
//      SET odds []
//      FOR let i = 1; i <= 100; i++
//          IF i % 2 !== 0 odds.push(i)
//      RETURN odds
//  END FUNCTION

//  PRINT getOddNumbers()


//! Solution 1

function getOddNumbers() {
    const odds = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) odds.push(i);
    }
    return odds;
}

console.log(getOddNumbers());

//? Pseudocode 2

// DEFINE FUNCTION doubleValues
//     SET numbers TO an array of numbers
//     SET doubled TO numbers.map(num => num * 2)
//     RETURN doubled
// END FUNCTION

// PRINT doubleValues()

//! Solution

function doubleValues() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const doubleNumbers = numbers.map(num => num * 2);
    return doubleNumbers;
}

console.log(doubleValues());

//? Pseudocode 3

//  DEFINE FUNCTION arrayStrings
//      SET strings TO an array of strings values 
//      SET lengths TO a strings.map(str => str.length)
//       return lengths

//  PRINT arrayStrings()

//! Solution 3

function arrayStrings() {
    const strings = ["apple", "42", "true", "banana", "7", "false"]
    const lengths = strings.map(str => str.length);
    return lengths;
}

console.log(arrayStrings());


//* 🟡 2. Intermediate Exercises

//  Encourage method chaining, conditional logic, and transformation.

//  4. Filter Even Numbers
//  Use .filter() to return only even numbers from an array of integers.

//  5. Capitalize Usernames
//  Given an array of usernames in lowercase, return a new array with each username capitalized.

//  6. Extract Active Users
//  Given an array of user objects with an isActive property, return only the active users.

//  7. Total Cart Price
//  Use .reduce() to calculate the total cost of a shopping cart array with { price, quantity } items.

//? Pseudocode 4

//  DEFINE FUNCTION evenNumbers
//      SET numbers TO an array of integers
//      SET evens TO numbers.filter(num => num % 2 === 0)
//      RETURN evens
//  END FUNCTION

//  PRINT evenNumbers()

//! Solution 4

function evenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const evens = numbers.filter(num => num % 2 === 0);
    return evens;
}

console.log(evenNumbers());

//? Pseudocode 5

//  DEFINE FUNCTION capitalize
//      SET userNames TO an array of lowercase strings
//      SET capitalized TO userNames.map(name => uppercase first character + rest of name;
//      RETURN capitalized
//  END FUNCTION

//  PRINT capitalize

//! Solution 5

function capitalize() {
    const userNames = ["olivia", "noah", "amelia", "oliver", "lily", "jack", "freya", "james", "ava", "harry", "ivy", "george", "florence", "george", "juliet"];
    const capitalized = userNames.map(name => name[0].toUpperCase() + name.slice(1));
    return capitalized;
}

console.log(capitalize());

//? Pseudocode 6

//  DEFINE FUNCTION getActiveUsers
//      SET users TO an array of user objects with an isActive property
//      SET activeUsers TO users.filter(user => user.isActive)
//      RETURN activeUsers
//  END FUNCTION

//  PRINT getActiveUsers()

//! Solution 6

function getActiveUsers() {
    const users = [
        { user: "Olive", age: 23, isActive: true },
        { user: "Noah", age: 17, isActive: false },
        { user: "Lily", age: 55, isActive: true },
        { user: "Jack", age: 31, isActive: false },
    ];
    const activeUsers = users.filter(user => user.isActive && user.age> 25);
    return activeUsers;
}
console.log(getActiveUsers());

//? Pseudocode 7

//  DEFINE FUNCTION totalPrice
//      SET cart TO an array of objects with price and quantity
//      SET totalCost TO cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
//      RETURN totalCost
//  END FUNCTION

//  PRINT totalPrice()


//! Solution 7

function totalPrice() {
    const cart = [
        { id: 1, name: "Product 1", price: 10, quantity: 6 },
        { id: 2, name: "Product 2", price: 20, quantity: 3 },
        { id: 3, name: "Product 3", price: 15, quantity: 4 },
    ]
    const totalCost = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return `Total Price: $${totalCost.toFixed(2)}`;
}

console.log(totalPrice());

//? ✅ Highlights:
//  • .reduce() used cleanly for aggregate computation.
//  • .toFixed(2) adds professional-grade currency formatting.
//  • Clear, expressive naming (item, totalCost).
//  • This is production-ready code — suitable for real-world e-commerce logic.


//* 🔴 3. Advanced Exercises

//  Introduce object restructuring, nested arrays, and more abstract uses of .reduce().

//  8. Flatten Nested Arrays
//  Given a 2D array, use .reduce() to flatten it into a single array.

//  9. Group by Category
//  Given an array of objects with a category property, return an object that groups them by category.

//  10. Frequency Counter
//  Count the frequency of values in an array (e.g., count how many times each word appears).

//? Pseudocode 8

// DEFINE FUNCTION flattenArray
//     SET nestedArray TO a 2D array (array of arrays)
//     SET flattened TO nestedArray.reduce((acc, val) => acc.concat(val), [])
//     RETURN flattened
// END FUNCTION

// PRINT flattenArray()

//! Solution 8

function flattenArray() {
    const nestedArray = [[1, 2], [3, 4], [5, 6]];
    const flattened = nestedArray.reduce((acc, val) => acc.concat(val), []);
    return flattened;
};

console.log(flattenArray());

//? ✅ Highlights:
//  • .reduce() + .concat() is a classic approach to flattening without using .flat()
//  • Functional and non-mutating: your accumulator grows cleanly
//  • This pattern applies to:
//      • Nested form inputs
//      • Flattening batched API responses
//      • Transforming matrix/grid structures

//? Pseudocode 9

// DEFINE FUNCTION groupByCategory
//     SET items TO an array of objects with a category property
//     SET grouped TO items.reduce((acc, item) => {
//         IF acc does not have item.category
//             SET acc[item.category] TO empty array
//         PUSH item INTO acc[item.category]
//         RETURN acc
//     }, {})
//     RETURN grouped
// END FUNCTION

// PRINT groupByCategory()

//! Solution 9

function groupByCategory() {
    const items = [
        { category: 'fruit', name: 'apple' },
        { category: 'veg', name: 'carrot' },
        { category: 'fruit', name: 'banana' }
    ];
    
    const grouped = items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});
    return grouped;
}

console.log(groupByCategory());

//? ✅ Highlights:
//  • Correctly initializes category buckets only when needed.
//  • Leverages .reduce() for a single-pass transformation.
//  • Uses dynamic object keys for flexible grouping.
//  • Clear and reusable — this is a go-to approach in dashboards, reports, and filterable UIs.

//? Pseudocode 10

// DEFINE FUNCTION frequencyCounter
//     SET values TO an array of strings (or numbers)
//     SET frequency TO values.reduce((count, item) => {
//         IF item exists in count
//             INCREMENT count[item]
//         ELSE
//             SET count[item] TO 1
//         RETURN count
//     }, {})
//     RETURN frequency
// END FUNCTION

// PRINT frequencyCounter()

//! Solution 10

function frequencyCounter() {
    const values = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
    const frequency = values.reduce((count, item) => {
        count[item] = (count[item] || 0) + 1;
        return count;
    }, {});
    return frequency;
}

console.log(frequencyCounter());

//? ✅ Instructor Notes:
//  • You remembered the key concept: accumulator as an object, keyed by the item.
//  • The only issue was a comparison condition that didn't align with the data types.
//  🧠 This exercise is a classic — and forms the basis for tag clouds, autocomplete engines, and analytics dashboards.


//* 💎 4. Bonus Challenge

//  A capstone-style mini-challenge for problem solving and chaining mastery.

//  11. Filter + Map + Reduce Combo
//  Given an array of product objects, return the total price of all items in stock (stock > 0), but only for those over a certain price threshold. Use method chaining.

//? Pseudocode Bonus Challenge

// DEFINE FUNCTION bonusChallenge
//     SET products TO an array of objects with price and stock properties
//     SET priceThreshold TO 100
//     SET total TO products
//         FILTER products with stock > 0 AND price > priceThreshold
//         MAP those products to their price
//         REDUCE prices to total sum
//     RETURN total
// END FUNCTION

// PRINT bonusChallenge()

//! Solution Bonus Challenge

function bonusChallenge() {
    const products = [
        { name: 'A', price: 120, stock: 5 },
        { name: 'B', price: 80, stock: 0 },
        { name: 'C', price: 200, stock: 2 },
        { name: 'D', price: 90, stock: 10 }
    ];

    const priceThreshold = 100;

    const total = products
        .filter(product => product.stock > 0 && product.price > priceThreshold)
        .map(product => product.price)
        .reduce((sum, price) => sum + price, 0);
    return total;
        
}

console.log(bonusChallenge());

//? ✅ Instructor Notes:
//  • Clean chaining of .filter(), .map(), and .reduce() — great readability.
//  • Applied realistic business logic (stock + price threshold).
//  • Used constants (priceThreshold) to make the function adaptable and testable.
//  • Return type is ready for integration (can be formatted if needed).


//TODO  🛠️ Step 6: Project Integration

//? 🔗 Objective:
//  Apply loops and high-order methods (.map(), .filter(), .reduce()) to realistic components of an ongoing or small web app project.
//  We will use a To-Do List App or Shopping Cart App as the base — both are common and effective contexts.

//* 🧩 Option 1: To-Do List Integration

//  ✅ Use .filter():
//  • Filter completed tasks:

const completedTasks = tasks.filter(task => task.completed);

//  ✅ Use .map():
//  • Display formatted task entries:

const taskListHTML = tasks.map(task => `<li>${task.title}</li>`).join('');

//  ✅ Use .reduce():
//  • Count how many tasks are left:

const remaining = tasks.reduce((acc, task) => acc + (!task.completed ? 1 : 0), 0);

//* 🛍️ Option 2: Shopping Cart Integration

//  ✅ Use .filter():
//  • Filter out items that are out of stock

//  ✅ Use .map():
//  • Format display of each cart item as HTML

//  ✅ Use .reduce():
//  • Calculate total price of the cart

//* 💡 Suggested Mini Project Prompt

//? Scenario:
//  You’re building a task dashboard. Use .map(), .filter(), and .reduce() to:

//  • Display all tasks as HTML
//  • Filter by priority or status
//  • Show how many tasks are overdue
//  • Calculate a productivity score (e.g., ratio of completed to total)

//* 🧪 Challenge (Optional Integration Task)

//  Write a function or snippet that:
//  • Takes an array of tasks (title, completed, priority, dueDate)
//  • Filters only high-priority tasks
//  • Maps them into a display format
//  • Reduces them to a count of those due today
//  You're welcome to write this as a stretch exercise before moving to the next step.


//! 🧩 Option 1: To-Do List Integration Solution

// 1. Initial list of tasks
const tasks = [
    { title: "Learn JavaScript", completed: false },
    { title: "Build a To-Do App", completed: true },
    { title: "Practice array methods", completed: false },
    { title: "Read documentation", completed: true }
];

// 2. Use .filter() to get completed tasks
const completedTasks2 = tasks.filter(task => task.completed);
console.log("✅ Completed Tasks:");
completedTasks2.forEach(task => console.log(`- ${task.title}`));

// 3. Use .map() to create formatted task entries
const formattedTasks = tasks.map(
    (task, i) => `${i + 1}. [${task.completed ? "x" : " "}] ${task.title}`
);
console.log("\n📝 All Tasks:");
formattedTasks.forEach(line => console.log(line));

// 4. Use .reduce() to count remaining (incomplete) tasks
const remaining2 = tasks.reduce((count, task) => count + (!task.completed ? 1 : 0), 0);
console.log(`\n🔢 Tasks Remaining: ${remaining2}`);


//! 🛍️ Option 2: Shopping Cart Integration

// Sample cart items
const cart = [
    { name: "Apple", price: 0.5, quantity: 4, inStock: true },
    { name: "Banana", price: 0.3, quantity: 0, inStock: false },
    { name: "Orange", price: 0.8, quantity: 2, inStock: true },
    { name: "Milk", price: 1.5, quantity: 1, inStock: true },
    { name: "Eggs", price: 2.0, quantity: 0, inStock: false }
];

// ✅ Use .filter() to get only items that are in stock
const availableItems = cart.filter(item => item.inStock && item.quantity > 0);

console.log("🛒 Available Items in Cart:");
availableItems.forEach(item => {
    console.log(`- ${item.name} (x${item.quantity})`);
});

// ✅ Use .map() to format each cart item as an HTML string (for demonstration)
const formattedItems = availableItems.map(item => `<li>${item.name} - $${item.price} × ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</li>`);

console.log("\n📝 Formatted Cart Items (HTML):");
formattedItems.forEach(line => console.log(line));

// ✅ Use .reduce() to calculate the total price of the cart
const totalPrice = availableItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

console.log(`\n💰 Total Cart Price: $${totalPrice.toFixed(2)}`);


//! 📝 Mini Project Prompt: Task Dashboard

const tasks2 = [
    { title: "Finish report", completed: true, due: "2025-07-10", priority: "high" },
    { title: "Email client", completed: false, due: "2025-07-08", priority: "medium" },
    { title: "Team meeting", completed: true, due: "2025-07-11", priority: "low" },
    { title: "Code review", completed: false, due: "2025-07-09", priority: "high" },
    { title: "Update docs", completed: false, due: "2025-07-13", priority: "medium" }
];

// 1. Display all tasks as HTML (as strings)
const allTasksHTML = tasks2.map(task => `<li>${task.title} [${task.priority}] - ${task.completed ? "✅" : "❌"} (Due: ${task.due})</li>`);
console.log("All tasks as HTML:");
allTasksHTML.forEach(line => console.log(line));

// 2. Filter by priority
const highPriorityTasks = tasks2.filter(task => task.priority === "high");
console.log("\nHigh Priority Tasks:");
highPriorityTasks.forEach(task => console.log(`- ${task.title}`));

// 2. Filter by status (completed)
const completedTasks3 = tasks2.filter(task => task.completed);
console.log("\nCompleted Tasks:");
completedTasks3.forEach(task => console.log(`- ${task.title}`));

// 3. Show how many tasks are overdue
const today = "2025-07-11";
const overdueCount = tasks2.filter(task => !task.completed && task.due < today).length;
console.log(`\nOverdue Tasks: ${overdueCount}`);

// 4. Calculate a productivity score (ratio of completed to total)
const productivityScore = (tasks2.reduce((acc, task) => acc + (task.completed ? 1 : 0), 0) / tasks2.length) * 100;
console.log(`\nProductivity Score: ${productivityScore.toFixed(1)}%`);

//* 💡 What This Shows:
//? Skill                                       Evidence
//  Data Validation & Filtering                 Skips invalid cart items
//  User-Facing Logic                           Converts data into formatted, readable HTML
//  Functional Programming                      Applies chaining fluently with pure functions
//  Real-World Modeling                         Mimics e-commerce/cart logic exactly


//TODO  🧾 Step 7: Exit Ticket Questions


//* 1. What’s one key takeaway from the lesson?

//! Answer: Understanding and applying JavaScript’s array methods—.map(), .filter(), and .reduce()—is essential for efficiently processing and manipulating data in real-world projects, such as task dashboards or shopping carts.

//* 2. Which method or concept still confuses you or deserves more practice?

//! Answer: A concept that deserves more practice and can be confusing is the .reduce() method in JavaScript. I find it challenging to understand how to use .reduce() to accumulate values or transform arrays, especially compared to the more straightforward .map() and .filter() methods.

//* 3. Can you summarize the difference between .forEach(), .map(), and .reduce() in your own words?

//! Answer: The key difference between .forEach(), .map(), and .reduce() are:
//  • .forEach() - Runs a function on each item in the array, mainly for side effects like logging or updating something outside the array. It doesn’t return a new array or value—its purpose is just to execute code for every element.

//  • .map() - Transforms each item in the array using a function and returns a new array with the transformed values. The original array stays the same. Use .map() when you want to create a new array based on the original.

//  • .reduce() - Processes all items in the array to build up a single result (such as a number, object, or even another array). It uses an accumulator that carries over from one element to the next. Use .reduce() when you want to combine all values into one output, like calculating a total or building a summary

