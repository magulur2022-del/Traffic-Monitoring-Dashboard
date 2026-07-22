import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {
  getAllTraffic,
  deleteTraffic,
} from "../services/trafficService";

const TrafficRecordsPage = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [junctionFilter, setJunctionFilter] = useState("All");
  const [signalFilter, setSignalFilter] = useState("All");
  const [congestionFilter, setCongestionFilter] = useState("All");

  useEffect(() => {
    loadTrafficRecords();
    sessionStorage.setItem("lastVisited", "Traffic Records");
  }, []);

  const loadTrafficRecords = async () => {
    try {
      setLoading(true);
      const data = await getAllTraffic();
      setRecords(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load traffic records.");
    } finally {
      setLoading(false);
    }
  };

  const deleteRecord = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this traffic record?"
    );
    if (!confirmDelete) return;
    try {
      await deleteTraffic(id);
      await loadTrafficRecords();
      alert("Traffic record deleted successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to delete traffic record.");
    }
  };

  const totalVehicles = records.reduce(
    (sum, item) => sum + Number(item.vehicleCount || 0),
    0
  );
  const totalGreenSignals = records.filter(
    (item) => item.signal === "Green"
  ).length;
  const totalHeavyTraffic = records.filter(
    (item) => item.congestionLevel === "Heavy"
  ).length;

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.setTextColor(0, 102, 204);
    doc.text("Smart Traffic Monitoring Dashboard", 14, 18);
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Traffic Records Report", 14, 28);
    doc.setFontSize(10);
    doc.text(`Generated : ${new Date().toLocaleString()}`, 14, 36);
    autoTable(doc, {
      startY: 45,
      head: [["Location", "Vehicle Count", "Congestion", "Signal"]],
      body: records.map((item) => [
        item.name,
        item.vehicleCount,
        item.congestionLevel,
        item.signal,
      ]),
      headStyles: {
        fillColor: [37, 99, 235],
      },
    });
    doc.save("Traffic_Records_Report.pdf");
  };

  const downloadExcel = () => {
    const excelData = records.map((item) => ({
      Location: item.name,
      Vehicles: item.vehicleCount,
      Congestion: item.congestionLevel,
      Signal: item.signal,
    }));
    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Traffic Records");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const file = new Blob([excelBuffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });
    saveAs(file, "Traffic_Records_Report.xlsx");
  };

  const filteredRecords = records.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchJunction =
      junctionFilter === "All" || item.name === junctionFilter;
    const matchSignal = signalFilter === "All" || item.signal === signalFilter;
    const matchCongestion =
      congestionFilter === "All" || item.congestionLevel === congestionFilter;
    return matchSearch && matchJunction && matchSignal && matchCongestion;
  });

  const junctions = ["All", ...new Set(records.map((item) => item.name))];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              🚦 Traffic Records
            </h1>
            <p className="text-gray-500 mt-2">
              View and manage all traffic monitoring records.
            </p>
          </div>

          <div className="flex gap-3 mt-5 md:mt-0">
            <button
              onClick={() => navigate("/add-traffic")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow"
            >
              + Add Record
            </button>

            <button
              onClick={downloadPDF}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow"
            >
              Export PDF
            </button>

            <button
              onClick={downloadExcel}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow"
            >
              Export Excel
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500 text-sm">Total Locations</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {records.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500 text-sm">Total Vehicles</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {totalVehicles}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500 text-sm">Heavy Traffic</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">
              {totalHeavyTraffic}
            </p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search by Location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <select
              value={junctionFilter}
              onChange={(e) => setJunctionFilter(e.target.value)}
              className="border rounded-lg px-4 py-2"
            >
              {junctions.map((junction) => (
                <option key={junction} value={junction}>
                  {junction}
                </option>
              ))}
            </select>

            <select
              value={signalFilter}
              onChange={(e) => setSignalFilter(e.target.value)}
              className="border rounded-lg px-4 py-2"
            >
              <option value="All">All Signals</option>
              <option value="Green">Green</option>
              <option value="Yellow">Yellow</option>
              <option value="Red">Red</option>
            </select>

            <select
              value={congestionFilter}
              onChange={(e) => setCongestionFilter(e.target.value)}
              className="border rounded-lg px-4 py-2"
            >
              <option value="All">All Congestion</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="Heavy">Heavy</option>
            </select>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="bg-white rounded-xl shadow p-8 text-center text-blue-600 text-lg">
            Loading traffic records...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 rounded-lg p-4 mb-6">
            {error}
          </div>
        )}

        {/* Table */}
        {!loading && !error && (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Location</th>
                    <th className="px-6 py-4 text-center">Vehicle Count</th>
                    <th className="px-6 py-4 text-center">Congestion</th>
                    <th className="px-6 py-4 text-center">Signal</th>
                    <th className="px-6 py-4 text-center">Created</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.length > 0 ? (
                    filteredRecords.map((item) => (
                      <tr key={item._id} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold">{item.name}</td>
                        <td className="px-6 py-4 text-center">
                          {item.vehicleCount}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={`px-3 py-1 rounded-full text-white text-sm ${
                              item.congestionLevel === "Heavy"
                                ? "bg-red-500"
                                : item.congestionLevel === "Moderate"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                            }`}
                          >
                            {item.congestionLevel}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
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
                        <td className="px-6 py-4 text-center">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => navigate(`/traffic-details/${item._id}`)}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                            >
                              View
                            </button>
                            <button
                              onClick={() => navigate(`/edit-traffic/${item._id}`)}
                              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteRecord(item._id)}
                              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-10 text-gray-500">
                        No traffic records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrafficRecordsPage;