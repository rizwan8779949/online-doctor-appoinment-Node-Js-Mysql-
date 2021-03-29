const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.patient = require("./patient.model")(sequelize, Sequelize);
db.doctor = require("./doctor.model")(sequelize, Sequelize);
db.appoinment = require("./appoinment.model")(sequelize, Sequelize);
db.applyDoctor = require("./applyDoctor.model")(sequelize, Sequelize);
db.login = require("./login.model")(sequelize, Sequelize);
db.payment = require("./payment.model")(sequelize, Sequelize);

module.exports = db;
