const mongoose = require("mongoose");

const ResepSchema = new mongoose.Schema({
  pasien: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Pasien"
  },
  terbayar: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Resep", ResepSchema);
