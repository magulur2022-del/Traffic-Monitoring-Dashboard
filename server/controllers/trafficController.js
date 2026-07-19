const Traffic = require("../models/Traffic");

const getAllTraffic = async (req, res) => {
  try {
    const traffic = await Traffic.find();
    res.status(200).json(traffic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTrafficById = async (req, res) => {
  try {
    const traffic = await Traffic.findById(req.params.id);

    if (!traffic) {
      return res.status(404).json({ message: "Traffic record not found" });
    }

    res.status(200).json(traffic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTraffic = async (req, res) => {
  try {
    let traffic;

    if (Array.isArray(req.body)) {
      // Multiple records
      traffic = await Traffic.insertMany(req.body);
    } else {
      // Single record
      traffic = await Traffic.create(req.body);
    }

    res.status(201).json(traffic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTraffic = async (req, res) => {
  try {
    const traffic = await Traffic.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!traffic) {
      return res.status(404).json({ message: "Traffic record not found" });
    }

    res.status(200).json(traffic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTraffic = async (req, res) => {
  try {
    const traffic = await Traffic.findByIdAndDelete(req.params.id);

    if (!traffic) {
      return res.status(404).json({ message: "Traffic record not found" });
    }

    res.status(200).json({
      message: "Traffic record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTraffic,
  getTrafficById,
  createTraffic,
  updateTraffic,
  deleteTraffic,
};

