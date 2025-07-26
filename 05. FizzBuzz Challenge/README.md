# 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 05: FizzBuzz Challenge


##  📝 Step 1: Theoretical Exploration

🎯 Objective: Practice using loops and conditionals by solving one of the most well-known programming problems: FizzBuzz — plus creative variations that reinforce logic and flow control.

---

## ✅ Core FizzBuzz Logic

Loop from 1 to 100:
- If divisible by **3 and 5**, print `"FizzBuzz"`
- If divisible by **3**, print `"Fizz"`
- If divisible by **5**, print `"Buzz"`
- Otherwise, print the number

```js
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}
```

---

## 🧩 Stretch Goals & Variations

### 🔁 1. Custom Range FizzBuzz
Prompt the user for a custom start and end number, then run FizzBuzz in that range.

### 🐱🐶 2. MeowWoof Version
Replace "Fizz" with `"Meow"` and "Buzz" with `"Woof"`.

```js
if (q % 15 === 0) console.log("MeowWoof");
```

### 💣 3. FizzBuzzBang (Multiple Condition Matches)
- Div by 3 & 5 & 7 → `"FizzBuzzBang"`
- Div by 3 & 5 → `"FizzBuzz"`
- Div by 3 & 7 → `"FizzBang"`
- Div by 5 & 7 → `"BuzzBang"`
- Div by 3 → `"Fizz"`
- Div by 5 → `"Buzz"`
- Div by 7 → `"Bang"`

### 🧘‍♂️ 4. Only One Rule Applies (Priority-Based)
Only apply the **first** matching condition:
- `FizzBuzz` → `Fizz` → `Buzz` → `Bang` → Number

---

## ✨ Key Takeaways
- Condition **order** matters when using multiple `if`/`else if` blocks
- You can **combine conditions** to check for multiple divisibility
- `FizzBuzz` is a useful tool for mastering **loop logic and output control**

---

