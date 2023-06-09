const Questions = require("../models/questions");
const Answers = require("../models/studentAnswers");
const Users = require("../models/users");
const Students = require("../models/students");

exports.answers = async (req, res, next) => {
  try {
    const keys = Object.keys(req.body);
    const value = Object.values(req.body);
    const length = Object.values(req.body).length;
    const user = req.user.userId;

    const questions = await Questions.findAll();

    for (let i = 0; i < questions.length; i++) {
      for (let y = 0; y <= length; y++) {
        if (questions[i].id == keys[y]) {
          await Answers.create({
            answer: value[y],
            questionId: questions[i].id,
            studentId: user,
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

exports.assignment = async (req, res) => {
  try {
    const experts = await Users.findAll({ where: { role: 2 } });
    const assignExpert = Math.floor(Math.random() * experts.length);
    const { fullname, userId } = experts[assignExpert];

    await Students.update(
      { expertId: userId },
      { where: { userId: req.user.userId } }
    );

    res.render("Student/assignExpert", {
      pageTitle: "انتساب کارشناس",
      path: "/dashboard/assignment",
      fullname,
    });
  } catch (err) {
    console.log(err);
  }
};
