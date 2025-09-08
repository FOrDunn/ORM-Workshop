# ORM Workshop Challenge

Welcome! 🎉  
In this challenge, you will learn how to:
- Connect to a database with Sequelize
- Define a model
- Insert data
- Run queries both in **SQL** and with **ORM**
- Compare the two approaches

---

## 🚀 Setup

1. Clone this repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the project:
   ```bash
   npm start
   ```

---

## 📝 Tasks

### Step 1: Create a Model
Define a `User` model with fields:
- `name` (string)
- `age` (integer)

### Step 2: Insert Data
Insert at least 3 users into the table:
- Alice (25)
- Bob (17)
- Anna (30)

### Step 3: Queries

For each query, try writing it in **SQL** (see `sql_examples.sql`) and in **Sequelize ORM** inside `index.js`.

1. Get all users  
2. Get all adults (age >= 18)  
3. Find user by name (`Alice`)  

### Step 4: Challenge 🚀

Write SQL **and** ORM for these tasks:

1. Find users whose name starts with “A”  
2. Update Bob’s age to 20  
3. Delete users younger than 18  

---

## ✅ Goal

By the end, you should understand how ORM simplifies SQL queries and makes database interaction easier in JavaScript.
