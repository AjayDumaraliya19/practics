import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import config from "./config/config.js";

/* ------------ Create express variable to used all functinality ------------ */
const app = express();

/* --------------------------- Create a middlwares -------------------------- */
app.use(bodyparser.json());
app.use(express.json());
app.use(cors({ origin: true })); /** allow cross origin request */

/* --------------------- Start server and listen on port -------------------- */
app.listen(config.port, () => {
  console.log(
    `${config.mode} server running at http://localhost:${config.port}/`
  );
});
