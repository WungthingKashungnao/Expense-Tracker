const mongoose = require("mongoose");

// connecting to mongodb
const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Successfully connected to mongodb!");
  } catch (error) {
    console.log("DB Connection Error");
  }
};

module.exports = { db };
