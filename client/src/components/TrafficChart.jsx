import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "6 AM", vehicles: 120 },
  { time: "8 AM", vehicles: 320 },
  { time: "10 AM", vehicles: 220 },
  { time: "12 PM", vehicles: 480 },
  { time: "2 PM", vehicles: 300 },
  { time: "4 PM", vehicles: 550 },
  { time: "6 PM", vehicles: 710 },
  { time: "8 PM", vehicles: 450 },
];

const TrafficChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        📈 Traffic Flow Analysis
      </h2>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="vehicles"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">

        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <h3 className="font-bold text-blue-700">
            Peak Hour
          </h3>

          <p className="text-xl font-bold">
            6 PM
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-4 text-center">
          <h3 className="font-bold text-green-700">
            Highest Count
          </h3>

          <p className="text-xl font-bold">
            710
          </p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4 text-center">
          <h3 className="font-bold text-yellow-700">
            Average
          </h3>

          <p className="text-xl font-bold">
            394
          </p>
        </div>

      </div>
    </div>
  );
};

export default TrafficChart;