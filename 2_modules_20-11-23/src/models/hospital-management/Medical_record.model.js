import mongoose, { mongo } from "mongoose";

/* ------------------ Create a Medical records model schema ----------------- */
const medicalRecordSchema = new mongoose.Schema(
  {},
  {
    timeseries: true,
    versionKey: false,
  }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
