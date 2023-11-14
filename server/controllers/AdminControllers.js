const { User, Menu, Category, Ingredient, sequelize } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
class AdminController {
  static async login(req, res, next) {
    try {
      const result = await sequelize.transaction(async (t) => {
        const { email, password } = req.body;
        if (!email) {
          throw { name: "invalid_email_or_password" };
        }
        if (!password) {
          throw { name: "invalid_email_or_password" };
        }
        const user = await User.findOne({ where: { email } }, { transaction: t });
        if (!user) {
          throw { name: `not_valid` };
        }
        const isPasswordValid = comparePassword(password, user.password);
        if (!isPasswordValid) {
          throw { name: `not_valid` };
        }
        const access_token = signToken({ id: user.id });
        res.status(200).json({ access_token });
        return user;
      });
    } catch (error) {
      next(error);
    }
  }
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const t = await sequelize.transaction();

      await User.create({ username, email, password, role: "admin", phoneNumber, address }, { transaction: t });
      await t.commit();
      res.status(201).json({ message: `User with email ${email} succesfully created!` });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
  static async menus(req, res, next) {
    try {
      const t = await sequelize.transaction();
      let menus = await Menu.findAll(
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
      await t.commit();
      res.status(200).json(menus);
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
  static async menuById(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const menu = await Menu.findByPk(id, { include: [Category, Ingredient] }, { transaction: t });
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
  static async addMenu(req, res, next) {
    try {
      const result = await sequelize.transaction(async (t) => {
        const { name, description, price, imgUrl, CategoryId, ingredientName } = req.body;
        const ingredients = ingredientName;
        const menu = await Menu.create({ name, description, price, imgUrl, CategoryId, UserId: req.user.id }, { transaction: t });
        const dataIngredients = ingredients.split(",").map((ingredient) => ({ name: ingredient.trim(), MenuId: menu.id }));
        await Ingredient.bulkCreate(dataIngredients, { transaction: t });
        res.status(201).json({ message: "Menu successfully created" });
        return menu;
      });
    } catch (error) {
      next(error);
    }
  }

  static async editMenu(req, res, next) {
    try {
      const result = await sequelize.transaction(async (t) => {
        const { id } = req.params;
        const menu = await Menu.findByPk(id, { transaction: t });
        if (!menu) {
          throw { name: "Menu not found" };
        }
        const { name, description, price, imgUrl, CategoryId } = req.body;
        await Menu.update({ name, description, price, imgUrl, CategoryId }, { where: { id } }, { transaction: t });
        return menu;
      });
      res.json({ message: "Menu successfully updated" });
    } catch (error) {
      next(error);
    }
  }
  static async deleteMenu(req, res, next) {
    try {
      const result = await sequelize.transaction(async (t) => {
        const { id } = req.params;
        const menu = await Menu.findByPk(id, { transaction: t });
        if (!menu) {
          throw { name: "Menu not found" };
        }
        await Menu.destroy({ where: { id } }, { transaction: t });
        return menu;
      });
      res.json({ message: "Menu successfully deleted!" });
    } catch (error) {
      next(error);
    }
  }
  static async categories(req, res, next) {
    try {
      let categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }
  static async categoryById(req, res, next) {
    try {
      const { id } = req.params;
      let category = await Category.findByPk(id);
      if (!category) {
        throw { name: "Category not found" };
      }
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
  static async editCategory(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      let categories = await Category.findByPk(id);
      if (!categories) {
        throw "Category not found";
      }
      await Category.update({ name }, { where: { id } });
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }
  static async addCategory(req, res, next) {
    try {
      const result = await sequelize.transaction(async (t) => {
        const { name } = req.body;
        const category = await Category.create({ name }, { transaction: t });
        return category;
      });
      res.status(201).json({ message: "Category successfully created!" });
    } catch (error) {
      next(error);
    }
  }
  static async deleteCategory(req, res, next) {
    try {
      const result = await sequelize.transaction(async (t) => {
        const { id } = req.params;
        let categories = await Category.findByPk(id);
        if (!categories) {
          throw { name: "Category not found" };
        }
        const category = await Category.destroy({ where: { id } }, { transaction: t });
        return category;
      });
      res.status(200).json({ message: "Category successfully deleted!" });
    } catch (error) {
      next(error);
    }
  }
  static async admins(req, res, next) {
    try {
      const admins = await User.findAll({
        attributes: { exclude: ["password"] },
      });
      res.json(admins);
    } catch (error) {
      next(error);
    }
  }
  static async addAdmin(req, res, next) {
    try {
      const { email, password, username, phoneNumber, address } = req.body;
      const result = await sequelize.transaction(async (t) => {
        const admin = await User.create({ email, password, username, phoneNumber, address, role: "admin" }, { transaction: t });
        return admin;
      });
      res.status(201).json({ message: "Admin successfully added" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AdminController;
