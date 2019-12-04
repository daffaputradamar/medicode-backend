const mongoose = require("mongoose");

const ObatSchema = new mongoose.Schema({
  kode: String,
  nama: String,
  stok: Number,
  satuan: String,
  harga: Number
});

module.exports = mongoose.model("Obat", ObatSchema);
