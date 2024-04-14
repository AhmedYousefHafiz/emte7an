const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

//Post Method
router.post("/addStudent", studentController.addNewStudent);

//Get all Method
router.post("/getAll", studentController.getAllStudents);

//Get by ID Method
router.get("/getOne/:id", studentController.getStudent);

//Update by ID Method
router.patch("/update/:id", studentController.updateStudent);

//Delete by ID Method
router.delete("/delete/:id", studentController.deleteStudent);

module.exports = router;
