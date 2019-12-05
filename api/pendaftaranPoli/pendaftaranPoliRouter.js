const router = require("express").Router();
const controller = require("./pendaftaranPoliController");
module.exports = router;

router.get("/", controller.index);
router.post("/", controller.store);
