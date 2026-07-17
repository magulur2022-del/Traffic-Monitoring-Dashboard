import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import QuickOverview from "../components/QuickOverview";
import VehicleCounter from "../components/VehicleCounter";
import LiveTrafficStatus from "../components/LiveTrafficStatus";
import AIVehicleDetection from "../components/AIVehicleDetection";
import EmergencyNotification from "../components/EmergencyNotification";
import MiniMap from "../components/MiniMap";
import LiveActivity from "../components/LiveActivity";
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

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const filteredLocations =
    trafficLocations.filter((location) =>
      location.area
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const formattedTime =
    currentTime.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  const formattedDate =
    currentTime.toLocaleDateString("en-IN", {
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

          {/* Hero Section */}

          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-3xl shadow-xl p-8 text-white mb-8">

            <div className="flex flex-col lg:flex-row justify-between gap-8">

              <div className="flex-1">

                <p className="uppercase tracking-widest text-blue-100 text-sm font-semibold">
                  Smart City Project
                </p>

                <h1 className="text-4xl lg:text-5xl font-extrabold mt-2">
                  🚦 Smart Traffic Monitoring Dashboard
                </h1>

                <p className="mt-5 text-blue-100 text-lg leading-8 max-w-3xl">
                  Monitor live traffic,
                  AI vehicle detection,
                  emergency alerts,
                  CCTV surveillance
                  and smart traffic signals
                  across Guntur City.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">

                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                    ● LIVE Monitoring Active
                  </span>

                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                    📍 Guntur Smart City
                  </span>

                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                    🕒 {formattedTime}
                  </span>

                </div>

                <p className="mt-3 text-blue-100">
                  {formattedDate}
                </p>

              </div>

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-white/15 rounded-2xl p-6 text-center">
                  <h2 className="text-4xl font-bold">
                    24
                  </h2>

                  <p>Active Signals</p>
                </div>

                <div className="bg-white/15 rounded-2xl p-6 text-center">
                  <h2 className="text-4xl font-bold">
                    18
                  </h2>

                  <p>Online Cameras</p>
                </div>

                <div className="bg-white/15 rounded-2xl p-6 text-center">
                  <h2 className="text-3xl font-bold text-green-300">
                    Online
                  </h2>

                  <p>System Status</p>
                </div>

                <div className="bg-white/15 rounded-2xl p-6 text-center">
                  <h2 className="text-4xl font-bold">
                    2357
                  </h2>

                  <p>Today's Vehicles</p>
                </div>

              </div>

            </div>

          </div>

          <QuickOverview />

          {search !== "" && (

            <div className="mt-8">

              <SearchResults
                results={filteredLocations}
              />

            </div>

          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">

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
          </div>          {/* Emergency Notification */}

          <div className="mt-8">
            <EmergencyNotification />
          </div>

          {/* Vehicle Counter */}

          <div className="mt-8">
            <VehicleCounter />
          </div>

          {/* Live Traffic Status */}

          <div className="mt-8">
            <LiveTrafficStatus />
          </div>

          {/* AI Vehicle Detection */}

          <div className="mt-8">
            <AIVehicleDetection />
          </div>

          {/* Mini Map & Live Activity */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

            <div className="bg-white rounded-2xl shadow-lg p-4">
              <MiniMap />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-4">
              <LiveActivity />
            </div>

          </div>

          {/* Dashboard Footer */}

          <div className="mt-10">
            <DashboardFooter />
          </div>

        </main>

      </div>

    </div>

  );
};

export default Dashboard;