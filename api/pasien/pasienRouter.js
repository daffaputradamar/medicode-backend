const router = require("express").Router();
const controller = require("./pasienController");
module.exports = router;

router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", controller.store);
