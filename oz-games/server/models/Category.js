const { Schema, model } = require("mongoose");

CategoorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = model("Categoory", CategoorySchema);
