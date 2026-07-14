import { useParams } from "react-router-dom";

function VehicleDetails() {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Vehicle Details</h1>

      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <p><strong>Vehicle ID:</strong> {id}</p>
        <p><strong>Status:</strong> Active</p>
        <p><strong>Location:</strong> Guntur</p>
        <p><strong>Speed:</strong> 52 km/h</p>
      </div>
    </div>
  );
}

export default VehicleDetails;