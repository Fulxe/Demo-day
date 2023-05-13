import { Router } from "express";
export const router = Router();
import {
  getIngreadients,
  createIngreadients,
} from "./controllers/fruitController.js";
import { getFoodPosts, createFoodPosts } from "./controllers/foodController.js";
import {
  createUser,
  loginUser,
  deleteUser,
  getUser
} from "./controllers/userController.js";

router.get("/", (req, res) => {
  res.status("200").json({ message: "working" });
  res
    .status("404")
    .json({ message: "not working, check your internet connection" });
});
router.get("/fruit", getIngreadients);
router.post("/fruit", createIngreadients);
router.get("/food-posts", getFoodPosts);
router.post("/create-food-post", createFoodPosts);
router.post("/create", createUser);
router.get("/login", loginUser);
router.delete("/:id", deleteUser);
router.get("/user" , getUser)
