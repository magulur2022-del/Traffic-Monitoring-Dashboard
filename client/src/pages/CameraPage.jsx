import { useState, useEffect } from "react";

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

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentTime(new Date());

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-IN");

  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (

    <div className="min-h-screen bg-gray-100">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex flex-col lg:ml-64 min-h-screen">

        <Navbar
          onLogout={onLogout}
          search={search}
          setSearch={setSearch}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 p-6 overflow-y-auto">

          <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-blue-800 rounded-3xl shadow-xl p-8 text-white mb-8">

            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

              <div>

                <p className="uppercase tracking-widest text-blue-100 text-sm font-semibold">
                  Surveillance Network
                </p>

                <h1 className="text-4xl font-extrabold mt-2">
                  📹 Live Camera Monitoring
                </h1>

                <p className="mt-4 text-blue-100 text-lg max-w-3xl">
                  Real-time CCTV monitoring and AI-powered vehicle detection
                  across all major traffic junctions in Guntur City.
                </p>

                <div className="flex flex-wrap gap-4 mt-6">

                  <span className="bg-green-500 px-4 py-2 rounded-full font-semibold animate-pulse">
                    ● LIVE Monitoring
                  </span>

                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    🕒 {formattedTime}
                  </span>

                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    📍 Guntur Smart City
                  </span>

                </div>

                <p className="mt-4 text-blue-100">
                  {formattedDate}
                </p>

              </div>

            </div>

          </div>

          {/* Camera Statistics */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

            {cameraStats.map((stat, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center hover:shadow-xl transition"
              >

                <div>

                  <p className="text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
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

          </div>          {/* Live Camera Feed */}

          <div className="mb-8">

            <LiveCamera />

          </div>

          {/* AI Vehicle Detection */}

          <div className="mb-8">

            <AIVehicleDetection />

          </div>

          {/* Live Monitoring Information */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-xl font-bold mb-4">
                🚦 System Status
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>AI Detection</span>
                  <span className="text-green-600 font-bold">
                    Active
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Camera Network</span>
                  <span className="text-green-600 font-bold">
                    Healthy
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Recording</span>
                  <span className="text-green-600 font-bold">
                    ON
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Cloud Backup</span>
                  <span className="text-blue-600 font-bold">
                    Synced
                  </span>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-xl font-bold mb-4">
                📊 Today's Summary
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>Vehicles Detected</span>
                  <span className="font-bold">
                    2,357
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>AI Alerts</span>
                  <span className="font-bold text-red-600">
                    12
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Emergency Vehicles</span>
                  <span className="font-bold text-orange-600">
                    5
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Average Traffic</span>
                  <span className="font-bold text-green-600">
                    Moderate
                  </span>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-xl font-bold mb-4">
                📡 Live Status
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>Server</span>
                  <span className="text-green-600 font-bold">
                    Online
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Network</span>
                  <span className="text-green-600 font-bold">
                    Excellent
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>AI Engine</span>
                  <span className="text-green-600 font-bold">
                    Running
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Last Update</span>
                  <span className="font-semibold">
                    {formattedTime}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>

  );

};

export default CameraPage;