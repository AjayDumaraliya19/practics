import mongoose from "mongoose";

/* ------------------------- Create Category schema ------------------------- */
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timeseries: true,
    versionKey: false,
  }
);

export const Category = mongoose.model("Category", categorySchema);
