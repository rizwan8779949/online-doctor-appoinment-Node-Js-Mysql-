module.exports = (sequelize, Sequelize) => {
  const Login = sequelize.define("commonLogin", {
    userName: {
      type: Sequelize.STRING,
      unique: true,
    },
    roleName: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return Login;
};
