const { DataTypes } = require("sequelize");
const sequelize = require("../connection/database");

const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullName: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    registrationDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = User;
