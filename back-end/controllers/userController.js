import { UserModel } from "../models/userModel.js";

export const createUser = async (req, res, _props) => {
  try {
    const createUser = await UserModel.create(req.body);
    res.status(201).json({ message: ` New user is created`, data: createUser });
    console.log(createUser);
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
    return res.status(400).json({ message: "No user found" });
  }
  if (user.password === password)
    return res
      .status(200)
      .json({ message: true, data: user.username, id: user.id });
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
  // console.log(id)
  try {
    // console.log(id, "hi");
    const user = await UserModel.findById(id);
    res.status(200).json({ message: true, data: user });
    // console.log(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: true, data: null });
  }
};
export const getUsers = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).json({
      message: true,
      data: user,
    });
    console.log(user);
  } catch (error) {
    return res.status(400).json({ message: true, data: null });
  }
};
