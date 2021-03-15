const db = require("../models");
const Patient = db.patient;
const Op = db.Sequelize.Op;

// Create and Save a new Patient
exports.create = (req, res) => {
  // Validate request
  if (!req.body.phoneNo) {
    res.status(400).send({
      message: "Phone can not be empty",
    });
    return;
  }
  // Create a Patient
  const patient = {
    patientName: req.body.patientName,
    address: req.body.address,
    emailId: req.body.emailId,
    phoneNo: req.body.phoneNo,
  };

  // Save Patient in the database
  Patient.create(patient)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Patient.",
      });
    });
};

// Retrieve all Patients from the database.
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  if (!req.query.page || !req.query.limit) {
    res.status(400).send({ message: "page and limit missing" });
    return;
  }
  var page = Number(req.query.page);
  var limit = Number(req.query.limit);
  var offset = page ? page * limit : 0;
  Patient.findAndCountAll({ limit: limit, offset: offset })
    .then((data) => {
      res.status(200).send({ content: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving patient.",
      });
    });
};

// Find a single Patient with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Patient.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Patient with id=" + id,
      });
    });
};

// Update a Patient by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Patient.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Patient was updated successfully.",
        });
      } else {
        res.status(400).send({
          message: `Cannot update Patient with id=${id}. Maybe Patient was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Patient with id=" + id,
      });
    });
};

// Delete a Patient with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Patient.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Patient was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete Patient with id=${id}. Maybe Patient was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Patient with id=" + id,
      });
    });
};
