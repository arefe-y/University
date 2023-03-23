const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const StudentAnswers = sequelize.define("StudentAnswers", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});




module.exports = StudentAnswers;
