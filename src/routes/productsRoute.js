const express = require("express");
const { getSingleProduct } = require("../controllers/productControllers");

const router = express.Router();

router.get("/:id", getSingleProduct);

module.exports = router;
