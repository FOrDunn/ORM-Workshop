import { Sequelize, DataTypes, Op } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:"); // In-memory DB

// TODO: Define User model here
// Example:
// const User = sequelize.define("User", {
//   name: DataTypes.STRING,
//   age: DataTypes.INTEGER,
// });

async function main() {
  await sequelize.sync({ force: true });

  // TODO: Insert sample users (Alice, Bob, Anna)

  // TODO: Write Sequelize queries
  // Example: get all users
  // const users = await User.findAll();
//   console.log(users.map(u => u.toJSON()));
}

main().then(() => {
  console.log("Workshop complete!");
}).catch(err => console.error(err));
