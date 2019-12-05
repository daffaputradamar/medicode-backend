const router = require("express").Router();
const controller = require("./pasienController");
module.exports = router;

router.get("/", controller.index);
router.get("/:id", controller.show);
router.get("/search/:barcode", controller.showBarcode);
router.post("/", controller.store);
