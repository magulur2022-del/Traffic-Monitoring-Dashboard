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
  FaAmbulance,
  FaBell,
  FaTrafficLight,
  FaMicrochip,
} from "react-icons/fa";

const AIVehicleDetection = () => {

  const [cars, setCars] = useState(15);
  const [bikes, setBikes] = useState(8);
  const [buses, setBuses] = useState(2);
  const [trucks, setTrucks] = useState(3);

  const [ambulance, setAmbulance] = useState(0);

  const [confidence, setConfidence] = useState(98.6);

  const [lastScan, setLastScan] = useState("");

  const [trafficStatus, setTrafficStatus] = useState("Low");

  const [signalStatus, setSignalStatus] = useState("GREEN");

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {

    const clock = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(clock);

  }, []);

  useEffect(() => {

    const interval = setInterval(() => {

      const newCars = Math.floor(Math.random() * 30) + 10;

      const newBikes = Math.floor(Math.random() * 20) + 5;

      const newBuses = Math.floor(Math.random() * 8) + 1;

      const newTrucks = Math.floor(Math.random() * 10) + 1;

      const emergency = Math.random() > 0.85 ? 1 : 0;

      const total =
        newCars +
        newBikes +
        newBuses +
        newTrucks;

      setCars(newCars);
      setBikes(newBikes);
      setBuses(newBuses);
      setTrucks(newTrucks);

      setAmbulance(emergency);

      setConfidence(
        (95 + Math.random() * 4).toFixed(1)
      );

      setLastScan(
        new Date().toLocaleTimeString()
      );

      if (total < 40) {
        setTrafficStatus("Low");
        setSignalStatus("GREEN");
      } else if (total < 60) {
        setTrafficStatus("Medium");
        setSignalStatus("YELLOW");
      } else {
        setTrafficStatus("Heavy");
        setSignalStatus("RED");
      }

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const total =
    cars +
    bikes +
    buses +
    trucks +
    ambulance;

  const formattedDate =
    currentTime.toLocaleDateString("en-IN");

  const formattedTime =
    currentTime.toLocaleTimeString("en-IN");  return (

    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            🤖 AI Vehicle Detection
          </h2>

          <p className="text-gray-500">
            YOLOv8 Powered Smart Traffic Analysis
          </p>

        </div>

        <div className="flex items-center gap-3">

          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
            ● LIVE
          </span>

          <FaVideo className="text-3xl text-red-600" />

        </div>

      </div>

      {/* Live Camera */}

      <div className="relative">

        <img
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200"
          alt="Traffic Camera"
          className="rounded-xl w-full h-80 object-cover"
        />

        {/* AI Running */}

        <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2">

          <FaRobot />

          AI Detection Running

        </div>

        {/* LIVE */}

        <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full animate-pulse">

          LIVE

        </div>

        {/* Date & Time */}

        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg">

          <p>{formattedDate}</p>

          <p>{formattedTime}</p>

        </div>

      </div>

      {/* Emergency Alert */}

      {ambulance > 0 && (

        <div className="mt-6 bg-red-600 text-white rounded-xl p-5 flex justify-between items-center animate-pulse shadow-lg">

          <div className="flex items-center gap-4">

            <FaAmbulance className="text-4xl" />

            <div>

              <h2 className="text-xl font-bold">
                Emergency Vehicle Detected
              </h2>

              <p>
                AI recommends Green Signal Priority.
              </p>

            </div>

          </div>

          <FaBell className="text-3xl animate-bounce" />

        </div>

      )}

      {/* Vehicle Detection Cards */}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-6">

        <div className="bg-blue-100 rounded-xl p-5 text-center">

          <FaCar className="mx-auto text-4xl text-blue-700 mb-2" />

          <h3 className="font-bold">Cars</h3>

          <p className="text-3xl font-bold">
            {cars}
          </p>

        </div>

        <div className="bg-green-100 rounded-xl p-5 text-center">

          <FaMotorcycle className="mx-auto text-4xl text-green-700 mb-2" />

          <h3 className="font-bold">Bikes</h3>

          <p className="text-3xl font-bold">
            {bikes}
          </p>

        </div>

        <div className="bg-yellow-100 rounded-xl p-5 text-center">

          <FaBus className="mx-auto text-4xl text-yellow-700 mb-2" />

          <h3 className="font-bold">Buses</h3>

          <p className="text-3xl font-bold">
            {buses}
          </p>

        </div>

        <div className="bg-red-100 rounded-xl p-5 text-center">

          <FaTruck className="mx-auto text-4xl text-red-700 mb-2" />

          <h3 className="font-bold">Trucks</h3>

          <p className="text-3xl font-bold">
            {trucks}
          </p>

        </div>

        <div className="bg-pink-100 rounded-xl p-5 text-center">

          <FaAmbulance className="mx-auto text-4xl text-pink-700 mb-2" />

          <h3 className="font-bold">
            Ambulance
          </h3>

          <p className="text-3xl font-bold">
            {ambulance}
          </p>

        </div>

      </div>      {/* AI Summary */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">

        <div className="bg-indigo-50 rounded-xl p-5 text-center shadow">

          <h3 className="text-gray-500 font-medium">
            Total Vehicles
          </h3>

          <p className="text-4xl font-bold text-indigo-600 mt-2">
            {total}
          </p>

        </div>

        <div className="bg-green-50 rounded-xl p-5 text-center shadow">

          <FaCheckCircle className="mx-auto text-3xl text-green-600 mb-2" />

          <h3 className="font-semibold">
            AI Confidence
          </h3>

          <p className="text-2xl font-bold text-green-600 mt-2">
            {confidence}%
          </p>

        </div>

        <div className="bg-blue-50 rounded-xl p-5 text-center shadow">

          <FaRobot className="mx-auto text-3xl text-blue-600 mb-2" />

          <h3 className="font-semibold">
            AI Engine
          </h3>

          <p className="font-bold text-blue-700 mt-2">
            YOLOv8 Active
          </p>

        </div>

        <div className="bg-orange-50 rounded-xl p-5 text-center shadow">

          <FaClock className="mx-auto text-3xl text-orange-600 mb-2" />

          <h3 className="font-semibold">
            Last Scan
          </h3>

          <p className="font-bold text-orange-600 mt-2">
            {lastScan}
          </p>

        </div>

      </div>

      {/* Traffic Status */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        <div className="bg-white border rounded-xl shadow p-6">

          <div className="flex items-center gap-3 mb-4">

            <FaTrafficLight className="text-3xl text-green-600" />

            <h3 className="text-xl font-bold">
              Traffic Density
            </h3>

          </div>

          <div
            className={`text-3xl font-bold ${
              trafficStatus === "Low"
                ? "text-green-600"
                : trafficStatus === "Medium"
                ? "text-yellow-500"
                : "text-red-600"
            }`}
          >
            {trafficStatus}
          </div>

          <p className="text-gray-500 mt-2">
            AI automatically estimates traffic congestion based on
            detected vehicles.
          </p>

        </div>

        <div className="bg-white border rounded-xl shadow p-6">

          <div className="flex items-center gap-3 mb-4">

            <FaMicrochip className="text-3xl text-indigo-600" />

            <h3 className="text-xl font-bold">
              Signal Recommendation
            </h3>

          </div>

          <div
            className={`text-3xl font-bold ${
              signalStatus === "GREEN"
                ? "text-green-600"
                : signalStatus === "YELLOW"
                ? "text-yellow-500"
                : "text-red-600"
            }`}
          >
            🚦 {signalStatus}
          </div>

          <p className="text-gray-500 mt-2">
            AI recommends the optimal signal state based on
            current traffic conditions.
          </p>

        </div>

      </div>

    </div>

  );

};

export default AIVehicleDetection;