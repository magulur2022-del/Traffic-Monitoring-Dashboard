const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-5 mt-5">
        <h2 className="text-xl font-bold mb-3">Search Results</h2>
        <p className="text-red-500">No location found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 mt-5">
      <h2 className="text-xl font-bold mb-4">Search Results</h2>

      {results.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 mb-3"
        >
          <h3 className="text-lg font-bold">{item.area}</h3>
          <p>
            <b>Status:</b> {item.status}
          </p>
          <p>
            <b>Vehicles:</b> {item.vehicles}
          </p>
          <p>
            <b>Signal:</b> {item.signal}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;