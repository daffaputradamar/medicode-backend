const User = require("./userModel");
const { signJWT } = require("../../lib/signJWT");

module.exports = {
  index: async (req, res) => {
    let user;
    switch (req.query.posisi) {
      case "dokter":
        user = await User.find({ posisi: 1 }).select("-password");
        break;
      case "medis":
        user = await User.find({ posisi: 2 }).select("-password");
        break;
      case "apoteker":
        user = await User.find({ posisi: 3 }).select("-password");
        break;
      default:
        user = await User.find().select("-password");
        break;
    }
    res.json(user);
  },
  authenticate: async (req, res) => {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password
    }).select("-password");
    if (user) {
      const token = await signJWT(rest);
      res.json({
        success: true,
        token
      });
    } else {
      res.json({
        success: false
      });
    }
  },
  store: async (req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
  },
  show: async (req, res) => {
    res.json(await User.findById(req.params.id));
  }
};
