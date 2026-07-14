import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LiveMap from "../components/LiveMap";

const LiveMapPage = ({ onLogout }) => {
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

          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-3xl shadow-xl p-8 text-white mb-8">

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">

              <div>

                <p className="uppercase tracking-widest text-blue-100 text-sm font-semibold">
                  Smart City Project
                </p>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2">
                  🗺️ Live Traffic Map
                </h1>

                <p className="mt-4 text-blue-100 text-lg leading-8 max-w-3xl">
                  Monitor real-time traffic congestion, road conditions,
                  traffic signals and vehicle movement across
                  Guntur City.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-white/15 backdrop-blur rounded-2xl p-5 text-center">

                  <h3 className="text-4xl font-bold">
                    24
                  </h3>

                  <p className="text-blue-100 mt-2">
                    Signals
                  </p>

                </div>

                <div className="bg-white/15 backdrop-blur rounded-2xl p-5 text-center">

                  <h3 className="text-4xl font-bold">
                    18
                  </h3>

                  <p className="text-blue-100 mt-2">
                    Cameras
                  </p>

                </div>

                <div className="bg-white/15 backdrop-blur rounded-2xl p-5 text-center">

                  <h3 className="text-4xl font-bold">
                    3
                  </h3>

                  <p className="text-blue-100 mt-2">
                    Incidents
                  </p>

                </div>

                <div className="bg-white/15 backdrop-blur rounded-2xl p-5 text-center">

                  <h3 className="text-4xl font-bold text-green-300">
                    LIVE
                  </h3>

                  <p className="text-blue-100 mt-2">
                    Status
                  </p>

                </div>

              </div>

            </div>

          </div>

          <LiveMap />

        </main>

      </div>

    </div>
  );
};

export default LiveMapPage;