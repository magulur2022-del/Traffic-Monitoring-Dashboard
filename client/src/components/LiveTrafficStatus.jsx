import { useEffect, useState } from "react";
import liveTrafficData from "../data/LiveTrafficData";

const LiveTrafficStatus = () => {
  const [traffic, setTraffic] = useState(liveTrafficData);

  useEffect(() => {
    const interval = setInterval(() => {
      setTraffic((prev) =>
        prev.map((item) => ({
          ...item,
          vehicles:
            item.vehicles +
            Math.floor(Math.random() * 30 - 15),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        🚦 Live Traffic Status
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3">Location</th>
            <th>Vehicles</th>
            <th>Signal</th>
            <th>Congestion</th>

          </tr>

        </thead>

        <tbody>

          {traffic.map((item, index) => (

            <tr
              key={index}
              className="border-b text-center"
            >

              <td className="py-3">
                {item.location}
              </td>

              <td>{item.vehicles}</td>

              <td>{item.signal}</td>

              <td>{item.congestion}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default LiveTrafficStatus;