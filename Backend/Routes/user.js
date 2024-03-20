import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} from "../Controllers/user.js";
import { verifyAdmin, verifyUser, verifytToken } from "../Utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifytToken, (req, res, next) => {
  res.send("hello user you are loged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user you are loged in and can delete your account");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin you are loged in and can delete all accounts");
});

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getAllUser);

export default router;
