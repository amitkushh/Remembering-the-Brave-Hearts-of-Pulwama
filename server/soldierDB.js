import connectDb from "./db/mongoose.js";
import soldiersList from "./models/soldier.js";
import dotenv from "dotenv";
import soldierJson from "./soldiers.json" assert { type: "json" };

dotenv.config();

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    await soldiersList.create(soldierJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
