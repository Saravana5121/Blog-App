import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT;

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
