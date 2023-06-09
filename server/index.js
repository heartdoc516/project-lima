import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import {
  loginHandler,
  registerHandler,
  logoutHandler,
} from "./routes/index.js";
import dalleRoutes from "./routes/dalleRoutes.js";
import verifyToken from "./middleware/auth.js";
import postRoutes from "./routes/postRoutes.js";

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

app.use("/api/v1/dalle", dalleRoutes);

app.use("/api/v1/post", postRoutes);

const startServer = async () => {
  app.listen(8080, () => {
    console.log("server listening on port http://localhost:8080");
  });
};

startServer();
