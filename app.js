require("dotenv").config();
let express = require("express");
let app = express();
let sequelize = require("./db");
app.use(express.json());
app.use(require("./middleware/headers"));

sequelize.sync();

let mustBeUser = require("./middleware/mustBeUser");
let mustBeAdmin = require("./middleware/mustBeAdmin");

let User = require("./controllers/userController");
let Admin = require("./controllers/adminController");
let Login = require("./controllers/loginController");

sequelize.authenticate().then(
  function () {
    console.log("Connected to the Trinity Directory database!");
  },
  function (error) {
    console.log("Could not connect to the database:", error);
  }
);

app.use("/login", Login);
app.use(mustBeUser);
app.use("/user", User);
app.use(mustBeAdmin);
app.use("/admin", Admin);

app.listen(process.env.PORT, function () {
  console.log(`Trinity Directory is listening on port ${process.env.PORT}`);
});
