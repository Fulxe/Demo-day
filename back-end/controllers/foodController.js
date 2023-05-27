import { foodPost } from "../models/postModel.js";

export const getFoodPosts = async (req, res) => {
  const body = await foodPost.find();

  res.status(200).json({ message: true, post: body });
};

export const getFoodpost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await foodPost.findById(id);
    res.status(200).json({ message: true, data: post });
  } catch (error) {
    return res.status(400).json({ message: true, data: null });
  }
};

export const createFoodPosts = async (req, res) => {
  const body = await foodPost.create(req.body);
  res.status(200).json(body);
};
export const deleteFoodPost = async (req, res) => {
  const { id } = req.params;
  try {
    const del = await foodPost.findByIdAndDelete(id);
    res.status(200).json({ message: `deleted` });
  } catch (err) {
    return res.status(400).json({ message: true, data: null });
  }
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
