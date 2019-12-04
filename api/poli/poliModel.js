const mongoose = require("mongoose");

const PoliSchema = new mongoose.Schema({
  idPoli: String,
  nama: String
});

module.exports = mongoose.model("Poli", PoliSchema);
