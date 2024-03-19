import express from "express";
import mongoose from "mongoose";

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/JobDataBase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(8800, () => {
  console.log("Backend server is running!");
});
