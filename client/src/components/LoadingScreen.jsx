import { FaTrafficLight } from "react-icons/fa";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 flex flex-col items-center justify-center z-50">

      <FaTrafficLight className="text-7xl text-white animate-bounce" />

      <h1 className="mt-6 text-4xl font-bold text-white">
        Smart Traffic Monitoring
      </h1>

      <p className="mt-2 text-blue-100 text-lg">
        Initializing Dashboard...
      </p>

      {/* Loading Spinner */}
      <div className="mt-8 h-14 w-14 border-4 border-white/40 border-t-white rounded-full animate-spin"></div>

      {/* Progress Bar */}
      <div className="mt-8 w-72 h-2 bg-white/30 rounded-full overflow-hidden">
        <div className="h-full w-full bg-white animate-pulse"></div>
      </div>

      <p className="mt-5 text-white text-sm tracking-widest uppercase">
        Loading...
      </p>

    </div>
  );
};

export default LoadingScreen;