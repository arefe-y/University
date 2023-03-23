const { Router } = require("express");

const adminController = require("../controllers/adminController");
const studentController = require("../controllers/studentController");

const router = new Router();

//AdminController

//GET /dashboard/questionnaire
router.get("/admin-dash", adminController.getAdminDashboard);

//GET /dashboard/add-question
router.get("/add-question", adminController.getAddQuestion);

//GET /dashboard/questionnaire
router.get("/questionnaire", adminController.getQuestionPage);

//POST /dashboard/questions
router.post("/add-question", adminController.Questions);

//StudentController

// POST / dashboard / questionnaire
router.post(
  "/questionnaire",
  studentController.answers,
  studentController.assignment
);

module.exports = router;
