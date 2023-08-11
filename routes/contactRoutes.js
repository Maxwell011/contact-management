const express = require("express");
const {
  getContacts,
  createContact,
  getSingleContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.use(validateToken)
router.route("/").get(getContacts).post(createContact);
router
  .route("/:id")
  .get(getSingleContact)
  .patch(updateContact)
  .delete(deleteContact);

module.exports = router;
