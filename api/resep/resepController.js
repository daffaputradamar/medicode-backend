const Resep = require("./resepModel");

module.exports = {
  index: async (req, res) => {
    const { pasien, terbayar } = req.query;
    res.json(
      await Resep.find({ pasien, terbayar })
        .populate("pasien")
        .populate("obat")
    );
  },
  store: async (req, res) => {
    const newResep = await Resep.create(req.body);
    res.json(newResep);
  },
  update: async (req, res) => {
    const { pasien } = req.query;
    const newResep = await Resep.updateMany(
      {
        pasien,
        terbayar: false
      },
      {
        terbayar: true
      }
    );
    res.json(newResep);
  }
};
