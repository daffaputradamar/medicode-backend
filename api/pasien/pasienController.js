const Pasien = require("./pasienModel");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId();

module.exports = {
  index: async (req, res) => {
    res.json(await Pasien.find());
  },
  show: async (req, res) => {
    res.json(await Pasien.findById(req.params.id));
  },
  store: async (req, res) => {
    let _newPasien = req.body;
    const date = new Date();
    _newPasien.idPasien = `${date.getDate()}${date.getMonth()}${date.getFullYear()}${uid.randomUUID(
      5
    )}`;

    const newPasien = await Pasien.create(_newPasien);
    res.json(newPasien);
  },
  showBarcode: async (req, res) => {
    res.json(await Pasien.findOne({ idPasien: req.params.barcode }));
  }
};
