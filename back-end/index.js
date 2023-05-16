import express from "express";
import { connect } from "./database/db.js";
import bodyParser from "body-parser";
import { router } from "./router.js";
import cors from "cors";
// import { UserModel } from "./models/userModel.js";
const port = 8000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("", router);
app.use(cors());

connect();

app.listen(port, () => {
  console.log(`express app listening on http://localhost:${port}`);
});
