import { useState, useEffect } from "react";
import {
  FaUserCircle,
  FaBell,
  FaTrafficLight,
  FaGlobe,
  FaMoon,
  FaSave,
} from "react-icons/fa";

const Settings = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "Light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "Dark") {
      document.body.classList.add("bg-gray-900");
      document.body.classList.remove("bg-gray-100");
    } else {
      document.body.classList.add("bg-gray-100");
      document.body.classList.remove("bg-gray-900");
    }
  }, [theme]);

  const handleSave = () => {
    localStorage.setItem("theme", theme);
    alert("✅ Settings Saved Successfully!");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        ⚙️ System Settings
      </h2>

      {/* Admin Profile */}
      <div className="bg-gray-50 rounded-xl p-5 mb-6">
        <div className="flex items-center gap-4">
          <FaUserCircle className="text-6xl text-blue-500" />

          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Nagamani Maguluri
            </h3>

            <p className="text-gray-600">
              Traffic Control Administrator
            </p>

            <p className="text-gray-500 text-sm">
              Guntur Smart Traffic Monitoring System
            </p>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="flex justify-between items-center border rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3">
          <FaBell className="text-yellow-500 text-xl" />
          <span className="font-medium">Notifications</span>
        </div>

        <input type="checkbox" defaultChecked />
      </div>

      {/* Traffic Alerts */}
      <div className="flex justify-between items-center border rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3">
          <FaTrafficLight className="text-green-500 text-xl" />
          <span className="font-medium">Traffic Alerts</span>
        </div>

        <input type="checkbox" defaultChecked />
      </div>

      {/* Language */}
      <div className="flex justify-between items-center border rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3">
          <FaGlobe className="text-blue-500 text-xl" />
          <span className="font-medium">Language</span>
        </div>

        <select className="border rounded px-3 py-1">
          <option>English</option>
          <option>Telugu</option>
        </select>
      </div>

      {/* Theme */}
      <div className="flex justify-between items-center border rounded-lg p-4 mb-6">
        <div className="flex items-center gap-3">
          <FaMoon className="text-purple-500 text-xl" />
          <span className="font-medium">Theme</span>
        </div>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="border rounded px-3 py-1"
        >
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          <FaSave />
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;