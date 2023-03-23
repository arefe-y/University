const { DataTypes,Sequelize } = require("sequelize");

const sequelize = require("../utils/database");

const Students = sequelize.define("Students", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    // allowNull: false,
    defaultValue:Sequelize.UUIDV4
  },
  userId:{
    type: Sequelize.UUID,
    allowNull:false
  }
});

module.exports = Students;
