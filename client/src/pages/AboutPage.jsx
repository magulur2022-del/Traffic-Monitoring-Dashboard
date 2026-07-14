import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AboutProject from "../components/AboutProject";

const AboutPage = ({ onLogout }) => {
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
          <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-blue-700 rounded-3xl shadow-xl p-8 text-white mb-8">
            <p className="uppercase tracking-widest text-blue-100 text-sm font-semibold">
              Smart City Project
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold mt-2">
              ℹ️ About Smart Traffic Monitoring System
            </h1>

            <p className="mt-4 text-blue-100 text-lg max-w-2xl">
              Project information, core features, and the technology stack
              powering real-time traffic monitoring across Guntur City.
            </p>
          </div>

          <AboutProject />
        </main>
      </div>
    </div>
  );
};

export default AboutPage;