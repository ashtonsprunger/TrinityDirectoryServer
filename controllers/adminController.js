let express = require("express");
let router = express.Router();
let sequelize = require("../db");
let Person = sequelize.import("../models/person.js");

router.post("/", (request, response) => {
  Person.create({
    first: request.body.first,
    last: request.body.last,
    birth: request.body.birth,
    year: request.body.year,
    gender: request.body.gender,
    born: request.body.born,
  }).then(
    function success(person) {
      response.json({
        person,
      });
    },
    function error(error) {
      response.send(500, error);
    }
  );
});

module.exports = router;
