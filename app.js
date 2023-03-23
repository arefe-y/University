const express = require("express");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const passport = require("passport");
const session = require("express-session");
const connect=require('connect');
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = require("./utils/database");

//passport configuration
require("./utils/passport");

const app = express();

//Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//View Engine
app.use(expressLayout);
app.set("view engine", "ejs");
app.set("layout", "./layouts/mainLayout");

//Statics Folder
app.use(express.static(path.join(__dirname, "public")));



//session
app.use(session({
    secret:"keyboard cat",
    store:new SequelizeStore({
        db:sequelize
    }),
    resave:false,
    saveUninitialized:true,
    // cookie:{maxAge: 24 * 60 * 60 * 1000}
    // proxy:true
}))
//passport
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/users", require("./routes/users"));
app.use("/dashboard", require("./routes/dashboard"));

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(3000, () => console.log("Server is running..."));
  })
  .catch((err) => {
    console.log(err);
  });
