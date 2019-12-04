const mongoose = require("mongoose");

const PasienSchema = new mongoose.Schema({
  idPasien: String,
  nama: String,
  usia: Number,
  jenisKelamin: String,
  alamat: String
});

module.exports = mongoose.model("Pasien", PasienSchema);
