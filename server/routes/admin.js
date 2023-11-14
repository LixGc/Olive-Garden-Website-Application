const express = require("express");
const AdminController = require("../controllers/AdminControllers");
const authentication = require("../middlewares/authentication");

const router = express.Router();

router.post("/login", AdminController.login);
router.post("/register", authentication, AdminController.register);
router.get("/dataMenus", authentication, AdminController.menus);
router.get("/detailMenu/:id", authentication, AdminController.menuById);
router.post("/menus", authentication, AdminController.addMenu);
router.put("/menus/:id", authentication, AdminController.editMenu);
router.delete("/menus/:id", authentication, AdminController.deleteMenu);
router.get("/categories", authentication, AdminController.categories);
router.get("/categoryById/:id", authentication, AdminController.categoryById);
router.put("/categories/:id", authentication, AdminController.editCategory);
router.post("/categories", authentication, AdminController.addCategory);
router.delete("/categories/:id", authentication, AdminController.deleteCategory);
router.get("/admins", authentication, AdminController.admins);
router.post("/addAdmin", authentication, AdminController.addAdmin);

module.exports = router;
