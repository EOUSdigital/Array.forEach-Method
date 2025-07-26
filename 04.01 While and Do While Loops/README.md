# 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 04.01: While and Do While Loops


## 📝 Step 1: Theoretical Aspects

🎯 Objective: Understand the logic and differences between `while` and `do...while` loops in JavaScript.

🔄 What is a `while` loop?
- Repeats a block of code as long as a given condition is true.
- The condition is evaluated before each iteration.
- If the condition is false at the start, the loop does not run at all.

🔹 Syntax:

```js
while (condition) {
    //  code to ron
}
```

🔁 What is a `do...while` loop?
- Similar to a `while` loop, but guarantees the code runs at least once.
- The condition is checked after each iteration.

🔹 Syntax:

```js
do {
    //  code to run
} while (condition);
```

### 🧠 Key Differences

| Feature                      | while                        | do...while                      |
| :--------------------------- | :--------------------------- | :--------------------------     |
| Condition checked            | Before loop runs             | After loop runs                 |
| Guaranteed execution?        | ❌ No                        |✅ Yes (runs at least once)     |
| Use case                     | When the loop may not run    | When it must run at least once  |

#### 📦 Common Use Cases
✅ Use `while` when:
- You are waiting for a user input to match a valid value.
- You are unsure whether the condition is true at first.

✅ Use `do...while` when:
- You need to run code at least once before checking (e.g., prompt until valid).
- You are processing at least one chunk of data, regardless of condition.

#### ⚠️ Best Practices
- Always include a way to break the loop (e.g., update the condition inside the loop).
- Use `do...while` sparingly; many cases can be handled with safer loop structures like `while` or `for`.

---

## 🔍 Step 2: Inquiry & Application

🎯 Goal: Explore when and why to use while and `do...while` through conceptual reflection

---

### 🧠 Guided Thinking Prompts
Answer these in your own words to clarify how each loop type behaves:

🔹 A. When would a `while` loop be better than a `for` loop?
- Answer: A `while` loop can offer a better solution when we expect a user to input credentials for login and match a valid value.

##### A while loop is ideal for situations where:
- I do not know how many attempts will be needed.
- The condition is checked repeatedly until it becomes false (e.g., correct credentials).
##### 💡 This is especially true in user interaction or validation flows.

🔹 B. What is one scenario where a `do...while` loop makes more sense than a `while` loop?
- Answer: A `do...while` loop makes more sense than a `while` loop when I need the loop body to execute at least once, regardless of the initial condition. A common scenario is user input validation—for example, prompting a user to enter a value and repeatedly asking until the input meets certain criteria.

✅ Guaranteed execution at least once — perfect for things like prompting input or running setup logic.
##### This makes `do...while` especially useful for:
- Input validation loops.
- Form confirmations.
- Menus or option dialogs.

🔹 C. What would happen if your loop condition is never updated inside a `while` or `do...while` loop?
- Answer: If a loop condition is never updated inside a `while` or `do...while` loop, the condition that controls when the loop should terminate will never become false. As a result, the loop will continue executing indefinitely, creating an infinite loop.

---

### 🧠 Why it matters:
An infinite loop:
- Can freeze a program.
- Crash a browser or app.
- Drain resources on a server.
##### In professional code, developers always include a way to exit — either by updating the loop condition or using break.

🔹 D. Do you think `do...while` loops are used often in real projects? Why or why not?
- Answer: I do not think `do...while` loops are used often in real projects, because in many cases can be handled with a safer loop structure like `while` or `for` loop.

🔍 Why do...while is rarely used:
- It is less predictable because the condition is checked after the code runs.
- It can introduce subtle bugs if you forget that it always runs once.
- Most use cases can be safely handled with while or for, which are more readable and expected by other developers.
##### 💡 In modern JavaScript, developers tend to favor clarity — and while/for loops give that more consistently.

---

### 🧠 Scenario Prompt
Imagine you are building a login screen that keeps asking for a password until the user types the correct one.

❔ Question: Would a `while` loop or a `do...while` loop be better here — and why?
- ☑️ Answer: A `while` loop will be better than `do...while` because it will check if the user typed the correct password or not.

