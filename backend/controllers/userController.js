import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";
import crypto from "node:crypto";



// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.json({ success: false, message: "Missing Details" });

    if (!validator.isEmail(email))
      return res.json({ success: false, message: "Enter a valid email" });

    if (password.length < 8)
      return res.json({ success: false, message: "Password too short" });

    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(10)
    );

    const newUser = new userModel({ name, email, password: hashedPassword });
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user)
      return res.json({ success: false, message: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({ success: false, message: "Invalid Credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Get Profile
const getProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const userData = await userModel.findById(userId).select("-password");
    res.json({ success: true, userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Update Profile
const updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;

    if (!name || !phone || !dob || !gender)
      return res.json({ success: false, message: "Missing Details" });

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    });

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      await userModel.findByIdAndUpdate(userId, {
        image: imageUpload.secure_url,
      });
    }

    res.json({ success: true, message: "Profile Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Book Appointment
const bookAppointment = async (req, res) => {
  try {
    const userId = req.userId; // ✅ use userId from middleware
    const { docId, slotDate, slotTime } = req.body;

    const docData = await doctorModel.findById(docId).select("-password");

    if (!docData.available) {
      return res.json({ success: false, message: "Doctor not available" });
    }
    let slots_booked = docData.slots_booked;

    // Checking for slot availability

    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({ success: false, message: "Slot not available" });
      } else {
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
    }

    const userData = await userModel.findById(userId).select("-password");

    delete docData.slots_booked;

    const appointmentData = {
      userId,
      docId,
      userData,
      docData,
      amount: docData.fees,
      slotTime,
      slotDate,
      date: Date.now(),
    };

    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();
    // save new slots data in docData
    await doctorModel.findByIdAndUpdate(docId, { slots_booked });
    res.json({ success: true, message: "Appointment Booked Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

//API to get user appointmets for frontend
const listAppointment = async (req, res) => {
  try {
    const userId = req.userId;
    const appointments = await appointmentModel.find({ userId });
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//API to cancel appointment
const cancelAppointment = async (req, res) => {
  try {
    const userId = req.userId;
    const { appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);
    // verify appointment user
    if (appointmentData.userId !== userId) {
      return res.json({ success: false, message: "Unauthorized action" });
    }
    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });
    // releasing doctor slot
    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await doctorModel.findById(docId);
    let slots_booked = doctorData.slots_booked;
    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e !== slotTime
    );
    await doctorModel.findByIdAndUpdate(docId, { slots_booked });
    res.json({ success: true, message: "Appointment Cancelled " });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// paymentPayHere integration
const paymentPayHere = async (req, res) => {
    try {
        const { appointmentId } = req.body;
        const appointment = await appointmentModel.findById(appointmentId);

        if (!appointment || appointment.cancelled) {
            return res.json({ success: false, message: "Invalid appointment" });
        }

        const merchantId = "1233260";
        // Replace with your actual Sandbox Merchant Secret from the PayHere portal
        const merchantSecret = "MTY2MjI2NTU4OTExODA2NzM2MDM5ODE0NDM4MjIyNDc5ODE5OTMz"; 
        
        // 1. Hash the secret first
        const hashedSecret = crypto.createHash('md5').update(merchantSecret).digest('hex').toUpperCase();
        
        // 2. Format amount to 2 decimal places
        const amountFormatted = parseFloat(appointment.amount).toFixed(2);
        const currency = "LKR";

        // 3. Generate final hash using correct order: MerchantID + OrderID + Amount + Currency + HashedSecret
        const hash = crypto.createHash('md5')
                           .update(merchantId + appointmentId + amountFormatted + currency + hashedSecret)
                           .digest('hex')
                           .toUpperCase();

        const paymentData = {
            sandbox: true,
            merchant_id: merchantId,
            return_url: "https://suwasewana-vgqa.vercel.app/my-appointments",
            cancel_url: "https://suwasewana-vgqa.vercel.app/my-appointments",
            notify_url: "https://suwasewana.vercel.app/api/user/payment-notify",
            order_id: appointmentId,
            items: "Doctor Appointment",
            amount: amountFormatted,
            currency: currency,
            hash: hash,
            first_name: appointment.userData.name,
            last_name: "",
            email: appointment.userData.email,
            phone: appointment.userData.phone || "0771234567",
            address: "Colombo",
            city: "Colombo",
            country: "Sri Lanka",
        };

        res.json({ success: true, paymentData });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
// API to verify payment
const verifyPayment = async (req, res) => {
    try {
        const { appointmentId } = req.body;
        
        // Update the payment status in the database
        const updatedAppointment = await appointmentModel.findByIdAndUpdate(
            appointmentId, 
            { payment: true }, 
            { new: true }
        );

        if (updatedAppointment) {
            res.json({ success: true, message: "Payment updated successfully" });
        } else {
            res.json({ success: false, message: "Appointment not found" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointment,
  cancelAppointment,
  paymentPayHere,
  verifyPayment,
};
