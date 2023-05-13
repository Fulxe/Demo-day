import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required."],
  },
  userName: {
    type: String,
    unique: true,
    required: [true, "Username is required."],
  },
  password: {
    type: Password,
    required: [true, "Password is required."],
  },
  Save: [String],
});

const UserModel = model("user", userSchema);

export default UserModel;
