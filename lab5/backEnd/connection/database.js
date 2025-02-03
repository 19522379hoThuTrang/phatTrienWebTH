const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("shopping_cart", "root", null, {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;
