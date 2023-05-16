import { foodPost } from "../models/postModel.js";

export const getFoodPosts = async (req, res) => {
  const body = await foodPost.find();

  res.status(200).json(body);
};

export const createFoodPosts = async (req, res) => {
  const body = await foodPost.create(req.body);
  res.status(200).json(body);
};
export const deleteFoodPost = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await foodPost.findByIdAndDelete(id);
    console.log(user);
    res.status(200).json({
      message: `Food post is ${req.params.id} deleted`,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: true, data: null });
  }
};
