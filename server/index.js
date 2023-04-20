import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import {
  loginHandler,
  registerHandler,
  logoutHandler,
} from "./routes/index.js";
import verifyToken from "./middleware/auth.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.post("/login", loginHandler);

app.post("/register", registerHandler);

app.get("/logout", logoutHandler);

app.get("/restricted", verifyToken, async (req, res) => {
  res.status(200).send("restricted content");
});

const startServer = async () => {
  app.listen(8080, () => {
    console.log("server listening on port http://localhost:8080");
  });
};

startServer();
