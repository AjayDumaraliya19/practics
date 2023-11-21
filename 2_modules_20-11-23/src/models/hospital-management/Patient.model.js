import { string } from "joi";
import mongoose, { Mongoose } from "mongoose";

/* ---------------------- Create a Patient model schema --------------------- */
const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      rquired: true,
    },
    diagonsewith: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    age: {
      type: Number,
      integer: true,
      required: true,
    },
    booldGroup: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: string,
      trim: true,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    admittedIn: {
      type: mongoose.Types.ObjectId,
      ref: "Hospital",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Patient = mongoose.model("Patient", patientSchema);
