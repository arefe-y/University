const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Admins = sequelize.define("Admins", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Admins;
