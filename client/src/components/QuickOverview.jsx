import {
  FaTrafficLight,
  FaVideo,
  FaExclamationTriangle,
  FaAmbulance,
} from "react-icons/fa";

const QuickOverview = ({ trafficLocations = [] }) => {
  const activeSignals = trafficLocations.length;

  const incidents = trafficLocations.filter(
    (item) => item.congestionLevel === "Heavy"
  ).length;

  const emergencyAlerts = trafficLocations.filter(
    (item) => item.vehicleCount > 800
  ).length;

  const overview = [
    {
      title: "Active Signals",
      value: activeSignals,
      icon: <FaTrafficLight />,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Online Cameras",
      value: "18",
      icon: <FaVideo />,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Today's Incidents",
      value: incidents,
      icon: <FaExclamationTriangle />,
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      title: "Emergency Alerts",
      value: emergencyAlerts,
      icon: <FaAmbulance />,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {overview.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {item.value}
              </h2>
            </div>

            <div
              className={`${item.bg} ${item.color} w-14 h-14 rounded-xl flex items-center justify-center text-2xl`}
            >
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickOverview;