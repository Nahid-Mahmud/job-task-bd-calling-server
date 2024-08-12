const express = require("express");
const productRoutes = require("./src/routes/productsRoute");

const connectDB = require("./src/config/db");

const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

const PORT = process.env.PORT || 3000;

connectDB();

// Mpunt the product routes on "/products"

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "server is running",
  });
});

// Start the server on the defined PORT and log the start message
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
