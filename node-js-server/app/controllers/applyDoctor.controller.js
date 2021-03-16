const db = require("../models");
const ApplyDoctor = db.applyDoctor;
const Op = db.Sequelize.Op;

// Create and Save a new ApplyDoctor
exports.create = (req, res) => {
  // Save ApplyDoctor in the database
  ApplyDoctor.create(appoinment)
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ApplyDoctor.",
      });
    });
};

// Retrieve all ApplyDoctors from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  if (!req.query.page || !req.query.limit) {
    res.status(400).send({ message: "page and limit missing" });
    return;
  }
  var page = Number(req.query.page);
  var limit = Number(req.query.limit);
  var offset = page ? page * limit : 0;
  ApplyDoctor.findAndCountAll({ limit: limit, offset: offset })
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

// Find a single ApplyDoctor with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ApplyDoctor.findByPk(id)
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving ApplyDoctor with id=" + id,
      });
    });
};

// Update a ApplyDoctor by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  ApplyDoctor.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "ApplyDoctor was updated successfully.",
        });
      } else {
        res.status(400).send({
          message: `Cannot update ApplyDoctor with id=${id}. Maybe ApplyDoctor was not found or is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating ApplyDoctor with id=" + id,
      });
    });
};

// Delete a ApplyDoctor with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  ApplyDoctor.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "ApplyDoctor was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete ApplyDoctor with id=${id}. Maybe ApplyDoctor was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete ApplyDoctor with id=" + id,
      });
    });
};
