module.exports = (sequelize, Sequelize) => {
  const Doctor = sequelize.define("doctor", {
    doctorName: {
      type: Sequelize.STRING,
    },
    workingTime: {
      type: Sequelize.STRING,
    },
    consultantFees: {
      type: Sequelize.INTEGER,
    },
  });

  return Doctor;
};
