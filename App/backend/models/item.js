const mongoose = require("mongoose");

let Schema = mongoose.Schema({
  user: { type: String, index: true },
  headline: String,
  ad: String,
  email: String,
  phone: String,
  cloudinary_id: String,
  category: String,
  date: String
});

module.exports = mongoose.model("item", Schema);
