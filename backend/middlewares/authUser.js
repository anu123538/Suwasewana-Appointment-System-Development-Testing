import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized. Login again",
      });
    }

    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Attach to req
    req.userId = token_decoded.id;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export default authUser;
