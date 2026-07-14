import {
  FaTachometerAlt,
  FaMapMarkedAlt,
  FaTrafficLight,
  FaRoad,
  FaChartLine,
  FaCamera,
  FaExclamationTriangle,
  FaCog,
  FaInfoCircle,
  FaTimes,
  FaCircle,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    {
      icon: <FaTachometerAlt />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <FaMapMarkedAlt />,
      label: "Live Map",
      path: "/livemap",
    },
    {
      icon: <FaTrafficLight />,
      label: "Traffic Signals",
      path: "/traffic-signal",
    },
    {
      icon: <FaRoad />,
      label: "Traffic Junctions",
      path: "/traffic-junctions",
    },
    {
      icon: <FaChartLine />,
      label: "Analytics",
      path: "/analytics",
    },
    {
      icon: <FaCamera />,
      label: "Camera Feeds",
      path: "/camera",
    },
    {
      icon: <FaExclamationTriangle />,
      label: "Reports",
      path: "/reports",
    },
    {
      icon: <FaCog />,
      label: "Settings",
      path: "/settings",
    },
    {
      icon: <FaInfoCircle />,
      label: "About",
      path: "/about",
    },
  ];

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-2xl border-r border-gray-200 transform transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-6 text-white shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-extrabold">
                🚦 Smart Traffic
              </h1>

              <p className="text-blue-100 text-sm mt-1">
                Monitoring Dashboard
              </p>
            </div>

            <button
              className="lg:hidden text-2xl"
              onClick={() => setSidebarOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-2">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-700 to-cyan-500 text-white shadow-lg scale-[1.02]"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:translate-x-1"
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>

              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full border-t border-gray-200 bg-gray-50 p-5">
          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <FaCircle className="text-[10px] animate-pulse" />
            <span>System Online</span>
          </div>

          <div className="mt-3">
            <p className="text-gray-600 text-sm font-medium">
              Smart Traffic Dashboard
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Version 1.0 • React + Vite
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;