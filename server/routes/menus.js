const express = require("express");

const MenuController = require("../controllers/MenuControllers");

const router = express.Router();

router.get("/menus", MenuController.menus);
router.get("/menus/:id", MenuController.menuById);

module.exports = router;
