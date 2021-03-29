module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payments", {
    patientId: {
      type: Sequelize.INTEGER,
      references: {
        model: "patients", // 'patient' refers to table name
        key: "id", // 'id' refers to column name in fathers table
      },
    },
    dateOfPayment: {
      type: Sequelize.DATE,
    },
    amount: {
      type: Sequelize.INTEGER,
    },
    modeOfPayment: {
      type: Sequelize.STRING,
    },
  });

  return Payment;
};
