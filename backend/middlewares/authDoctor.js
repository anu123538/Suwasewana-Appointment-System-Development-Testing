import jwt from "jsonwebtoken";

// doctor authentication middleware
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

    req.docId = decoded.doctorId; // FIXED (see next error)
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
