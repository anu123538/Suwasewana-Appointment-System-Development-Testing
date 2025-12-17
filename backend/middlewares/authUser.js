import jwt from 'jsonwebtoken'


// user authentication middleware
const authUser = (req, res, next) => {
  try {
    const { token } = req.headers

    if (!token) {
      return res.json({ success: false, message: "Not Authorized Login Again" })
    }const token_decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.body.userId = token_decoded.id
    next()
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Token Expired Login Again" })
  }
}

export default authUser;