import { string } from "joi";
import mongoose from "mongoose";

/* --------------------- Create a Hospital models schema -------------------- */
const hostpitalSchema = new mongoose.Schema(
  {
    name: {
      type: string,
      trim: true,
      required: true,
    },
    addressLine1: {
      type: string,
      trim: true,
      required: true,
    },
    addressLine2: {
      type: string,
      trim: true,
    },
    city: {
      type: string,
      trim: true,
      required: true,
    },
    pincode: {
      type: string,
      trim: true,
      required: true,
    },
    specialisedIn: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Hostpital = mongoose.model("Hostpital", hostpitalSchema);
