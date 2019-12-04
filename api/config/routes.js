const router = require("express").Router();
const userRouter = require("../user/userRouter");
const adminRouter = require("../admin/adminRouter");
const poliRouter = require("../poli/poliRouter");

router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/poli", poliRouter);

module.exports = router;
