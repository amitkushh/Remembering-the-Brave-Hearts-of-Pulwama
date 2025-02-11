import soldiersLint from "../models/soldier.js";

const soldierController = async (req, res) => {
  const data = await soldiersLint.find({});
  res.status(200).json({ data });
};

export default soldierController;
