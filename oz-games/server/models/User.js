const { Schema, model } = require("mongoose");

UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number },
    password: { type: String },
    adress: [{ type: Object }],
    bookmark: [{ type: Schema.Types.ObjectId, ref: "Product" }]
  },
  {
    timestamps: true
  }
);

module.exports = model("User", UserSchema);
