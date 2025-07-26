//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 03.01: Break and Continue


//TODO 📝 Step 1: Theoretical Aspects

//* 🎯 Objective: Understand how break and continue control loop execution in JavaScript

//? 🧠 A. What Are break and continue?

//* 🔹 break
//  • Immediately stops the loop.
//  • Control moves to the first line of code after the loop.
//  ✅ Use when:
//  • A condition has been met and further looping is unnecessary.
//  • You want to exit early (e.g., found a matching value).

//* 🔹 continue
//  • Skips the current iteration and moves to the next one.
//  • The loop does not stop, it just does not execute the remaining code in that iteration.
//  ✅ Use when:
//  • You want to skip specific values based on a condition.
//  • You need partial filtering inside a loop.

//* 🔄 B. Comparison
//? Feature                 break                               continue
//  Stops loop?             Yes                                 No
//  Skips current?          No — ends loop completely           Yes — skips current iteration only
//  Used for...             Exiting early                       Skipping values

//* 🧪 C. Common Scenarios
//? break
//  • Searching through an array until a value is found
//  • Cancelling input collection once a user chooses "quit"
//  • Exiting nested loops (with care)

//? continue
//  • Skipping over invalid input
//  • Skipping even/odd numbers
//  • Bypassing blocked or restricted values

//* 🛠️ D. Syntax Overview

// Stop the loop at 5
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}

// Skip even numbers
for (let j = 0; j < 10; j++) {
    if (j % 2 === 0) continue;
    console.log(j);
}

//* 📎 E. Best Practices

//  • Use break deliberately, not as a lazy shortcut to avoid proper condition logic.
//  • Use continue sparingly, especially in long loops — too many can make code harder to follow.
//  • Make sure the reason for using either is obvious and intentional.


//TODO  🔍 Step 2: Inquiry & Application

// 🎯 Goal: Explore how break and continue shape loop behavior through reflection and use cases.

//* 🧠 1. Guided Inquiry Prompts
//  These questions are designed to help you reason through how and why break and continue are used.

//  Please reflect on or answer:

//? 🔹 A. How is break different from a loop condition?
//  Hint: When does a loop condition stop a loop versus when might break do it? 
//! Answer: A loop condition stops when the condition is met and runs completely. Using the "break" statement will immediately stop the loop at the point where it is executed, regardless of the loop's condition. 

//? 🔹 B. Can you think of a situation where exiting a loop early would be more efficient than allowing it to run to completion? 
//! Answer: I can use a "break" in a loop that checks age for things like access to a festival, restaurant, or website where age restrictions apply, and underage checks are necessary. When the user's input meets the required age condition (for example, being 18 or older), I can use "break" to immediately stop the loop so the program can proceed with granting access or moving to the next step.

//? 🔹 C. What kind of bug could happen if you forget to use a "break" when it is needed? 
//! Answer: If I forget to use a "break" in a JavaScript switch statement, it causes a fall-through bug, where execution continues into the next case unintentionally. This often leads to incorrect logic or unexpected behavior. In loops, missing a "break" when needed can cause extra iterations. Using "break" outside of loops or switch statements results in a SyntaxError.


//? 🔹 D. What does "continue" do that an if statement by itself does not?
//! Answer:  The continue statement in JavaScript immediately skips the rest of the current loop iteration and moves to the next iteration, whereas an if statement by itself simply controls which code inside the current iteration runs but does not alter the loop’s flow.

//* 🧠 2. Solo Reflection – Thought Exercise
//  Imagine you are looping through 100 usernames. You want to:
//  • Skip any usernames shorter than 3 characters
//  • Stop the loop entirely if you reach a username that includes the word "admin"

//? Question: How would "continue" and "break" help you accomplish both of those goals?
//! Answer: "continue" helps skip over usernames that are too short without processing them. "break" immediately stops the loop when a username containing "admin" is encountered, preventing any further usernames from being checked.

function checkUsernames(usernames) {
    for (let i = 0; i < usernames.length; i++) {

        const name = usernames[i];
        
        if (name.length < 3) {
            continue;
        } 
        
        if (name.includes("admin")) {
            console.log(`The username '${name}' contains 'admin' and has been found.`);
            break;
        }
        console.log("Valid username:", name);
    }
}

checkUsernames(["Jo", "Alex", "Olivia", "Amelia", "adminMichael", "Noah", "Oliver", "Arthur", "Theodore", "Emma", "Charlotte"]);

//  🌱 Real-World Applications
//  This exact pattern is useful for:
//  • Form validation
//  • Security flagging
//  • Search filtering
//  • Data integrity checks


//TODO  ✅ Step 3: Assessment & Feedback

//* 📋 Part 1 – Quiz (10 Questions)

//  Answer without running code — just rely on your understanding and logic.

//? 1. What does `break` do in a loop?

//  A. Skips the current iteration
//  B. Jumps to the end of the program
//  C. Exits the loop entirely
//  D. Restarts the loop from the beginning

