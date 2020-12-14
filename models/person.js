module.exports = function (sequelize, DateTypes) {
  const Person = sequelize.define("person", {
    first: {
      type: DateTypes.STRING,
    },
    last: {
      type: DateTypes.STRING,
    },
    birth: {
      type: DateTypes.STRING,
    },
    year: {
      type: DateTypes.INTEGER,
    },
    gender: {
      type: DateTypes.STRING,
    },
    born: {
      type: DateTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  return Person;
  // console.log("*****SEQUELIZE*****", sequelize.define);
};
