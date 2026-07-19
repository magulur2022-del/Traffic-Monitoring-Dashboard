const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const trafficRoutes = require("./routes/trafficRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/traffic", trafficRoutes);

app.get("/", (req, res) => {
  res.send("Traffic Monitoring Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});