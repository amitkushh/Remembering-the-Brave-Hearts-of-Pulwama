import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected sucsessfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Failed to connect database", err);
    });

    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log("error to connect databse");
    process.exit(1);
  }
};

export default connectDb;
