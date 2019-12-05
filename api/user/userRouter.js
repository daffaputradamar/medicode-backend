const router = require("express").Router();
const controller = require("./userController");
module.exports = router;

router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", controller.store);
router.post("/login", controller.authenticate);
