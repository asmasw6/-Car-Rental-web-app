
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    //console.log("AUTH HEADER:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({ success: false, message: "not authorized 1" });
    }

    const token = authHeader.split(" ")[1];
    //console.log("TOKEN RECEIVED:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //console.log("DECODED:", decoded);

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    //console.error("JWT ERROR:", error.message);
    return res.json({ success: false, message: "not authorized 3" });
  }
};




/*

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

*/