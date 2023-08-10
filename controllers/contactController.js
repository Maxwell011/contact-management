const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).send("Get all contacts");
});

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(404);
  } else {
    throw new Error("All field are mandatory");
  }
  res.status(201).send("Create contacts");
});

const getSingleContact = asyncHandler(async (req, res) => {
  res.send("Get single contact");
});

const updateContact = asyncHandler(async (req, res) => {
  res.send("Update contact");
});

const deleteContact = asyncHandler(async (req, res) => {
  res.send("Update contact");
});

module.exports = {
  getContacts,
  createContact,
  getSingleContact,
  updateContact,
  deleteContact,
};
