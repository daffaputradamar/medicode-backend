const router = require("express").Router();
const userRouter = require("../user/userRouter");
const adminRouter = require("../admin/adminRouter");
const poliRouter = require("../poli/poliRouter");
const pasienRouter = require("../pasien/pasienRouter");
const obatRouter = require("../obat/obatRouter");
const resepRouter = require("../resep/resepRouter");

router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/poli", poliRouter);
router.use("/pasien", pasienRouter);
router.use("/obat", obatRouter);
router.use("/resep", resepRouter);

module.exports = router;
