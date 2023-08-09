const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Get all contacts");
});

router.route("/").post((req, res) => {
  res.send("Create contact");
});

router.route("/:id").get((req, res) => {
  res.send("Get single contact");
});

router.route("/:id").patch((req, res) => {
  res.send("Update contact");
});

router.route("/:id").delete((req, res) => {
  res.send("Delete contact");
});

module.exports = router;
