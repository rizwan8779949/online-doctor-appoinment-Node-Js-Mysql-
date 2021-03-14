module.exports = (sequelize, Sequelize) => {
  const Patient = sequelize.define("patient", {
    patient_name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    email_id: {
      type: Sequelize.STRING,
    },
    phone_no: {
      type: Sequelize.STRING,
      unique: true,
      require: true,
    },
  });

  return Patient;
};
