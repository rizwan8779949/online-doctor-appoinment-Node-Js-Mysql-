module.exports = (app) => {
  const appoinment = require("../controllers/appoinment.controller");

  var router = require("express").Router();

  // Create a new Appoinment
  router.post("/create", appoinment.create);

  // Retrieve all Appoinments
  router.get("/allList", appoinment.findAll);

  // Retrieve a single Appoinment with id
  router.get("/profile:id", appoinment.findOne);

  // Update a Appoinment with id
  router.put("/edit:id", appoinment.update);

  // Delete a Appoinment with id
  router.delete("/delete:id", appoinment.delete);

  app.use("/api/appoinments", router);
};
