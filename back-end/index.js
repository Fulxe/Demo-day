import express from "express";
import { connect } from "./db.js";
import bodyParser from "body-parser";
import { router } from "./router.js";
const port = 8000;

const app = express();
app.use(bodyParser.json());
app.use("", router);

connect();

app.listen(port, () => {
  console.log(`express app listening on http://localhost:${port}`);
});
