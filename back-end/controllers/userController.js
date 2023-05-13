import { UserModel } from "../models/userModel.js";

export const createUser = async (req, res, _props) => {
  // if (!req.body?.firstName || !req.body?.email || !req.body?.password) {
  //   res
  //     .status(400)
  //     .json({ message: `Fisrtname , email or password are required` });
  //   return;
  // }
  console.log(req.body);
  const createUser = await UserModel.create(req.body);
  res.status(201).json({ message: ` New user is created`, data: createUser });
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email, password });
  if (user.password === password)
    res.status(200).json({ message: true, data: user.userName , data : user.id });
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByIdAndDelete(id);
    console.log(user)
    res.status(200).json({
      message: `User with ${req.params.id} id is deleted`,
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: true, data: null });
  }
};

export const getUser = async (req, res ) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    console.log(user);
    res.status(200).json({ message: true, data: user });
  } catch (error) {
    return res.status(400).json({ message: true, data: null });
  }
};
