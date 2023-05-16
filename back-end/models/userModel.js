import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required."],
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Username is required."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  postCount: {
    type: String,
    required: false,
  },
  SavedPost: {
    type: [String],
    required: false,
  },
});

const UserModel = model("user", userSchema);

export { UserModel };
