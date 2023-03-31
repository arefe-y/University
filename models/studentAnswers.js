const { DataTypes,Sequelize } = require("sequelize");

const sequelize = require("../utils/database");

const StudentAnswers = sequelize.define("StudentAnswers", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    // allowNull: false,
    defaultValue:Sequelize.UUIDV4
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  questionId:{
    type: Sequelize.UUID,
    allowNull:false,
  },
  studentId:{
    type: Sequelize.UUID,
    allowNull:false
  }
});




module.exports = StudentAnswers;
