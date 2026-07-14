import { useEffect, useState } from "react";
import {
  FaCar,
  FaMotorcycle,
  FaBus,
  FaTruck,
  FaVideo,
  FaRobot,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const AIVehicleDetection = () => {
  const [cars, setCars] = useState(15);
  const [bikes, setBikes] = useState(8);
  const [buses, setBuses] = useState(2);
  const [trucks, setTrucks] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCars(Math.floor(Math.random() * 30) + 10);
      setBikes(Math.floor(Math.random() * 20) + 5);
      setBuses(Math.floor(Math.random() * 8) + 1);
      setTrucks(Math.floor(Math.random() * 10) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const total = cars + bikes + buses + trucks;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            🤖 AI Vehicle Detection
          </h2>

          <p className="text-gray-500">
            Smart AI Traffic Analysis
          </p>

        </div>

        <div className="flex items-center gap-3">

          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
            ● LIVE
          </span>

          <FaVideo className="text-3xl text-red-600" />

        </div>

      </div>

      {/* Camera */}

      <div className="relative">

        <img
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200"
          alt="Traffic Camera"
          className="rounded-xl w-full h-80 object-cover"
        />

        <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2">
          <FaRobot />
          AI Detection Running
        </div>

      </div>

      {/* Vehicle Cards */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">

        <div className="bg-blue-100 rounded-xl p-5 text-center">
          <FaCar className="mx-auto text-4xl text-blue-700 mb-2" />
          <h3 className="font-bold">Cars</h3>
          <p className="text-3xl font-bold">{cars}</p>
        </div>

        <div className="bg-green-100 rounded-xl p-5 text-center">
          <FaMotorcycle className="mx-auto text-4xl text-green-700 mb-2" />
          <h3 className="font-bold">Bikes</h3>
          <p className="text-3xl font-bold">{bikes}</p>
        </div>

        <div className="bg-yellow-100 rounded-xl p-5 text-center">
          <FaBus className="mx-auto text-4xl text-yellow-700 mb-2" />
          <h3 className="font-bold">Buses</h3>
          <p className="text-3xl font-bold">{buses}</p>
        </div>

        <div className="bg-red-100 rounded-xl p-5 text-center">
          <FaTruck className="mx-auto text-4xl text-red-700 mb-2" />
          <h3 className="font-bold">Trucks</h3>
          <p className="text-3xl font-bold">{trucks}</p>
        </div>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">

        <div className="bg-indigo-50 rounded-xl p-5 text-center">
          <h3 className="text-gray-500">Total Vehicles</h3>
          <p className="text-3xl font-bold text-indigo-600">
            {total}
          </p>
        </div>

        <div className="bg-green-50 rounded-xl p-5 text-center">
          <FaCheckCircle className="mx-auto text-3xl text-green-600 mb-2" />
          <h3 className="font-bold">Accuracy</h3>
          <p className="text-green-600 font-bold">
            98.6%
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-5 text-center">
          <FaRobot className="mx-auto text-3xl text-blue-600 mb-2" />
          <h3 className="font-bold">AI Status</h3>
          <p className="text-blue-600 font-bold">
            Active
          </p>
        </div>

        <div className="bg-orange-50 rounded-xl p-5 text-center">
          <FaClock className="mx-auto text-3xl text-orange-600 mb-2" />
          <h3 className="font-bold">Last Scan</h3>
          <p className="text-orange-600 font-bold">
            Just Now
          </p>
        </div>

      </div>

    </div>
  );
};

export default AIVehicleDetection;