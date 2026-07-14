import {
  FaCloudSun,
  FaTemperatureHigh,
  FaWind,
  FaTint,
} from "react-icons/fa";

const WeatherCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-bold mb-6">
        🌤 Weather Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-yellow-50 rounded-xl p-5 text-center">
          <FaCloudSun className="text-yellow-500 text-5xl mx-auto mb-3" />
          <h3 className="font-bold text-lg">Condition</h3>
          <p className="text-gray-600">Sunny</p>
        </div>

        <div className="bg-red-50 rounded-xl p-5 text-center">
          <FaTemperatureHigh className="text-red-500 text-5xl mx-auto mb-3" />
          <h3 className="font-bold text-lg">Temperature</h3>
          <p className="text-gray-600">34°C</p>
        </div>

        <div className="bg-blue-50 rounded-xl p-5 text-center">
          <FaWind className="text-blue-500 text-5xl mx-auto mb-3" />
          <h3 className="font-bold text-lg">Wind Speed</h3>
          <p className="text-gray-600">14 km/h</p>
        </div>

        <div className="bg-green-50 rounded-xl p-5 text-center">
          <FaTint className="text-cyan-500 text-5xl mx-auto mb-3" />
          <h3 className="font-bold text-lg">Humidity</h3>
          <p className="text-gray-600">65%</p>
        </div>

      </div>

      <div className="mt-6 bg-gray-100 rounded-xl p-4 flex justify-between items-center">

        <div>
          <h3 className="font-bold text-lg">
            📍 Location
          </h3>

          <p className="text-gray-600">
            Guntur, Andhra Pradesh
          </p>
        </div>

        <div className="text-right">
          <h3 className="font-bold text-lg">
            Air Quality
          </h3>

          <p className="text-green-600 font-semibold">
            Good (AQI 48)
          </p>
        </div>

      </div>
    </div>
  );
};

export default WeatherCard;