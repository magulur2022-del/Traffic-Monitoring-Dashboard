import { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

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
  const [trafficSignals, setTrafficSignals] = useState([]);

  useEffect(() => {
    const fetchTraffic = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/traffic");
        setTrafficSignals(response.data);
      } catch (error) {
        console.error("Error fetching traffic:", error);
      }
    };

    fetchTraffic();
  }, []);

  return (
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

        {trafficSignals.map((signal) => (
          <Marker
            key={signal._id}
            position={[signal.latitude, signal.longitude]}
            icon={markerIcon}
          >
            <Popup>
              <div className="min-w-[240px]">
                <h3 className="font-bold text-lg">🚦 {signal.name}</h3>

                <hr className="my-3" />

                <p>
                  🚗 <strong>Vehicles:</strong> {signal.vehicleCount}
                </p>

                <p className={getTrafficColor(signal.congestionLevel)}>
                  🚧 <strong>Traffic:</strong> {signal.congestionLevel}
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
                  <p className="text-gray-500 text-sm">Updated : Just Now</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LiveMap;