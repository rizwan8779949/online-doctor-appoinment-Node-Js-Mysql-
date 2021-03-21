module.exports = (sequelize, Sequelize) => {
  const Doctor = sequelize.define("doctor", {
    doctorName: {
      type: Sequelize.STRING,
    },
    emailId: {
      type: Sequelize.STRING,
    },
    phoneNo: {
      type: Sequelize.STRING,
      unique: true,
    },
    address: {
      type: Sequelize.STRING,
    },
    workingTime: {
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
