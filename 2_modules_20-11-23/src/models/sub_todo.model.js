import mongoose, { Mongoose } from "mongoose";

/* --------------------- Create a schema using mongoose --------------------- */
const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      trim: true,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
