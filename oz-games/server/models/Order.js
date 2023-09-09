const { Schema, model } = require("mongoose");

OrderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Product"
        },
        quantity: {
          type: Number
        },
        price: {
          type: Number
        }
      }
    ],
    status: { type: String }
  },
  {
    timestamps: true
  }
);

module.exports = model("Order", OrderSchema);
