import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import QuickOverview from "../components/QuickOverview";
import VehicleCounter from "../components/VehicleCounter";
import LiveTrafficStatus from "../components/LiveTrafficStatus";
import AIVehicleDetection from "../components/AIVehicleDetection";
import DashboardNotifications from "../components/DashboardNotifications";
import MiniMap from "../components/MiniMap";
import SearchResults from "../components/SearchResults";
import DashboardFooter from "../components/DashboardFooter";

import trafficLocations from "../data/trafficLocations";

import {
  FaCar,
  FaMotorcycle,
  FaBus,
  FaTruck,
  FaAmbulance,
} from "react-icons/fa";

const Dashboard = ({ onLogout }) => {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredLocations = trafficLocations.filter((location) =>
    location.area.toLowerCase().includes(search.toLowerCase())
  );

  const formattedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-3xl shadow-xl p-5 sm:p-8 text-white mb-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
              <div className="flex-1">
                <p className="uppercase tracking-widest text-blue-100 text-sm font-semibold">
                  Smart City Project
                </p>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2 leading-tight">
                  🚦 Smart Traffic Monitoring Dashboard
                </h1>

                <p className="mt-5 text-blue-100 text-lg leading-8 max-w-3xl">
                  Monitor live traffic, AI vehicle detection, emergency alerts,
                  CCTV surveillance and smart traffic signals across Guntur
                  City from one centralized dashboard.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse shadow-lg">
                    ● LIVE Monitoring Active
                  </span>

                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur">
                    📍 Guntur Smart City
                  </span>

                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur">
                    🕒 {formattedTime}
                  </span>
                </div>

                <p className="mt-3 text-blue-100/80 text-sm">
                  {formattedDate}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 w-full lg:w-auto">
                <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/25 hover:scale-105 shadow-lg">
                  <h3 className="text-4xl font-extrabold">24</h3>
                  <p className="text-blue-100 mt-2">Active Signals</p>
                </div>

                <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/25 hover:scale-105 shadow-lg">
                  <h3 className="text-4xl font-extrabold">18</h3>
                  <p className="text-blue-100 mt-2">Online Cameras</p>
                </div>

                <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/25 hover:scale-105 shadow-lg">
                  <h3 className="text-4xl font-extrabold text-green-300">
                    Online
                  </h3>
                  <p className="text-blue-100 mt-2">System Status</p>
                </div>

                <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/25 hover:scale-105 shadow-lg">
                  <h3 className="text-4xl font-extrabold">2,357</h3>
                  <p className="text-blue-100 mt-2">Today's Vehicles</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <QuickOverview />
          </div>

          {search !== "" && (
            <div className="mb-8">
              <SearchResults results={filteredLocations} />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <StatCard
              title="Cars"
              value="1245"
              change="+8%"
              icon={<FaCar />}
              color="text-blue-500"
            />

            <StatCard
              title="Bikes"
              value="856"
              change="+5%"
              icon={<FaMotorcycle />}
              color="text-green-500"
            />

            <StatCard
              title="Buses"
              value="92"
              change="+2%"
              icon={<FaBus />}
              color="text-yellow-500"
            />

            <StatCard
              title="Trucks"
              value="164"
              change="-1%"
              icon={<FaTruck />}
              color="text-red-500"
            />

            <StatCard
              title="Emergency"
              value="18"
              change="LIVE"
              icon={<FaAmbulance />}
              color="text-purple-500"
            />
          </div>

          <div className="mt-8">
            <VehicleCounter />
          </div>

          <div className="mt-8">
            <LiveTrafficStatus />
          </div>

          <div className="mt-8">
            <AIVehicleDetection />
          </div>

          <div className="mt-8">
            <DashboardNotifications />
          </div>

          <div className="mt-8">
            <MiniMap />
          </div>

          <DashboardFooter />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;