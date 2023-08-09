const express = require("express");
const {
  getContacts,
  createContact,
  getSingleContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const router = express.Router();

router.route("/").get(getContacts).post(createContact);
router
  .route("/:id")
  .get(getSingleContact)
  .patch(updateContact)
  .delete(deleteContact);

module.exports = router;
