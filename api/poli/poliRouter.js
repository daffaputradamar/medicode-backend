const router = require("express").Router();
const controller = require("./poliController");
module.exports = router;

router.get("/", controller.index);
router.post("/", controller.store);
