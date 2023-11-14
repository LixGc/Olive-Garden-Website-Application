const { Menu, Category, User, Ingredient, sequelize } = require("../models");
class MenuController {
  static async menus(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const menus = await Menu.findAll({ include: [Category, Ingredient] }, { transaction: t });
      await t.commit();
      res.json(menus);
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
  static async menuById(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const menu = await Menu.findByPk(
        id,
        {
          include: [
            {
              model: User,
              attributes: ["id", "username", "email", "role", "phoneNumber", "address", "createdAt", "updatedAt"],
            },
            {
              model: Category,
            },
            {
              model: Ingredient,
            },
          ],
        },
        { transaction: t }
      );
      if (!menu) {
        throw { name: "Menu not found" };
      }
      await t.commit();
      res.json(menu);
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
}

module.exports = MenuController;
