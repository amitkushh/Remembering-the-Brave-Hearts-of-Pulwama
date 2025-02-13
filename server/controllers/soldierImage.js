import path from "node:path";
import fs from "node:fs";
import models from "../models/soldierImage.js";

const createSoldier = async (req, res, next) => {
  console.log("files", req.files);
  const {} = req.body;
};

export default createSoldier;
