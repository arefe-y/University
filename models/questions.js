const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Questions = sequelize.define("Questions", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  question:{
    type:DataTypes.STRING,
    allowNull:false
  },
});



module.exports = Questions;
