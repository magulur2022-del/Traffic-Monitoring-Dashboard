import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white rounded-2xl mt-8 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Project */}
        <div>
          <h2 className="text-2xl font-bold">
            🚦 Smart Traffic Monitoring Dashboard
          </h2>

          <p className="mt-3 text-gray-300">
            Real-Time Traffic Monitoring System for Guntur City.
          </p>
        </div>

        {/* Developer */}
        <div>
          <h3 className="text-xl font-bold mb-3">
            👨‍💻 Developed By
          </h3>

          <p>Nagamani Maguluri</p>
          <p>B.Tech - ECE</p>

          <div className="flex gap-4 mt-4">
            <FaGithub className="text-2xl hover:text-blue-400 cursor-pointer" />
            <FaLinkedin className="text-2xl hover:text-blue-400 cursor-pointer" />
            <FaEnvelope className="text-2xl hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-xl font-bold mb-3">
            📍 Location
          </h3>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Guntur, Andhra Pradesh</span>
          </div>

          <p className="mt-4 text-gray-300">
            React.js | Tailwind CSS | Vite | Recharts
          </p>
        </div>

      </div>

      <hr className="my-6 border-gray-600" />

      <p className="text-center text-gray-400">
        © 2026 Smart Traffic Monitoring Dashboard | Developed by Nagamani Maguluri
      </p>
    </footer>
  );
};

export default Footer;