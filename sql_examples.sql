-- Create users table
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  age INTEGER
);

-- Insert data
INSERT INTO users (name, age) VALUES
('Alice', 25),
('Bob', 17),
('Anna', 30);

-- Queries
SELECT * FROM users;
SELECT * FROM users WHERE age >= 18;
SELECT * FROM users WHERE name = 'Alice';
SELECT * FROM users WHERE name LIKE 'A%';
UPDATE users SET age = 20 WHERE name = 'Bob';
DELETE FROM users WHERE age < 18;
