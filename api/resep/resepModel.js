const mongoose = require("mongoose");

const ResepSchema = new mongoose.Schema({
  pasien: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Pasien"
  },
  obat: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Obat"
  },
  takaran: Number,
  keterangan: String,
  harga: Number,
  terbayar: {
    type: Boolean,
    default: false
  },
  tanggalTerdaftar: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Resep", ResepSchema);
