const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header
      token = req.headers.authorization.split(" ")[1];

      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user from token but exclude password
      req.user = await User.findById(decoded.id).select("-password");

      next(); // call the next middleware or route handler
    } catch (error) {
      console.error("Authentication faile:", error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) res.status(401).json({ message: "Not authorized, no token" });
};

module.exports = authMiddleware;
