const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Sign up
router.post("/signup", userController.signup);

// Sign in
router.post("/signin", userController.signin);

module.exports = router;
