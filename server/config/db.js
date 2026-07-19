const mongoose = require("mongoose");
const dns = require("dns");

// Fix for Windows Node.js SRV DNS lookup issue
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected Successfully");
    console.log("🌐 Host:", conn.connection.host);
    console.log("📂 Database:", conn.connection.name);
  } catch (error) {
    console.error("❌ MongoDB Connection Error");
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;