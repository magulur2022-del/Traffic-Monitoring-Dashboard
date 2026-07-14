import { useState } from "react";
import { FaAmbulance, FaTrafficLight } from "react-icons/fa";

const EmergencyVehicle = () => {
  const [priority, setPriority] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          🚑 Emergency Vehicle Priority
        </h2>

        <FaAmbulance className="text-4xl text-red-600" />

      </div>

      <p className="text-gray-600 mt-3">
        Give priority to Ambulance, Fire Engine and Police Vehicles.
      </p>

      <div className="mt-8 flex items-center justify-between">

        <div>

          <h3 className="font-bold text-lg">
            Signal Status
          </h3>

          <p
            className={`mt-2 font-semibold ${
              priority ? "text-green-600" : "text-red-600"
            }`}
          >
            {priority
              ? "Emergency Priority Enabled"
              : "Normal Traffic"}
          </p>

        </div>

        <FaTrafficLight
          className={`text-6xl ${
            priority ? "text-green-500" : "text-red-500"
          }`}
        />

      </div>

      <button
        onClick={() => setPriority(!priority)}
        className={`mt-8 px-6 py-3 rounded-xl text-white font-bold ${
          priority
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {priority
          ? "Disable Emergency Mode"
          : "Enable Emergency Mode"}
      </button>

    </div>
  );
};

export default EmergencyVehicle;