const express = require("express");
const productRoutes = require("./src/routes/productsRoute");
const userRoutes = require("./src/routes/userRoutes");
const connectDB = require("./src/config/db");

const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:4173","https://heritage-nahid.netlify.app"],
  })
);

const PORT = process.env.PORT || 4000;

connectDB();

// Mpunt the product routes on "/products"

app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "server is running",
  });
});

// Start the server on the defined PORT and log the start message
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
