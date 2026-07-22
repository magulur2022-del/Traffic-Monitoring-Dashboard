import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getTrafficById } from "../services/trafficService";

const TrafficDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadRecord();
  }, [id]);

  const loadRecord = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getTrafficById(id);
      setRecord(data);
    } catch (err) {
      console.error(err);
      if (err?.response?.status === 404) {
        setError("Traffic record not found.");
      } else if (err?.response) {
        setError(
          err?.response?.data?.message || "Failed to load traffic record."
        );
      } else if (err?.request) {
        setError("Cannot reach the server. Please check your connection.");
      } else {
        setError("Something went wrong while loading this record.");
      }
    } finally {
      setLoading(false);
    }
  };

  const congestionColor = (level) =>
    level === "Heavy"
      ? "bg-red-500"
      : level === "Moderate"
      ? "bg-yellow-500"
      : "bg-green-500";

  const signalColor = (signal) =>
    signal === "Green"
      ? "bg-green-600"
      : signal === "Yellow"
      ? "bg-yellow-500"
      : "bg-red-600";

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="lg:ml-64 min-h-screen">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="p-6">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-blue-700">
                🚦 Traffic Record Details
              </h1>
              <button
                onClick={() => navigate("/traffic-records")}
                className="px-5 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition"
              >
                Back
              </button>
            </div>

            {loading && (
              <div className="text-center text-blue-600 py-10">
                Loading traffic record...
              </div>
            )}

            {!loading && error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {!loading && !error && record && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-500 text-sm">Location Name</p>
                  <p className="text-lg font-semibold">{record.name}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Vehicle Count</p>
                  <p className="text-lg font-semibold">
                    {record.vehicleCount}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Latitude</p>
                  <p className="text-lg font-semibold">{record.latitude}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Longitude</p>
                  <p className="text-lg font-semibold">{record.longitude}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Congestion Level</p>
                  <span
                    className={`inline-block mt-1 px-3 py-1 rounded-full text-white text-sm ${congestionColor(
                      record.congestionLevel
                    )}`}
                  >
                    {record.congestionLevel}
                  </span>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Traffic Signal</p>
                  <span
                    className={`inline-block mt-1 px-3 py-1 rounded-full text-white text-sm ${signalColor(
                      record.signal
                    )}`}
                  >
                    {record.signal}
                  </span>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Created At</p>
                  <p className="text-lg font-semibold">
                    {record.createdAt
                      ? new Date(record.createdAt).toLocaleString()
                      : "—"}
                  </p>
                </div>

                <div className="md:col-span-2 flex justify-end gap-4 mt-4">
                  <button
                    onClick={() => navigate(`/edit-traffic/${record._id}`)}
                    className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition"
                  >
                    Edit Record
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TrafficDetails;