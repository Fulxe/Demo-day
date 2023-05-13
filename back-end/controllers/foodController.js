import { foodPost } from "../models/postModel.js";

export const getFoodPosts = async (req, res) => {
  const body = await foodPost.find();

  res.status(200).json(body);
};

export const createFoodPosts = async (req, res) => {
  const body = await foodPost.create(req.body);
  res.status(200).json(body);
};
