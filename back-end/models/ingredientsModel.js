import { Schema, model } from "mongoose";

const fruitSchema = new Schema({
  name: String,
  image: String,
  category: "fruit" | "vegetable",
  description: String,
  carbs: String,
});

const fruitPost = model("logup", logupSchema);

export default fruitPost;
