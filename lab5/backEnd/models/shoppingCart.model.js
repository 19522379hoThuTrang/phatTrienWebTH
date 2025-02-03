const { DataTypes } = require("sequelize");
const sequelize = require("../connection/database");
const User = require("./user.model");
const Product = require("./product.model");

const ShoppingCart = sequelize.define("ShoppingCart", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: "id" } },
    productId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Product, key: "id" } },
    quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
});

User.hasMany(ShoppingCart, { foreignKey: "userId" });
Product.hasMany(ShoppingCart, { foreignKey: "productId" });

module.exports = ShoppingCart;
