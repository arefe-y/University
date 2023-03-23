const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Students = sequelize.define("Students", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Students;
