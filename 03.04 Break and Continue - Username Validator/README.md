# 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 03.04: Break and Continue - Username Validator


## 🛠️ Step 6: 👤 Project 3: Username Validator

🎯 Goal: Validate a list of usernames with skipping and early exit logic.

---

### ✅ Feature Requirements:
1. Use continue to skip usernames that are:
- Shorter than 3 characters
- Contain special characters like !, @, #, etc.
2. Use break to stop the loop immediately if:
- A username contains "admin" or "root" (reserved)
3. Log only the valid usernames that pass all checks

---

### 🧠 Pseudocode Prompt
Your prompt:
Loop through an array of usernames.
- Skip any usernames that are too short or contain special characters.
- Stop the loop if "admin" or "root" appears.
- Print only the valid usernames.
✍️ Please write your pseudocode first — just like you’ve done for the other projects.

---

### ☑️ Pseudocode

```js
SET usernames TO an array of strings
SET validUsernames TO empty array

FOR each username in usernames
    IF username length is less than 3 OR /[^a-zA-Z0-9]/.test(username)
        CONTINUE

    IF username contains any special character (!, @, #, etc.)
        CONTINUE

    IF username includes "admin" OR "root"
        PRINT "Restricted username found. Stopping validation."
        BREAK

    validUsernames.push(username)

    PRINT "Valid username:", username
```

---

🧮 Solution

```js
const usernames = [
    "WanderlustSoul", 
    "NomadicNikki",
    "ABC",
    "TravelBug", 
    "CityExplorer", 
    "SunsetChaser admin", 
    "StyleMaven", 
    "FitLife", 
    "FoodieAdventures", 
    "Run!ng",
    "MusicAddict", 
    "CreativeSoul", 
    "GameOn",
    "T@m@",
    "NatureLover",
    "PunnyName",
    "Pu#k",
    "ThinkOutsideTheBox",
    "PowerWithin",
    "1Am",
    "SecretKeeper root",
    "SerenityNow",
];

const validUsernames = [];

for (let u = 0; u < usernames.length; u++) {
    const username = usernames[u];

    if (username.length < 3 || /[^a-zA-Z0-9]/.test(username)) {
        continue;
    }

    if (username.toLowerCase().includes("admin") || username.toLowerCase().includes("root")) {
        break;
    }

    validUsernames.push(username);
}

console.log("Valid usernames:", validUsernames);
```

---

### ✅ Final Thought
This pseudocode is ready to implement directly. You have shown full control of:
- Loop logic
- Filtering logic
- String validation using regex
- Conditional branching using continue and break
