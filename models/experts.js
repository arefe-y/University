const { DataTypes,Sequelize } = require("sequelize");

const sequelize = require("../utils/database");

const Experts = sequelize.define("Experts", {
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

module.exports = Experts;
