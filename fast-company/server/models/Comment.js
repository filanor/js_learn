const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    content: { type: "string", required: true },
    //на чьей страницу находится комментарий
    pageId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    // Кто оставил комментарий
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }
  },
  {
    timestamps: { createdAt: "created_at" }
  }
);

module.exports = model("Comment", schema);
