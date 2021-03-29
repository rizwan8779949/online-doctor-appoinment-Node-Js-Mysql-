module.exports = (app) => {
  const patient = require("../controllers/patient.controller.js");

  var router = require("express").Router();

  // Create a new Patient
  router.post("/create", patient.create);

  // Retrieve all Patients
  router.get("/allList", patient.findAll);

  // Retrieve a single Patient with id
  router.get("/profile:id", patient.findOne);

  // Retrieve a single Patient with id
  router.get("/findByPhoneNo", patient.findByPhoneNo);

  // Update a Patient with id
  router.put("/edit", patient.update);

  // Delete a Patient with id
  router.delete("/delete", patient.delete);

  app.use("/api/patient", router);
};
