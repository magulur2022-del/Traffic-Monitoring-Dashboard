import { useState, useEffect } from "react";

import {
  FaVideo,
  FaCircle,
  FaExpand,
  FaCar,
  FaEye,
  FaBroadcastTower,
  FaMapMarkerAlt,
  FaClock,
  FaExclamationTriangle,
  FaMotorcycle,
  FaBus,
  FaTruck,
  FaAmbulance,
  FaTrafficLight,
  FaMicrochip,
} from "react-icons/fa";

const cameras = [
  {
    id: "CAM-01",
    location: "Brodipet Junction",
    vehicles: 124,
    status: "Online",
    incident: "Normal",
    updated: "Just Now",
    image: "https://placehold.co/600x350?text=Camera+1",
  },
  {
    id: "CAM-02",
    location: "NTR Bus Stand",
    vehicles: 238,
    status: "Online",
    incident: "Accident",
    updated: "1 min ago",
    image: "https://placehold.co/600x350?text=Camera+2",
  },
  {
    id: "CAM-03",
    location: "Lodge Center",
    vehicles: 89,
    status: "Offline",
    incident: "Offline",
    updated: "5 mins ago",
    image: "https://placehold.co/600x350?text=Camera+3",
  },
  {
    id: "CAM-04",
    location: "Lakshmipuram",
    vehicles: 175,
    status: "Online",
    incident: "Heavy Traffic",
    updated: "Just Now",
    image: "https://placehold.co/600x350?text=Camera+4",
  },
];

