import { useEffect, useState } from "react";
import {
  FaAmbulance,
  FaMapMarkerAlt,
  FaTrafficLight,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const EmergencyNotification = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Show alert after 5 seconds
    const showTimer = setTimeout(() => {
      setShowAlert(true);
    }, 5000);

    // Hide alert after 15 seconds
    const hideTimer = setTimeout(() => {
      setShowAlert(false);
    }, 15000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!showAlert) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-200">
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-500 text-3xl" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              No Emergency Alerts
            </h2>
            <p className="text-gray-500">
              All traffic signals are operating normally.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-red-300 overflow-hidden animate-pulse">
      {/* Header */}
      <div className="bg-red-600 text-white px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          🚨 Emergency Alert
        </h2>

        <span className="bg-red-500 px-3 py-1 rounded-full text-xs font-bold">
          LIVE
        </span>
      </div>

      {/* Body */}
      <div className="p-6 space-y-5">
        <div className="flex items-center gap-4">
          <div className="bg-red-100 p-4 rounded-full">
            <FaAmbulance className="text-red-600 text-3xl" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Ambulance Detected
            </h3>

            <p className="text-gray-500">
              Emergency vehicle approaching the intersection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <FaMapMarkerAlt />
              Location
            </p>

            <p className="font-semibold text-gray-800 mt-1">
              Brodipet Junction
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <FaClock />
              ETA
            </p>

            <p className="font-semibold text-orange-600 mt-1">
              18 Seconds
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <FaTrafficLight />
              Signal
            </p>

            <p className="font-semibold text-green-600 mt-1">
              Green Priority
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-gray-500 text-sm">
              Vehicle
            </p>

            <p className="font-semibold text-gray-800 mt-1">
              Ambulance
            </p>
          </div>
        </div>

        <div className="bg-green-100 border border-green-300 rounded-xl p-4 flex items-center justify-between">
          <span className="font-semibold text-green-700">
            🚦 Signal Priority Activated
          </span>

          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmergencyNotification;