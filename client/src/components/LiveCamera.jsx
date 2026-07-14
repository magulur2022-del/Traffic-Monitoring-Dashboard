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
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            📹 Live CCTV Monitoring
          </h2>

          <p className="text-gray-500">
            Smart Traffic Camera Surveillance
          </p>
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
            className="rounded-2xl overflow-hidden border shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Camera Image */}
            <div className="relative">
              <img
                src={camera.image}
                alt={camera.location}
                className="w-full h-60 object-cover"
              />

              <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <FaBroadcastTower />
                REC
              </div>

              <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs animate-pulse">
                LIVE
              </div>
            </div>

            {/* Camera Details */}
            <div className="p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">
                  {camera.location}
                </h3>

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

              <p className="text-gray-500 mt-2">
                Camera ID : {camera.id}
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="bg-blue-50 rounded-lg p-3 flex items-center gap-2">
                  <FaCar className="text-blue-600" />
                  <span>{camera.vehicles} Vehicles</span>
                </div>

                <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  <span>Guntur</span>
                </div>

                <div className="bg-yellow-50 rounded-lg p-3 flex items-center gap-2">
                  <FaExclamationTriangle className="text-orange-500" />
                  <span>{camera.incident}</span>
                </div>

                <div className="bg-green-50 rounded-lg p-3 flex items-center gap-2">
                  <FaClock className="text-green-600" />
                  <span>{camera.updated}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-5">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex justify-center items-center gap-2">
                  <FaEye />
                  View
                </button>

                <button className="flex-1 bg-gray-800 hover:bg-black text-white py-2 rounded-lg flex justify-center items-center gap-2">
                  <FaExpand />
                  Full Screen
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