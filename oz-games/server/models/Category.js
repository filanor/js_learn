const { Schema, model } = require("mongoose");

const CategoorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = model("Categoory", CategoorySchema);
