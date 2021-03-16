module.exports = (sequelize, Sequelize) => {
  const Doctor = sequelize.define("doctor", {
    doctorName: {
      type: Sequelize.STRING,
    },
    emailId: {
      type: Sequelize.STRING,
      unique: true,
      require: true,
    },
    workingTime: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    specialistType: {
      type: Sequelize.STRING,
    },
    consultantFees: {
      type: Sequelize.INTEGER,
    },
  });

  return Doctor;
};
