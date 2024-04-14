const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const authRoutes = require("./routes/auth");
const authenticateToken = require("./middleware/authenticate");

require("dotenv").config();
const mongoDBConnection = require("./utils/database");

const app = express();
const port = process.env.PORT;

mongoDBConnection.openConnection();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(authenticateToken);
app.use("/api", routes);
app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});
