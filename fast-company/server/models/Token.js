const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true },
    refreshToken: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = model("Token", schema);
