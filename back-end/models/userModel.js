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
  Image: String,
});``

const UserModel = model("user", userSchema);

export { UserModel };
