let express = require("express");
let router = express.Router();
let sequelize = require("../db");
let User = sequelize.import("../models/user.js");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

router.post("/", (request, response) => {
  User.findOne({ where: { admin: false } }).then(
    function (user) {
      bcrypt.compare(
        request.body.password,
        user.password,
        function (error, matches) {
          if (matches) {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
            response.json({
              token: token,
              admin: false,
            });
          } else {
            response.status(502).send({ error: "Incorrect password" });
          }
        }
      );
    },
    function (error) {
      response.status(501).send({ error: "Something else" });
    }
  );
});

router.post("/admin", (request, response) => {
  User.findOne({ where: { admin: true } }).then(
    function (user) {
      bcrypt.compare(
        request.body.password,
        user.password,
        function (error, matches) {
          if (matches) {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
            response.json({
              token: token,
              admin: true,
            });
          } else {
            response.status(502).send({ error: "Incorrect password" });
          }
        }
      );
    },
    function (error) {
      response.status(501).send({ error: "Something else" });
    }
  );
});

module.exports = router;
