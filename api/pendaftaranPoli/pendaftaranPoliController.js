const PendaftaranPoli = require("./pendaftaranPoliModel");

module.exports = {
  index: async (req, res) => {
    res.json(
      await PendaftaranPoli.find()
        .populate("pasien")
        .populate("poli")
    );
  },
  store: async (req, res) => {
    res.json(await PendaftaranPoli.create(req.body));
  }
};
