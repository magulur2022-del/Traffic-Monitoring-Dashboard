import { useState, useEffect } from "react";

import {
  FaTrafficLight,
  FaCar,
  FaClock,
  FaMapMarkerAlt,
  FaAmbulance,
  FaRobot,
} from "react-icons/fa";

const junctions = [
  "Brodipet",
  "Lodge Center",
  "Lakshmipuram",
  "NTR Bus Stand",
  "Kothapet",
  "Arundelpet",
];

const TrafficSignalStatus = () => {
  const [junction, setJunction] = useState(junctions[0]);
  const [signal, setSignal] = useState("GREEN");
  const [countdown, setCountdown] = useState(30);
  const [vehicles, setVehicles] = useState(120);
  const [density, setDensity] = useState("Medium");
  const [ambulance, setAmbulance] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          if (signal === "GREEN") {
            setSignal("YELLOW");
            return 5;
          }
          if (signal === "YELLOW") {
            setSignal("RED");
            return 30;
          }
          if (signal === "RED") {
            setSignal("GREEN");
            return 30;
          }
        }
        return prev - 1;
      });

      const totalVehicles = Math.floor(Math.random() * 220) + 30;
      setVehicles(totalVehicles);

      if (totalVehicles < 80) {
        setDensity("Low");
      } else if (totalVehicles < 150) {
        setDensity("Medium");
      } else {
        setDensity("Heavy");
      }

      setAmbulance(Math.random() > 0.9);
      setLastUpdated(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, [signal]);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">🚦 Live Traffic Signal Status</h2>
          <p className="text-gray-500">AI Powered Signal Monitoring</p>
        </div>
        <div className="bg-green-500 text-white px-4 py-2 rounded-full animate-pulse font-semibold">
          ● LIVE
        </div>
      </div>

      {/* Top Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-blue-50 rounded-xl p-5 shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Current Junction</p>
              <h3 className="text-2xl font-bold mt-2">{junction}</h3>
            </div>
            <FaMapMarkerAlt className="text-4xl text-blue-600" />
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-5 shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Vehicles</p>
              <h3 className="text-3xl font-bold mt-2">{vehicles}</h3>
            </div>
            <FaCar className="text-4xl text-green-600" />
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-5 shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Countdown</p>
              <h3 className="text-3xl font-bold mt-2">{countdown}s</h3>
            </div>
            <FaClock className="text-4xl text-yellow-600" />
          </div>
        </div>

        <div className="bg-red-50 rounded-xl p-5 shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Emergency</p>
              <h3 className="text-xl font-bold mt-2">
                {ambulance ? "Detected" : "Normal"}
              </h3>
            </div>
            <FaAmbulance className="text-4xl text-red-600" />
          </div>
        </div>
      </div>

      {/* Signal Controller */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Smart Traffic Light
          </h3>

          <div className="flex flex-col items-center">
            {/* RED */}
            <div
              className={`w-20 h-20 rounded-full mb-5 border-4 border-gray-700 transition-all duration-500 ${
                signal === "RED"
                  ? "bg-red-500 shadow-[0_0_40px_#ef4444]"
                  : "bg-gray-700"
              }`}
            />

            {/* YELLOW */}
            <div
              className={`w-20 h-20 rounded-full mb-5 border-4 border-gray-700 transition-all duration-500 ${
                signal === "YELLOW"
                  ? "bg-yellow-400 shadow-[0_0_40px_#facc15]"
                  : "bg-gray-700"
              }`}
            />

            {/* GREEN */}
            <div
              className={`w-20 h-20 rounded-full border-4 border-gray-700 transition-all duration-500 ${
                signal === "GREEN"
                  ? "bg-green-500 shadow-[0_0_40px_#22c55e]"
                  : "bg-gray-700"
              }`}
            />

            <h2 className="mt-8 text-3xl font-bold">{signal}</h2>
            <p className="text-gray-300 mt-2">
              Remaining : {countdown} sec
            </p>
          </div>
        </div>

        {/* AI Traffic Analysis */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FaRobot className="text-3xl" />
              <h3 className="text-2xl font-bold">AI Traffic Analysis</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 rounded-xl p-4">
                <p className="text-blue-100 text-sm">Traffic Density</p>
                <h2
                  className={`text-3xl font-bold mt-2 ${
                    density === "Low"
                      ? "text-green-200"
                      : density === "Medium"
                      ? "text-yellow-200"
                      : "text-red-200"
                  }`}
                >
                  {density}
                </h2>
              </div>

              <div className="bg-white/20 rounded-xl p-4">
                <p className="text-blue-100 text-sm">AI Accuracy</p>
                <h2 className="text-3xl font-bold mt-2">98.7%</h2>
              </div>
            </div>
          </div>

          {/* Junction Selector */}
          <div className="bg-white rounded-2xl shadow-lg border p-6">
            <h3 className="text-xl font-bold mb-4">Select Junction</h3>
            <select
              value={junction}
              onChange={(e) => setJunction(e.target.value)}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              {junctions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Live Status */}
          <div className="bg-white rounded-2xl shadow-lg border p-6">
            <h3 className="text-xl font-bold mb-4">Live System Status</h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Current Signal</span>
                <span
                  className={`font-bold ${
                    signal === "GREEN"
                      ? "text-green-600"
                      : signal === "YELLOW"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {signal}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Last Updated</span>
                <span className="font-semibold">{lastUpdated}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Emergency Vehicle</span>
                <span
                  className={`font-bold ${
                    ambulance ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {ambulance ? "Detected 🚑" : "Not Detected"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">AI Recommendation</span>
                <span className="font-bold text-blue-600">
                  {density === "Heavy"
                    ? "Increase Green Time"
                    : density === "Medium"
                    ? "Normal Cycle"
                    : "Reduce Green Time"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Live Event Log */}
        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h3 className="text-2xl font-bold mb-5">📝 Live Event Log</h3>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
              <span>🚦 Signal changed to {signal}</span>
              <span className="text-gray-500">{lastUpdated}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>🚗 Vehicle Count Updated</span>
              <span>{vehicles} Vehicles</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>🤖 AI Traffic Analysis</span>
              <span>{density}</span>
            </div>

            <div className="flex justify-between">
              <span>🚑 Emergency Status</span>
              <span
                className={`font-bold ${
                  ambulance ? "text-red-600" : "text-green-600"
                }`}
              >
                {ambulance ? "Detected" : "Normal"}
              </span>
            </div>
          </div>
        </div>

        {/* System Summary */}
        <div className="bg-gradient-to-r from-blue-700 to-cyan-500 rounded-2xl p-6 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-6">📊 System Summary</h3>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white/20 rounded-xl p-5 text-center">
              <h2 className="text-4xl font-bold">24</h2>
              <p>Total Signals</p>
            </div>

            <div className="bg-white/20 rounded-xl p-5 text-center">
              <h2 className="text-4xl font-bold">18</h2>
              <p>Online Signals</p>
            </div>

            <div className="bg-white/20 rounded-xl p-5 text-center">
              <h2 className="text-4xl font-bold">99.8%</h2>
              <p>System Health</p>
            </div>

            <div className="bg-white/20 rounded-xl p-5 text-center">
              <h2 className="text-4xl font-bold">96%</h2>
              <p>AI Efficiency</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 bg-gray-900 rounded-2xl p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">
              🚦 Smart Traffic Signal Control Center
            </h2>
            <p className="text-gray-300 mt-2">
              AI-powered real-time traffic signal monitoring for Guntur Smart
              City.
            </p>
          </div>

          <div className="text-right">
            <p className="text-gray-300">Last Updated</p>
            <h3 className="text-2xl font-bold text-green-400">
              {lastUpdated}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficSignalStatus;