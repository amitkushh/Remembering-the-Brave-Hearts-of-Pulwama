import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/mongoose.js";
import router from "./routes/soldier.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

connectDb();

app.get("/", (req, res) => {
  res.send("Hello welocme to home page");
});

app.use("/api/soldiers", router);

app.listen(port, () => {
  console.log(`website is running on ${port}`);
});
