const { default: mongoose } = require("mongoose");
require("dotenv").config();

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      family: 4,
    });
    console.log("db connected!!!");
  } catch (e) {
    console.log(e);
  }
}

module.exports = { connectToDb };
