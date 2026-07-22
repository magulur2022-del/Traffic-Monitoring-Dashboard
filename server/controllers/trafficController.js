const mongoose = require("mongoose");
const Traffic = require("../models/Traffic");

// Get All Traffic Records
const getAllTraffic = async (req, res) => {
  try {
    const traffic = await Traffic.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: traffic.length,
      data: traffic,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Traffic Record by ID
const getTrafficById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Traffic ID",
      });
    }

    const traffic = await Traffic.findById(req.params.id);

    if (!traffic) {
      return res.status(404).json({
        success: false,
        message: "Traffic record not found",
      });
    }

    res.status(200).json({
      success: true,
      data: traffic,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create Traffic Record(s)
const createTraffic = async (req, res) => {
  try {
    let traffic;

    if (Array.isArray(req.body)) {
      traffic = await Traffic.insertMany(req.body);
    } else {
      traffic = await Traffic.create(req.body);
    }

    res.status(201).json({
      success: true,
      message: "Traffic record created successfully",
      data: traffic,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Traffic Record
const updateTraffic = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Traffic ID",
      });
    }

    const traffic = await Traffic.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!traffic) {
      return res.status(404).json({
        success: false,
        message: "Traffic record not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Traffic record updated successfully",
      data: traffic,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Traffic Record
const deleteTraffic = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Traffic ID",
      });
    }

    const traffic = await Traffic.findByIdAndDelete(req.params.id);

    if (!traffic) {
      return res.status(404).json({
        success: false,
        message: "Traffic record not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Traffic record deleted successfully",
      data: traffic,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllTraffic,
  getTrafficById,
  createTraffic,
  updateTraffic,
  deleteTraffic,
};