//! Answer: C

//? 2. What does `continue` do in a loop?

//  A. Ends the loop
//  B. Skips the current iteration and proceeds to the next
//  C. Resets the loop variable
//  D. Pauses the loop temporarily

//! Answer: B

//? 3. Which keyword would you use to stop looping once you find a matching item?

//  A. exit
//  B. break
//  C. stop
//  D. match

//! Answer: B

//? 4. What will this code output?

for (let i = 0; i < 3; i++) {
    if (i === 1) continue;
    console.log(i);
}

//  A. 0 1 2
//  B. 0 2
//  C. 1 2
//  D. 0 1

//! Answer: B

//? 5. What will this code output?

for (let i = 0; i < 3; i++) {
    if (i === 1) break;
    console.log(i);
}

//  A. 0 1 2
//  B. 0
//  C. 1 2
//  D. 2

//! Answer: B

//? 6. Which scenario best suits using `continue`?**

//  A. Stop processing after finding an invalid entry
//  B. Skip empty usernames and keep processing
//  C. Exit the loop early on first match
//  D. Log all users in a single pass

//! Answer: B

//? 7. Can you use `break` inside a `switch` statement?**

//  A. No
//  B. Only in loops
//  C. Yes
//  D. Only with `if` statements

//! Answer: C

//? 8. What is a potential danger of forgetting to use `break` in a `switch`?

//  A. The program crashes
//  B. It causes a syntax error
//  C. It unintentionally runs multiple cases
//  D. It stops at the first case

//! Answer: C

//? 9. Which line properly checks if a string contains `"admin"`?

//  A. `if (name.has("admin"))`
//  B. `if (name.contains("admin"))`
//  C. `if (name.includes("admin"))`
//  D. `if (name.match("admin"))`

//! Answer: C

//? 10. What happens if you put `break` outside of a loop or switch block?

//  A. It logs an error
//  B. It ignores the `break`
//  C. It causes a syntax error
//  D. It exits the script

//! Answer: C

//  🎉 Score: 10 / 10 – Perfect!
//  You’ve clearly developed a strong command of how break and continue function inside loops and switch statements — and how to use them safely and intentionally.

//* 🧠 Part 2 – Feedback Prompts

//  Once you answer the quiz, reflect briefly on:

//? 1. Which question was easiest for you and why?
//! Answer: The first question was easy for me because I understand how "break" will behave once it is included in the code.
//  Feedback: ☑️ That shows confidence in recognizing how and when to exit a loop. You’re mastering control flow, which is core to writing efficient programs.

//? 2. Which one made you stop and think?
//! Answer: Question 4 made me stop and think.
//  Feedback: ✅ That’s completely normal. The behavior of continue in relation to loop execution can feel subtle at first — especially with loop index flow. But you got it right, and stopping to think is a good sign of active reasoning.

//? 3. Are `break` and `continue` concepts you feel ready to use in your own projects now? Why or why not?
//! Answer: As usual, every new concept confuses me when used in my own project, and `break` and `continue` are not different. 
//  Feedback: 👏 That is completely natural — implementation always feels harder than understanding. You’re not alone in this. It just means:
//  • You are stepping into real-world thinking, where it’s okay not to be perfect on the first try.
//  • You are building the habit of asking questions, testing ideas, and iterating
//  With more reps, break and continue will become as familiar to you as console.log.


//TODO  🔁 Step 4: Reflection & Discussion

//* 🎯 Goal: Solidify concepts through analogy, discussion, and personal perspective.

//  🧠 Instructor-Guided Reflection Prompts

//  Please take a moment to reflect on or respond to these prompts:

//? 🔹 A. Can you think of a real-life task that works like `break`?
//  For example: stopping a search once you find your lost keys.
//! Answer: A person decides to travel by train. To have access to train station must use the ticket. If has a valid ticket, the station gate will open, else the person cannot access the train platform.

//? 🔹 B. Can you think of a real-life task that works like `continue`?
//  For example: skipping over dirty dishes and only washing clean ones.
//! Answer: A driverless car travels from point A to B. At one point the vehicle found a STOP sign and stops. The vehicle will continue the journey once he checks if is safe to continue the journey. Similar procedure can be used for traffic lights where the vehicle must stop on red, and will continue the journey once the lights will change to green.

//? 🔹 C. What’s the biggest difference between `continue` and just using an `if` statement?
//  Think about control flow, not just the outcome.
//! Answer: The biggest difference between continue and just using an if statement is that continue actively skips the rest of the current loop iteration and immediately moves to the next one, while an if statement by itself only allows you to conditionally skip executing certain code, but the loop iteration continues and all following code in that iteration still runs unless you specifically structure your code to avoid that.

//* 📓 Journal Prompt – Explain It Without Code

//? Imagine someone new to programming asks:
//  “What does `break` do in a loop? What about `continue`?”
//  How would you explain those two concepts using `only real-life examples`, not programming terms?
//! Answer: 
//  • The `break` statement in a JavaScript loop immediately exits the loop when it is encountered. This means that the loop stops running, even if its condition has not yet become false, and control moves to the next statement after the loop.
//  • The `continue` statement, on the other hand, skips the rest of the current iteration and moves directly to the next iteration of the loop. The loop itself continues running until its condition is false or another break is hit
//  • Real-life examples: `break` is like stopping a search the moment someone finds what they are looking for, while `continue` is like skipping over an item that does not meet the requirements and moves on to the next one.


//TODO  🧩 Step 5: Exercises – Skill Practice with break and continue

//* 🎯 Goal: Practice loop control by applying break and continue in small challenges
//  We will start simple and scale up.

//* 🟢 Starter Exercises

//  1️⃣ Stop at 7
//  Prompt:
//  • Write a loop from 1 to 10.
//  • Use break to stop the loop once the number 7 is reached.
//  • Log each number before 7.

//  2️⃣ Skip Even Numbers
//  Prompt:
//  • Write a loop from 1 to 10.
//  • Use continue to skip even numbers.
//  • Log only the odd ones.

//  3️⃣ Print First 3 Words Only
//  Prompt:
//  • Given an array of words, print only the first 3 using a loop and break.

const wordsArray = ["apple", "banana", "cherry", "date", "elderberry"];

//? ☑️ Pseudocode 1

//  FOR let l = 1; l <= 10; l++
//      IF l === 7 BREAK
//      PRINT l

//! 🧮 Solution 1

for (let l = 1; l <= 10; l++) {
    if (l === 7) break;
    console.log(l);
}

//  🧠 Reinforcement Tip:
//  This pattern is great for:
//  • Stopping on the first match
//  • Handling limited attempts
//  • Avoiding unnecessary iteration once a goal is met

//? ☑️ Pseudocode 2

//  FOR let e = 1; e <= 10; e++
//      IF e % 2 === 0 CONTINUE
//      PRINT e

//! 🧮 Solution 2

for (let e = 1; e <= 10; e++) {
    if (e % 2 === 0) continue;
    console.log(e);
}

//  💡 Use Case:
//  This kind of continue logic is perfect for:
//  • Skipping invalid or incomplete data
//  • Ignoring restricted or disallowed items
//  • Bypassing anything that fails a test mid-loop

//? ☑️ Pseudocode 3

//  SET words TO an array of words

//  FOR let w = 0; w < words.length; w++
//      IF w === 3 BREAK
//      PRINT words[w]

//! 🧮 Solution 3

const words = ["apple", "banana", "cherry", "date", "elderberry"];

for (let w = 0; w < words.length; w++) {
    if (w === 3) break;
    console.log(words[w]);
}

//  💡 Use Case:
//  This logic is commonly used to:
//  • Show a preview or summary of data
//  • Prevent overloading a display or API response
//  • Apply limits or quotas in tools like chat, notifications, or logs

//* 🟡 Intermediate Challenges

//  4️⃣ Skip Banned Words
//  Prompt:
//  • Loop through an array of comments.
//  • Use continue to skip any that include the word "banned".

//  5️⃣ Stop Loop When Repeated Number Appears
//  Prompt:
//  • Loop through this array and break the loop the first time a number is repeated.

const num = [3, 5, 7, 2, 5, 9];

//? ☑️ Pseudocode 4

//  SET banned TO an array of comments

//  DEFINE FUNCTION bannedWords(banned)
//      FOR each word in banned
//          SET ban TO banned[i]
//          IF it includes "banned"
//              PRINT warning message
//              CONTINUE
//          ELSE
//              PRINT the word

//  bannedWords(banned);

//! 🧮 Solution 4

const banned = ["earnings", "money", "banned death", "banned suicide", "banned murder", "banned abuse", "banned torture", "victim", "genocide", "terrorism"];

function bannedWords(banned) {
    for (let i = 0; i < banned.length; i++) {
        const ban = banned[i];

        if (ban.includes("banned")) {
            console.log(`Your comment contain '${ban}', a banned word.`);
            continue;
        } else {
            console.log("Word:", ban);
        }
    }
}

bannedWords(banned);

//  🧠 Real-World Use Case:
//  This is exactly how content filters, moderation systems, and input sanitizers work.
//  Your structure here could easily expand into:
//  • Replacing banned words
//  • Flagging users
//  • Logging violations for admin review

//? ☑️ Pseudocode 5

// SET numbers TO an array
// SET seen TO new Set()

// FOR each number
//     IF number is already in seen
//         PRINT it’s repeated
//         BREAK
//     ELSE
//         Add it to seen

//! 🧮 Solution 5

const numbers = [3, 5, 7, 2, 5, 9];
const seen = new Set();

for (let n = 0; n < numbers.length; n++) {
    if (seen.has(numbers[n])) {
        console.log(`Number repeated: ${numbers[n]}`);
        break;
    }
    seen.add(numbers[n]);
}
