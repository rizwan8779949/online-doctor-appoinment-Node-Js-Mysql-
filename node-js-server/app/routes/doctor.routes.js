module.exports = (app) => {
  const doctor = require("../controllers/doctor.controller.js");

  var router = require("express").Router();

  // Create a new Doctor
  router.post("/create", doctor.create);

  // Retrieve all Doctors
  router.get("/allList", doctor.findAll);

  // Retrieve a single Doctor with id
  router.get("/profile:id", doctor.findOne);

  // Retrieve a single Doctor with id
  router.get("/findByPhoneNo", doctor.findOneByPhoneNo);

  // Update a Doctor with id
  router.put("/edit:id", doctor.update);

  // Delete a Doctor with id
  router.delete("/delete:id", doctor.delete);

  app.use("/api/doctors", router);
};
