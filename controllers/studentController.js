const express = require("express");

const studentModel = require("../models/student");

const studentController = {
  //Post Method
  addNewStudent: async (req, res) => {
    const studentData = new studentModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
    });

    try {
      const dataToSave = await studentData.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  //Get all Method
  getAllStudents: async (req, res) => {
    try {
      const data = await studentModel.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //Get by ID Method
  getStudent: async (req, res) => {
    try {
      const data = await Model.findById(req.params.id);
      console.log(`data=>${data}`);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //Update by ID Method
  updateStudent: async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };
      const result = await Model.findByIdAndUpdate(id, updatedData, options);
      res.send(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //Delete by ID Method
  deleteStudent: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Model.findByIdAndDelete(id);
      res.send(`Document with ${data.id} has been deleted..`);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = studentController;
