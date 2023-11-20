import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config/config.js";
import routes from "./routes/jokes.js";

/* ------------------- Create the express function varible ------------------ */
const app = express();

/* ------------ Allow data from body / Allow json data from body ------------ */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

/* ------------------ allow frontend for the static assets ------------------ */
app.use(
  express.static("dist")
); /** If when you are change your frontend then it not changes on it here bcz you create a static bulid for frontend. When you chnages in the frontend code then again create a biled and push here and run the code */

/* ------- Allow the helps to get all resources from external servers ------- */
app.use(cors());
app.use("*", cors());

// const whitelist = ["http://localhost:3000/v1"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

/* --------------------------- Connect all routes --------------------------- */
// app.use("/", cors(corsOptions), routes); /** If any get this api that not allow to access this api */
app.use("/v1", routes);

/* --------------------- Start server and listen on port -------------------- */
app.listen(config.port, () => {
  console.log(
    `${config.mode} server running at http://localhost:${config.port}/`
  );
});
