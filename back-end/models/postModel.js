import { Schema, model } from "mongoose";

const postSchema = new Schema({
  Username: String,
  Category: {
    type: String,
    enum: ["Mongolia", "Vegan", "Korean", "China", "Italy", "Japan", "Indian"],
  },
  FoodName: {
    type: String,
  },
  Image: String,
  Recipe: String,
  Ingredients: String,
  Save: Boolean,
  SaveCount: Number,
});

const foodPost = model("foodPost", postSchema);
export { foodPost };
