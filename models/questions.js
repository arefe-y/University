const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");
const StudentAnswer=require('./studentAnswers');

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

Questions.hasOne(StudentAnswer, { foreignKey: "answerId" });
StudentAnswer.belongsTo(Questions, { foreignKey: "answerId" });

module.exports = Questions;
