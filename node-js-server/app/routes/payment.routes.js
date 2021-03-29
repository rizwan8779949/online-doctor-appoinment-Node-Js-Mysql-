module.exports = (app) => {
  const payment = require("../controllers/payment.controller.js");

  var router = require("express").Router();

  // Create a new Payment
  router.post("/create", payment.create);

  // Retrieve all Payments
  router.get("/allList", payment.findAll);

  // Retrieve a single Payment with id
  router.get("/profile:id", payment.findOne);

  app.use("/api/payment", router);
};
