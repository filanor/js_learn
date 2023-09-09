const { Schema, model } = require("mongoose");

CartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Product"
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ]
});

module.exports = model("Cart", CartSchema);
