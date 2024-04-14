const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: "Enter first name",
  },
  lastName: {
    type: String,
    required: "Enter last name",
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  created_date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Somptudent", studentSchema,"Student");
