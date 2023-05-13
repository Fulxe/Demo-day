import express from "express";
import { connect } from "./database/db.js";
import bodyParser from "body-parser";
import { router } from "./router.js";
// import { UserModel } from "./models/userModel.js";
const port = 8000;

const app = express();
app.use(bodyParser.json());
app.use("", router);

connect();

app.listen(port, () => {
  console.log(`express app listening on http://localhost:${port}`);
});
// app.delete ("/delete/:id" , async (req, res) => {
//   const { id } = req.params;
//   const pos = await UserModel.findByIdAndDelete(id);
//   console.log(pos)
//   res.json("deleted")
// })
