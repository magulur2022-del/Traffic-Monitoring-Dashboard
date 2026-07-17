import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ReportCharts = ({ trafficRecords }) => {
  const chartData = trafficRecords.map((item) => ({
    junction: item.junction,
    vehicles: Number(item.vehicles),
  }));

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        📊 Traffic Analysis
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="junction" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="vehicles" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportCharts;