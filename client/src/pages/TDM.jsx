import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TrafficSignalStatus from "../components/TrafficSignalStatus";
import SmartTrafficController from "../components/SmartTrafficController";
import TrafficControlRoom from "../components/TrafficControlRoom";

const TrafficSignalPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex flex-col lg:ml-64">

        <Navbar
          search={search}
          setSearch={setSearch}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="p-6">

          <h1 className="text-4xl font-bold text-gray-800">
            🚦 Traffic Signal Management
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Monitor, Control and Optimize Smart Traffic Signals
          </p>

          <div className="space-y-8">

            <TrafficSignalStatus />

            <SmartTrafficController />

            <TrafficControlRoom />

          </div>

        </main>

      </div>

    </div>
  );
};

export default TrafficSignalPage;