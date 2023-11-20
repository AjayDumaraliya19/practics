import Joi from "joi";
import dotenv from "dotenv";

/** Create a environmental funcation */
dotenv.config();

/** Create a validation schema */
const envVarsSchema = Joi.object({
  PORT: Joi.number().integer().default(8080).description(`Server run at port...`),
  DEV_MODE: Joi.string().trim().description(`Server name...`),
}).unknown();

/** Validation schema */
const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

/** If any error occure than show it */
if (error) {
  console.log(`Config Error : ${error}`);
}

/** Create variable object */
const config = {
  port: envVars.PORT,
  mode: envVars.DEV_MODE,
};

/** export the module here */
export default config;
