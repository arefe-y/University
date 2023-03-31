const { answerValidation } = require("../models/secure/AnswerValidation");
const Questions=require('../models/questions');

exports.validateAnswer = async (req, res, next) => {
  const questions = await Questions.findAll();
  const userRole=req.user.role;
  const errors=[];
  try {
    await answerValidation.validate(req.body);
    next();
  } catch (err) {
    console.log(err);
    err.errors.forEach((e) => {
      errors.push({
        name: e.path,
        message: e,
      });
    });

    return res.render("Student/questionnaire", {
      pageTitle: "پرسشنامه",
      path: "/dashboard/questionnaire",
      errors,
      userRole,
      questions
    });
  }
};
