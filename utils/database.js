const express = require("express");
const mongoose = require("mongoose");

const mongoDBConnection = {
  openConnection: async () => {
    const mongoString = process.env.DATABASE_URL;
    await mongoose.connect(mongoString);
    const database = mongoose.connection;

    database.on("error", (error) => {
      console.log(`error in db connection ${error}`);
    });

    database.once("connected", () => {
      console.log("Database connected");
    });
  },
};

module.exports = mongoDBConnection;
