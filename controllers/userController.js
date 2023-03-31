const User = require("../models/users");
const Students = require("../models/students");

const passport = require("passport");

exports.getRegisterPage = (req, res) => {
  res.render("register", {
    pageTitle: "ثبت نام کاربر جدید",
    path: "/register",
  });
};

exports.getLoginPage = (req, res) => {
  res.render("login", {
    pageTitle: "ورود به سایت",
    path: "/login",
    message:req.flash("success_msg"),
    error:req.flash("error")
  });
};

exports.createUser = async (req, res) => {
  const errors = [];

  try {
    const { fullname, email, password } = req.body;
    const role = 3;

    const user = await User.findOne({ where: { email } });
    if (user) {
      errors.push({ message: "کاربری با این ایمیل موجود است" });
      return res.render("register", {
        pageTitle: "ثبت نام کاربر جدید",
        path: "/register",
        errors,
      });
    }

    const newUser = await User.create({ fullname, email, password, role });
    await Students.create({ userId: newUser.userId });

    req.flash("success_msg", "ثبت نام موفقیت آمیز بود");
    res.redirect("/users/login");
  } catch (err) {
    console.log(err);
  }
};

exports.handleLogin = (req, res, next) => {
  passport.authenticate("local", {
    failureRedirect: "/users/login",
    failureFlash: true,
  })(req, res, next);
};

exports.logout = (req, res) => {
  res.session = null;
  req.logout();
  res.redirect("/users/login");
};

exports.rememberMe = async (req, res, next) => {
  const reqUser = req.body.email;
  const user = await User.findOne({ where: { email: reqUser } });
  if (req.body.remember) {
    req.session.cookie.originalMaxAge = 24 * 60 * 60 * 1000;
  } else {
    req.session.cookie.expire = null;
  }
  if (user.role == 1) {
    res.redirect("/dashboard/admin-dash");
  } else if (user.role == 3) {
    res.redirect("/dashboard/questionnaire");
  } else if (user.role == 2) {
    res.redirect("/dashboard/dash-expert");
  }
};
