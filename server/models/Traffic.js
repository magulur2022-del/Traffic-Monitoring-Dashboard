const mongoose = require("mongoose");

const trafficSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Location name is required"],
      unique: true,
      trim: true,
      minlength: [3, "Location name must be at least 3 characters"],
      maxlength: [100, "Location name cannot exceed 100 characters"],
    },

    latitude: {
      type: Number,
      required: [true, "Latitude is required"],
      min: [-90, "Latitude must be greater than or equal to -90"],
      max: [90, "Latitude must be less than or equal to 90"],
    },

    longitude: {
      type: Number,
      required: [true, "Longitude is required"],
      min: [-180, "Longitude must be greater than or equal to -180"],
      max: [180, "Longitude must be less than or equal to 180"],
    },

    vehicleCount: {
      type: Number,
      required: [true, "Vehicle count is required"],
      min: [0, "Vehicle count cannot be negative"],
      default: 0,
    },

    congestionLevel: {
      type: String,
      enum: {
        values: ["Low", "Moderate", "Heavy"],
        message: "Congestion level must be Low, Moderate or Heavy",
      },
      default: "Low",
      required: true,
    },

    signal: {
      type: String,
      enum: {
        values: ["Red", "Yellow", "Green"],
        message: "Signal must be Red, Yellow or Green",
      },
      default: "Red",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Traffic", trafficSchema);