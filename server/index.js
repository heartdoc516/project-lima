import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { loginHandler, registerHandler } from "./routes/index.js";
import verifyToken from "./middleware/auth.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.post("/login", loginHandler);

app.post("/register", registerHandler);

app.post("/restricted", verifyToken, async (req, res) => {
  res.status(200).send("restricted content");
});

const startServer = async () => {
  app.listen(8080, () => {
    console.log("server listening on port http://localhost:8080");
  });
};

startServer();
