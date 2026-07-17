import { useState, useEffect } from "react";

const activities = [
  {
    icon: "🚑",
    text: "Ambulance detected at Brodipet",
  },
  {
    icon: "🚦",
    text: "Signal changed to Green at Lodge Center",
  },
  {
    icon: "🚗",
    text: "Heavy traffic at Lakshmipuram",
  },
  {
    icon: "🚧",
    text: "Road maintenance at Kothapet",
  },
  {
    icon: "🚨",
    text: "Emergency vehicle given priority",
  },
  {
    icon: "🚙",
    text: "Traffic normal at NTR Bus Stand",
  },
  {
    icon: "🚦",
    text: "Signal changed to Red at Arundelpet",
  },
];

const LiveActivity = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const addActivity = () => {
      const random =
        activities[
          Math.floor(Math.random() * activities.length)
        ];

      const newLog = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        ...random,
      };

      setLogs((prev) => [newLog, ...prev].slice(0, 8));
    };

    for (let i = 0; i < 4; i++) {
      setTimeout(addActivity, i * 500);
    }

    const interval = setInterval(addActivity, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold">
          📡 Live Activity
        </h2>

        <span className="text-green-600 font-semibold animate-pulse">
          ● LIVE
        </span>

      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">

        {logs.map((log) => (

          <div
            key={log.id}
            className="border-l-4 border-blue-600 pl-4 py-2 hover:bg-gray-50 rounded"
          >

            <p className="font-semibold">
              {log.icon} {log.text}
            </p>

            <p className="text-gray-500 text-sm">
              {log.time}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default LiveActivity;