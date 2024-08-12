const User = require("../models/userModels");

// post user

const postUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  try {
    // check if name and email are provided
    if (!req.body.name || !req.body.email) {
      res.status(400).send({ message: "Name and email are required" });
    }

    // check if user already exists
    else if (user) {
      res.status(409).send({ message: "User already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        address: "",
        phone: "",
      });

      const savedUser = await newUser.save();
      res.status(201).send({
        data: savedUser,
        message: "User was created",
      });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// update user by email
const updateUser = async (req, res) => {
  try {
    const email = req.params.email;

    const { name, address, phone } = req.body;

    const user = await User.findOneAndUpdate({ email }, { name, address, phone }, { new: true });

    const updatedUser = await user.save();

    res.status(200).send({
      data: updatedUser,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// delete user by email

const deleteUser = async (req, res) => {
  try {
    const email = req.params.email;

    const deletedUser = await User.findOneAnd({ email });

    if (!deletedUser) {
      res.status(404).send({ message: "User not found" });
    } else {
      res.status(200).send({ message: "User deleted successfully" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { postUser, updateUser, deleteUser };
