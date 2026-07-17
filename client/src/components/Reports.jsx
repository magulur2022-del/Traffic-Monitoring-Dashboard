import { useState, useEffect } from "react";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import ReportCharts from "./ReportCharts";

import {
  FaFilePdf,
  FaFileExcel,
  FaPrint,
  FaSearch,
  FaCar,
  FaTrafficLight,
  FaExclamationTriangle,
} from "react-icons/fa";

const Reports = () => {
  const [trafficRecords, setTrafficRecords] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("trafficRecords")) || [];

    setTrafficRecords(stored);
  }, []);

  const totalVehicles = trafficRecords.reduce(
    (sum, item) => sum + Number(item.vehicles),
    0
  );

  const greenSignals = trafficRecords.filter(
    (item) => item.signal === "Green"
  ).length;

  const yellowSignals = trafficRecords.filter(
    (item) => item.signal === "Yellow"
  ).length;

  const redSignals = trafficRecords.filter(
    (item) => item.signal === "Red"
  ).length;

  const reports = [
    {
      title: "Traffic Records Report",
      date: new Date().toLocaleDateString(),
      vehicles: totalVehicles,
      signals: trafficRecords.length,
      incidents: redSignals,
      status: "Completed",
    },
  ];

  const filteredReports = reports.filter((report) =>
    report.title.toLowerCase().includes(search.toLowerCase())
  );

  const downloadPDF = (report) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Smart Traffic Monitoring Dashboard", 20, 20);

    doc.setFontSize(13);
    doc.text(report.title, 20, 35);
    doc.text(`Date: ${report.date}`, 20, 45);

    autoTable(doc, {
      startY: 60,
      head: [["Category", "Value"]],
      body: [
        ["Total Vehicles", report.vehicles],
        ["Green Signals", greenSignals],
        ["Yellow Signals", yellowSignals],
        ["Red Signals", redSignals],
        ["Total Records", trafficRecords.length],
      ],
    });

    doc.save("Traffic_Report.pdf");
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(trafficRecords);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Traffic Records");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(file, "Traffic_Report.xlsx");
  };

  const printReport = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">📄 Traffic Reports</h2>

        <div className="relative">
          <FaSearch className="absolute left-3 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search Report..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg pl-10 pr-4 py-3 w-full md:w-80"
          />
        </div>
      </div>

      <div className="space-y-6">
        {filteredReports.map((report, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{report.title}</h3>
                <p className="text-gray-500">{report.date}</p>
              </div>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                {report.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <FaCar className="text-3xl text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold">Vehicles</h4>
                <p className="text-2xl font-bold">{report.vehicles}</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 text-center">
                <FaTrafficLight className="text-3xl text-green-600 mx-auto mb-2" />
                <h4 className="font-bold">Signals</h4>
                <p className="text-2xl font-bold">{report.signals}</p>
              </div>

              <div className="bg-red-50 rounded-lg p-4 text-center">
                <FaExclamationTriangle className="text-3xl text-red-600 mx-auto mb-2" />
                <h4 className="font-bold">Incidents</h4>
                <p className="text-2xl font-bold">{report.incidents}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={() => downloadPDF(report)}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
              >
                <FaFilePdf />
                Download PDF
              </button>

              <button
                onClick={downloadExcel}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
              >
                <FaFileExcel />
                Download Excel
              </button>

              <button
                onClick={printReport}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
              >
                <FaPrint />
                Print Report
              </button>
            </div>
          </div>
        ))}

        {filteredReports.length === 0 && (
          <div className="text-center py-10 text-gray-500 text-lg">
            No Reports Found
          </div>
        )}
      </div>

      {/* Charts */}
      <ReportCharts trafficRecords={trafficRecords} />
    </div>
  );
};

export default Reports;