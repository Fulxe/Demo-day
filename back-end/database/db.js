import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connect = async () => {
  try {
    console.log(dotenv.MONGO_ATLAS_URL);
    await mongoose.connect(process.env.MONGO_ATLAS_URL);
    console.log("Connected.");
  } catch (error) {
    console.log(error);
  }
};
