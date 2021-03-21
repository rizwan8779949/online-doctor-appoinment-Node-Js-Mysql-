const db = require("../models");
const Login = db.login;

// Create and Save a new Login
exports.create = (req, res) => {
  // Save Login in the database
  Login.create(req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Login.",
      });
    });
};

// Find a single Login with an phoneNo
exports.commonLogin = (req, res) => {
  console.log(req.body);
  if (!req.body.userName && !req.body.roleName && !req.body.password) {
    res.status(400).send({ message: "User Name ,Role,Password required !.." });
    return;
  }

  Login.findOne({
    where: {
      userName: req.body.userName,
      roleName: req.body.roleName,
      password: req.body.password,
    },
  })
    .then((data) => {
      console.log(data);
      if (data) res.status(200).send({ userDetails: data });
      else {
        res.status(404).send({ message: "User not Found" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Login with id=" + phoneNo,
      });
    });
};
