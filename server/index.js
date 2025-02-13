import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/mongoose.js";

import soldiersData from "./routes/soldierImage.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

connectDb();

app.use("/api/soldiers-data", soldiersData);

app.listen(port, () => {
  console.log(`website is running on ${port}`);
});
