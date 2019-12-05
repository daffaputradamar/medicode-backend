const router = require("express").Router();
const controller = require("./resepController");
module.exports = router;

router.get("/", controller.index);
router.post("/", controller.store);
router.put("/bayar", controller.update);
