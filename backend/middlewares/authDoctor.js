

// doctor authentication middleware
import jwt from "jsonwebtoken";

const authDoctor = (req, res, next) => {
  try {
    const dtoken = req.headers.dtoken;

    if (!dtoken) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    const decoded = jwt.verify(dtoken, process.env.JWT_SECRET);

    req.docId = decoded.doctorId; // ✅ store as docId
    next();
  } catch (error) {
    console.log("JWT ERROR:", error.message);
    return res.status(401).json({
      success: false,
      message: "Token Expired. Login Again",
    });
  }
};

export default authDoctor;
