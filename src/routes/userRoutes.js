const express = require("express");
const { postUser, updateUser, deleteUser } = require("../controllers/userControllers");
const router = express.Router();

router.post("/", postUser);
router.put("/:email", updateUser);
router.delete("/:email", deleteUser);

module.exports = router;
