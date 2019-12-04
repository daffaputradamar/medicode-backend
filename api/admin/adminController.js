const Admin = require("./adminModel");
const { signJWT } = require("../../lib/signJWT");

module.exports = {
  index: async (req, res) => {
    const admin = await Admin.find().select("-password");
    res.json(admin);
  },
  authenticate: async (req, res) => {
    const admin = await Admin.findOne({
      username: req.body.username,
      password: req.body.password
    }).select("-password");
    if (admin) {
      const token = await signJWT(admin);
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
    const newAdmin = await Admin.create(req.body);
    res.json(newAdmin);
  }
};
