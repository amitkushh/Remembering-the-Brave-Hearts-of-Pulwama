import express from "express";
import soldierController from "../controllers/soldier.js";

const router = express.Router();

router.get("/", soldierController);

export default router;
