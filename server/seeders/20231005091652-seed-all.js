"use strict";

const { hashPassword } = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Felix",
          email: "felix@gmail.com",
          password: hashPassword("12345"),
          role: "admin",
          phoneNumber: "0812621231",
          address: "Jln. Kebayoran Lama 123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    const categories = require("../data/categories.json");
    const dataCategories = categories.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Categories", dataCategories, {});

    const menus = require("../data/menus.json");
    const dataMenu = menus.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Menus", dataMenu, {});

    const ingredients = require("../data/ingredients.json");
    const dataIngredient = ingredients.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Ingredients", dataIngredient, {});
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Categories", null, {});
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Menus", null, {});
    await queryInterface.bulkDelete("Ingredients", null, {});
  },
};
