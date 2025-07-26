# 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 03.03: Break and Continue - Product Checker

## 📝 Step 6: 🛒 Project 2: Product Checker

🎯 Goal: Loop through a product list and filter for availability and status.



### ✅ Feature Requirements:
1. Use continue to skip any product that is out of stock
2. Use break to stop the loop if a product is marked as "discontinued"
3. Print only the names and prices of products that are available and active

---

### 🧠 Pseudocode Prompt
Loop through an array of product objects.
Each product has:
- name
- price
- inStock (boolean)
- status (e.g., "active" or "discontinued")

---

### ✍️ Write your pseudocode that:
- Skips products where inStock is false
- Breaks the loop if status is "discontinued"
- Prints the name and price of available products

---

### ☑️ Pseudocode

```js
SET products TO an array of product objects

FOR each product in products
    IF product.inStock is false
        CONTINUE to next product

    IF product.status is "discontinued"
        PRINT "Discontinued product found. Stopping check."
        BREAK the loop
    PRINT product name and price
```

---

### 🧮 Solution

```js
const products = [
    {name: "apples", price: "1.50", inStock: true, status: "active"},
    {name: "strawberries", price: "4.75", inStock: false, status: "discontinued"},
    {name: "blueberries", price: "11.00", inStock: true, status: "discontinued"},
    {name: "raspberries", price: "12.00", inStock: false, status: "discontinued"},
    {name: "tomatoes", price: "3.25", inStock: true, status: "active"},
    {name: "carrots", price: "0.80", inStock: true, status: "active"},
    {name: "cucumbers", price: "0.90", inStock: true, status: "active"},
    {name: "apricots", price: "2.25", inStock: true, status: "active"},
    {name: "sweet potatoes", price: "1.50", inStock: false, status: "discontinued"},
    {name: "peaches", price: "2.00", inStock: true, status: "active"},
    {name: "plums", price: "1.20", inStock: false, status: "discontinued"},
    {name: "melons", price: "1.90", inStock: true, status: "active"},
    {name: "eggplant", price: "0.85", inStock: true, status: "active"},
    {name: "lemons", price: "1.00", inStock: true, status: "active"},
    {name: "lettuce", price: "0.25", inStock: false, status: "discontinued"},
    {name: "green beans", price: "1.10", inStock: false, status: "discontinued"},
    {name: "kale", price: "0.75", inStock: false, status: "discontinued"},
    {name: "broccoli", price: "1.40", inStock: false, status: "discontinued"},
    {name: "Brussels sprouts", price: "0.90", inStock: false, status: "active"},
    {name: "cabbage", price: "1.10", inStock: false, status: "active"},
    {name: "spinach", price: "1.30", inStock: false, status: "discontinued"},
    {name: "corn", price: "0.70", inStock: true, status: "active"},
    {name: "Swiss chard", price: "0.95", inStock: false, status: "discontinued"},
    {name: "celery", price: "0.80", inStock: false, status: "active"},
    {name: "beets", price: "2.00", inStock: false, status: "active"},
    {name: "onions", price: "0.90", inStock: true, status: "active"},
    {name: "cauliflower", price: "0.85", inStock: true, status: "active"},
    {name: "cherries", price: "8.50", inStock: true, status: "active"},
    {name: "bananas", price: "0.85", inStock: true, status: "active"},
    {name: "mushrooms", price: "2.95", inStock: true, status: "active"},
    {name: "parsnips", price: "0.80", inStock: true, status: "active"},
    {name: "turnips", price: "0.60", inStock: false, status: "discontinued"},
    {name: "oranges", price: "3.00", inStock: true, status: "active"},
    {name: "rhubarb", price: "2.80", inStock: true, status: "active"},
    {name: "leeks", price: "0.95", inStock: false, status: "discontinued"},
    {name: "pumpkin", price: "14.99", inStock: true, status: "active"},
    {name: "green peas", price: "2.49", inStock: true, status: "discontinued"},
    {name: "peppers", price: "1.79", inStock: true, status: "active"},
    {name: "chickpeas", price: "0.99", inStock: true, status: "active"},
    {name: "beans", price: "0.99", inStock: true, status: "active"},
];

for (let p = 0; p < products.length; p++) {
    const product = products[p];

    if (!product.inStock) {
        continue;
    }

    if (product.status === "discontinued") {
        console.log("Discontinued product found. Stopping check.");
        break;
    }
    console.log(`Name: ${product.name} Price: ${product.price}`);
}
```

---

### 🧠 Real-World Relevance:
This logic applies to:
- Inventory dashboards
- Product filtering systems
- Online marketplaces (e.g., Amazon, Shopify)