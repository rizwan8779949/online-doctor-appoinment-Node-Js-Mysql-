module.exports = (app) => {
  const applyDoctor = require("../controllers/applyDoctor.controller");

  var router = require("express").Router();

  // Create a new ApplyDoctor
  router.post("/create", applyDoctor.create);

  // Retrieve all ApplyDoctors
  router.get("/allList", applyDoctor.findAll);

  // Retrieve a single ApplyDoctor with id
  router.get("/profile:id", applyDoctor.findOne);

  // Update a ApplyDoctor with id
  router.put("/edit:id", applyDoctor.update);

  // Delete a ApplyDoctor with id
  router.delete("/delete:id", applyDoctor.delete);

  app.use("/api/applyDoctors", router);
};
