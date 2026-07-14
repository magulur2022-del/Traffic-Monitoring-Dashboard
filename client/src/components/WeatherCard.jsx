import {
  FaCloudSun,
  FaTemperatureHigh,
  FaWind,
  FaTint,
  FaSun,
  FaMoon,
  FaSmog,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const WeatherCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            🌤 Weather Dashboard
          </h2>

          <p className="text-gray-500">
            Guntur, Andhra Pradesh
          </p>
        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
          LIVE
        </span>

      </div>

      {/* Main Weather */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-6 text-white">

          <FaCloudSun className="text-6xl mb-4" />

          <h1 className="text-5xl font-bold">
            34°C
          </h1>

          <p className="text-xl mt-2">
            Sunny
          </p>

          <p className="mt-4 flex items-center gap-2">
            <FaMapMarkerAlt />
            Guntur City
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-red-50 rounded-xl p-5 text-center">

            <FaTemperatureHigh className="text-4xl text-red-500 mx-auto mb-3" />

            <h3 className="font-bold">
              Temperature
            </h3>

            <p className="text-gray-600">
              34°C
            </p>

          </div>

          <div className="bg-cyan-50 rounded-xl p-5 text-center">

            <FaTint className="text-4xl text-cyan-500 mx-auto mb-3" />

            <h3 className="font-bold">
              Humidity
            </h3>

            <p className="text-gray-600">
              65%
            </p>

          </div>

          <div className="bg-blue-50 rounded-xl p-5 text-center">

            <FaWind className="text-4xl text-blue-500 mx-auto mb-3" />

            <h3 className="font-bold">
              Wind Speed
            </h3>

            <p className="text-gray-600">
              14 km/h
            </p>

          </div>

          <div className="bg-green-50 rounded-xl p-5 text-center">

            <FaSmog className="text-4xl text-green-500 mx-auto mb-3" />

            <h3 className="font-bold">
              Air Quality
            </h3>

            <p className="text-green-600 font-semibold">
              Good (AQI 48)
            </p>

          </div>

        </div>

      </div>

      {/* Extra Information */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

        <div className="bg-gray-100 rounded-xl p-4 text-center">

          <FaSun className="text-yellow-500 text-3xl mx-auto mb-2" />

          <p className="font-bold">
            Sunrise
          </p>

          <p className="text-gray-600">
            5:46 AM
          </p>

        </div>

        <div className="bg-gray-100 rounded-xl p-4 text-center">

          <FaMoon className="text-indigo-500 text-3xl mx-auto mb-2" />

          <p className="font-bold">
            Sunset
          </p>

          <p className="text-gray-600">
            6:42 PM
          </p>

        </div>

        <div className="bg-gray-100 rounded-xl p-4 text-center">

          <h3 className="text-3xl font-bold text-orange-500">
            UV
          </h3>

          <p className="font-bold mt-2">
            Index
          </p>

          <p className="text-gray-600">
            7 / 10
          </p>

        </div>

        <div className="bg-gray-100 rounded-xl p-4 text-center">

          <FaClock className="text-blue-500 text-3xl mx-auto mb-2" />

          <p className="font-bold">
            Updated
          </p>

          <p className="text-gray-600">
            Just Now
          </p>

        </div>

      </div>

    </div>
  );
};

export default WeatherCard;