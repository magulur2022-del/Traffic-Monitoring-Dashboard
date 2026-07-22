const express = require("express");

const {
  getAllTraffic,
  getTrafficById,
  createTraffic,
  updateTraffic,
  deleteTraffic,
} = require("../controllers/trafficController");

const router = express.Router();

router
  .route("/")
  .get(getAllTraffic)
  .post(createTraffic);

router
  .route("/:id")
  .get(getTrafficById)
  .put(updateTraffic)
  .delete(deleteTraffic);

module.exports = router;