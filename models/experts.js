const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");
const Users=require('./users');
const Students=require('./students');

const Experts = sequelize.define("Experts", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },

});

Users.hasOne(Experts,{foreignKey:"userId"});
Experts.belongsTo(Users,{foreignKey:"userId"})

Students.hasOne(Experts,{foreignKey:"studentId"})
Experts.belongsTo(Students,{foreignKey:"studentId"})



module.exports=Experts