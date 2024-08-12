const express = require("express");

const cors = require("cors");



const app = express();
app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:5173"],
    })
  );


  const PORT = process.env.PORT || 3000;


  app.get("/", (req, res) => {
    res.send({
      message: "server is running",
    });
  });
  
  // Start the server on the defined PORT and log the start message
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });