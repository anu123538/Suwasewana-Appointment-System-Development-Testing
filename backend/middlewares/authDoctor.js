
import jwt from "jsonwebtoken";

const authDoctor = (req, res, next) => {
  try {
    const token = req.headers.dtoken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ FIX HERE
  req.doctorId = decoded.doctorId;

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Token Expired. Login Again",
    });
  }
};

export default authDoctor;
