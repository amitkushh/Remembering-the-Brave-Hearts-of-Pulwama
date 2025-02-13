import path from "node:path";
import { fileURLToPath } from "url";
import express from "express";
import createSoldier from "../controllers/soldierImage.js";
import multer from "multer";

const soldiersData = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const upload = multer({
  dest: path.resolve(__dirname, "./public"),
  limits: { fileSize: 3e7 },
});

soldiersData.post(
  "/",
  upload.fields([{ name: "image", maxCount: 1 }]),
  createSoldier
);

export default soldiersData;
