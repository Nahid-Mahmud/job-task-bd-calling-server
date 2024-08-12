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

// get products based on  tag or age of construction

// {
//     id: "1",
//     images: [
//       "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     ],
//     beds: 3,
//     bath: 2,
//     type: "Fully Furnished",
//     carpetArea: "2000 sqf",
//     floor: "2nd floor",
//     transactionType: "Ready to move",
//     lift: 1,
//     facing: "North-East",
//     additionalRoom: {
//       servent: 1,
//       guest: 1,
//     },
//     ageOfConstruction: "New",
//     tag: "Popular",
//     name: "Luxury Apartment",
//     place: {
//       area: "Banani",
//       city: "Dhaka",
//     },
//     price: 150,
//     propertyType: "Apartment",
//   },

const getProductsByTagOrAge = async (req, res) => {
  console.log(req.query);
  const tagOrAge = req.query.tagOrAge;
  if (!tagOrAge) {
    return res.status(400).send({ message: "tagOrAge query parameter is required" });
  }

  if (tagOrAge === "New") {
    // send 10 products max
    const products = await Product.find({ tag: "New" }).limit(10);
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
    const { name, location, propertyType, budget } = req?.query;

    const query = {
      name: new RegExp(name, "i"), // Case-insensitive match
      "place.city": new RegExp(location, "i"), // Case-insensitive match
      propertyType: propertyType,
      price: { $gte: Number(budget) }, // Match properties with price >= budget
    };

    const products = await Product.find(query);

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
