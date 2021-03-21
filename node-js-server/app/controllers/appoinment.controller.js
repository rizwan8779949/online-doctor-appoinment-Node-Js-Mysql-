const db = require("../models");
const Appoinment = db.appoinment;
const Op = db.Sequelize.Op;

// Create and Save a new Appoinment
exports.create = (req, res) => {
  // Save Appoinment in the database
  Appoinment.create(req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Appoinment.",
      });
    });
};

// Retrieve all Appoinments from the database.
exports.findAll = (req, res) => {
  const status = req.query.status;
  var condition = status ? { status: { [Op.like]: `%${status}%` } } : null;

  Appoinment.findAll({ where: condition })
    .then((data) => {
      res.status(200).send({ content: data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving appoinment.",
      });
    });
};

exports.findAllByDoctorId = (req, res) => {
  const phoneNo = req.query.status;

  Appoinment.findAll({
    phoneNo: phoneNo,
  })
    .then((data) => {
      res.status(200).send({ content: data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving appoinment.",
      });
    });
};
exports.findAllByPatientId = (req, res) => {
  const phoneNo = req.query.status;

  Appoinment.findAll({
    phoneNo: phoneNo,
  })
    .then((data) => {
      res.status(200).send({ content: data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving appoinment.",
      });
    });
};
// Find a single Appoinment with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Appoinment.findByPk(id)
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Appoinment with id=" + id,
      });
    });
};

// Update a Appoinment by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Appoinment.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Appoinment was updated successfully.",
        });
      } else {
        res.status(400).send({
          message: `Cannot update Appoinment with id=${id}. Maybe Appoinment was not found or is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Appoinment with id=" + id,
      });
    });
};

// Delete a Appoinment with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Appoinment.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Appoinment was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete Appoinment with id=${id}. Maybe Appoinment was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Appoinment with id=" + id,
      });
    });
};
