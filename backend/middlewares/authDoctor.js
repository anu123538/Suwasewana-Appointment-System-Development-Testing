import jwt from "jsonwebtoken";

// doctor authentication middleware
const authDoctor = (req, res, next) => {
  try {
    const { dtoken } = req.headers;

    if (!dtoken) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    const decoded = jwt.verify(dtoken, process.env.JWT_SECRET);

    // Attach doctorId to request
    req.body.docId = decoded.doctorId; // match payload

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export default authDoctor;
