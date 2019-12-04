const router = require("express").Router();
const userRouter = require("../user/userRouter");
const adminRouter = require("../admin/adminRouter");

router.use("/user", userRouter);
router.use("/admin", adminRouter);

module.exports = router;
