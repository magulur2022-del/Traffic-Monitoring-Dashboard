import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";

import {
  FaCar,
  FaChartLine,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

const hourlyTraffic = [
  { hour: "6AM", value: 30 },
  { hour: "8AM", value: 85 },
  { hour: "10AM", value: 55 },
  { hour: "12PM", value: 65 },
  { hour: "2PM", value: 50 },
  { hour: "4PM", value: 70 },
  { hour: "6PM", value: 95 },
  { hour: "8PM", value: 60 },
  { hour: "10PM", value: 25 },
];

const weeklyVehicles = [
  { day: "Mon", cars: 1100, bikes: 700, buses: 80 },
  { day: "Tue", cars: 1245, bikes: 856, buses: 92 },
  { day: "Wed", cars: 1180, bikes: 790, buses: 88 },
  { day: "Thu", cars: 1320, bikes: 900, buses: 95 },
  { day: "Fri", cars: 1450, bikes: 980, buses: 100 },
  { day: "Sat", cars: 980, bikes: 640, buses: 70 },
  { day: "Sun", cars: 760, bikes: 520, buses: 55 },
];

const vehicleShare = [
  { label: "Cars", value: 54, color: "bg-blue-500" },
  { label: "Bikes", value: 33, color: "bg-green-500" },
  { label: "Buses", value: 8, color: "bg-yellow-500" },
  { label: "Trucks", value: 5, color: "bg-red-500" },
];

const comparisonStats = [
  {
    title: "Vehicles Today",
    value: "2,357",
    change: "+6.4%",
    positive: true,
    icon: <FaCar />,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Peak Hour Volume",
    value: "412",
    change: "+3.1%",
    positive: true,
    icon: <FaChartLine />,
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    title: "Avg. Wait Time",
    value: "38s",
    change: "-4.2%",
    positive: true,
    icon: <FaClock />,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    title: "Incidents (7d)",
    value: "14",
    change: "+2 vs last wk",
    positive: false,
    icon: <FaExclamationTriangle />,
    color: "text-red-500",
    bg: "bg-red-50",
  },
];

const AnalyticsPage = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const maxHourly = Math.max(...hourlyTraffic.map((h) => h.value));
  const maxWeekly = Math.max(
    ...weeklyVehicles.map((d) => d.cars + d.bikes + d.buses)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-col lg:ml-64 min-h-screen">
        <Navbar
          onLogout={onLogout}
          search={search}
          setSearch={setSearch}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 rounded-3xl shadow-xl p-5 sm:p-8 text-white mb-8">
            <p className="uppercase tracking-widest text-blue-100 text-sm font-semibold">
              Insights
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold mt-2">
              📊 Traffic Analytics
            </h1>
            <p className="mt-4 text-blue-100 text-lg max-w-2xl">
              Vehicle trends, peak hours, and incident patterns across Guntur
              City for the past 7 days.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {comparisonStats.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <p className="text-gray-500 text-sm font-medium">
                    {stat.title}
                  </p>
                  <h2 className="text-3xl font-extrabold text-gray-800 mt-1">
                    {stat.value}
                  </h2>
                  <span
                    className={`text-xs font-semibold ${
                      stat.positive ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <div
                  className={`${stat.bg} ${stat.color} w-14 h-14 rounded-xl flex items-center justify-center text-2xl`}
                >
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
            <div className="xl:col-span-2 bg-white rounded-2xl shadow-md p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <h3 className="text-lg font-bold text-gray-800">
                  Hourly Traffic Volume
                </h3>
                <span className="text-xs text-gray-400 font-medium">
                  Today
                </span>
              </div>

              <div className="overflow-x-auto">
                <div className="flex items-end gap-3 h-56 min-w-[500px] sm:min-w-0">
                  {hourlyTraffic.map((point, i) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center justify-end h-full"
                    >
                      <div
                        className="w-full bg-blue-500 rounded-t-lg transition-all duration-500 hover:bg-blue-600"
                        style={{
                          height: `${(point.value / maxHourly) * 100}%`,
                        }}
                      />
                      <span className="text-xs text-gray-400 mt-2 whitespace-nowrap">
                        {point.hour}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">
                Vehicle Mix
              </h3>

              <div className="space-y-5">
                {vehicleShare.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 font-medium">
                        {item.label}
                      </span>
                      <span className="text-gray-500">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div
                        className={`${item.color} h-2.5 rounded-full transition-all duration-500`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <h3 className="text-lg font-bold text-gray-800">
                Weekly Vehicle Count
              </h3>
              <div className="flex gap-4 text-xs font-medium text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  Cars
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  Bikes
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  Buses
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="flex items-end gap-4 h-64 min-w-[420px] sm:min-w-0">
                {weeklyVehicles.map((day, i) => {
                  const total = day.cars + day.bikes + day.buses;
                  return (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center justify-end h-full"
                    >
                      <div
                        className="w-full flex flex-col justify-end rounded-t-lg overflow-hidden"
                        style={{ height: `${(total / maxWeekly) * 100}%` }}
                      >
                        <div
                          className="w-full bg-yellow-500"
                          style={{ height: `${(day.buses / total) * 100}%` }}
                        />
                        <div
                          className="w-full bg-green-500"
                          style={{ height: `${(day.bikes / total) * 100}%` }}
                        />
                        <div
                          className="w-full bg-blue-500"
                          style={{ height: `${(day.cars / total) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 mt-2">
                        {day.day}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <DashboardFooter />
        </main>
      </div>
    </div>
  );
};

export default AnalyticsPage;