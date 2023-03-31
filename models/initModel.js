const Admin = require("./admins");
const Experts = require("./experts");
const Questions = require("./questions");
const StudentAnswers = require("./studentAnswers");
const Students = require("./students");
const Users = require("./users");

exports.initModels = () => {
  Users.hasOne(Students, {foreignKey: "userId" });
  Students.belongsTo(Users, {foreignKey: "userId" });

  Students.hasMany(StudentAnswers, { foreignKey: "studentId" });
  StudentAnswers.belongsTo(Students, { foreignKey: "studentId" });

  Questions.hasMany(StudentAnswers, { foreignKey: "questionId" });
  StudentAnswers.belongsTo(Questions, { foreignKey: "questionId" });

  Users.hasOne(Experts, { foreignKey: "userId" });
  Experts.belongsTo(Users, { foreignKey: "userId" });

  Experts.hasMany(Students, { foreignKey: "userId" });
  Students.belongsTo(Experts, { foreignKey: "expertId" });

  Users.hasOne(Admin, { foreignKey: "userId" });
  Admin.belongsTo(Users, { foreignKey: "userId" });
};
