const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const trafficRoutes = require("./routes/trafficRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/traffic", trafficRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Traffic Monitoring Backend Running..."
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});