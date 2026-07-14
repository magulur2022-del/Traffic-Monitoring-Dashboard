import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import {
  FaFilePdf,
  FaFileExcel,
  FaCar,
  FaTrafficLight,
  FaExclamationTriangle,
} from "react-icons/fa";

const reports = [
  {
    title: "Daily Traffic Report",
    date: "Today",
    vehicles: 1245,
    signals: 18,
    incidents: 3,
  },
  {
    title: "Weekly Traffic Report",
    date: "Last 7 Days",
    vehicles: 8754,
    signals: 18,
    incidents: 11,
  },
  {
    title: "Monthly Traffic Report",
    date: "July 2026",
    vehicles: 35620,
    signals: 18,
    incidents: 38,
  },
];

const Reports = () => {
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
        ["Vehicles", report.vehicles],
        ["Signals", report.signals],
        ["Incidents", report.incidents],
      ],
    });

    doc.save(`${report.title}.pdf`);
  };

  const downloadExcel = (report) => {
    const data = [
      {
        Report: report.title,
        Date: report.date,
        Vehicles: report.vehicles,
        Signals: report.signals,
        Incidents: report.incidents,
      },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Traffic Report"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(file, `${report.title}.xlsx`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      <h2 className="text-2xl font-bold mb-6">
        📄 Traffic Reports
      </h2>

      <div className="space-y-6">

        {reports.map((report, index) => (

          <div
            key={index}
            className="border rounded-xl p-5 hover:shadow-lg transition"
          >

            <div className="flex justify-between items-center">

              <div>
                <h3 className="text-xl font-bold">
                  {report.title}
                </h3>

                <p className="text-gray-500">
                  {report.date}
                </p>
              </div>

              <div className="flex gap-3">

                <button
                  onClick={() => downloadPDF(report)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaFilePdf />
                  PDF
                </button>

                <button
                  onClick={() => downloadExcel(report)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaFileExcel />
                  Excel
                </button>

              </div>

            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">

              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <FaCar className="text-3xl text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold">Vehicles</h4>
                <p>{report.vehicles}</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 text-center">
                <FaTrafficLight className="text-3xl text-green-600 mx-auto mb-2" />
                <h4 className="font-bold">Signals</h4>
                <p>{report.signals}</p>
              </div>

              <div className="bg-red-50 rounded-lg p-4 text-center">
                <FaExclamationTriangle className="text-3xl text-red-600 mx-auto mb-2" />
                <h4 className="font-bold">Incidents</h4>
                <p>{report.incidents}</p>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Reports;