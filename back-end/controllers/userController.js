import { UserModel } from "../models/userModel.js";

export const createUser = async (req, res, _props) => {
  try {
    console.log(req.body);

    const createUser = await UserModel.create(req.body);
    res.status(201).json({ message: ` New user is created`, data: createUser });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "invalid input" });
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await UserModel.findOne({
    $or: [{ username: email }, { email: email }],
  });
  if (!user) {
    res.status(400).json({ message: "No user found" });
  }
  if (user.password === password)
    res.status(200).json({ message: true, data: user.username, data: user.id });
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByIdAndDelete(id);
    console.log(user);
    res.status(200).json({
      message: `User with ${req.params.id} id is deleted`,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: true, data: null });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    console.log(user);
    res.status(200).json({ message: true, data: user });
  } catch (error) {
    return res.status(400).json({ message: true, data: null });
  }
};
