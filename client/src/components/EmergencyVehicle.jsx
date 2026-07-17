import { useState, useEffect } from "react";
import {
  FaAmbulance,
  FaTrafficLight,
  FaBell,
} from "react-icons/fa";

const EmergencyVehicle = () => {
  const [priority, setPriority] = useState(false);
  const [notification, setNotification] = useState(
    "🔍 AI Monitoring Traffic..."
  );

  useEffect(() => {
    const emergencies = [
      "🚑 Ambulance Detected - Green Signal Activated",
      "🚒 Fire Engine Detected - Green Signal Activated",
      "🚓 Police Vehicle Detected - Green Signal Activated",
    ];

    let emergencyIndex = 0;

    const startSimulation = () => {
      // AI Monitoring
      setPriority(false);
      setNotification("🔍 AI Monitoring Traffic...");

      // Detect Emergency after 5 seconds
      setTimeout(() => {
        setPriority(true);
        setNotification(emergencies[emergencyIndex]);

        // Emergency ends after 8 seconds
        setTimeout(() => {
          setPriority(false);
          setNotification(
            "✅ Emergency Cleared - Normal Traffic Restored"
          );

          emergencyIndex =
            (emergencyIndex + 1) % emergencies.length;

          // Start next simulation after 3 seconds
          setTimeout(() => {
            startSimulation();
          }, 3000);
        }, 8000);
      }, 5000);
    };

    startSimulation();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold">
            🚑 Emergency Vehicle Priority
          </h2>

          <p className="text-gray-600 mt-2">
            AI automatically detects Ambulance, Fire Engine and Police Vehicles.
          </p>
        </div>

        <FaAmbulance className="text-5xl text-red-600" />

      </div>

      <div
        className={`mt-6 rounded-xl p-4 flex items-center gap-3 ${
          priority
            ? "bg-red-50 border border-red-300"
            : "bg-blue-50 border border-blue-300"
        }`}
      >
        <FaBell
          className={`text-2xl ${
            priority ? "text-red-600" : "text-blue-600"
          }`}
        />

        <p
          className={`font-semibold ${
            priority ? "text-red-700" : "text-blue-700"
          }`}
        >
          {notification}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">

        <div>

          <h3 className="text-lg font-bold">
            Signal Status
          </h3>

          <p
            className={`mt-2 text-lg font-semibold ${
              priority
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {priority
              ? "Emergency Priority Enabled"
              : "Normal Traffic"}
          </p>

        </div>

        <FaTrafficLight
          className={`text-7xl transition-all duration-500 ${
            priority
              ? "text-green-500 animate-pulse"
              : "text-red-500"
          }`}
        />

      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div className="bg-red-50 rounded-xl p-4 text-center">
          <h3 className="font-bold text-red-600">
            Ambulance
          </h3>
        </div>

        <div className="bg-orange-50 rounded-xl p-4 text-center">
          <h3 className="font-bold text-orange-600">
            Fire Engine
          </h3>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <h3 className="font-bold text-blue-600">
            Police
          </h3>
        </div>

      </div>

    </div>
  );
};

export default EmergencyVehicle;