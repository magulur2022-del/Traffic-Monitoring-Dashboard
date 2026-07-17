import { useState, useEffect } from "react";

import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSave,
  FaSearch,
  FaTrafficLight,
  FaMapMarkerAlt,
  FaCamera,
  FaRobot,
  FaCar,
  FaExclamationTriangle,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const defaultData = [
  {
    id: 1,
    name: "Brodipet Junction",
    traffic: "Heavy",
    signal: "Red",
    camera: "Online",
    ai: "Active",
    emergency: "No",
    vehicles: 245,
    updated: "Just Now",
  },
  {
    id: 2,
    name: "Lodge Center",
    traffic: "Moderate",
    signal: "Yellow",
    camera: "Online",
    ai: "Active",
    emergency: "No",
    vehicles: 182,
    updated: "1 min ago",
  },
  {
    id: 3,
    name: "NTR Bus Stand",
    traffic: "Heavy",
    signal: "Red",
    camera: "Online",
    ai: "Active",
    emergency: "Yes",
    vehicles: 315,
    updated: "Just Now",
  },
  {
    id: 4,
    name: "Lakshmipuram",
    traffic: "Low",
    signal: "Green",
    camera: "Online",
    ai: "Active",
    emergency: "No",
    vehicles: 92,
    updated: "2 mins ago",
  },
];

const emptyForm = {
  id: null,
  name: "",
  traffic: "Normal",
  signal: "Green",
  camera: "Online",
  ai: "Active",
  emergency: "No",
};

const TrafficJunctionManager = () => {
  const [junctions, setJunctions] = useState(defaultData);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-IN");

  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const totalVehicles = junctions.reduce(
    (sum, item) => sum + (item.vehicles || 0),
    0
  );

  const heavyTraffic = junctions.filter((j) => j.traffic === "Heavy").length;
  const greenSignals = junctions.filter((j) => j.signal === "Green").length;

  const filtered = junctions.filter((j) =>
    j.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.name.trim()) return;

    if (editing) {
      setJunctions((prev) =>
        prev.map((j) =>
          j.id === form.id ? { ...j, ...form, updated: "Just Now" } : j
        )
      );
    } else {
      const newJunction = {
        ...form,
        id: Date.now(),
        vehicles: Math.floor(Math.random() * 300) + 20,
        updated: "Just Now",
      };
      setJunctions((prev) => [...prev, newJunction]);
    }

    setForm(emptyForm);
    setEditing(false);
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setJunctions((prev) => prev.filter((j) => j.id !== id));
    if (form.id === id) {
      setForm(emptyForm);
      setEditing(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-3xl shadow-xl p-8 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <p className="uppercase tracking-widest text-blue-100 text-sm font-semibold">
              Smart City Project
            </p>
            <h1 className="text-4xl font-extrabold mt-2">
              🚦 Smart Traffic Junction Management
            </h1>
            <p className="mt-4 text-blue-100 text-lg max-w-3xl">
              Manage, monitor and optimize every traffic junction in Guntur
              using AI-powered traffic monitoring and intelligent signal
              control.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-green-500 px-4 py-2 rounded-full font-semibold animate-pulse">
                ● LIVE Monitoring
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                <FaMapMarkerAlt />
                Guntur Smart City
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                <FaClock />
                {formattedTime}
              </span>
            </div>
            <p className="mt-3 text-blue-100">{formattedDate}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="bg-white/15 backdrop-blur rounded-2xl p-5 text-center">
              <FaTrafficLight className="mx-auto text-4xl mb-3" />
              <h3 className="text-4xl font-bold">{junctions.length}</h3>
              <p className="text-blue-100">Total Junctions</p>
            </div>
            <div className="bg-white/15 backdrop-blur rounded-2xl p-5 text-center">
              <FaCar className="mx-auto text-4xl text-yellow-300 mb-3" />
              <h3 className="text-4xl font-bold">{totalVehicles}</h3>
              <p className="text-blue-100">Vehicles</p>
            </div>
            <div className="bg-white/15 backdrop-blur rounded-2xl p-5 text-center">
              <FaExclamationTriangle className="mx-auto text-4xl text-red-300 mb-3" />
              <h3 className="text-4xl font-bold">{heavyTraffic}</h3>
              <p className="text-blue-100">Heavy Traffic</p>
            </div>
            <div className="bg-white/15 backdrop-blur rounded-2xl p-5 text-center">
              <FaRobot className="mx-auto text-4xl text-green-300 mb-3" />
              <h3 className="text-4xl font-bold">{greenSignals}</h3>
              <p className="text-blue-100">Green Signals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <FaTrafficLight className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-gray-500">Active Junctions</h3>
          <p className="text-4xl font-bold mt-2">{junctions.length}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <FaCamera className="text-4xl text-green-600 mb-4" />
          <h3 className="text-gray-500">Cameras Online</h3>
          <p className="text-4xl font-bold mt-2">{junctions.length}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <FaRobot className="text-4xl text-purple-600 mb-4" />
          <h3 className="text-gray-500">AI Monitoring</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">Active</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <FaCheckCircle className="text-4xl text-green-600 mb-4" />
          <h3 className="text-gray-500">System Status</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">Healthy</p>
        </div>
      </div>

      {/* Add Junction Form */}
      <div className="bg-white rounded-3xl shadow-xl border p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          ➕ Add / Update Junction
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Junction Name"
            className="border rounded-xl p-3"
          />
          <select
            name="traffic"
            value={form.traffic}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option>Low</option>
            <option>Normal</option>
            <option>Moderate</option>
            <option>Heavy</option>
          </select>
          <select
            name="signal"
            value={form.signal}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option>Green</option>
            <option>Yellow</option>
            <option>Red</option>
          </select>
          <select
            name="camera"
            value={form.camera}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option>Online</option>
            <option>Offline</option>
          </select>
          <select
            name="ai"
            value={form.ai}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <select
            name="emergency"
            value={form.emergency}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-2 font-semibold shadow-lg"
          >
            {editing ? <FaSave /> : <FaPlus />}
            {editing ? "Update Junction" : "Add Junction"}
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-lg border p-6">
        <div className="flex items-center border rounded-xl px-4">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search Junction..."
            className="w-full p-3 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Junction Table */}
      <div className="bg-white rounded-2xl shadow-lg border overflow-hidden overflow-x-auto">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4">Junction</th>
              <th>Traffic</th>
              <th>Signal</th>
              <th>Vehicles</th>
              <th>Camera</th>
              <th>AI</th>
              <th>Emergency</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={9} className="p-6 text-center text-gray-500">
                  No junctions match your search.
                </td>
              </tr>
            )}
            {filtered.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50 text-center">
                <td className="p-4 font-semibold">{item.name}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      item.traffic === "Heavy"
                        ? "bg-red-600"
                        : item.traffic === "Moderate"
                        ? "bg-yellow-500"
                        : item.traffic === "Normal"
                        ? "bg-blue-600"
                        : "bg-green-600"
                    }`}
                  >
                    {item.traffic}
                  </span>
                </td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      item.signal === "Green"
                        ? "bg-green-600"
                        : item.signal === "Yellow"
                        ? "bg-yellow-500"
                        : "bg-red-600"
                    }`}
                  >
                    {item.signal}
                  </span>
                </td>
                <td className="font-bold">{item.vehicles}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      item.camera === "Online" ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {item.camera}
                  </span>
                </td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      item.ai === "Active" ? "bg-blue-600" : "bg-gray-600"
                    }`}
                  >
                    {item.ai}
                  </span>
                </td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      item.emergency === "Yes" ? "bg-red-600" : "bg-green-600"
                    }`}
                  >
                    {item.emergency}
                  </span>
                </td>
                <td>{item.updated}</td>
                <td>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* AI Recommendation Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-5">
            🤖 AI Recommendations
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700">
                Increase Green Signal
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Brodipet Junction is experiencing heavy traffic. Increase
                green signal duration by 20 seconds.
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-700">
                Traffic Congestion Alert
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Heavy vehicle density detected at NTR Bus Stand. Monitor
                continuously.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <h3 className="font-semibold text-red-700">Emergency Route</h3>
              <p className="text-gray-600 text-sm mt-1">
                Emergency vehicle detected. Give priority to ambulance
                movement.
              </p>
            </div>
          </div>
        </div>

        {/* Live Summary */}
        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-5">
            📊 Live Traffic Summary
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span>Total Junctions</span>
              <span className="font-bold text-blue-600">{junctions.length}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Total Vehicles</span>
              <span className="font-bold text-green-600">{totalVehicles}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Heavy Traffic</span>
              <span className="font-bold text-red-600">{heavyTraffic}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Green Signals</span>
              <span className="font-bold text-green-600">{greenSignals}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>AI Monitoring</span>
              <span className="font-bold text-blue-600">Active</span>
            </div>
            <div className="flex justify-between">
              <span>Last Updated</span>
              <span className="font-bold">{formattedTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficJunctionManager;