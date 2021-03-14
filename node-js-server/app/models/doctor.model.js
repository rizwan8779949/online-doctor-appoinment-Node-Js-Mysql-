module.exports = (sequelize, Sequelize) => {
  const Doctor = sequelize.define("doctor", {
    doctor_name: {
      type: Sequelize.STRING,
    },
    working_time: {
      type: Sequelize.STRING,
    },
    consultant_fees: {
      type: Sequelize.INTEGER,
    },
  });

  return Doctor;
};
