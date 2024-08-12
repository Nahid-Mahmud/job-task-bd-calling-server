const express = require("express");
const { getSingleProduct, getProductsByTagOrAge, getSearchProducts } = require("../controllers/productControllers");

const router = express.Router();

// Get a single product by age or tag
router.get("/tagOrAge", getProductsByTagOrAge);
router.get("/search", getSearchProducts);

// Get a single product by id
router.get("/:id", getSingleProduct);

module.exports = router;
