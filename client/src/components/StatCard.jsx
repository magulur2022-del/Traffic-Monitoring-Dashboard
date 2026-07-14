const StatCard = ({ title, value, change, icon, color }) => {
  const isPositive = change?.startsWith("+");
  const isNegative = change?.startsWith("-");

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
      <div className="flex items-center justify-between">
        <div
          className={`text-4xl ${color} bg-gray-50 rounded-xl p-3 flex items-center justify-center`}
        >
          {icon}
        </div>

        {change && (
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              isPositive
                ? "bg-green-100 text-green-600"
                : isNegative
                ? "bg-red-100 text-red-600"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            {change}
          </span>
        )}
      </div>

      <div>
        <h3 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          {value}
        </h3>
        <p className="text-gray-500 font-medium mt-1">{title}</p>
      </div>
    </div>
  );
};

export default StatCard;