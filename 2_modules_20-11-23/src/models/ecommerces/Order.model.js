import mongoose from "mongoose";

/* ------------------------ Create orderIteam Schema ------------------------ */
const orderIteamSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    integer: true,
    required: true,
  },
});

/* --------------------------- Create Order schema -------------------------- */
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      integer: true,
      required: true,
    },
    customer: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    /** Here added multiple iteam, so create a array but we defind schema in seprated in upper code. */
    orderItems: {
      type: [orderIteamSchema],
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
    /** If you are not create a separated schema file that time used like this */
    // orderItems: [{
    //   productId: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Product'
    //   },
    //   quantity: {
    //     type: Number,
    //     integer: true,
    //     required: true,
    // }
    // }]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Order = mongoose.model("Order", orderSchema);
