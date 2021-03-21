module.exports = (app) => {
  const login = require("../controllers/login.controller");

  var router = require("express").Router();

  // Create a new Login
  router.post("/create", login.create);
  router.post("/login", login.commonLogin);

  app.use("/api/commonLogin", router);
};
