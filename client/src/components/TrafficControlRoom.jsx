import {
  FaBroadcastTower,
  FaTrafficLight,
  FaAmbulance,
  FaShieldAlt,
  FaRoad,
  FaWifi,
  FaHeartbeat,
  FaUserShield,
  FaClock,
} from "react-icons/fa";

const TrafficControlRoom = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            🎛️ Smart Traffic Control Room
          </h2>

          <p className="text-gray-500">
            Central Traffic Monitoring System
          </p>

        </div>

        <div className="flex items-center gap-3">

          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
            ● LIVE
          </span>

          <FaBroadcastTower className="text-3xl text-blue-600" />

        </div>

      </div>

      {/* Status Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="bg-green-50 rounded-xl p-5 text-center">
          <FaTrafficLight className="text-4xl text-green-600 mx-auto mb-3" />
          <h3 className="font-bold">Signals Online</h3>
          <p className="text-3xl font-bold text-green-600">24 / 25</p>
        </div>

        <div className="bg-red-50 rounded-xl p-5 text-center">
          <FaAmbulance className="text-4xl text-red-600 mx-auto mb-3" />
          <h3 className="font-bold">Emergency</h3>
          <p className="text-3xl font-bold text-red-600">2</p>
        </div>

        <div className="bg-blue-50 rounded-xl p-5 text-center">
          <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-3" />
          <h3 className="font-bold">Police Requests</h3>
          <p className="text-3xl font-bold text-blue-600">1</p>
        </div>

        <div className="bg-orange-50 rounded-xl p-5 text-center">
          <FaRoad className="text-4xl text-orange-600 mx-auto mb-3" />
          <h3 className="font-bold">Road Closures</h3>
          <p className="text-3xl font-bold text-orange-600">1</p>
        </div>

      </div>

      {/* System Information */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        <div className="bg-gray-50 rounded-xl p-6">

          <h3 className="text-xl font-bold mb-4">
            📡 System Status
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2">
                <FaWifi className="text-blue-600" />
                <span>Network</span>
              </div>

              <span className="text-green-600 font-semibold">
                Healthy
              </span>

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2">
                <FaHeartbeat className="text-red-500" />
                <span>System Health</span>
              </div>

              <span className="text-green-600 font-semibold">
                99.8%
              </span>

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2">
                <FaUserShield className="text-indigo-600" />
                <span>Operator</span>
              </div>

              <span className="text-green-600 font-semibold">
                Online
              </span>

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2">
                <FaClock className="text-gray-600" />
                <span>Updated</span>
              </div>

              <span className="font-semibold">
                Just Now
              </span>

            </div>

          </div>

        </div>

        {/* Control Panel */}

        <div className="bg-gray-50 rounded-xl p-6">

          <h3 className="text-xl font-bold mb-4">
            🚦 Quick Controls
          </h3>

          <div className="grid grid-cols-2 gap-4">

            <button className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
              Enable All Signals
            </button>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition">
              Flash Mode
            </button>

            <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
              Emergency Mode
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
              Refresh Status
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TrafficControlRoom;