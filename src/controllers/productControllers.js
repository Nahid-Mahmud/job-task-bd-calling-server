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

module.exports = { getSingleProduct };
