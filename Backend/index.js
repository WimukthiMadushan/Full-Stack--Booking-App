import express from "express";
import mongoose from "mongoose";
import userRoute from "./Routes/user.js";
import authRoute from "./Routes/Authentication.js";
import roomsRoute from "./Routes/rooms.js";
import hotelsRoute from "./Routes/hotels.js";

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/HotelManagment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());
// Middleware
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
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
