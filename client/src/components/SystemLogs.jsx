import {
  FaHistory,
  FaTrafficLight,
  FaCamera,
  FaExclamationTriangle,
  FaCloudSun,
} from "react-icons/fa";

const logs = [
  {
    time: "09:30 AM",
    icon: <FaTrafficLight className="text-green-600" />,
    message: "Traffic signal switched to Green at Brodipet Junction.",
  },
  {
    time: "09:35 AM",
    icon: <FaCamera className="text-blue-600" />,
    message: "Live camera connected successfully at Lodge Center.",
  },
  {
    time: "09:40 AM",
    icon: <FaExclamationTriangle className="text-red-600" />,
    message: "Heavy traffic detected near NTR Bus Stand.",
  },
  {
    time: "09:45 AM",
    icon: <FaCloudSun className="text-yellow-500" />,
    message: "Weather updated: 31°C, Sunny.",
  },
  {
    time: "09:50 AM",
    icon: <FaTrafficLight className="text-green-600" />,
    message: "Signal timing optimized automatically.",
  },
];

const SystemLogs = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mt-8">
      <div className="flex items-center gap-3 mb-6">
        <FaHistory className="text-3xl text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">
          System Logs
        </h2>
      </div>

      <div className="space-y-4">
        {logs.map((log, index) => (
          <div
            key={index}
            className="flex items-start gap-4 border rounded-xl p-4 hover:bg-gray-50"
          >
            <div className="text-2xl">{log.icon}</div>

            <div className="flex-1">
              <p className="font-semibold text-gray-800">
                {log.message}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {log.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemLogs;