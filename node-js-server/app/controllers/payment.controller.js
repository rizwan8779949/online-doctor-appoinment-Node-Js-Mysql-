const db = require("../models");
const Payment = db.payment;

// Create and Save a new Payment
exports.create = (req, res) => {
  // Save Payment in the database
  Payment.create(req.body)
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Payment.",
      });
    });
};

// Retrieve all Payments from the database.
exports.findAll = (req, res) => {
  Payment.findAll()
    .then((data) => {
      res.status(200).send({ content: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving patient.",
      });
    });
};

// Find a single Payment with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Payment.findByPk(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Payment with id=" + id,
      });
    });
};
