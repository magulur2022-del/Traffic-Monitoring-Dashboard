import { useState, useEffect } from "react";
import { Bell, X, AlertTriangle, TrafficCone, Construction, Siren, Car } from "lucide-react";

const notificationPool = [
  {
    icon: <Car className="text-red-600" size={24} />,
    title: "Accident Reported",
    location: "Brodipet Junction",
    status: "Critical",
    bg: "bg-red-50",
    border: "border-red-500",
    badge: "bg-red-100 text-red-700",
  },
  {
    icon: <TrafficCone className="text-yellow-500" size={24} />,
    title: "Heavy Traffic",
    location: "Lodge Center",
    status: "Warning",
    bg: "bg-yellow-50",
    border: "border-yellow-500",
    badge: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: <Siren className="text-green-600" size={24} />,
    title: "Ambulance Detected",
    location: "NTR Bus Stand",
    status: "Emergency",
    bg: "bg-green-50",
    border: "border-green-500",
    badge: "bg-green-100 text-green-700",
  },
  {
    icon: <Construction className="text-blue-600" size={24} />,
    title: "Road Maintenance",
    location: "Kothapet",
    status: "Info",
    bg: "bg-blue-50",
    border: "border-blue-500",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    icon: <AlertTriangle className="text-orange-500" size={24} />,
    title: "Signal Failure",
    location: "Lakshmipuram",
    status: "Urgent",
    bg: "bg-orange-50",
    border: "border-orange-500",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    icon: <Siren className="text-red-600" size={24} />,
    title: "Fire Engine Detected",
    location: "Arundelpet",
    status: "Emergency",
    bg: "bg-red-50",
    border: "border-red-500",
    badge: "bg-red-100 text-red-700",
  },
  {
    icon: <TrafficCone className="text-purple-600" size={24} />,
    title: "VIP Convoy",
    location: "Collector Office",
    status: "Priority",
    bg: "bg-purple-50",
    border: "border-purple-500",
    badge: "bg-purple-100 text-purple-700",
  },
];

export default function NotificationPanel() {
  const [notifications, setNotifications] = useState([]);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const addNotification = () => {
      const random =
        notificationPool[Math.floor(Math.random() * notificationPool.length)];

      const newNotification = {
        ...random,
        id: Date.now() + Math.random(),
        time: new Date().toLocaleTimeString(),
      };

      setNotifications((prev) => [newNotification, ...prev].slice(0, 5));
    };

    addNotification();
    const first = setTimeout(addNotification, 1500);
    const second = setTimeout(addNotification, 3000);
    const interval = setInterval(addNotification, 15000);
    const clock = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearTimeout(first);
      clearTimeout(second);
      clearInterval(interval);
      clearInterval(clock);
    };
  }, []);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  const clearAll = () => setNotifications([]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-3">
          <Bell className="text-blue-600 animate-bounce" size={30} />
          <div>
            <h2 className="text-2xl font-bold">Traffic Notifications</h2>
            <p className="text-gray-500 text-sm">Live Alerts & Incidents</p>
            <p className="text-xs text-gray-400">
              Last updated: {now.toLocaleTimeString()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {notifications.length}
          </span>
          <button
            onClick={clearAll}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Clear all
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-5">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        <span className="text-green-600 font-semibold">LIVE monitoring</span>
      </div>

      {notifications.length === 0 ? (
        <div className="text-center py-10">
          <Bell className="text-gray-300 mx-auto mb-3" size={48} />
          <h3 className="text-xl font-semibold text-gray-500">No notifications</h3>
          <p className="text-gray-400">Waiting for new traffic alerts...</p>
        </div>
      ) : (
        <div className="space-y-5 max-h-[500px] overflow-y-auto pr-2">
          {notifications.map((item) => (
            <div
              key={item.id}
              className={`${item.bg} border-l-4 ${item.border} rounded-xl p-5 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  {item.icon}
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.location}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.time}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className={`${item.badge} px-3 py-1 rounded-full text-xs font-bold`}>
                    {item.status}
                  </span>
                  <button
                    onClick={() => removeNotification(item.id)}
                    className="text-gray-500 hover:text-red-600 transition"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}