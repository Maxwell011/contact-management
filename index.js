const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const router = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(errorHandler)

// app.use(router)
app.use("/api/contacts", router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
