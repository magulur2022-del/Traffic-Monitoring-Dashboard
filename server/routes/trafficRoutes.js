const express = require("express");

const {
  getAllTraffic,
  getTrafficById,
  createTraffic,
  updateTraffic,
  deleteTraffic,
} = require("../controllers/trafficController");

const router = express.Router();

router.get("/", getAllTraffic);

router.get("/:id", getTrafficById);

router.post("/", createTraffic);

router.put("/:id", updateTraffic);

router.delete("/:id", deleteTraffic);

module.exports = router;