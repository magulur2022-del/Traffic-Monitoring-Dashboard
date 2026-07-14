import { useEffect, useState } from "react";
import {
  FaTrafficLight,
  FaCircle,
} from "react-icons/fa";

const junctions = [
  "Brodipet",
  "Lodge Center",
  "NTR Bus Stand",
  "Lakshmipuram",
];

const SmartTrafficController = () => {

  const [signals, setSignals] = useState(
    junctions.map(() => ({
      status: "Green",
      timer: 30,
      traffic: "Low",
    }))
  );

  useEffect(() => {

    const interval = setInterval(() => {

      setSignals((prev) =>
        prev.map(() => {

          const density = ["Low", "Medium", "High"][
            Math.floor(Math.random() * 3)
          ];

          let timer = 30;

          if (density === "Medium") timer = 60;
          if (density === "High") timer = 90;

          return {
            status: "Green",
            timer,
            traffic: density,
          };
        })
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          🚦 Smart Traffic Signal Controller
        </h2>

        <FaTrafficLight className="text-3xl text-blue-600"/>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {signals.map((signal,index)=>(

          <div
            key={index}
            className="border rounded-xl p-5 shadow"
          >

            <h3 className="font-bold text-xl">
              {junctions[index]}
            </h3>

            <div className="flex items-center gap-3 mt-4">

              <FaCircle className="text-green-500"/>

              <span className="font-semibold">
                Green Signal
              </span>

            </div>

            <p className="mt-3">
              Traffic :
              <span className="font-bold ml-2">
                {signal.traffic}
              </span>
            </p>

            <p className="mt-2">
              Timer :
              <span className="font-bold ml-2 text-blue-600">
                {signal.timer} sec
              </span>
            </p>

          </div>

        ))}

      </div>

    </div>

  );

};

export default SmartTrafficController;