const db = require("../models");
const Doctor = db.doctor;
const Op = db.Sequelize.Op;

// Create and Save a new Doctor
exports.create = (req, res) => {
  // Create a Doctor
  const doctor = {
    doctorName: req.body.doctorName,
    workingTime: req.body.workingTime,
    consultantFees: req.body.consultantFees,
  };

  // Save Doctor in the database
  Doctor.create(doctor)
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Doctor.",
      });
    });
};

// Retrieve all Doctors from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Doctor.findAll({ where: condition })
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving doctor.",
      });
    });
};

// Find a single Doctor with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Doctor.findByPk(id)
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Doctor with id=" + id,
      });
    });
};

// Update a Doctor by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Doctor.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Doctor was updated successfully.",
        });
      } else {
        res.status(400).send({
          message: `Cannot update Doctor with id=${id}. Maybe Doctor was not found or is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Doctor with id=" + id,
      });
    });
};

// Delete a Doctor with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Doctor.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Doctor was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete Doctor with id=${id}. Maybe Doctor was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Doctor with id=" + id,
      });
    });
};
