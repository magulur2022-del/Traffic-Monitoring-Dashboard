import {
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

const currentTraffic = 1245;

// Simple prediction logic
const predictedTraffic = Math.round(currentTraffic * 1.18);

const TrafficPrediction = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          🤖 AI Traffic Prediction
        </h2>

        <FaChartLine className="text-3xl text-blue-600" />

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-blue-50 rounded-xl p-5 text-center">
          <h3 className="text-gray-500">
            Current Vehicles
          </h3>

          <p className="text-4xl font-bold text-blue-700 mt-3">
            {currentTraffic}
          </p>
        </div>

        <div className="bg-red-50 rounded-xl p-5 text-center">
          <h3 className="text-gray-500">
            Next Hour Prediction
          </h3>

          <p className="text-4xl font-bold text-red-700 mt-3">
            {predictedTraffic}
          </p>
        </div>

        <div className="bg-green-50 rounded-xl p-5">

          <div className="flex items-center gap-2 mb-3">

            <FaArrowUp className="text-red-600" />

            <h3 className="font-bold">
              Traffic Status
            </h3>

          </div>

          <p className="text-gray-700">
            Expected traffic will increase by
          </p>

          <p className="text-3xl font-bold text-red-600 mt-3">
            +18%
          </p>

        </div>

      </div>

    </div>
  );
};

export default TrafficPrediction;