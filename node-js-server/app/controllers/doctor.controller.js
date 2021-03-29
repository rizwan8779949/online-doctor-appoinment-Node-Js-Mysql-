const db = require("../models");
const Doctor = db.doctor;
const Op = db.Sequelize.Op;

// Create and Save a new Doctor
exports.create = (req, res) => {
  // Save Doctor in the database
  Doctor.create(req.body)
    .then((data) => {
      res.status(200).send(data);
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
  const phoneNo = req.query.phoneNo;
  var condition = phoneNo ? { phoneNo: { [Op.like]: `%${phoneNo}%` } } : null;

  Doctor.findAll({ where: condition })
    .then((data) => {
      res.status(200).send({ content: data });
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

// Find a single Patient with an phoneNo
exports.findOneByPhoneNo = (req, res) => {
  const phoneNo = req.query.phoneNo;

  Doctor.findOne({
    phoneNo: phoneNo,
  })
    .then((data) => {
      res.status(200).send({ userDetails: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Doctor with phoneNo=" + phoneNo,
      });
    });
};

// Update a Doctor by the id in the request
exports.update = (req, res) => {
  if (!req.query.id) {
    res.status(400).send({ message: "Doctor Id is required" });
  }
  const id = req.query.id;

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
  if (!req.query.id) {
    res.status(400).send({ message: "Doctor Id is required" });
  }
  const id = req.query.id;

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
