const Obat = require("./obatModel");

module.exports = {
  index: async (req, res) => {
    res.json(await Obat.find());
  },
  store: async (req, res) => {
    const newObat = await Obat.create(req.body);
    res.json(newObat);
  },
  destroy: async (req, res) => {
    res.json(await Obat.findByIdAndDelete(req.params.id));
  }
};
