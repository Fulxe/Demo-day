import fruitPost from "../models/ingredientsModel.js";

export const getIngreadients = async (req, res) => {
  const ingredients = await fruitPost.find({}).limit(30);
  res.status(200).json(ingredients);
};

export const createIngreadients = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.image ||
    !req.body.category ||
    !req.body.description
  ) {
    res.status(404).json({
      message: `${!req.body.name ? "name is not found" : ""}${
        !req.body.image ? " image not found" : ""
      }${!req.body.category ? " category is not found" : ""}${
        !req.body.description ? " description is not found" : ""
      }`,
    });
    return;
  }
  const ingredients = await fruitPost.create(req.body);
  res.status(200).json(ingredients);
};
