module.exports = (sequelize, Sequelize) => {
  const ApplyDoctor = sequelize.define("applyDoctor", {
    doctorId: {
      type: Sequelize.INTEGER,
      references: {
        model: "doctors", // 'doctor' refers to table name
        key: "id", // 'id' refers to column name in fathers table
      },
    },
    phoneNo: {
      type: Sequelize.STRING,
    },
    specialistType: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return ApplyDoctor;
};
