const passport = require("passport");
const { Strategy } = require("passport-local");
const bcrypt = require("bcryptjs");

const User = require("../models/users");

passport.use(
  new Strategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      const user = await User.findOne({  where: { email}  });
      if (!user) {
        return done(null, false, {
          message: "کاربری با این ایمیل ثبت نشده است",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, {
          message: "نام کاربری یا کلمه عبور صحیح نمیباشد",
        });
      }
    } catch (err) {
      console.log(err);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id).then(function(user){
    if(user){
      done(null,user.get())
    }else{
      done(user.errors,null)
    }
  })
});
