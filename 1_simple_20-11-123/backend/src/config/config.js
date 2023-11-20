import Joi from "joi";
import dotenv from "dotenv";

/** Create a Envrionement variable */
dotenv.config();

/** Validation schema for the environment variables */
const envVarsSchema = Joi.object({
  PORT: Joi.number()
    .integer()
    .default(3000)
    .description(`Server Running on this port..!`),
  DEV_MODE: Joi.string().trim().description(`Developement mode...!`),
  MONGODB_URL: Joi.string().trim().description(`MongoDB url...!`),
}).unknown();

/** Check Enviroment variable schema */
const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

/** If any error ocuure than get error in the console */
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

/** Create the exports object */
const config = {
  port: envVars.PORT,
  mode: envVars.DEV_MODE,
  mongodb: {
    url: envVars.MONGODB_URL,
  },
};

export default config;
