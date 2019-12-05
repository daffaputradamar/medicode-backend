const Resep = require("./resepModel");

module.exports = {
  index: async (req, res) => {
    res.json(await Resep.find());
  },
  indexDetail: async (req, res) => {
    res.json(await Resep.find({ resep: req.params.id }));
  }
  // store: async (req, res) => {
  //     const newResep =
  // }
};
