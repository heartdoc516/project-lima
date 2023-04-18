import prisma from "../prisma/prismaClient.js";
import { hashPassword, createJWT } from "../lib/auth.js";
import * as dotenv from "dotenv";

dotenv.config();

export default async function registerHandler(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).send("All inputs are required");
    }

    const userExists = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (userExists) {
      res.status(409).send("User already exists");
    }

    const encryptedPassword = await hashPassword(password, 10);
    const jwtToken = createJWT(
      { username: username, password: encryptedPassword },
      process.env.JWT_SECRET
    );

    const user = await prisma.user.create({
      data: {
        username: username,
        password: encryptedPassword,
        JWT: jwtToken,
      },
    });

    res.status(201).json({ user: user });
  } catch (error) {
    console.log(error);
  }
}
