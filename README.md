# 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 08.01 Array.forEach Method

## 📖 Overview
The `forEach()` method is a built-in JavaScript Array method that executes a provided callback function once for each array element, in order. It is commonly used for performing side effects on array data.

---

## 🧠 Step 1: Theoretical Exploration

### Syntax
```javascript
array.forEach(function(element, index, array) {
  // Your code here
});
```
- **element** → The current element being processed.
- **index** (optional) → The index of the current element.
- **array** (optional) → The array that `forEach()` is being applied to.

### Key Characteristics
- Iterates over each element **in order**.
- Always returns `undefined`.
- Cannot be stopped or exited early (`break` does not work).
- Skips empty slots in sparse arrays.
- Only works on arrays (or array-like objects with a `forEach` method).

### Example
```javascript
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
```
Output:
```
0: apple
1: banana
2: cherry
```

---

## 🧪 Step 2: Inquiry & Application

1. **Concept Check**  
   - How does `forEach()` differ from `map()` in terms of return values and use cases?  
     → `map()` returns a new array, `forEach()` returns `undefined`.

2. **Limitation Awareness**  
   - Why can’t you use `break` or `return` to exit a `forEach()` early?  
     → Because the callback is executed for every element, and there’s no built-in mechanism to stop it.

3. **Performance Context**  
   - `forEach()` is inefficient for finding early matches because it iterates the entire array regardless.

4. **Debugging Insight**
```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => {
  if (num === 2) return;
  console.log(num);
});
// Output: 1, 3
```

5. **Comparison**  
   - `forEach()` can modify the original array if elements are reassigned or mutated inside the callback.

---

## 📝 Step 3: Assessment & Feedback

**Quick Quiz**
1. What does `forEach()` return after executing the callback? → `undefined`
2. Which of the following can `forEach()` not do? → Stop iteration early with `break`
3. Best method to stop after finding a match? → `.some()`
4. `[1, 2, 3].forEach(num => console.log(num * 2));` → Logs `2 4 6`
5. Can `forEach()` be used on plain objects? → No, unless it has its own `forEach` method.

---

## 🪞 Step 4: Reflection & Journal

1. **Most intuitive part:** Understanding that `forEach()` runs a callback for every element in order.
2. **Least intuitive part:** Realizing `return` does not exit the loop, only the callback.
3. **Real-world use case:** Logging all tasks in a to-do app for debugging.
4. **Beginner explanation:**  
   "`forEach()` runs a function once for every item in an array, in order. It’s useful for performing actions like logging or updating values, but it doesn’t return anything."

---

## 🧩 Step 5: Exercises

**1. Logging Names**
```javascript
const students = ['Alice', 'Bob', 'Charlie'];
students.forEach(student => {
  console.log(`Student: ${student}`);
});
```

**2. Squaring Numbers**
```javascript
const numbers = [2, 4, 6, 8];
numbers.forEach(number => {
  console.log(number * number);
});
```

**3. Summing Prices**
```javascript
const prices = [10, 20, 30];
let total = 0;
prices.forEach(price => {
  total += price;
});
console.log(total); // 60
```

**4. Mutating an Array**
```javascript
const ages = [15, 20, 25];
ages.forEach((age, index, arr) => {
  arr[index] = age + 1;
});
console.log(ages); // [16, 21, 26]
```

**5. Nested forEach**
```javascript
const categories = [
  ['apple', 'banana'],
  ['carrot', 'lettuce']
];
categories.forEach(row => {
  row.forEach(category => {
    console.log(category);
  });
});
```

---

## 🎫 Step 7: Exit Ticket Questions

1. **What does `forEach()` return after it executes the callback for all elements?**  
   → `undefined`

2. **Can you use `break` inside `forEach()` to stop the loop early? Why or why not?**  
   → No, because it is designed to run for all elements and has no early-exit mechanism.

3. **When would you choose `forEach()` over `map()`?**  
   → When performing actions (side effects) instead of creating a new transformed array.

4. **If you need to find the first matching element in a large array, is `forEach()` the best choice?**  
   → No, because it will iterate over every element even after finding a match.

5. **One-sentence summary:**  
   "`forEach()` is most useful when you want to run the same action on every item in an array without needing to create a new array or get a return value."

---
