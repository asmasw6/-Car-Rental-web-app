import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
 
  
  const token = req.headers.authorization;
  console.log(token + ' >>> token in protect')
  if (!token) {
    return res.json({ success: false, message: "not authorized 1 " });
  }
  try {
    const userId = jwt.decode(token, process.env.JWT_SECRET);
    console.log(">>>>>>>>> " + userId)

    if (!userId) {
      return res.json({ success: false, message: "not authorized 2" });
    }

    req.user = await User.findById(userId).select("-password");
    next();
  } catch (error) {
          return res.json({ success: false, message: "not authorized 3" });

  }

  
};