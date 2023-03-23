const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Experts = sequelize.define("Experts", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Experts;
