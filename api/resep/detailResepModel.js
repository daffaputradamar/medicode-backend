const mongoose = require("mongoose");

const DetailResepSchema = new mongoose.Schema({
  resep: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Resep"
  },
  takaran: Number,
  keterangan: String
});

module.exports = mongoose.model("DetailResep", DetailResepSchema);
