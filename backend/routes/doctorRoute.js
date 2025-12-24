import express from "express";
import {
  
  doctorList,loginDoctor, appointmentsDoctor, changeAvailability
} from "../controllers/doctorController.js";
import authDoctor from '../middlewares/authDoctor.js';


const router = express.Router();


router.get("/list", doctorList)
router.post("/login", loginDoctor)
router.get("/change-availability", authDoctor, changeAvailability);
router.get("/appointments", authDoctor, appointmentsDoctor)

export default router;