### 🧠 Scenario Clarification:
Prompt:
- A login screen keeps asking for a password until the user types the correct one.

✅ Most Suitable Answer:
##### A `do...while` loop is actually the better fit here.

Q: Why?

 A: Because:
- The app needs to prompt the user at least once — even before checking if the password is correct.
- `do...while` ensures the login prompt appears before evaluating the condition.

✅ Example Logic:

```js
do {
    // ask user for password
} while (password !== "secret");
```

If you used a `while` loop, the condition would need to be defined before the user even types anything — which may not be practical.

---

## ✅ Step 3: Assessment & Feedback

### 📋 Part 1 - Quiz (10 Questions)
Please answer the following based on what you have learned.

```js
1. Which loop checks the condition before running?
A. for
B. while
C. do...while
D. if

☑️ Answer: B

2. Which loop is guaranteed to run at least once?
A. for
B. while
C. do...while
D. foreach

☑️ Answer: C

3. What does this loop do?

let x = 5;
while (x > 0) {
    console.log(x);
    x--;
};

A. Nothing
B. Prints 0 through 5
C. Prints 5 through 1
D. Infinite loop

☑️ Answer: C

✅ The loop starts at x = 5 and decrements x by 1 on each iteration, printing: 5 4 3 2 1
- The condition x > 0 becomes false once x hits 0 — so the loop exits properly.

4. What is the risk of forgetting to update the loop condition in a `while` loop?
A. The loop will skip the condition
B. It will create an infinite loop
C. The loop will only run once
D. It will break the program entirely

☑️ Answer: B

✅ If you forget to update the loop variable or condition inside a `while` or `do...while`, the condition may never become false, causing the loop to run forever — a classic bug in programming.

5. When is a `do...while` loop useful?
A. When the condition may be false to start
B. When you want to run at least once
C. When using arrays
D. Never

☑️ Answer: B

✅ A `do...while` loop is the go-to tool when you need the loop to run no matter what, at least for the first time — like prompting a user or running an initial calculation.

6. Which of these would cause a `while` loop to stop?
A. return
B. continue
C. break
D. skip

☑️ Answer: C

✅ The break statement immediately exits the loop, no matter what the loop condition says — it’s a controlled way to stop the loop early.
 🧠 Quick reminder:
`continue` skips to the next iteration
`return` exits a function, not just the loop
`skip` is not a valid JavaScript keyword

7. What will this loop output?

let count = 0;
do {
    console.log(count);
    count++;
} while (count < 3);

A. 0 1 2
B. 1 2 3
C. 0 1 2 3
D. Nothing

✅ Let’s walk through it:
count = 0 → printed
count = 1 → printed
count = 2 → printed
count = 3 → loop ends (3 < 3 is false)
✅ It runs exactly 3 times, printing:   0 1 2

☑️ Answer: A

8. What is a key difference between `while` and `do...while` loops?
A. `while` loops cannot have conditions.
B. `do...while` runs first, then checks the condition.
C. `while` loops cannot break early
D. `do...while` can only be used with numbers

☑️ Answer: B

✅ That’s the core distinction:
`while`: checks before running
`do...while`: runs once, then checks the condition
✅ All other options are false:
`while` can have conditions and use break
`do...while` works with any data type, not just numbers

9. How can you make sure a `while` loop eventually stops?
A. Use continue
B. Use const for the loop variable
C. Make sure the condition changes
D. Use a switch statement

☑️ Answer: C

This is critical for avoiding infinite loops — your loop must update something (like a counter or user input) that will eventually make the condition false.

🧠 Quick notes:
`continue` just skips to the next iteration.
`const` cannot be reassigned, so it may block condition updates.
`switch` is not related to loop termination.

10. Which loop type is most often used for unknown iteration counts?
A. for
B. while
C. do...while
D. map

☑️ Answer: B

✅ A while loop is ideal when you don’t know how many times something needs to run — like:
Waiting for user input
Reading from a file
 Polling for a condition
```

✅ You’ve completed the quiz 10 out of 10 — flawless performance!

