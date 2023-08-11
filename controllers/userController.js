const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new error("User already registered");
  }
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password: ", hashedPassword);
  // res.json({ userAvailable });
  res.json({ message: "Register the user" });
});

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current user information" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
