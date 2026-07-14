import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const weeklyTraffic = [
  { day: "Mon", vehicles: 850 },
  { day: "Tue", vehicles: 920 },
  { day: "Wed", vehicles: 1100 },
  { day: "Thu", vehicles: 980 },
  { day: "Fri", vehicles: 1350 },
  { day: "Sat", vehicles: 1580 },
  { day: "Sun", vehicles: 1240 },
];

const peakHours = [
  { time: "6 AM", traffic: 120 },
  { time: "8 AM", traffic: 320 },
  { time: "10 AM", traffic: 240 },
  { time: "12 PM", traffic: 420 },
  { time: "2 PM", traffic: 310 },
  { time: "4 PM", traffic: 550 },
  { time: "6 PM", traffic: 720 },
  { time: "8 PM", traffic: 430 },
];

const Analytics = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      <h2 className="text-2xl font-bold mb-6">
        📊 Traffic Analytics Dashboard
      </h2>

      {/* KPI Cards */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="bg-blue-50 rounded-xl p-5">
          <h3 className="text-gray-500">Vehicles Today</h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">
            4,850
          </p>
        </div>

        <div className="bg-green-50 rounded-xl p-5">
          <h3 className="text-gray-500">Signal Efficiency</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">
            96%
          </p>
        </div>

        <div className="bg-yellow-50 rounded-xl p-5">
          <h3 className="text-gray-500">Emergency</h3>
          <p className="text-4xl font-bold text-yellow-600 mt-2">
            14
          </p>
        </div>

        <div className="bg-red-50 rounded-xl p-5">
          <h3 className="text-gray-500">Incidents</h3>
          <p className="text-4xl font-bold text-red-600 mt-2">
            5
          </p>
        </div>

      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-8 mt-8">

        <div>

          <h3 className="font-bold mb-4">
            Weekly Traffic
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyTraffic}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                dataKey="vehicles"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

        <div>

          <h3 className="font-bold mb-4">
            Peak Hours
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={peakHours}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="traffic"
                fill="#16a34a"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* Summary */}

      <div className="mt-8 bg-gray-100 rounded-xl p-6">

        <h3 className="text-xl font-bold mb-4">
          📋 Today's Summary
        </h3>

        <ul className="space-y-3 text-gray-700">

          <li>✅ Total Vehicles Monitored : 4,850</li>

          <li>🚦 Average Congestion : Medium</li>

          <li>🚑 Emergency Vehicles Passed : 14</li>

          <li>⚠️ Incidents Reported : 5</li>

          <li>🟢 Signal Efficiency : 96%</li>

        </ul>

      </div>

    </div>
  );
};

export default Analytics;