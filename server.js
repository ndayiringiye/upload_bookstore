import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./config/db.js";
import fileRoutes from "./Routes/fileUploadRoutes.js";


dotenv.config();

const app = express();
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api", fileRoutes);

app.get("/", (req, res) => {
  res.send("You're rich");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectdb();
  console.log(`Server running on port ${PORT}`);
});
