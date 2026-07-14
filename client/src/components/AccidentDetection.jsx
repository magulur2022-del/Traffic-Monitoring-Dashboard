import { useEffect, useState } from "react";
import {
  FaAmbulance,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const locations = [
  "Brodipet Junction",
  "Lodge Center",
  "NTR Bus Stand",
  "Lakshmipuram",
  "Kothapet",
];

const AccidentDetection = () => {
  const [incident, setIncident] = useState({
    location: "Brodipet Junction",
    severity: "Low",
    status: "Monitoring",
    time: new Date().toLocaleTimeString(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const severityLevels = ["Low", "Medium", "High"];

      setIncident({
        location:
          locations[Math.floor(Math.random() * locations.length)],
        severity:
          severityLevels[Math.floor(Math.random() * 3)],
        status: Math.random() > 0.5 ? "Emergency" : "Monitoring",
        time: new Date().toLocaleTimeString(),
      });
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const severityColor =
    incident.severity === "High"
      ? "text-red-600"
      : incident.severity === "Medium"
      ? "text-yellow-500"
      : "text-green-600";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          🚨 AI Accident Detection
        </h2>

        <FaAmbulance className="text-3xl text-red-600" />

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-red-50 rounded-xl p-5">

          <h3 className="font-bold text-lg mb-4">
            Latest Incident
          </h3>

          <p className="flex items-center gap-2 mb-3">
            <FaMapMarkerAlt />
            {incident.location}
          </p>

          <p className="flex items-center gap-2 mb-3">
            <FaClock />
            {incident.time}
          </p>

          <p className="flex items-center gap-2">
            <FaExclamationTriangle className={severityColor} />
            <span className={severityColor}>
              {incident.severity} Severity
            </span>
          </p>

        </div>

        <div className="bg-gray-50 rounded-xl p-5">

          <h3 className="font-bold text-lg mb-4">
            Emergency Status
          </h3>

          <p className="text-lg font-semibold">
            {incident.status}
          </p>

          <div className="mt-5">

            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg mr-3">
              Dispatch Ambulance
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
              Notify Police
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AccidentDetection;