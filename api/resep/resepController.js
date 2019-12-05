const Resep = require("./resepModel");
const Obat = require("../obat/obatModel");

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
    let _newResep = req.body;
    const obat = await Obat.findById(req.body.obat);
    _newResep.harga = req.body.takaran * obat.harga;
    const newResep = await Resep.create(_newResep);
    res.json(newResep);
    obat.stok = obat.stok - req.body.takaran;
    await obat.save();
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
