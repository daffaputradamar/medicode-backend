const router = require("express").Router();
const controller = require("./obatController");
module.exports = router;

router.get("/", controller.index);
router.post("/", controller.store);
router.delete("/:id", controller.destroy);
