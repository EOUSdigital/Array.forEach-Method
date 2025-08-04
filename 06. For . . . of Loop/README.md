# 🔁 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 06: `for...of` Loop

This lesson introduces the `for...of` loop in JavaScript — a cleaner and more intuitive way to iterate over iterable data such as arrays and strings.

---

## 📚 What You Learned

### ✅ Key Concepts:
- `for...of` lets you loop **directly over values** in an iterable (like arrays or strings)
- It’s ideal when **index tracking isn’t necessary**
- Works with `break`, `continue`, and even `await` inside async functions

---

### ✨ When to Use:
- You want the actual value, not the index
- You’re working with arrays, strings, sets, or other iterables
- You want clean, readable iteration logic

---

## 🔎 Reflections & Highlights

### ✔️ Takeaway:
> *"Now I know that the result of `for...of` loop is a value, not an index, and it is ideal for arrays or strings."*

### 🧠 Still Confusing:
> *"I am still confused about nested `for...of` loops."*

### 🍎 Analogy (Explaining to a beginner):
> *"If you want to buy some apples, you do not need to know the position of each apple in a box. You simply fill your basket with the number of apples you decide to buy."*

---

## 🛠️ Practice Examples

### Example 1 – Greet each name:
```js
const names = ["Olivia", "Liam", "Emma"];
for (const name of names) {
    console.log(`Hello, ${name}!`);
}
```

### Example 2 – Count vowels and consonants:
```js
let word = prompt("Enter a word:");
let vowels = 0;
let consonants = 0;

for (let char of word.toLowerCase()) {
    if (!/[a-z]/.test(char)) continue;
    if ("aeiou".includes(char)) {
        vowels++;
    } else {
        consonants++;
    }
}
console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);
```

---

## 🎯 Educational Goal

This lesson helps you:
- Replace complex indexed loops with value-focused iteration
- Build confidence using `for...of` across different data types
- Strengthen your ability to write clean, readable loops

---
