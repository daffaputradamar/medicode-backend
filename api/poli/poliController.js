const Poli = require("./poliModel");

module.exports = {
  index: async (req, res) => {
    res.json(await Poli.find());
  },
  store: async (req, res) => {
    const newPoli = await Poli.create(req.body);
    res.json(newPoli);
  }
};
