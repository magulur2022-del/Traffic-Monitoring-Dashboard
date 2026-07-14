import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LiveCamera from "../components/LiveCamera";
import AIVehicleDetection from "../components/AIVehicleDetection";

import {
  FaVideo,
  FaVideoSlash,
  FaCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const cameraStats = [
  {
    title: "Cameras Online",
    value: "18",
    icon: <FaVideo />,
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    title: "Cameras Offline",
    value: "2",
    icon: <FaVideoSlash />,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "Recording Now",
    value: "18",
    icon: <FaCircle />,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    title: "Alerts Today",
    value: "5",
    icon: <FaExclamationTriangle />,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
];

const CameraPage = ({ onLogout }) => {
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
          <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-blue-800 rounded-3xl shadow-xl p-5 sm:p-8 text-white mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
              <div>
                <p className="uppercase tracking-widest text-blue-100 text-sm font-semibold">
                  Surveillance Network
                </p>

                <h1 className="text-3xl md:text-4xl font-extrabold mt-2">
                  📹 Live Camera Monitoring
                </h1>

                <p className="mt-4 text-blue-100 text-lg max-w-2xl">
                  Real-time CCTV monitoring and AI-powered vehicle detection
                  across every junction in Guntur City.
                </p>
              </div>

              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse shadow-lg whitespace-nowrap self-start md:self-center">
                ● LIVE Feed Active
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {cameraStats.map((stat, i) => (
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
            <LiveCamera />
            <AIVehicleDetection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CameraPage;