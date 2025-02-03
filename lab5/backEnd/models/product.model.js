const { DataTypes } = require("sequelize");
const sequelize = require("../connection/database");

const Product = sequelize.define("Product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    manufacturingDate: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Product;
