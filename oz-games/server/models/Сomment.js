const { Schema, model } = require("mongoose");

const CommentSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Product"
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  rate: { type: Number },
  content: {
    type: String
  }
});

module.exports = model("Comment", CommentSchema);
