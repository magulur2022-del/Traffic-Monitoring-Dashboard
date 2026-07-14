import { useState } from "react";
import {
  FaBell,
  FaTimes,
  FaExclamationTriangle,
  FaTrafficLight,
  FaRoad,
  FaAmbulance,
  FaCarCrash,
} from "react-icons/fa";

const initialNotifications = [
  {
    id: 1,
    icon: <FaCarCrash className="text-red-600 text-2xl" />,
    title: "Accident Reported",
    location: "Brodipet Junction",
    time: "2 mins ago",
    status: "Critical",
    bg: "bg-red-50",
    border: "border-red-500",
    badge: "bg-red-100 text-red-700",
  },
  {
    id: 2,
    icon: <FaTrafficLight className="text-yellow-500 text-2xl" />,
    title: "Heavy Traffic",
    location: "Lodge Center",
    time: "5 mins ago",
    status: "Warning",
    bg: "bg-yellow-50",
    border: "border-yellow-500",
    badge: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 3,
    icon: <FaAmbulance className="text-green-600 text-2xl" />,
    title: "Emergency Vehicle",
    location: "NTR Bus Stand",
    time: "LIVE",
    status: "Active",
    bg: "bg-green-50",
    border: "border-green-500",
    badge: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    icon: <FaRoad className="text-blue-600 text-2xl" />,
    title: "Road Maintenance",
    location: "Kothapet",
    time: "20 mins ago",
    status: "Info",
    bg: "bg-blue-50",
    border: "border-blue-500",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    id: 5,
    icon: <FaExclamationTriangle className="text-orange-500 text-2xl" />,
    title: "Signal Failure",
    location: "Lakshmipuram",
    time: "Just Now",
    status: "Urgent",
    bg: "bg-orange-50",
    border: "border-orange-500",
    badge: "bg-orange-100 text-orange-700",
  },
];

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">

        <div className="flex items-center gap-3">

          <FaBell className="text-blue-600 text-3xl" />

          <div>
            <h2 className="text-2xl font-bold">
              Traffic Notifications
            </h2>

            <p className="text-gray-500 text-sm">
              Live Alerts & Incidents
            </p>

            <p className="text-xs text-gray-400">
              Last Updated : {new Date().toLocaleTimeString()}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {notifications.length}
          </span>

          <button
            onClick={clearAll}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm"
          >
            Clear All
          </button>

        </div>

      </div>

      {/* Live Status */}

      <div className="flex items-center gap-2 mb-5">

        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

        <span className="text-green-600 font-semibold">
          LIVE Monitoring
        </span>

      </div>

      {notifications.length === 0 ? (

        <div className="text-center py-10">

          <FaBell className="text-5xl text-gray-300 mx-auto mb-3" />

          <h3 className="text-xl font-semibold text-gray-500">
            No Notifications
          </h3>

          <p className="text-gray-400">
            Everything is running smoothly.
          </p>

        </div>

      ) : (

        <div className="space-y-5 max-h-[500px] overflow-y-auto pr-2">

          {notifications.map((item) => (

            <div
              key={item.id}
              className={`${item.bg} border-l-4 ${item.border} rounded-xl p-5 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300`}
            >

              <div className="flex justify-between items-start">

                <div className="flex gap-4">

                  {item.icon}

                  <div>

                    <h3 className="font-bold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-1">
                      📍 {item.location}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      🕒 {item.time}
                    </p>

                  </div>

                </div>

                <div className="flex flex-col items-end gap-2">

                  <span
                    className={`${item.badge} px-3 py-1 rounded-full text-xs font-bold`}
                  >
                    {item.status}
                  </span>

                  <button
                    onClick={() => removeNotification(item.id)}
                    className="text-gray-500 hover:text-red-600 transition"
                  >
                    <FaTimes />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default NotificationPanel;