🎉 Great work on the quiz!

---

### 🧠 Part 2 – Reflection Prompts
Please answer the following questions:

1. Which question was easiest for you and why?
-  ☑️ Answer: Question 1 and Question 2 were the easiest ones because they define `while` and `do...while`. 

2. Which one made you stop and think?
- ☑️ Answer: Question 3 made me stop and think.

💡 That’s often the case when evaluating what a loop actually outputs — not just how it’s structured.

3. Do you feel ready to use `while` and `do...while` loops in your own projects? Why or why not?
- ☑️ Answer: I am not so confident to use `while` and `do...while` loops in my own projects because I do not have much hands-on experience with either type of loop.

👏 Totally valid. It’s normal to feel uncertain when your understanding is still mostly theoretical. But you’re doing the right thing by moving through exercises and asking questions. Confidence will come through practice.

---

## 🔁 Step 4: Reflection & Discussion

🎯 Goal: Deepen your understanding through analogies, real-world thinking, and communication.

---

### 🧠 Instructor-Guided Prompts
Please reflect on or respond to the following in your own words:

🔹 A. Can you think of a real-life task that works like a `while` loop?
- (Hint: Something that repeats only while a condition is true — like charging a phone until it's full.)
- ☑️ Answer: A real-life task that works like a while loop is asking a user for input until a valid response is received. For example, repeatedly prompting someone to enter a password or guess a number until it meets the criteria or matches the correct answer. The program continues looping while the input is invalid, stopping only when a valid input is entered.

✅ You've identified one of the most practical and widely used real-world applications of a while loop: input validation.
##### Why it is such a great fit:
- You don’t know how many attempts the user will need
- You only stop once the input meets your condition
- It mirrors the logic of: “Keep asking while the answer is wrong”

🔹 B. Can you think of a real-life task that works like a `do...while` loop?
- (Hint: Something that must happen at least once, even if the condition is false — like trying food before deciding if you like it.)
- ☑️ Answer: A real-life task that works like a `do...while` loop is trying a pair of shoes  to see if they fit. I go at the shop, and then I can buy the shoes if they fit as I expected.This mirrors how a `do...while` loop executes the code block once before checking the condition to decide if it should repeat.

✅ That’s a fantastic analogy — simple, relatable, and a perfect match for how a do...while loop works!
- Try shoes → 
- Then decide if they fit → 
- Repeat if not 🔁

💡 Why it works so well:
- You always try on the shoes at least once — like a `do...while` running once by default.
- Then, if they do not fit, you try another pair — loop again.
- If they do fit, you stop — loop ends.
##### You have clearly internalized how `do...while` reflects real human decision processes.

🔹 C. What’s still confusing about these loops?
- (If nothing feels confusing, is there something you’d like to practice more?)
- ☑️ Answer: Common sources of confusion between while and do...while loops often relate to their differences in condition evaluation timing and execution guarantees.

✅ Well said — that’s a very insightful observation.
##### You’ve correctly identified the main source of confusion for most learners:
- It’s not about how they’re written — it’s about when the condition is checked.

---

### 🧠 To reinforce:
- `while`: “Only run if the condition is true”
- `do...while`: “Always run once, then check the condition”
##### Practicing a few problems where the initial condition is false can help solidify this distinction in your muscle memory.

---

### 📓 Journal Prompt
- If someone asked you to explain the difference between a while and `do...while` loop using only a real-world analogy, what would you say?
##### Try not to use code or technical terms — imagine you’re explaining to a non-programmer.

---

### 📝 Explanation:
🍵 Try a new café:
- Using a `while` loop is like saying, "I will only go to this cafe if I feel like having coffee." Before you even step inside, you check if you are in the mood. If not, you do not visit the place.
-  Using a `do...while` loop is like deciding, "I am going to visit the cafe at least once to try it." After your first visit, you then decide if you want to keep going back based on whether you liked it.
- So, the `while` loop waits and checks before doing anything, while the `do...while` loop always tries something once before deciding whether to repeat it.

##### Why this is such a strong comparison:
- ✅ Cafe visit as a loop decision is both familiar and easy to visualize.
- ✅ The `while` loop checks your mood before going — just like it checks the condition first.
- ✅ The `do...while` loop ensures you try once — then choose whether to return.
##### This explanation could teach a non-coder exactly how these loops work — without ever showing code.

---

##  🧪 Step 5: Exercises

🎯 Goal: Practice writing and reasoning through basic `while` and `do...while` loop problems.

---

### ✅ Exercise 1: Count from 1 to 5 with `while`
Write a `while` loop that prints the numbers 1 through 5.

### ☑️ Pseudocode 1

```js
SET num TO 1
WHILE num <= 5
    PRINT num
    INCREMENT num
```

### 🧮 Solution 1

```js
let num = 1;
while (num <= 5) {
    console.log(num);
    num++;
};
```

---

### ✅ Exercise 2: Countdown with `do...while`
Write a `do...while` loop that starts at 5 and counts down to 1.

### ☑️Pseudocode 2

```js
SET abc TO 5
DO
    PRINT abc
    DECREMENT abc
WHILE abc > 0
```

### 🧮 Solution 2

```js
let abc = 5;
do {
    console.log(abc);
    abc--;
} while (abc > 0);
```

🧠 It runs once before checking, and stops when abc becomes 0 — exactly how a `do...while` is meant to behave.

---

### ✅ Exercise 3: Sum numbers from 1 to 100 using `while`
Use a `while` loop to add numbers from 1 to 100 and print the result.

### ☑️ Pseudocode 3

```js
SET result TO 0
SET i = 1

WHILE i <= 100
    result += i
    INCREMENT i

PRINT result
```

### 🧮 Solution 3

```js
let result = 0;
let i = 1;

while (i <= 100) {
    result += i;
    i++;
};

console.log(result);
```

---

### ✅ Exercise 4: Prompt Until Password is "openSesame"
Simulate a login with a `do...while` loop:
- Keep asking for a password (use a placeholder like "wrong" in code)
- Stop when "openSesame" is entered

### ☑️ Pseudocode 4

```js
SET password

DO
    SET password TO prompt "Enter your password:"
WHILE password !== "openSesame"

PRINT "Access granted"
```

### 🧮 Solution 4

```js
let password;

do {
    password = prompt("Enter your password:");
    console.log("Access granted");
} while (password !== "openSesame")
```

---

### ✅ Exercise 5: Keep Asking Until Number is Even
- Use a `do...while` loop to simulate asking the user for a number.
- Stop only when they enter an even number (e.g., 4, 6, etc.).

### ☑️ Pseudocode 5

```js
SET even

DO
    SET even TO Number(prompt("Enter a number:"))
WHILE isNaN(even) || even % 2 !== 0

PRINT "You entered an even number."
```

### 🧮 Solution 5

```js
let even;

do {
    even = Number(prompt("Enter a number:"));
} while (isNaN(even) || even % 2 !== 0);

console.log("You entered an even number.");
```

## 🧩 Step 6: Project Integration

🎯 Goal: Apply while and do...while loops in a mini project of your choice.
- This helps you go from isolated exercises to real-world logic flow.

---

### 🧠 Flashcard App – While Loop Edition

🎯 Goal: Practice using while and do...while to review flashcards one-by-one.

✅ Project Logic Overview
##### Simulate a flashcard review session that:
1. Uses a while loop to go through flashcards one at a time.
2. Skips cards marked "skipped" (optional).
3. Stops the review if a card is marked "mastered".
4. Optionally uses do...while if needed for prompt-based interaction.

💡 Example Behavior:
- Start at the first card.
- Show question unless it is skipped.
- Stop completely if "mastered" is encountered.

### 🔁 Pseudocode prompt:
##### Please write your pseudocode for this review logic.
Focus on:
- Loop structure (while)
- Card status checks
- What to print or skip

---

### ☑️ Pseudocode

```js
SET flashcards
SET f = 0

WHILE f < flashcards.length
    SET card TO flashcards[f];

    IF card.status === "skipped"
        INCREMENT f
        CONTINUE

    PRINT `Question: ${card.question}`
    PRINT `Answer: ${card.answer}`

    IF card.status === "mastered"
        PRINT "\nYou have found a 'mastered' card."
        SET userResponse
        DO
            SET userResponse TO prompt("Do you want to continue? (Yes/No)").toLowerCase();
        WHILE userResponse !== "Yes" && userResponse !== "No"

        IF userResponse === "No"
            PRINT "Review session ended."
            BREAK
    INCREMENT f

IF f === flashcards.length
    PRINT "You have reviewed all the cards!"
```

#### 🧮 Solution

```js
const flashcards = [
    { question: "What is the chemical symbol for Potassium?", answer: "K", status: "learning" },
    { question: "Roughly how long does it take sunlight to reach the Earth?", answer: "8 minutes", status: "learning" },
    { question: "What is the only metal that is liquid at room temperature?", answer: "Mercury", status: "learning" },
    { question: "What is the process called when plants convert light energy to chemical energy?", answer: "Photosynthesis", status: "learning" },
    { question: "Which metal is commonly used to make batteries for electric vehicles?", answer: "Lithium", status: "learning" },
    { question: "What force pulls objects toward the center of the Earth?", answer: "Gravity", status: "skipped" },
    { question: "What is the name of the phenomenon where light changes direction as it passes from one medium to another?", answer: "Refraction", status: "learning" },
    { question: "What does the acronym STEM stand for?", answer: "Science, Technology, Engineering, and Maths", status: "learning" },
    { question: "Name the hardest natural substance on Earth.", answer: "Diamond", status: "mastered" },
    { question: "What is a material called if it allows electricity to pass through it?", answer: "Electrical conductor", status: "learning" },
];

let f = 0;

while (f < flashcards.length) {
    const card = flashcards[f];

    if (card.status === "skipped") {
        f++;
        continue;
    }

    console.log(`Question: ${card.question}`);
    console.log(`Answer: ${card.answer}`);

    if (card.status === "mastered") {
        console.log("\nYou have found a 'mastered' card.");
        let userResponse;

        do {
            userResponse = prompt("Do you want to continue? (Yes/No)").toLowerCase();
        } while (userResponse !== "yes" && userResponse !== "no");

        if (userResponse === "no") {
            console.log("Review session ended.");
            break;
        }
    }

    f++;
}

if (f === flashcards.length) {
    console.log("You have reviewed all the cards!");
}
```

---

## 🧾 Step 7: Exit Ticket Questions

🎯 Goal: Reflect on your learning and identify areas for growth
##### Please answer the following prompts in your own words:

#### 1. What’s one thing about `while` or `do...while` loops that finally makes sense to you now?
☑️ Answer: I can use a `while` loop to check if the input value matches the recorded value. If the input does not match the recorded value, the user must reenter a value. Once the input matches, exit the loop. I can use a `do...while` loop to check if a value meets a condition, executing the loop body at least once before checking the condition each time. This is useful when I want to perform an action first, then continue looping only if the condition is true.

#### 2. What part of these loops still feels unclear or deserves more practice?
☑️ Answer: As a whole, I struggle to build a more advanced piece of code where I can include a `while` loop and a `do...while` loop.

✅ Thank you for the honest reflection — and that’s completely normal.
##### Learning how to combine loops into larger logic structures takes time, and it is a sign you are moving beyond the basics. You are already on the right track by:
- Writing your own pseudocode.
- Thinking about user flow.
- Structuring logic clearly.

#### 🔁 How to build confidence:
- Start small, then add one loop at a time.
- Simulate user input (like you did with flashcards).
- Work through problems where the condition depends on user choice or repeated actions.

#### 3. If someone asked you to explain the difference between `while` and `do...while`, how would you describe it without using code?
☑️ Answer: A `while` loop checks the condition before running the code block. The `while` loop is pre-check — it might not run at all if the condition is false initially. A `do...while` loop, on the other hand, runs the code block first, then checks the condition afterward. The `do...while` loop is post-check — it always runs once before checking whether to continue. This difference makes them suitable for different scenarios, depending on whether I want the loop body to execute at least one time or not.
