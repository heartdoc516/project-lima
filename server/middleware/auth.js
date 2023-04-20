import { verifyJWT } from "../lib/auth.js";

import * as dotenv from "dotenv";

dotenv.config();

export default function verifyToken(req, res, next) {
  const token = req.cookies["token"];

  if (!token) {
    res.status(403).send("A token is required for authentication");
  }

  try {
    const payload = verifyJWT(token, process.env.JWT_SECRET);
    req.user = payload;
  } catch (error) {
    console.log(error);
    res.status(401).send("Invalid token");
  }

  return next();
}
