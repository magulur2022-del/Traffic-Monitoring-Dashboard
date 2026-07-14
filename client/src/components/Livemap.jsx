import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const trafficSignals = [
  {
    name: "Brodipet Junction",
    position: [16.3067, 80.4365],
    traffic: "Heavy",
    vehicles: 620,
    signal: "Red",
  },
  {
    name: "Lodge Center",
    position: [16.3045, 80.4410],
    traffic: "Moderate",
    vehicles: 420,
    signal: "Yellow",
  },
  {
    name: "NTR Bus Stand",
    position: [16.3148, 80.4335],
    traffic: "Heavy",
    vehicles: 910,
    signal: "Red",
  },
  {
    name: "Lakshmipuram",
    position: [16.3098, 80.4480],
    traffic: "Low",
    vehicles: 180,
    signal: "Green",
  },
  {
    name: "Kothapet",
    position: [16.2995, 80.4450],
    traffic: "Normal",
    vehicles: 320,
    signal: "Green",
  },
];

const getTrafficColor = (traffic) => {
  switch (traffic) {
    case "Heavy":
      return "text-red-600";
    case "Moderate":
      return "text-yellow-600";
    case "Low":
    case "Normal":
      return "text-green-600";
    default:
      return "text-gray-600";
  }
};

const getSignalBadge = (signal) => {
  switch (signal) {
    case "Red":
      return "bg-red-100 text-red-700";
    case "Yellow":
      return "bg-yellow-100 text-yellow-700";
    case "Green":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const LiveMap = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-8 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <p className="uppercase tracking-widest text-blue-100 text-sm font-semibold">
              Smart City Project
            </p>

            <h2 className="text-4xl font-extrabold mt-2">
              🗺️ Live Traffic Map
            </h2>

            <p className="mt-4 text-blue-100 text-lg leading-8 max-w-2xl">
              Monitor live traffic congestion, vehicle movement, signal status
              and road conditions across Guntur City.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <span className="bg-green-500 px-4 py-2 rounded-full font-semibold shadow-lg animate-pulse">
                ● LIVE Monitoring
              </span>

              <span className="bg-white/20 px-4 py-2 rounded-full">
                📍 Guntur Smart City
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/15 backdrop-blur rounded-2xl p-5 text-center">
              <h3 className="text-4xl font-bold">{trafficSignals.length}</h3>
              <p className="text-blue-100">Junctions</p>
            </div>

            <div className="bg-white/15 backdrop-blur rounded-2xl p-5 text-center">
              <h3 className="text-4xl font-bold">2450+</h3>
              <p className="text-blue-100">Vehicles</p>
            </div>

            <div className="bg-white/15 backdrop-blur rounded-2xl p-5 text-center">
              <h3 className="text-4xl font-bold">3</h3>
              <p className="text-blue-100">Incidents</p>
            </div>

            <div className="bg-white/15 backdrop-blur rounded-2xl p-5 text-center">
              <h3 className="text-4xl font-bold text-green-300">LIVE</h3>
              <p className="text-blue-100">Status</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-200 p-5">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              Normal
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              Moderate
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              Heavy
            </div>
          </div>

          <span className="text-gray-600 font-medium">
            Updated : Just Now
          </span>
        </div>
      </div>

      <div className="h-[550px]">
        <MapContainer
          center={[16.3067, 80.4365]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {trafficSignals.map((signal, index) => (
            <Marker key={index} position={signal.position} icon={markerIcon}>
              <Popup>
                <div className="min-w-[240px]">
                  <h3 className="font-bold text-lg">🚦 {signal.name}</h3>

                  <hr className="my-3" />

                  <p>
                    🚗 <strong>Vehicles:</strong> {signal.vehicles}
                  </p>

                  <p className={getTrafficColor(signal.traffic)}>
                    🚧 <strong>Traffic:</strong> {signal.traffic}
                  </p>

                  <div className="mt-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getSignalBadge(
                        signal.signal
                      )}`}
                    >
                      {signal.signal} Signal
                    </span>
                  </div>

                  <div className="mt-4 border-t pt-3">
                    <p className="text-green-600 font-semibold">
                      ● Live Monitoring Active
                    </p>

                    <p className="text-gray-500 text-sm">
                      Updated : Just Now
                    </p>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default LiveMap;