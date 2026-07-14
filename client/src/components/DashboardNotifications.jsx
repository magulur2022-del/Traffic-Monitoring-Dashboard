import {
  FaExclamationTriangle,
  FaTrafficLight,
  FaAmbulance,
} from "react-icons/fa";

const notifications = [
  {
    title: "Heavy Traffic",
    location: "Brodipet Junction",
    time: "2 mins ago",
    color: "text-red-600",
    icon: <FaExclamationTriangle />,
  },
  {
    title: "Emergency Vehicle",
    location: "NTR Bus Stand",
    time: "Live",
    color: "text-green-600",
    icon: <FaAmbulance />,
  },
  {
    title: "Signal Working Normally",
    location: "Lakshmipuram",
    time: "Just Now",
    color: "text-blue-600",
    icon: <FaTrafficLight />,
  },
];

const DashboardNotifications = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      <h2 className="text-2xl font-bold mb-6">
        🔔 Recent Notifications
      </h2>

      <div className="space-y-4">

        {notifications.map((item, index) => (

          <div
            key={index}
            className="flex items-center justify-between border rounded-xl p-4 hover:bg-gray-50 transition"
          >

            <div className="flex items-center gap-4">

              <div className={`text-2xl ${item.color}`}>
                {item.icon}
              </div>

              <div>

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.location}
                </p>

              </div>

            </div>

            <span className="text-sm text-gray-400">
              {item.time}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default DashboardNotifications;