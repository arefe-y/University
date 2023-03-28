const { DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../utils/database");

const Students = sequelize.define("Students", {
  userId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
  },
  expertId:{
    type:Sequelize.UUID,
  }
});

module.exports = Students;
