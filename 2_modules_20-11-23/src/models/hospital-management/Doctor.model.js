import mongoose from "mongoose";

/* ---------------------- Create a Doctor model schema ---------------------- */
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please add a name"],
    },
    salary: {
      type: Number,
      integer: true,
      default: 0,
    },
    qualification: {
      type: String,
      trim: true,
      required: true,
    },
    experienceInYear: {
      type: Number,
      integer: true,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Hospital",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
