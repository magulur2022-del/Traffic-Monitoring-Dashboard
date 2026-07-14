import { Link } from "react-router-dom";
import { FaMapMarkedAlt } from "react-icons/fa";

const MiniMap = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            🗺️ Guntur Traffic Map
          </h2>

          <p className="text-gray-600 mt-2">
            Quick preview of the live traffic monitoring map.
          </p>
        </div>

        <FaMapMarkedAlt className="text-5xl text-blue-600" />

      </div>

      <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-blue-300">

        <div className="text-center">

          <FaMapMarkedAlt className="text-6xl text-blue-600 mx-auto mb-4" />

          <h3 className="text-2xl font-bold text-gray-800">
            Live Guntur Map
          </h3>

          <p className="text-gray-600 mt-2">
            Click below to open the full interactive map.
          </p>

        </div>

      </div>

      <div className="mt-6 text-center">

        <Link
          to="/livemap"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          View Full Map
        </Link>

      </div>

    </div>
  );
};

export default MiniMap;