const Questions = require("../models/questions");

exports.getAdminDashboard = (req, res) => {
  res.render("Admin/adminDashboard", {
    pageTitle: "داشبورد ادمین",
    path: "/dashboard/admin-dash",
    layout: "./layouts/dashLayout",
  });
};

exports.getAddQuestion = (req, res) => {
  res.render("Admin/addQuestion", {
    pageTitle: "ایجاد سوال",
    path: "dashboard/add-question",
    layout: "./layouts/dashLayout",
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

