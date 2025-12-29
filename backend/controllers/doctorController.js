import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";

const changeAvailability = async (req, res) => {
  try {
    const {doctorId} = req.body

    const docData = await doctorModel.findById(doctorId);
    await doctorModel.findByIdAndUpdate(doctorId, {
      available: !docData.available,
    });

    res.json({
      success: true,
      message: "Availability status changed successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-password", "-email"]);
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Doctor login
const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;

    const doctor = await doctorModel.findOne({ email });
    if (!doctor) {
      return res.json({ success: false, message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, doctor.password);

    if (isMatch) {
      const token = jwt.sign({ doctorId: doctor._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get  doctor appointment for doctor panel
const appointmentsDoctor = async (req, res) => {
  try {
    const doctorId = req.doctorId;

    const appointments = await appointmentModel.find({
      docId: doctorId, // ✅ DB field
    });

    res.json({ success: true, appointments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


// API to get dashbord data for doctor panel
const doctorDashboard = async (req, res) => {
  try {
    const doctorId = req.doctorId;

    const appointments = await appointmentModel.find({
      docId: doctorId, // ✅ correct
    });

    let earnings = 0;
    let patients = new Set();

    appointments.forEach((item) => {
      if (item.payment || item.isCompleted) {
        earnings += item.amount;
      }
      patients.add(item.userId.toString());
    });

    const dashData = {
      earnings,
      appointments: appointments.length,
      patients: patients.size,
      latestAppointments: appointments.reverse().slice(0, 5),
    };

    res.json({ success: true, dashData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to get doctor profile for doctor panel 
const doctorProfile = async (req, res) => {
  try {
    const { doctorId } = req.body
    const profileData = await doctorModel.findById(doctorId).select(["-password"])
    res.json({ success: true, profileData })
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}
// API to update doctor profile form doctor panel
const updateDoctorProfile = async (req, res) => {
  try {
    const { doctorId, fees, address, available } = req.body
    await doctorModel.findByIdAndUpdate(doctorId, { fees, address, available })
    res.json({ success: true, message: "Profile updated successfully" })

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

export { changeAvailability, doctorList, loginDoctor, appointmentsDoctor, doctorProfile, updateDoctorProfile }