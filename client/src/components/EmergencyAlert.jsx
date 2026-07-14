import { useState } from "react";
import {
  FaAmbulance,
  FaFireExtinguisher,
  FaShieldAlt,
  FaTrafficLight,
} from "react-icons/fa";

const emergencyVehicles = [
  {
    id: 1,
    type: "Ambulance",
    location: "Brodipet Junction",
    signal: "Red",
    priority: "High",
  },
  {
    id: 2,
    type: "Fire Truck",
    location: "NTR Bus Stand",
    signal: "Yellow",
    priority: "High",
  },
  {
    id: 3,
    type: "Police Vehicle",
    location: "Lakshmipuram",
    signal: "Green",
    priority: "Medium",
  },
];

const EmergencyVehicle = () => {
  const [vehicles, setVehicles] = useState(emergencyVehicles);

  const givePriority = (id) => {
    setVehicles(
      vehicles.map((vehicle) =>
        vehicle.id === id
          ? { ...vehicle, signal: "Green" }
          : vehicle
      )
    );
  };

  const getIcon = (type) => {
    if (type === "Ambulance")
      return <FaAmbulance className="text-red-600 text-3xl" />;

    if (type === "Fire Truck")
      return (
        <FaFireExtinguisher className="text-orange-600 text-3xl" />
      );

    return (
      <FaShieldAlt className="text-blue-600 text-3xl" />
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      <div className="flex items-center gap-3 mb-6">
        <FaTrafficLight className="text-3xl text-red-600" />

        <h2 className="text-2xl font-bold">
          Emergency Vehicle Priority System
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="border rounded-xl p-5 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              {getIcon(vehicle.type)}

              <div>
                <h3 className="font-bold text-lg">
                  {vehicle.type}
                </h3>

                <p className="text-gray-500">
                  {vehicle.location}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-2">

              <p>
                <strong>Signal :</strong> {vehicle.signal}
              </p>

              <p>
                <strong>Priority :</strong> {vehicle.priority}
              </p>

            </div>

            <button
              onClick={() => givePriority(vehicle.id)}
              className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
            >
              Give Green Signal
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default EmergencyVehicle;