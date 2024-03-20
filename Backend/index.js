import express from "express";
import mongoose from "mongoose";

import userRoute from "./Routes/user.js";
import authRoute from "./Routes/Authentication.js";
import roomsRoute from "./Routes/rooms.js";
import hotelsRoute from "./Routes/hotels.js";
import cookieParser from "cookie-parser";

const app = express();

// Connect to MongoDB for HotelManagment database
mongoose
  .connect("mongodb://localhost:27017/HotelManagment")
  .then(() => {
    console.log("Connected to MongoDB for HotelManagment");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB for HotelManagment:", error);
  });

app.use(cookieParser);
app.use(express.json());
// Middleware
app.use("/api/hotels", hotelsRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  console.log("Backend server is running!");
});
