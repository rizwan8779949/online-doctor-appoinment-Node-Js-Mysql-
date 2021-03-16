module.exports = (sequelize, Sequelize) => {
  const Appoinment = sequelize.define("appoinment", {
    customerId: {
      type: Sequelize.INTEGER,
      references: {
        model: "patients", // 'patient' refers to table name
        key: "id", // 'id' refers to column name in fathers table
      },
    },
    doctorId: {
      type: Sequelize.INTEGER,
      references: {
        model: "doctors", // 'doctor' refers to table name
        key: "id", // 'id' refers to column name in fathers table
      },
    },
    dateOfApply: {
      type: Sequelize.DATE,
    },
    status: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    appoinmentDateAndTime: {
      type: Sequelize.DATE,
    },
  });

  return Appoinment;
};
