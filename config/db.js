const mongoose = require("mongoose");

const connectDB = async (DB_URI) => {
  try {
    let connection = await mongoose.connect(DB_URI, {
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`The database connected successfully`);
  } catch (error) {
    throw error;
  }
};

module.exports = connectDB;
