const Students = require("../models/students");
const Users = require("../models/users");

exports.getStudent = async (req, res) => {
  try {
    const userRole = req.user.role;
    const userName = req.user.fullname;
    const students = await Users.findAll({
      include: [
        {
          model: Students,
          attributes: ["userId"],
          where: { expertId: req.user.userId },
        },
      ],
    });

    let studentInfo = [];

    students.forEach((student) => {
      studentInfo.push(student.fullname);
    });

    res.render("Expert/dashExpert", {
      pageTitle: "داشبورد کارشناس",
      path: "/dashboard/dash-expert",
      layout: "./layouts/dashLayout",
      studentInfo,
      userRole,
      userName,
    });
  } catch (err) {
    console.log(err);
  }
};
