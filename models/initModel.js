const Admin = require("./admins");
const Experts = require("./experts");
const Questions = require("./questions");
const StudentAnswers = require("./studentAnswers");
const Students = require("./students");
const Users = require("./users");

exports.initModels=()=>{
    Users.hasOne(Students, {as:"student", foreignKey: "userId" });
    Students.belongsTo(Users, {as:"users", foreignKey: "userId" });

  
    Students.hasMany(StudentAnswers, { foreignKey: "studentId" });
    StudentAnswers.belongsTo(Students, { foreignKey: "studentId" });
  
    Questions.hasMany(StudentAnswers, { foreignKey: "answerId" });
    StudentAnswers.belongsTo(Questions, { foreignKey: "answerId" });
  
    Users.hasOne(Experts, { foreignKey: "userId" });
    Experts.belongsTo(Users, { foreignKey: "userId" });
  
    Experts.hasMany(Students, { foreignKey: "studentId" });
    Students.belongsTo(Experts, { foreignKey: "studentId" });
  
    Users.hasOne(Admin, { foreignKey: "userId" });
    Admin.belongsTo(Users, { foreignKey: "userId" });
}

