import express from "express";
import Hotel from "../Models/Hotel.js";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../Controllers/hotel.js";

const router = express.Router();

//create
router.post("/", createHotel);
//update
router.put("/:id", updateHotel);
//delete
router.delete("/:id", deleteHotel);
//get
router.get("/:id", getHotel);
//get all

router.get("/", getAllHotel);
export default router;
