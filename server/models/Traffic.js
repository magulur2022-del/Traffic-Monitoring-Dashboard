const mongoose = require("mongoose");

const trafficSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    vehicleCount: {
      type: Number,
      required: true,
    },
    congestionLevel: {
      type: String,
      required: true,
    },
    signal: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Traffic", trafficSchema);