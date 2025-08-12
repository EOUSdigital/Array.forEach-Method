//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 08.01 Array.forEach Method


//TODO 📝 Step 1: Theoretical Exploration

//* 1. 📘 What Is forEach()?
//  The `forEach()` method is a built-in Array prototype method in JavaScript used to execute a provided callback function once for each element in the array.

//  Syntax:

//  array.forEach(function(element, index, array) {
    //  Your code here
//  });

//  • element → The current element being processed.
//  • index (optional) → The index of current element.
//  • array (optional) → The array that `forEach()` is being applied to.

//* 2. 🧠 How It Works
//  • Iterates over all elements in the array in order (from index 0 to array.length - 1).
//  • Executes the callback for each element.
//  • Does not return a new array — it always returns undefined.
//  • Skips empty slots in sparse arrays.

//* 3. 🛠 Example

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

//! Output:

//  0: apple
//  1: banana
//  2: cherry

//* 4. ⚠️ Important Considerations
//  • `forEach()` cannot be stopped or broken out of early (unlike for or for...of).
//  • If you need to exit early, use a regular loop or Array.some() / Array.every().
//  • It works only on arrays (or array-like objects with forEach method).
//  • It modifies nothing unless explicitly done in the callback.

//* 5. ✅ When to Use forEach()
//  • When you want to perform a side effect (e.g., logging, updating DOM) for each array element.
//  • When you don’t need a new transformed array (otherwise use `.map()`).

//* 6. ⛔ When Not to Use It
//  • When you need early termination of the loop.
//  • When you need to return a transformed array (use `.map()` instead).


//TODO  🧪 Step 2: Inquiry & Application

//* 🧭 Guided Inquiry

//? 1. Concept Check
//  • How does `forEach()` differ from `map()` in terms of return values and use cases?
//! Answer: It is advisable to use `map()` when I need to return a transformed array instead of `forEach()`.

//  Feedback: ✅ Correct — that’s the main distinction.
//  To make it clearer and more complete:
//  • forEach(): Executes a function for each element but returns undefined. Best for performing side effects (logging, DOM updates, accumulating values in a variable).
//  • map(): Executes a function for each element and returns a new array with transformed values. Best when you want to create a new array from an existing one.

//? 2. Limitation Awareness
//  • Why cannot you use break or return to exit a `forEach()` early?
//  (Hint: Think about how the callback function works internally.)
//! Answer: I cannot use break or return to exit a `forEach()` early because it execute a provided callback function once for each element in the array.

//  Feedback: ✅ That’s on the right track — here’s the more precise reasoning:
//  `forEach()` is designed to run its callback once for every element in the array, and there’s no built-in mechanism to break out early.
//  • A return inside the callback only exits that single callback execution, not the entire forEach() loop.
//  • A break cannot be used because `forEach()` is not a traditional loop — it is a higher-order function that controls iteration internally.
//  If you need early termination, you would use a `for` loop, `for...of`, or methods like `.some()` or `.every()`.

//? 3. Performance Context
//  • If you have a very large array and need to stop looping after finding the first match, why might `forEach()` be inefficient?
//! Answer: It cannot stop looping in a very large array because it execute a provided callback function once for each element in the array, and will continue even after finding the first match until the loop ends.

//  Feedback: ✅ Exactly — well put. When working with large datasets, `forEach()` will still process every single element even if the desired condition is met early. This wastes CPU cycles and memory bandwidth, making it less efficient than loops that allow early exits (e.g., `for`, `for...of`, `.some()`).

//? 4. Debugging Insight
//  • Given the code:

const numbers = [1, 2, 3];
numbers.forEach(num => {
    if (num === 2) return;
    console.log(num);
});

//? What will be logged and why?
//! Answer:  It will log "1 and 3" because after finding the first match "2" the `forEach()` continue until the end of the loop.

//  Feedback: ✅ Correct — and here’s why:
//  • When num is 2, the return statement only exits the current callback invocation, not the entire loop.
//  • So, 1 is logged, 2 is skipped, and 3 is logged.

//? 5. Comparison
//  • Can `forEach()` modify the original array? Under what circumstances?
//! Answer: Yes, `forEach()` can modify the original array if I will change its elements inside the callback function, such as by setting specific array indices or mutating object properties.

//  Feedback: ✅ Exactly — that’s spot on.

//  To clarify:
//  • Direct element reassignment works:

const nums = [1, 2, 3];
nums.forEach((num, i, arr) => {
    arr[i] = num * 2;
});

console.log(nums); // [2, 4, 6]

//  • Mutating object properties also works because objects are referenced in memory:

const users = [
    { name: 'Alice' }, 
    { name: 'Bob' }
];

users.forEach(user => {
    user.name = user.name.toUpperCase();
});

console.log(users); // [{ name: 'ALICE' }, { name: 'BOB' }]

//  ⚠️ This can be powerful, but it should be used with caution to avoid **unintended side effects**.


//* ⚙️ Real-World Simulation Task

//  Scenario:
//  You are building a shopping cart summary feature for an e-commerce site.

const cart = [
    { product: 'Laptop', price: 1200 },
    { product: 'Mouse', price: 25 },
    { product: 'Keyboard', price: 75 }
];

//? Your Task:
//  Write a displayCartSummary(cart) function that:
//  1. Uses forEach() to log each product in the format:
//  • "Product: Laptop, Price: $1200"
//  2. Calculates and logs the total price at the end in the format:
//  • "Total: $1300"

//! Solution

function displayCartSummary(cart) {
    let total = 0;
    cart.forEach(item => {
        console.log(`Product: ${item.product}, Price: $${item.price}`)
        total += item.price;
    });
    console.log(`Total: $${total}`);
}

displayCartSummary(cart);


//TODO  ✅ Step 3: Assessment & Feedback

//* 🎯 Quick Quiz (5 Questions)

//? 1. What does `forEach()` return after executing its callback on all array elements?

//  A. A new transformed array
//  B. `undefined`
//  C. The modified array
//  D. Nothing at all

//! Answer: B

//  Feedback:   ✍️ forEach() always returns undefined, regardless of what happens in its callback. It’s meant for side effects, not data transformation.

//? 2. Which of the following can `forEach()` not do?

//  A. Access both value and index of each element
//  B. Stop iteration early with `break`
//  C. Modify elements of the original array
//  D. Run a callback for each element in the array

//! Answer: B

//  Feedback:   ✍️ forEach() cannot exit early. Even return only exits the callback, not the loop. Use for, for...of, .some(), or .every() for early termination.

//? 3. If you need to stop looping after the first matching item, which method is a better choice than `forEach()`?

//  A. `.map()`
//  B. `.filter()`
//  C. `.some()`
//  D. `.concat()`

//! Answer: C

//  Feedback:   ✍️ .some() will stop iterating once the callback returns true, making it more efficient for finding early matches in large arrays.

//? 4. Given the code:

[1, 2, 3].forEach(num => {
  console.log(num * 2);
});

//? What will be logged?

//  A. `2 4 6`
//  B. `1 2 3`
//  C. `undefined`
//  D. An error

//! Answer: A

//  Feedback:   ✍️ the callback doubles each number and logs it in sequence.

//? 5. Can `forEach()` be used on objects created with `{}` syntax?

//  A. Yes, always
//  B. No, unless the object is an array or has a `forEach` method defined
//  C. Yes, but only if keys are numeric
//  D. No, forEach only works on primitive values

//! Answer: B

//  Feedback:   ✍️ forEach() is an array method and works on array-like objects only if they have their own `.forEach()` implementation.


//TODO  🪞 Step 4: Reflection & Journal

//* 

//? 1. What part of the `forEach()` method felt most intuitive to you?
//  (Think about syntax, behavior, or typical use cases.)
//! Answer: The most intuitive part is that the `forEach()` does not stop iteration early with `break`.

//  Feedback: ✅ That’s a solid observation — understanding that forEach() always runs through the entire array is a key insight, and you clearly grasp that limitation.

//? 2. What part was least intuitive or required more effort to understand?
//  (Maybe a limitation like the inability to break early, or how return works inside the callback.)
//! Answer: I do not think I understand how the `forEach()` works. I must do some practice, and solve some exercises.

//  Feedback: ✅ That’s an honest and valuable reflection. 💡 You have already understood the basics, but consistent practice with small, focused exercises will help you internalize how `forEach()` behaves in different contexts — especially with parameters like element, index, and array, and with things like mutating values or working with nested loops.

//? 3. Can you think of a real or hypothetical scenario where using `forEach()` would be more appropriate than `map()`?
//  (For example, when performing DOM updates or logging data instead of creating a transformed array.)
//! Answer: A real or hypothetical scenario where I am using `forEach()` would be more appropriate than `map()` when I build a to-do app. If I want to log each task to the console to debug my list `forEach()` is a better option.

//  Feedback: ✅ Perfect example — logging tasks for debugging in a to-do app is exactly the kind of side effect forEach() is designed for.
//  `map()` would be overkill there, since you do not need a new transformed array — you just want to perform an action for each item.

//? 4. If you were explaining `forEach()` to a beginner in 2–3 sentences, how would you describe it?
//  (This checks your ability to teach and communicate the concept clearly.)
//! Answer: `forEach()` is a built‑in JavaScript method that lets you run a function once for each item in an array. Instead of writing a loop manually, you pass a function to `forEach()`, and it automatically goes through the array elements in order. It doesn’t return anything — it’s mainly for doing actions like printing values or updating something for each element.

//  Feedback: ✅ That’s an excellent beginner-friendly explanation — clear, accurate, and practical.
//  You have covered:
//  • What it is (a built-in array method)
//  • How it works (runs a callback for each item in order)
//  • What it’s for (side effects, not returning values)


//TODO  🧩 Step 5: Exercises


//? Exercise 1: Logging Names

const students = ['Alice', 'Bob', 'Charlie'];

// Use forEach to log:
// "Student: Alice"
// "Student: Bob"
// "Student: Charlie"

//! Solution 1

students.forEach(student => {
    console.log(`Student: ${student}`);
});

//  Feedback: ✅ Perfect — your solution for Exercise 1 is exactly correct.
//  What it does well:
//  • Uses `forEach()` correctly with a single parameter (student) for each array element.
//  • Outputs the required text in the correct format.

//? Exercise 2: Squaring Numbers

const numbers2 = [2, 4, 6, 8];

// Use forEach to log the square of each number.

//! Solution 2

numbers2.forEach(number => {
    console.log(number * number);
});

//  Feedback: ✅ Correct — that’s exactly how to use forEach() for squaring numbers.

//? Exercise 3: Summing Prices

const prices = [10, 20, 30];
let total = 0;

// Use forEach to add each price to `total`, then log the total.

//! Solution 3

prices.forEach(price => {
    total += price;
})

console.log(total);

//  Feedback: ✅ Nicely done — that’s the correct approach for Exercise 3.
//  Why it works:
//  • forEach() iterates through each price.
//  • The callback adds each price to total.
//  • Finally, you log the accumulated total.

//? Exercise 4: Mutating an Array

const ages = [15, 20, 25];

// Use forEach to add 1 to each age directly in the array.

//! Solution 4

ages.forEach((age, index, arr) => {
    arr[index] = age + 1;
});

console.log(ages);

//  Feedback: ✅ Perfect — that’s exactly how you use forEach() to mutate an array in place.
//  Why it works:
//  • age → the current value.
//  • index → the position in the array.
//  • arr → the original array reference.
//  • Updating arr[index] changes the original array directly.

//? Exercise 5: Nested forEach

const categories = [
    ['apple', 'banana'],
    ['carrot', 'lettuce']
];

// Use nested forEach to log each item in each category.

//! Solution 5

categories.forEach(row => {
    row.forEach(category => {
        console.log(category);
    })
})

//  Feedback: ✅ Spot on — that’s exactly how to handle nested forEach() calls.
//  Why it works:
//  • The outer forEach() loops through each sub-array (row).
//  • The inner forEach() loops through each item in that sub-array (category).
//  • This allows you to access and log every single element across all categories.


//TODO  🧩 Step 6: Project Integration — Task List Renderer

//* Scenario
//  You’re building a small Task List Renderer for a productivity web app.

























































