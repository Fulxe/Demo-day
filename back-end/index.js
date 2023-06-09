import express from "express";
import { connect } from "./database/db.js";
import bodyParser from "body-parser";
import { router } from "./router.js";
import cors from "cors";
const port = "https://back-end-muruuuu8-gmailcom.vercel.app/";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("", router);
app.use(cors());

connect();

app.listen(port, () => {
  console.log(`express app listening on https://back-end-muruuuu8-gmailcom.vercel.app/`);
});
