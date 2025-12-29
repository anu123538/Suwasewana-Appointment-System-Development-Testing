import express from "express";
import {
  
  doctorList,loginDoctor, appointmentsDoctor, changeAvailability, doctorProfile, updateDoctorProfile
} from "../controllers/doctorController.js";
import authDoctor from '../middlewares/authDoctor.js';


const doctorRouter = express.Router();

doctorRouter.post("/change-availability",  changeAvailability);
doctorRouter.get("/list", doctorList)
doctorRouter.post("/login", loginDoctor)

doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);
doctorRouter.get("/profile", authDoctor, doctorProfile);
doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile);

export default doctorRouter;