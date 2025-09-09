import { Sequelize, DataTypes, Op } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:"); // In-memory DB

// Define User model
const User = sequelize.define("User", {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
});

async function main() {
  await sequelize.sync({ force: true });

  // Insert sample users
  await User.bulkCreate([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Anna", age: 30 },
  ]);

  // --- Queries ---

  // Get all users
  const users = await User.findAll();
  console.log("\nAll Users:", users.map(u => u.toJSON()));

  // Get adults (age >= 18)
  const adults = await User.findAll({ where: { age: { [Op.gte]: 18 } } });
  console.log("\nAdults:", adults.map(u => u.toJSON()));

  // Find Alice
  const alice = await User.findOne({ where: { name: "Alice" } });
  console.log("\nAlice:", alice.toJSON());

  // Challenge 1: Find names starting with A
  const usersStartingWithA = await User.findAll({
    where: { name: { [Op.like]: "A%" } }
  });
  console.log("\nUsers starting with A:", usersStartingWithA.map(u => u.toJSON()));

  // Challenge 2: Update Bob's age
  await User.update({ age: 20 }, { where: { name: "Bob" } });
  const updatedBob = await User.findOne({ where: { name: "Bob" } });
  console.log("\nUpdated Bob:", updatedBob.toJSON());

  // Challenge 3: Delete minors
  await User.destroy({ where: { age: { [Op.lt]: 18 } } });
  const remaining = await User.findAll();
  console.log("\nRemaining Users:", remaining.map(u => u.toJSON()));
}

main().then(() => {
  console.log("\nWorkshop complete!");
}).catch(err => console.error(err));
