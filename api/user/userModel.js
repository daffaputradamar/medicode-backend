const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  nama: String,
  jenisKelamin: String,
  Alamat: String,
  tanggalTerdafar: {
    type: Date,
    default: Date.now()
  },
  posisi: {
    type: Number,
    enum: [1, 2, 3]
  }
});

module.exports = mongoose.model("User", UserSchema);

/**
 * 1 => Dokter
 * 2 => Petugas Medis
 * 3 => Petugas Apotik
 */
