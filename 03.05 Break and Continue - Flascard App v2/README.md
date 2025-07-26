# 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 03.05: Break and Continue - Flashcard App v2


## 📝 Flashcard App v2

Build on your original Flashcard App by adding smarter loop logic using:
- continue to skip irrelevant cards
- break to stop once a milestone is hit

---

### ✅ Feature Enhancements
Here are two enhancements to guide your development:

🔹 Feature 1: Skip Skipped Cards (Use continue)
- Some flashcards may be marked as:

```js
status: "skipped"
```
✅ If a card has this status, skip it — don’t display it or log anything.

🔹 Feature 2: Stop at Mastery (Use break)
- As before, if any card has:

```js
status: "mastered"
```

✅ Immediately stop the loop and log a message like:
- "Mastery reached! Ending review."

### 🧠 Pseudocode Prompt
Loop through the flashcards array.
- Skip any card with status "skipped".
- Stop the loop entirely when the first card with status "mastered" is reached.
- Otherwise, print the question.
✍️ Please write your pseudocode first, and I’ll review it before we implement the solution.

---

##  ☑️ Pseudocode

```js
SET flashcards TO an array of 10 cards
Each card has a question and a status (e.g., "learning", "skipped", or "mastered")

FOR let i = 0; i < flashcards.length; i++
    SET card TO flashcards[i]

    IF card.status === "skipped"
        CONTINUE

    IF card.status === "mastered"
        PRINT "A mastered card has been found."
        BREAK

    ELSE
        PRINT card.question
```

---

####    ✅ This structure shows:
- ☑️ Precise filtering logic (continue)
- ☑️ Early exit for a specific condition (break)
- ☑️ Intentional use of else only when needed

####    🔄 Real-world Parallel:
This logic mirrors the experience of using review apps like `Anki`, `Quizlet`, or language trainers, where:
- Skipped cards are hidden.
- Mastered cards end a review session.

---

## 🧮 Solution

```js
const flashcards = [
    { question: "What is the largest planet in our solar system?", answer: "Jupiter", status: "learning" },
    { question: "Which element has the atomic number 1?", answer: "Hydrogen", status: "learning" },
    { question: "Which country is known as the Land of the Rising Sun?", answer: "Japan", status: "learning" },
    { question: "Who discovered penicillin?", answer: "Alexander Fleming", status: "skipped" },
    { question: "How many bones are in the adult human body?", answer: "206", status: "learning" },
    { question: "What is the freezing point of water in degrees Celsius?", answer: "0 degrees Celsius", status: "learning" },
    { question: "How many sides does a hexagon have?", answer: "Six", status: "learning" },
    { question: "What is the tallest mountain in the world?", answer: "Mount Everest", status: "skipped" },
    { question: "What is the smallest prime number?", answer: "2", status: "mastered" },
    { question: "What is the hardest natural substance on Earth?", answer: "Diamond", status: "learning" },
];

for (let i = 0; i < flashcards.length; i++) {
    const card = flashcards[i];

    if (card.status === "skipped") {
        continue;
    } else if (card.status === "mastered") {
        console.log("A mastered card has been discovered.");
        break;
    } else {
        console.log(card.question);
    }
}
```

---

#### 🔍 What You Did Right:

☑️ 1. Skipped Cards with continue
- ✅ This filters out skipped cards without printing or processing them — just like in real flashcard apps.

☑️ 2. Stopped on Mastery with break
- ✅ This ends the session the moment mastery is achieved — simulating a goal met or a checkpoint hit.

☑️ 3. Printed Learning Cards Only
- ✅ Keeps the user focused on only active review content.

---

🧠 It correctly:
- Skips skipped cards
- Stops on "mastered"
- Displays only learning questions
