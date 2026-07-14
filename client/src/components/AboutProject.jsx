import {
  FaProjectDiagram,
  FaUserGraduate,
  FaUniversity,
  FaLaptopCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

const projectInfo = [
  {
    title: "Project Name",
    value: "Smart Traffic Monitoring Dashboard",
    icon: <FaProjectDiagram />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Developed By",
    value: "Nagamani Maguluri",
    icon: <FaUserGraduate />,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Department",
    value: "Electronics and Communication Engineering",
    icon: <FaUniversity />,
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    title: "Technologies Used",
    value: "React.js, Vite, Tailwind CSS, Recharts",
    icon: <FaLaptopCode />,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Project Location",
    value: "Guntur, Andhra Pradesh",
    icon: <FaMapMarkerAlt />,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

const AboutProject = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        📘 About Project
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectInfo.map((item, i) => (
          <div
            key={i}
            className="flex items-start sm:items-center gap-4 bg-gray-50 rounded-xl p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div
              className={`${item.bg} ${item.color} w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0`}
            >
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-500 text-sm">
                {item.title}
              </h3>
              <p className="text-gray-800 font-medium mt-0.5">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 rounded-xl p-5 sm:p-6 border border-blue-100">
        <h3 className="font-bold text-lg text-gray-900 mb-3">
          📄 Project Description
        </h3>

        <p className="text-gray-700 leading-7">
          This Smart Traffic Monitoring Dashboard is designed to monitor
          traffic flow, traffic signals, CCTV cameras, weather conditions,
          notifications and generate reports in real time. The dashboard
          helps traffic administrators monitor congestion and improve
          traffic management using a simple web interface.
        </p>
      </div>
    </div>
  );
};

export default AboutProject;