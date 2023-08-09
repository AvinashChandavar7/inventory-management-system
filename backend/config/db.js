const dotenv = require("dotenv");
const mongoose = require('mongoose');

dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline.bold);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};



// const connectDB = async () => {
//   try {
//     console.log('Connecting', process.env.MONGODB_URL)
//     mongoose.connect(process.env.MONGODB_URL)
//     const connection = mongoose.connection

//     connection.on('connected', () => {
//       console.log('MongoDB connected Successfully'.cyan.underline);
//     })

//     connection.on('error', () => {
//       console.log('MongoDB connection error. Please make sure MongoDB is running .'.red.bold);

//       process.exit();
//     })

//   } catch (error) {
//     console.log(`Error: ${error.message}`.red.bold);
//     process.exit();
//   }
// }

module.exports = connectDB;