const LiveCamera = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [recSeconds, setRecSeconds] = useState(0);

  const [aiData, setAiData] = useState({
    cars: 18,
    bikes: 32,
    buses: 3,
    trucks: 2,
    ambulance: 0,
    confidence: 97,
    signal: "GREEN",
  });

  useEffect(() => {
    const clock = setInterval(() => {
      setCurrentTime(new Date());
      setRecSeconds((prev) => prev + 1);
    }, 1000);

    const aiTimer = setInterval(() => {
      setAiData({
        cars: Math.floor(Math.random() * 20) + 10,
        bikes: Math.floor(Math.random() * 30) + 10,
        buses: Math.floor(Math.random() * 5) + 1,
        trucks: Math.floor(Math.random() * 5) + 1,
        ambulance: Math.random() > 0.85 ? 1 : 0,
        confidence: Math.floor(Math.random() * 5) + 95,
        signal: ["GREEN", "YELLOW", "RED"][Math.floor(Math.random() * 3)],
      });
    }, 5000);

    return () => {
      clearInterval(clock);
      clearInterval(aiTimer);
    };
  }, []);

  const formatREC = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  const formattedTime = currentTime.toLocaleTimeString("en-IN");
  const formattedDate = currentTime.toLocaleDateString("en-IN");

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">📹 Live CCTV Monitoring</h2>
          <p className="text-gray-500">Smart Traffic Camera Surveillance</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
            ● LIVE
          </span>
          <FaVideo className="text-3xl text-blue-600" />
        </div>
      </div>

      {/* Camera Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cameras.map((camera) => (
          <div
            key={camera.id}
            className="rounded-2xl overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Camera Feed */}
            <div className="relative">
              <img
                src={camera.image}
                alt={camera.location}
                className="w-full h-64 object-cover"
              />

              {/* REC */}
              <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-2 rounded-lg flex items-center gap-2">
                <FaBroadcastTower className="text-red-500 animate-pulse" />
                <span className="font-semibold">REC</span>
                <span className="text-red-400">{formatREC(recSeconds)}</span>
              </div>

              {/* LIVE */}
              <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs animate-pulse">
                LIVE
              </div>

              {/* Timestamp */}
              <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-2 rounded-lg text-xs">
                <div>{formattedDate}</div>
                <div>{formattedTime}</div>
              </div>

              {/* AI Detection Overlay */}
              <div className="absolute bottom-3 left-3 bg-black/75 text-white rounded-xl p-3 w-52">
                <h3 className="font-bold text-green-400 flex items-center gap-2 mb-2">
                  <FaMicrochip />
                  AI Detection
                </h3>

                <div className="space-y-1 text-sm">
                  <p className="flex justify-between">
                    <span>🚗 Cars</span>
                    <span>{aiData.cars}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>🏍 Bikes</span>
                    <span>{aiData.bikes}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>🚌 Buses</span>
                    <span>{aiData.buses}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>🚛 Trucks</span>
                    <span>{aiData.trucks}</span>
                  </p>
                  <p className="flex justify-between text-red-400 font-semibold">
                    <span>🚑 Ambulance</span>
                    <span>{aiData.ambulance}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Camera Details */}
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{camera.location}</h3>
                  <p className="text-gray-500 mt-1">
                    Camera ID : {camera.id}
                  </p>
                </div>

                <span
                  className={`flex items-center gap-2 font-semibold ${
                    camera.status === "Online"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <FaCircle className="text-xs" />
                  {camera.status}
                </span>
              </div>

              {/* Camera Information */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="bg-blue-50 rounded-xl p-3 flex items-center gap-3">
                  <FaCar className="text-blue-600 text-xl" />
                  <div>
                    <p className="text-xs text-gray-500">Vehicles</p>
                    <h4 className="font-bold">{camera.vehicles}</h4>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-3 flex items-center gap-3">
                  <FaMapMarkerAlt className="text-red-600 text-xl" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <h4 className="font-bold">Guntur</h4>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-3 flex items-center gap-3">
                  <FaExclamationTriangle className="text-yellow-500 text-xl" />
                  <div>
                    <p className="text-xs text-gray-500">Incident</p>
                    <h4 className="font-bold">{camera.incident}</h4>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-3 flex items-center gap-3">
                  <FaClock className="text-green-600 text-xl" />
                  <div>
                    <p className="text-xs text-gray-500">Updated</p>
                    <h4 className="font-bold">{camera.updated}</h4>
                  </div>
                </div>
              </div>

              {/* AI Detection Statistics */}
              <div className="mt-6">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-3">
                  <FaMicrochip className="text-indigo-600" />
                  AI Detection Statistics
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <FaCar className="mx-auto text-blue-600 text-xl mb-1" />
                    <p className="text-sm text-gray-500">Cars</p>
                    <h4 className="font-bold">{aiData.cars}</h4>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <FaMotorcycle className="mx-auto text-green-600 text-xl mb-1" />
                    <p className="text-sm text-gray-500">Bikes</p>
                    <h4 className="font-bold">{aiData.bikes}</h4>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-3 text-center">
                    <FaBus className="mx-auto text-yellow-600 text-xl mb-1" />
                    <p className="text-sm text-gray-500">Buses</p>
                    <h4 className="font-bold">{aiData.buses}</h4>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <FaTruck className="mx-auto text-purple-600 text-xl mb-1" />
                    <p className="text-sm text-gray-500">Trucks</p>
                    <h4 className="font-bold">{aiData.trucks}</h4>
                  </div>

                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <FaAmbulance className="mx-auto text-red-600 text-xl mb-1" />
                    <p className="text-sm text-gray-500">Emergency</p>
                    <h4 className="font-bold">{aiData.ambulance}</h4>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-3 text-center">
                    <FaMicrochip className="mx-auto text-indigo-600 text-xl mb-1" />
                    <p className="text-sm text-gray-500">AI Confidence</p>
                    <h4 className="font-bold">{aiData.confidence}%</h4>
                  </div>
                </div>
              </div>

              {/* Signal Status & Camera Performance */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-emerald-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaTrafficLight className="text-green-600" />
                    <span className="font-semibold">Signal Status</span>
                  </div>

                  <h2
                    className={`text-2xl font-bold ${
                      aiData.signal === "GREEN"
                        ? "text-green-600"
                        : aiData.signal === "YELLOW"
                        ? "text-yellow-500"
                        : "text-red-600"
                    }`}
                  >
                    {aiData.signal}
                  </h2>
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  <h3 className="font-semibold mb-3">Camera Health</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Resolution</span>
                      <span className="font-bold">1080P</span>
                    </div>

                    <div className="flex justify-between">
                      <span>FPS</span>
                      <span className="font-bold">30 FPS</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Network</span>
                      <span className="text-green-600 font-bold">
                        Excellent
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition">
                  <FaEye />
                  View Camera
                </button>

                <button className="flex-1 bg-gray-800 hover:bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 transition">
                  <FaExpand />
                  Full Screen
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <button
                  onClick={() =>
                    alert(`📸 Snapshot captured from ${camera.location}`)
                  }
                  className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  📸 Capture Snapshot
                </button>

                <button
                  onClick={() =>
                    alert(`⬇ Download started for ${camera.id}`)
                  }
                  className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  📥 Download Image
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveCamera;