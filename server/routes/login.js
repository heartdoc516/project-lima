import { comparePasswords, createJWT } from "../lib/auth.js";
import prisma from "../prisma/prismaClient.js";
import { serialize } from "cookie";
import * as dotenv from "dotenv";
dotenv.config();

export default async function loginHandler(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ data: "All inputs required" });
    }

    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      res.status(400).json({ data: "Wrong Credentials" });
    }

    const passwordIsValid =
      (await comparePasswords(password, user.password)) || null;

    if (!passwordIsValid) {
      res.status(400).json({ data: "Wrong Credentials" });
    }

    const jwtToken = createJWT(
      {
        username: user.username,
        password: user.password,
      },
      process.env.JWT_SECRET
    );

    const serialized = serialize("token", jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);

    res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
  }
}
