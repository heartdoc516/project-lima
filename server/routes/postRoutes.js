import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import prisma from "../prisma/prismaClient.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route("/").post(async (req, res) => {
  try {
    const { id, username, iconTitle, iconAttribute, icon } = req.body;

    const iconUrl = await cloudinary.uploader.upload(icon);

    const author = await prisma.user.findUnique({
      where: {
        id: id,
        username: username,
      },
    });

    const newPost = await prisma.post.create({
      data: {
        authorId: author.id,
        title: iconTitle,
        attribute: iconAttribute,
        iconUrl: iconUrl.url,
      },
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, data: error });
  }
});

export default router;
