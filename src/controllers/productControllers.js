const Product = require("../models/productModel");

const getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);
    res.send({
      data: product,
      message: "Product retrieved successfully",
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getProductsByTagOrAge = async (req, res) => {

  const tagOrAge = req.query.tagOrAge;
  if (!tagOrAge) {
    return res.status(400).send({ message: "tagOrAge query parameter is required" });
  }

  if (tagOrAge === "New") {
    // send 10 products max
    const products = await Product.find({ ageOfConstruction: "New" }).limit(10);
    return res.send({ data: products, message: "Products retrieved successfully", total: products.length });
  }

  if (tagOrAge === "Popular") {
    // send 10 products max
    const products = await Product.find({ tag: "Popular" }).limit(10);
    return res.send({ data: products, message: "Products retrieved successfully", total: products.length });
  } else {
    return res.status(400).send({ message: "tagOrAge query parameter is invalid" });
  }
};

// {
//     "name": "Prime Heights",
//     "location": "Sylhet",
//     "propertyType": "Apartment",
//     "budget": "150"
// }

// get searh data

const getSearchProducts = async (req, res) => {
  try {
    const { name, location, propertyType, budget } = req.query;

    const query = {
      name: new RegExp(name, "i"), // Case-insensitive match
      "place.city": new RegExp(location, "i"), // Case-insensitive match
      propertyType: propertyType,
      price: { $gte: Number(budget) }, // Match properties with price >= budget
    };

    let products = await Product.find(query);

    // If no products are found, try the alternative property type
    if (products.length === 0) {
      const alternativeType = propertyType === "Apartment" ? "Villa" : "Apartment";
      products = await Product.find({
        name: new RegExp(name, "i"),
        "place.city": new RegExp(location, "i"),
        propertyType: alternativeType,
        price: { $gte: Number(budget) },
      });
    }

    if (products.length === 0) {
      delete query["place.city"];
      products = await Product.find(query);
    }

    res.status(200).send({
      data: products,
      message: "Products retrieved successfully",
      total: products.length,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { getSingleProduct, getProductsByTagOrAge, getSearchProducts };
