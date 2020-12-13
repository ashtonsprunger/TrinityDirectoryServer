let express = require("express");
let router = express.Router();
let sequelize = require("../db");
let Person = sequelize.import("../models/person.js");

router.get("/", (request, response) => {
  Person.findAll().then(
    function success(data) {
      response.json(data);
    },
    function error(error) {
      response.send(500, error.message);
    }
  );
});

module.exports = router;
