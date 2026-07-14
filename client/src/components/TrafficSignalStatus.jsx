import { useState, useEffect } from "react";
import {
  FaTrafficLight,
  FaCheckCircle,
  FaExclamationTriangle,
  FaAmbulance,
} from "react-icons/fa";

const initialSignals = [
  {
    id: 1,
    location: "Brodipet",
    status: "Green",
    timer: 45,
    vehicleCount: 34,
  },
  {
    id: 2,
    location: "NTR Bus Stand",
    status: "Red",
    timer: 60,
    vehicleCount: 58,
  },
  {
    id: 3,
    location: "Lodge Center",
    status: "Yellow",
    timer: 10,
    vehicleCount: 16,
  },
  {
    id: 4,
    location: "Lakshmipuram",
    status: "Green",
    timer: 35,
    vehicleCount: 27,
  },
];

const TrafficSignalStatus = () => {
  const [signals, setSignals] = useState(initialSignals);

  useEffect(() => {
    const interval = setInterval(() => {
      setSignals((prev) =>
        prev.map((signal) => {
          let timer = signal.timer - 1;
          let status = signal.status;

          if (timer <= 0) {
            if (status === "Green") {
              status = "Yellow";
              timer = 5;
            } else if (status === "Yellow") {
              status = "Red";
              timer = 60;
            } else {
              status = "Green";
              timer = 45;
            }
          }

          return {
            ...signal,
            timer,
            status,
          };
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const changeSignal = (id) => {
    setSignals((prev) =>
      prev.map((signal) => {
        if (signal.id !== id) return signal;

        let nextStatus = "Green";
        let nextTimer = 45;

        if (signal.status === "Green") {
          nextStatus = "Yellow";
          nextTimer = 5;
        } else if (signal.status === "Yellow") {
          nextStatus = "Red";
          nextTimer = 60;
        } else {
          nextStatus = "Green";
          nextTimer = 45;
        }

        return {
          ...signal,
          status: nextStatus,
          timer: nextTimer,
        };
      })
    );
  };

  const getColor = (status) => {
    if (status === "Green") return "bg-green-500";
    if (status === "Yellow") return "bg-yellow-400";
    return "bg-red-500";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      <div className="flex items-center gap-3 mb-6">
        <FaTrafficLight className="text-3xl text-blue-600" />
        <h2 className="text-2xl font-bold">
          Smart Traffic Signal Control
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {signals.map((signal) => (

          <div
            key={signal.id}
            className="bg-gray-50 rounded-xl border shadow hover:shadow-lg transition p-6"
          >

            <div className="flex justify-between items-center">

              <div>
                <h3 className="text-xl font-bold">
                  {signal.location}
                </h3>

                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  LIVE
                </span>
              </div>

              <FaTrafficLight className="text-4xl text-gray-700" />

            </div>

            {/* Signal Light */}

            <div className="flex items-center gap-3 mt-5">

              <div
                className={`w-6 h-6 rounded-full ${getColor(signal.status)} animate-pulse`}
              />

              <span className="text-lg font-semibold">
                {signal.status}
              </span>

            </div>

            <div className="mt-5 space-y-2">

              <p className="text-gray-700">
                ⏱ Timer :
                <span className="font-bold text-blue-600">
                  {" "}
                  {signal.timer}s
                </span>
              </p>

              <p className="text-gray-700">
                🚗 Vehicles :
                <span className="font-bold text-green-600">
                  {" "}
                  {signal.vehicleCount}
                </span>
              </p>

            </div>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() => changeSignal(signal.id)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
              >
                Change Signal
              </button>

              <button
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg"
                title="Normal Mode"
              >
                <FaCheckCircle />
              </button>

              <button
                className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg"
                title="Emergency Mode"
              >
                <FaAmbulance />
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default TrafficSignalStatus;