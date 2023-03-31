const Answers = require("../models/studentAnswers");
const Questions = require("../models/questions");
const Students = require("../models/students");
const Experts = require("../models/experts");
const Users = require("../models/users");

const { Op } = require("sequelize");

exports.getAdminDashboard = async (req, res) => {
  const experts = await Users.findAll({
    attributes: ["fullname", "userId"],
    include: [
      {
        model: Experts,
        where: (Users.userId = Experts.userId),
        right: true,
      },
    ],
  });

  const students = await Users.findAll({
    attributes: ["fullname", "userId"],
    include: [
      {
        model: Students,
        required: true,
        attributes: ["expertId"],
        right: true,
        where: {
          expertId: {
            [Op.ne]: "null",
          },
        },
      },
    ],
  });

  const userRole = req.user.role;
  const userName = req.user.fullname;
  res.render("Admin/adminDashboard", {
    pageTitle: "داشبورد ادمین",
    path: "/dashboard/admin-dash",
    layout: "./layouts/dashLayout",
    userRole,
    experts,
    students,
    userName,
  });
};

exports.getAddQuestion = (req, res) => {
  const userRole = req.user.role;
  const userName = req.user.fullname;
  res.render("Admin/addQuestion", {
    pageTitle: "ایجاد سوال",
    path: "dashboard/add-question",
    layout: "./layouts/dashLayout",
    userRole,
    userName,
  });
};

exports.Questions = async (req, res) => {
  try {
    const question = req.body.question;

    await Questions.create({ question });
  } catch (err) {
    console.log(err);
  }
};

exports.getQuestionPage = async (req, res) => {
  try {
    const questions = await Questions.findAll();

    res.render("Student/questionnaire", {
      pageTitle: "پرسشنامه",
      path: "/dashboard/questionnaire",
      questions,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.showStudentAnswer = async (req, res) => {
  try {
    const studentAnswers = await Questions.findAll({
      attributes: ["question"],
      raw: true,
      include: {
        model: Answers,
        attributes: ["answer", "studentId"],

        right: true,
        where: {
          studentId: req.params.studentId,
        },
      },
    });

    if (!studentAnswers) {
      return res.redirect("/404");
    }

    const userName = req.user.fullname;
    const userRole = req.user.role;
    res.render("Admin/showStudentAnswers", {
      pageTitle: "پاسخنامه دانشجویان",
      path: "/dashboard/student-answer",
      layout: "./layouts/dashLayout",
      userName,
      userRole,
      studentAnswers,
    });
  } catch (err) {
    console.log(err);
  }
};
