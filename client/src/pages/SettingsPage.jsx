import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Settings from "../components/Settings";

const SettingsPage = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

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

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              ⚙️ Settings
            </h1>

            <p className="text-gray-600 mt-2">
              Configure Smart Traffic Monitoring Dashboard
            </p>
          </div>

          <Settings />

        </main>
      </div>
    </div>
  );
};

export default SettingsPage;