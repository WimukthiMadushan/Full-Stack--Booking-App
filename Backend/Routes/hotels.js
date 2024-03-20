import express from "express";
import Hotel from "../Models/Hotel.js";
import {
  countByCity,
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../Controllers/hotel.js";
import { verifyAdmin } from "../Utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel);
//update
router.put("/:id", verifyAdmin, updateHotel);
//delete
router.delete("/:id", verifyAdmin, deleteHotel);
//get
router.get("/find/:id", getHotel);
//get all
router.get("/", getAllHotel);

router.get("/countByCity", countByCity);
router.get("/countByCityType");

export default router;
