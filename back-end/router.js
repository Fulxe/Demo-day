import { Router } from "express";
export const router = Router();
import {
  getIngreadients,
  createIngreadients,
} from "./controllers/fruitController.js";
import {
  getFoodPosts,
  createFoodPosts,
  deleteFoodPost,
} from "./controllers/foodController.js";
import {
  createUser,
  loginUser,
  deleteUser,
  getUser,
  getUsers,
} from "./controllers/userController.js";

router.get("/", (req, res) => {
  res.status("200").json({ message: "working" });
  res
    .status("404")
    .json({ message: "not working, check your internet connection" });
});

// Fruit
router.get("/fruit", getIngreadients);
router.post("/fruit", createIngreadients);

// Food
router.get("/food-posts", getFoodPosts);
router.post("/create-food-post", createFoodPosts);
router.delete("/delete-food-post/:id", deleteFoodPost);

// user
router.get("/:id", getUser);
router.get("/users" , getUsers)
router.post("/create", createUser);
router.post("/login", loginUser);
router.delete("/:id", deleteUser);
