import { useEffect, useState } from "react";
import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaCircle,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

import NotificationPanel from "./NotificationPanel";

const Navbar = ({
  onLogout,
  search,
  setSearch,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-white shadow-md border-b sticky top-0 z-30">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Left */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-2xl text-gray-700"
          >
            <FaBars />
          </button>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Smart Traffic Monitoring Dashboard
            </h1>

            <p className="text-gray-500 text-sm">
              Real-Time Traffic Monitoring System
            </p>
          </div>

        </div>

        {/* Search */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-96">

          <FaSearch className="text-gray-500" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Location..."
            className="bg-transparent outline-none ml-3 w-full"
          />

        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Date & Time */}
          <div className="hidden md:block text-right">

            <p className="text-sm text-gray-500">
              {currentTime.toLocaleDateString()}
            </p>

            <p className="font-semibold">
              {currentTime.toLocaleTimeString()}
            </p>

          </div>

          {/* Online */}
          <div className="hidden md:flex items-center gap-2">

            <FaCircle className="text-green-500 text-xs" />

            <span className="text-green-600 font-semibold">
              Online
            </span>

          </div>

          {/* Notification */}
          <div className="relative">

            <button
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
              className="relative"
            >

              <FaBell className="text-2xl text-gray-700 hover:text-blue-600 transition" />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                5
              </span>

            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-4 w-[430px] z-50">
                <NotificationPanel />
              </div>
            )}

          </div>

          {/* User */}
          <div className="hidden md:flex items-center gap-3">

            <FaUserCircle className="text-4xl text-blue-600" />

            <div>

              <p className="font-bold text-gray-800">
                Nagamani Maguluri
              </p>

              <p className="text-sm text-gray-500">
                Traffic Administrator
              </p>

            </div>

          </div>

          {/* Logout */}
          <button
            onClick={onLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >

            <FaSignOutAlt />

            Logout

          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;