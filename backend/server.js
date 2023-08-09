const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const cors = require('cors');
const colors = require('colors');
const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes');

dotenv.config();

//* Start the server
const PORT = process.env.PORT || 5000;

//* Connect to the database
connectDB();

//* Connect to the express server
const app = express();

//* Parse json request body
app.use(express.json());

//* Enable CORS for all routes
// app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

//* API routes testing the routes
app.get('/', (req, res) => { res.send("API is Running Successfully ".green); });

//* API routes
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);


app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`.yellow.bold)
});

