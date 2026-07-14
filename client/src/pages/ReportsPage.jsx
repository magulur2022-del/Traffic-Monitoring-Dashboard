import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Reports from "../components/Reports";
import NotificationPanel from "../components/NotificationPanel";
import WeatherCard from "../components/WeatherCard";

import {
  FaFileAlt,
  FaBell,
  FaCloudSun,
  FaDownload,
} from "react-icons/fa";

const reportStats = [
  {
    title: "Reports Generated",
    value: "142",
    icon: <FaFileAlt />,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Active Alerts",
    value: "7",
    icon: <FaBell />,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "Weather Status",
    value: "34°C",
    icon: <FaCloudSun />,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    title: "Downloads This Month",
    value: "36",
    icon: <FaDownload />,
    color: "text-green-500",
    bg: "bg-green-50",
  },
];

const ReportsPage = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

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
          <div className="bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 rounded-3xl shadow-xl p-5 sm:p-8 text-white mb-8">
            <p className="uppercase tracking-widest text-teal-100 text-sm font-semibold">
              Records & Alerts
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold mt-2">
              📄 Reports & Notifications
            </h1>

            <p className="mt-4 text-teal-100 text-lg max-w-2xl">
              View generated reports, traffic alerts, and live weather
              information for Guntur City in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {reportStats.map((stat, i) => (
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
                </div>
                <div
                  className={`${stat.bg} ${stat.color} w-14 h-14 rounded-xl flex items-center justify-center text-2xl`}
                >
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <Reports />
            <NotificationPanel />
            <WeatherCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReportsPage;