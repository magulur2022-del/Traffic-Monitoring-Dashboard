import { useEffect, useState } from "react";
import {
  FaCar,
  FaMotorcycle,
  FaBus,
  FaTruck,
  FaAmbulance,
} from "react-icons/fa";

const VehicleCounter = () => {
  const [data, setData] = useState({
    cars: 1245,
    bikes: 856,
    buses: 92,
    trucks: 164,
    ambulance: 18,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        cars: prev.cars + Math.floor(Math.random() * 6),
        bikes: prev.bikes + Math.floor(Math.random() * 5),
        buses: prev.buses + Math.floor(Math.random() * 2),
        trucks: prev.trucks + Math.floor(Math.random() * 2),
        ambulance: prev.ambulance + Math.floor(Math.random() * 1),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      <h2 className="text-2xl font-bold mb-6">
        🤖 AI Vehicle Detection
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

        <div className="bg-blue-50 rounded-xl p-5 text-center">
          <FaCar className="text-4xl text-blue-600 mx-auto mb-3" />
          <h3 className="font-bold">Cars</h3>
          <p className="text-3xl font-bold">{data.cars}</p>
        </div>

        <div className="bg-green-50 rounded-xl p-5 text-center">
          <FaMotorcycle className="text-4xl text-green-600 mx-auto mb-3" />
          <h3 className="font-bold">Bikes</h3>
          <p className="text-3xl font-bold">{data.bikes}</p>
        </div>

        <div className="bg-yellow-50 rounded-xl p-5 text-center">
          <FaBus className="text-4xl text-yellow-600 mx-auto mb-3" />
          <h3 className="font-bold">Buses</h3>
          <p className="text-3xl font-bold">{data.buses}</p>
        </div>

        <div className="bg-red-50 rounded-xl p-5 text-center">
          <FaTruck className="text-4xl text-red-600 mx-auto mb-3" />
          <h3 className="font-bold">Trucks</h3>
          <p className="text-3xl font-bold">{data.trucks}</p>
        </div>

        <div className="bg-purple-50 rounded-xl p-5 text-center">
          <FaAmbulance className="text-4xl text-purple-600 mx-auto mb-3" />
          <h3 className="font-bold">Emergency</h3>
          <p className="text-3xl font-bold">{data.ambulance}</p>
        </div>

      </div>
    </div>
  );
};

export default VehicleCounter;