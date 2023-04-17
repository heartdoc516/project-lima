import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send(posts);
});

const startServer = async () => {
  app.listen(8080, () => {
    console.log("server listening on port http://localhost:8080");
  });
};

startServer();
