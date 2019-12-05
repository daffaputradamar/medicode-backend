const mongoose = require("mongoose");

const PendaftaranPoliSchema = new mongoose.Schema({
  pasien: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pasien"
  },
  poli: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Poli"
  },
  tanggalTerdaftar: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("PendaftaranPoli", PendaftaranPoliSchema);
