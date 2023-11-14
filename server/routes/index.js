const express = require("express");
const router = express.Router();

router.use(require("./admin"));
router.use(require("./menus"));

module.exports = router;
