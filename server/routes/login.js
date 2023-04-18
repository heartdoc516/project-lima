import { comparePasswords, createJWT } from "../lib/auth.js";
import prisma from "../prisma/prismaClient.js";
import * as dotenv from "dotenv";
dotenv.config();

export default async function loginHandler(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).send("All inputs are required");
    }

    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      res.status(400).send("Wrong Credentials");
    }

    const passwordIsValid = await comparePasswords(password, user.password);

    if (!passwordIsValid) {
      res.status(400).send("Wrong Credentials");
    }

    const jwtToken = createJWT(
      {
        username: user.username,
        password: user.password,
      },
      process.env.JWT_SECRET
    );

    const jwtUpdatdedUser = await prisma.user.update({
      where: {
        username: user.username,
      },
      data: {
        JWT: jwtToken,
      },
    });

    res.status(200).json({ user: jwtUpdatdedUser });
  } catch (error) {
    console.log(error);
  }
}
