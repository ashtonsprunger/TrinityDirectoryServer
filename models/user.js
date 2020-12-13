module.exports = function (sequelize, DateTypes) {
  const User = sequelize.define("user", {
    password: {
      type: DateTypes.STRING,
    },
    admin: {
      type: DateTypes.BOOLEAN,
    },
  });
  return User;
};
