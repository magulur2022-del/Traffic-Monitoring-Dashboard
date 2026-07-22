import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getTrafficById, updateTraffic } from "../services/trafficService";

const EditTraffic = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    latitude: "",
    longitude: "",
    vehicleCount: "",
    congestionLevel: "Low",
    signal: "Green",
  });

  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadRecord();
  }, [id]);

  const loadRecord = async () => {
    try {
      setFetching(true);
      const data = await getTrafficById(id);
      setFormData({
        name: data.name ?? "",
        latitude: data.latitude ?? "",
        longitude: data.longitude ?? "",
        vehicleCount: data.vehicleCount ?? "",
        congestionLevel: data.congestionLevel ?? "Low",
        signal: data.signal ?? "Green",
      });
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load traffic record.");
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const trafficData = {
        ...formData,
        latitude: Number(formData.latitude),
        longitude: Number(formData.longitude),
        vehicleCount: Number(formData.vehicleCount),
      };
      await updateTraffic(id, trafficData);
      alert("Traffic record updated successfully!");
      navigate("/traffic-records");
    } catch (err) {
      console.error(err);
      setError(
        err?.response?.data?.message || "Failed to update traffic record."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="lg:ml-64 min-h-screen">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="p-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-2">
              🚦 Edit Traffic Record
            </h1>

            <p className="text-gray-500 mb-8">
              Update the details for this traffic monitoring location.
            </p>

            {error && (
              <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {fetching ? (
              <div className="text-center text-blue-600 py-10">
                Loading traffic record...
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block font-semibold mb-2">
                    Location Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Junction Name"
                    required
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Vehicle Count
                  </label>
                  <input
                    type="number"
                    name="vehicleCount"
                    value={formData.vehicleCount}
                    onChange={handleChange}
                    placeholder="Vehicle Count"
                    required
                    min="0"
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Latitude</label>
                  <input
                    type="number"
                    step="0.000001"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                    placeholder="Latitude"
                    required
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Longitude
                  </label>
                  <input
                    type="number"
                    step="0.000001"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                    placeholder="Longitude"
                    required
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Congestion Level
                  </label>
                  <select
                    name="congestionLevel"
                    value={formData.congestionLevel}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3"
                  >
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Heavy">Heavy</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Traffic Signal
                  </label>
                  <select
                    name="signal"
                    value={formData.signal}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3"
                  >
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Red">Red</option>
                  </select>
                </div>

                <div className="md:col-span-2 flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => navigate("/traffic-records")}
                    className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-6 py-3 rounded-lg text-white transition ${
                      loading
                        ? "bg-blue-300 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {loading ? "Saving..." : "Update Traffic Record"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditTraffic;