//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 06: `for...of` Loop


//TODO 📝 Step 1: Theoretical Exploration

//  🎯 Goal: Understand the structure, purpose, and advantages of the `for...of` loop.

//* 🧠 What Is a `for...of` Loop?
//  The `for...of` loop is a special way to loop through values in something that can be looped over, like an array or a string.
//  🗣️ Think of it like: "For each item of this list, do something with it."

//* ✅ Basic Syntax

for (const item of iterable) {
    //  do something with item
}

//  • `item` → one value from the list (like a number, string, etc.)
//  • `iterable` → something you can loop through (like an array or string)

//? 🍎 Example 1: Looping through an Array

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
    console.log(fruit);
}

//! ✅ It loops over the actual values, not the index numbers.

//* ✨ Benefits of `for...of`

//? | Feature                          | Benefit                                 |
//  | :------------------------------- | :-------------------------------------- |
//  | ✅ Simple to read                | No need to manage index `i` or `length` |
//  | ✅ Works with `break`/`continue` | Unlike `.forEach()`                     |
//  | ✅ Ideal for arrays/strings      | Loops over values directly              |

//! 🚫 When NOT to Use `for...of`
//  • When you need the index (use for or .forEach() with index).
//  • When you are looping through objects (use for...in for that).

//? 🎵 Example 2: Looping through a String

const word = "hello";

for (const letter of word) {
    console.log(letter);
}

//* 🔍 Reflect on the following prompts:
//? 1. What do you think makes a `for...of` loop different from a `for` loop?
//  (Hint: Think about what you’re looping over and whether you need the index.)
//! ☑️ Answer: The `for...of` it loops over the actual values, and `for` is used to index.

//  ✅ That’s exactly right — and you said it simply and clearly:
//  • `for...of` → loops over values
//  • `for` → loops using an index
//  This means:
//  • `for...of` is simpler when you just care about what's in the array
//  • `for` is better when you need to know where in the array you are

//? 2. When might a `for...of` loop be easier to use than .forEach()?
//  (Consider early exits, break/continue, or readability.)
//! ☑️ Answer: A `for...of` loop can be easier to use than .forEach() when I need more control over the loop, such as using break, continue, or return, or when I want to use await for asynchronous operations within the loop.

//  `for...of` gives you:
//  • ✅ break and continue — you can exit or skip easily
//  • ✅ await support — can handle asynchronous code (unlike .forEach())
//  • ✅ Simpler readability in many cases
//  Meanwhile, .forEach():
//  • ❌ Does not allow break or continue
//  • ❌ Can behave strangely with async/await
//  • ✅ Is good for simple, no-exit loops where you are not controlling flow

//? 3. What types of data structures can you use with `for...of`?
//  (Arrays? Strings? Objects?)
//! ☑️ Answer: I can use a for...of loop with any iterable — like arrays, strings, sets, and maps — but not plain objects unless I convert them to an array of keys or entries first.

//  ✅ Usage of `for...of`:
//  • ✅ Arrays → ["a", "b", "c"]
//  • ✅ Strings → "hello" (loops through characters)
//  • ✅ Maps, Sets, Typed Arrays, arguments object, etc.

//? 4. Why might someone still choose a traditional `for` loop even if `for...of` is available?
//! ☑️ Answer: While `for...of` is excellent for cleanly iterating over values in iterable objects, traditional `for` loops remain valuable when I need index tracking, flexible iteration steps, or optimal performance in certain cases.

//* 🔍 Why someone might still use a traditional for loop:
//? | Scenario                           | Why `for` is better                |
//  | :--------------------------------- | ---------------------------------- |
//  | Need the **index** (`i`)           | Access position or do math with it |
//  | Looping with **custom step sizes** | Example: `i += 2`, `i--`           |
//  | Working with **sparse arrays**     | Skip undefined entries             |
//  | You want **maximum control**       | More manual, but flexible          |


//TODO  🧠 Step 2: Inquiry & Application

//  🎯 Goal: Prepare to use for...of by thinking through real examples and scenarios.

//? 🔹 1. You’re given an array of names:

["Olivia", "Liam", "Ava", "Noah", "Emma"]

//  How would you use a `for...of` loop to print each name? (No need to write code yet — just describe it in words.)
//! ☑️ Answer: After I decide to use `for...of` loop, I will start the loop code with `for` followed by let or const declaration. The one value from the array or string list links with "of" something I can iterate.

//  ✅ Excellent — you're thinking like a developer now!
//  You've described the core structure of a `for...of` loop:
//  • Use for (const name of names) to iterate over values
//  • Each loop gives you the actual value, not the index
//  • It’s clean, readable, and avoids dealing with counters

//? 🔹 2. You have a string like "banana"
//  How might a `for...of` loop help you count how many times the letter "a" appears?
//! ☑️ Answer: A `for...of` loop can help me count how many times the letter "a" appears in a string by iterating through each character of the string one by one, checking if it matches "a", and incrementing a counter each time it does.

//  ✅ Perfect explanation — crystal clear and exactly how it's done in practice.
//  You've got the right idea:
//  • `for...of` can loop through each letter in a string
//  • Inside the loop, use an if statement to check: if (char === "a")
//  • Keep a counter and increase it when the condition is true
//  This kind of loop is much easier to write and read than using .charAt(i) with a for loop — another big win for `for...of`.

//? 🔹 3. Let’s say you want to skip any name shorter than 4 characters.
//  How would you do that using `for...of` and continue?
//! ☑️ Answer: To skip any name shorter than 4 characters using a `for...of` loop with continue, I would check the length of each name inside the loop and use continue to skip the current iteration if the condition is met.

//  ✅ That’s exactly right — and that kind of logic is what makes `for...of` loops so flexible.
//  Here's what you're saying, broken down:
//  • Use `for...of` to get each name from the array
//  • Inside the loop:
//      • if (name.length < 4) → continue skips to the next one
//  • Otherwise, do whatever you need (like printing or processing the name)
//  This is a huge advantage over .forEach() which does not support continue.


//TODO  📝 Step 3: Assessment & Feedback for the `for...of` loop.

//* ✅ Part 1 – Quick Quiz

//  Choose the correct answer (just share your letter choices):

//? 1. What does a `for...of` loop iterate over?
//  A. Property names
//  B. Index numbers
//  C. Actual values
//  D. Object keys

//! Answer: C

//? 2. Which data type can you use with `for...of`?
//  A. Objects
//  B. Arrays
//  C. Booleans
//  D. Numbers

//! Answer: B

//? 3. Which keyword lets you skip one item in a `for...of` loop?
//  A. stop
//  B. return
//  C. continue
//  D. break

//! Answer: C

//? 4. What would this log?

```js
for (const letter of "cat") {
    console.log(letter);
}
```

//  A. "cat"
//  B. "c", "a", "t"
//  C. 0, 1, 2
//  D. undefined

//! Answer: B

//? 5. Why might you choose `for...of` over `.forEach()`?
//  A. It’s longer
//  B. You can’t break
//  C. You can use `continue` and `break`
//  D. It changes the original array

//! Answer: C

//* ✅ Part 2 – Reflection Prompts
//  Now answer these in your own words:

//? 1. Which question was easiest for you and why?
//! ☑️ Answer: Question 1 was the easiest one because it describes the main principle of `for...of`.

//? 2. Which one made you pause or think more carefully?
//! ☑️ Answer: Question 4 made me pause and think more carefully.
//  ✅ It’s a subtle shift — you're looping character-by-character, not through an array or index — and it catches a lot of people off guard at first.

//? 3. Do you feel ready to use `for...of` in your own projects? Why or why not?
//! ☑️ Answer: Yes, I do feel ready to use `for...of` in my own projects! The `for...of` loop is simple to understand and very flexible. I can easily iterate over arrays, strings, and other iterable data structures. It allows me to use break, continue, and even await inside the loop, which gives me great control over how I process each item.


//TODO  🔁 Step 4: Reflection & Journal

//* 🗣️ Part 1 – Instructor-Guided Reflection Prompts
// Please answer the following in your own words:

//? 🔹 A. In your own projects or learning journey, when would a `for...of` loop be the most useful?
//! ☑️ Answer: In my own projects, I'd use for...of to process each element in an array of results, print every character in a string, or iterate over the values fetched from a set, anytime I need a straightforward, value-oriented loop for an iterable.

//  👀 Feedback
//  ✅ That’s a clear and practical answer — and it shows you know when for...of becomes a go-to tool.
//  It really shines when:
//  • You don’t need the index
//  • You want clean, readable logic
//  • You’re working with iterable data (like results, text, or sets)

//? 🔹 B. Can you think of a situation where using `for...of` might lead to a mistake or confusion if used incorrectly?
//! ☑️ Answer: A common situation where using a for...of loop might lead to a mistake or confusion is when incorrectly assumes the loop variable is an index or key, rather than a value.

//  👀 Feedback
//  ✅ Excellent — you nailed one of the most common beginner mistakes with for...of.
//  Many developers assume:

for (const thing of array)

//  …means thing is the index, but it's actually the value.
//  This confusion often leads to:
//  • Wrong logic
//  • Attempts to access array[thing] when thing is already the value
//  • Unintended bugs when working with arrays or strings

//? 🔹 C. What would you tell someone new to programming about the benefit of `for...of` loops?
//! ☑️ Answer:  The main benefit of a for...of loop is that it lets you easily and clearly go through every element in a group—like each item in an array or each character in a string—without needing to worry about counting or tracking positions yourself. Simply get each value one by one, making the code simpler and reducing mistakes.

//  👀 Feedback
//  ✅ That’s a perfect explanation — clear, encouraging, and beginner-friendly.
//  You focused on the two biggest benefits:
//  • Simplicity – no need for counters or .length
//  • Readability – it clearly shows intent: “loop through these values”
//  Anyone new to JavaScript would feel more confident after hearing your version.

//* 📓 Part 2 – Journal Prompt (No Code)
//  Imagine you’re explaining `for...of` to a friend who’s never seen it.
// • Try using a real-world analogy — like flipping through photos, handing out flyers, or tasting different flavors.
//  How would you describe the idea of looping over each item using `for...of`?

//! ☑️ Solution: Imagine you have a box of chocolates, and you want to taste each one to discover its flavor. With a for...of loop, it’s like reaching into the box and grabbing one chocolate at a time: you don’t need to know their positions or how many there are—you just take each one in turn, taste it, and then move on to the next, until the box is empty.
//! This is exactly how for...of works with things like arrays or strings in programming:
//! • It lets you go through every item in a collection, one by one, doing whatever you want with each value, without worrying about where it is or how many there are.
//! • For example, for...of over an array of photos would be like flipping through each photo and looking at it, one after another, until you reach the end of the stack.

//  👀 Feedback
//  ✅ That is a brilliant analogy — simple, visual, and totally relatable.
//  You've perfectly captured the essence of for...of:
//  • 🍫 Box of chocolates → values from an iterable
//  • 👋 No index-tracking or counting — just one at a time
//  • 📸 Flipping through photos is a great metaphor for sequential access
//  • ✅ Emphasizing ease, clarity, and usefulness
//  This kind of explanation would help anyone new to loops truly understand what for...of is meant to do.


//TODO  📝 Step 5: Exercises `for...of` loop.

//* 🧠 Exercise 1: Looping Over an Array of Strings

//  Task:
//  You have this array of names:

const names = ["Olivia", "Liam", "Emma", "Noah", "Ava"];


//  ✅ Loop through each name and print:
//  `"Hello, [name]!"`

//? ☑️ Pseudocode 1



//! 🧮 Solution 1





//* 🧠 Exercise 2: Count Letters

//  Task:
//  Given the word:

```js
const word = "banana";
```

//  ✅ Count how many times the letter `"a"` appears.
//  Use a counter, `for...of`, and `if`.

//?  ☑️ Pseudocode 2



//! 🧮 Solution 2




//* 🧠 Exercise 3: Filter by Length

//  Task:
//  Given:

```js
const colors = ["red", "blue", "pink", "lime", "cyan", "gold"];
```

//  ✅ Use `for...of` and `continue` to skip any color **shorter than 4 characters**, and print the rest.

//?  ☑️ Pseudocode 3



//! 🧮 Solution 3



//* 🧠 Exercise 4: Loop Over Nested Array

//  Task:
//  You are given:

```js
const animalGroups = [["cat", "dog"], ["lion", "tiger"], ["fox", "wolf"]];
```

//  ✅ Use a nested `for...of` loop to print **each individual animal**.

//?  ☑️ Pseudocode 4



//! 🧮 Solution 4
























