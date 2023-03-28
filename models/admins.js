const { DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../utils/database");

const Admins = sequelize.define("Admins", {
  userId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
  },
});

module.exports = Admins;
