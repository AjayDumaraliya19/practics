import mongoose, { mongo } from "mongoose";

/* ---------------------- Create schema using mongoose ---------------------- */
const todoSchema = new mongoose.Schema(
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
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      {
        type: mongoose.Types.ObjectId,
        ref: "SubTodo",
      },
    ] /** Array of the SubTodoes */,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Todo = mongoose.model("Todo", todoSchema);
