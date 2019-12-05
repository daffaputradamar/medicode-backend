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
  takaran: String,
  keterangan: String,
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
