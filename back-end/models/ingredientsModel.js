import { Schema, model } from "mongoose";

const fruitSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  image: {
    type: String,
    required: [true, "Image is required."],
  },
  category: { type: String, enum: ["fruit", "vegetable"] },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
});

const fruitPost = model("ingredients", fruitSchema);

export default fruitPost;
