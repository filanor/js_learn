const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number },
    password: { type: String },
    adress: [{ type: Object }],
    bookmark: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    isAdmin: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

module.exports = model("User", UserSchema);
