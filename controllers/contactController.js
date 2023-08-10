const getContacts = (req, res) => {
  res.status(200).send("Get all contacts");
};

const createContact = (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(404);
  } else {
    throw new Error("All field are mandatory");
  }
  res.status(201).send("Create contacts");
};

const getSingleContact = (req, res) => {
  res.send("Get single contact");
};

const updateContact = (req, res) => {
  res.send("Update contact");
};

const deleteContact = (req, res) => {
  res.send("Update contact");
};

module.exports = {
  getContacts,
  createContact,
  getSingleContact,
  updateContact,
  deleteContact,
};
