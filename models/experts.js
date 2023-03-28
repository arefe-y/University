const { DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../utils/database");

const Experts = sequelize.define("Experts", {
  userId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
  },
});

module.exports = Experts;
