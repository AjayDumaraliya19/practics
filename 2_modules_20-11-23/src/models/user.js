import mongoose from "mongoose";

/* ------------------ Create user schema using the mongoose ----------------- */
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "Username is required..!"],
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Email is required..!"],
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 6,
      maxLength: 8,
      required: [true, "Password is required..!"],
    },
  },
  {
    timestamps: true /** Creates createdAt and updatedAt fields automatically */,
    versionKey: false,
  }
);

export const User = mongoose.model("User", userSchema);
