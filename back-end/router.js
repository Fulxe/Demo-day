import { Router } from "express";
export const router = Router();

router.get("/", (req, res) => {
  res.status("200").json({ message: "working" });
  res
    .status("404")
    .json({ message: "not working, check your internet connection" });
});
