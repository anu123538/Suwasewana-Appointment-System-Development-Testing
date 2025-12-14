import express from "express";
import {
  changeAvailability,
  doctorList,
} from "../controllers/doctorController.js";

const router = express.Router();

router.post("/change-availability", changeAvailability);
router.get("/list", doctorList);

export default router;
