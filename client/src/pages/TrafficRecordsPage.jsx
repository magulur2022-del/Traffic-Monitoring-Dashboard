import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const junctions = [
  "Brodipet",
  "Lodge Center",
  "Lakshmipuram",
  "NTR Bus Stand",
  "Kothapet",
  "Arundelpet",
  "Collector Office",
];

const signals = ["Green", "Yellow", "Red"];

const events = [
  "Normal Traffic",
  "Heavy Traffic",
  "Accident Reported",
  "Emergency Vehicle",
  "Signal Changed",
];

const TrafficRecordsPage = () => {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");

  // Advanced Filters
  const [junctionFilter, setJunctionFilter] = useState("All");
  const [signalFilter, setSignalFilter] = useState("All");
  const [eventFilter, setEventFilter] = useState("All");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("trafficRecords")) || [];
    setRecords(stored);
    sessionStorage.setItem("lastVisited", "Traffic Records");
  }, []);

  const saveRecords = (updated) => {
    setRecords(updated);
    localStorage.setItem("trafficRecords", JSON.stringify(updated));
  };

  const generateTrafficRecord = () => {
    setRecords((prev) => {
      const newRecord = {
        id: Date.now() + Math.random(),
        time: new Date().toLocaleTimeString(),
        junction: junctions[Math.floor(Math.random() * junctions.length)],
        vehicles: Math.floor(Math.random() * 120) + 20,
        signal: signals[Math.floor(Math.random() * signals.length)],
        event: events[Math.floor(Math.random() * events.length)],
      };

      const updated = [newRecord, ...prev].slice(0, 100);
      localStorage.setItem("trafficRecords", JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const seed = setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        setTimeout(generateTrafficRecord, i * 300);
      }
    }, 0);

    const interval = setInterval(generateTrafficRecord, 15000);

    return () => {
      clearTimeout(seed);
      clearInterval(interval);
    };
  }, []);

  const deleteRecord = (id) => {
    const updated = records.filter((item) => item.id !== id);
    saveRecords(updated);
  };

  // PDF Export
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
      head: [["Time", "Junction", "Vehicles", "Signal", "Event"]],
      body: records.map((item) => [
        item.time,
        item.junction,
        item.vehicles,
        item.signal,
        item.event,
      ]),
      headStyles: {
        fillColor: [37, 99, 235],
      },
    });

    doc.save("Traffic_Records_Report.pdf");
  };

  // Excel Export
  const downloadExcel = () => {
    const excelData = records.map((item) => ({
      Time: item.time,
      Junction: item.junction,
      Vehicles: item.vehicles,
      Signal: item.signal,
      Event: item.event,
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Traffic Records");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(file, "Traffic_Records_Report.xlsx");
  };

  // Advanced Filtering
  const filteredRecords = records.filter((item) => {
    const matchSearch = item.junction
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchJunction =
      junctionFilter === "All" || item.junction === junctionFilter;

    const matchSignal = signalFilter === "All" || item.signal === signalFilter;

    const matchEvent = eventFilter === "All" || item.event === eventFilter;

    return matchSearch && matchJunction && matchSignal && matchEvent;
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">🚦 Live Traffic Records</h1>

      <p className="text-gray-600 mb-6">
        Last Visited :
        <span className="font-semibold text-blue-600">
          {" "}
          {sessionStorage.getItem("lastVisited")}
        </span>
      </p>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Total Records</h2>
          <p className="text-3xl font-bold text-blue-600">{records.length}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Total Vehicles</h2>
          <p className="text-3xl font-bold text-green-600">
            {records.reduce((sum, item) => sum + Number(item.vehicles), 0)}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Green Signals</h2>
          <p className="text-3xl font-bold text-emerald-600">
            {records.filter((item) => item.signal === "Green").length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Live Status</h2>
          <p className="text-2xl font-bold text-red-500 animate-pulse">
            ● Recording
          </p>
        </div>
      </div>

      {/* Search + Advanced Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search Junction..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg p-3"
        />

        <select
          value={junctionFilter}
          onChange={(e) => setJunctionFilter(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option value="All">All Junctions</option>
          {junctions.map((junction) => (
            <option key={junction} value={junction}>
              {junction}
            </option>
          ))}
        </select>

        <select
          value={signalFilter}
          onChange={(e) => setSignalFilter(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option value="All">All Signals</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Red">Red</option>
        </select>

        <select
          value={eventFilter}
          onChange={(e) => setEventFilter(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option value="All">All Events</option>
          {events.map((event) => (
            <option key={event} value={event}>
              {event}
            </option>
          ))}
        </select>
      </div>

      {/* AI Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <h3 className="font-bold text-blue-700">🤖 AI Live Recording</h3>
        <p className="text-blue-600 mt-2">
          Traffic records are automatically generated every 15 seconds.
        </p>
      </div>

      {/* Export Buttons */}
      <div className="flex justify-end gap-4 mb-6">
        <button
          onClick={downloadPDF}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow"
        >
          📄 Export PDF
        </button>

        <button
          onClick={downloadExcel}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow"
        >
          📊 Export Excel
        </button>
      </div>

      {/* Traffic Records Table */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3">Time</th>
              <th>Junction</th>
              <th>Vehicles</th>
              <th>Signal</th>
              <th>Event</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredRecords.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-8 text-gray-500">
                  No Traffic Records Available
                </td>
              </tr>
            ) : (
              filteredRecords.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 text-center transition"
                >
                  <td className="p-3">{item.time}</td>
                  <td className="font-semibold">{item.junction}</td>
                  <td className="font-bold text-blue-600">{item.vehicles}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
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
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                        item.event === "Emergency Vehicle"
                          ? "bg-red-600"
                          : item.event === "Heavy Traffic"
                          ? "bg-orange-500"
                          : item.event === "Accident Reported"
                          ? "bg-pink-600"
                          : item.event === "Signal Changed"
                          ? "bg-blue-600"
                          : "bg-green-600"
                      }`}
                    >
                      {item.event}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteRecord(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrafficRecordsPage;