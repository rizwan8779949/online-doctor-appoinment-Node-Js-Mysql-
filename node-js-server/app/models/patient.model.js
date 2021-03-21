module.exports = (sequelize, Sequelize) => {
  const Patient = sequelize.define("patient", {
    patientName: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    emailId: {
      type: Sequelize.STRING,
    },
    phoneNo: {
      type: Sequelize.STRING,
      unique: true,
    },
  });

  return Patient;
};
