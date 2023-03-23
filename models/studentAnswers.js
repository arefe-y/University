const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");
const Students = require("./students");

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


Students.hasMany(StudentAnswers, { foreignKey: "studentId" });
StudentAnswers.belongsTo(Students, { foreignKey: "studentId" });

module.exports = StudentAnswers;
