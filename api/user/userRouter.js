const router = require("express").Router();
const controller = require("./userController");
module.exports = router;

router.get("/", controller.index);
router.post("/", controller.store);
router.post("/login", controller.authenticate);
