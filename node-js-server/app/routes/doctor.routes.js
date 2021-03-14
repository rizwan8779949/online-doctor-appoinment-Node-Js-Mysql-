module.exports = (app) => {
  const doctor = require("../controllers/doctor.controller.js");

  var router = require("express").Router();

  // Create a new Patient
  router.post("/create", doctor.create);

  // Retrieve all Patients
  router.get("/allList", doctor.findAll);

  // Retrieve a single Patient with id
  router.get("/profile:id", doctor.findOne);

  // Update a Patient with id
  router.put("/edit:id", doctor.update);

  // Delete a Patient with id
  router.delete("/delete:id", doctor.delete);

  app.use("/api/doctors", router);
};
