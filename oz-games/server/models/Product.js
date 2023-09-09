const { Schema, model } = require("mongoose");

ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    originalTitle: { type: String },
    language: { type: String },
    playingTime: { type: Number },
    players: { type: Number },
    qtty: { type: Number, default: 0 },
    publisher: [{ type: String }],
    bgg: { type: String },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    recomendedPrice: { type: Number },
    img: [{ type: String, required: true }],
    status: { type: Schema.Types.ObjectId, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = model("Product", ProductSchema);
