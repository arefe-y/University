const express = require("express");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = require("./utils/database");
const { initModels } = require("./models/initModel");

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

//session
app.use(
  session({
    secret: "keyboard cat",
    store: new SequelizeStore({
      db: sequelize,
    }),
    resave: false,
    saveUninitialized: true,
  })
);
//passport
app.use(passport.initialize());
app.use(passport.session());

//flash
app.use(flash());

//Statics Folder
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/users", require("./routes/users"));
app.use("/dashboard", require("./routes/dashboard"));

//404
app.use(require("./controllers/errorController").get404);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    initModels();
    app.listen(3000, () => console.log("Server is running..."));
  })
  .catch((err) => {
    console.log(err);
  });
