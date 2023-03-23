const { DataTypes,Sequelize } = require("sequelize");

const sequelize = require("../utils/database");

const Questions = sequelize.define("Questions", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    // allowNull: false,
    defaultValue:Sequelize.UUIDV4
  },
  question:{
    type:DataTypes.STRING,
    allowNull:false
  },
});



module.exports = Questions;
