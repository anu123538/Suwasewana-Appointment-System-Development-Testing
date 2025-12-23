import jwt from "jsonwebtoken";

// doctor authentication middleware
const authDoctor = (req, res, next) => {
  try {
    const {dToken} = req.headers;

    if (!dToken) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    const token_decoded = jwt.verify(dToken, process.env.JWT_SECRET);

    // Attach userId to request
  req.doctorId = decoded.doctorId;


    next();
  } catch (error) {
      console.log(error)
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authDoctor;
