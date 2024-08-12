// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  images: {
    type: [String],
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  bath: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  carpetArea: {
    type: String,
    required: true,
  },
  floor: {
    type: String,
    required: true,
  },
  transactionType: {
    type: String,
    required: true,
  },
  lift: {
    type: Number,
    required: true,
  },
  facing: {
    type: String,
    required: true,
  },
  additionalRoom: {
    servent: {
      type: Number,
      required: true,
    },
    guest: {
      type: Number,
      required: true,
    },
  },
  ageOfConstruction: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  place: {
    area: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;
