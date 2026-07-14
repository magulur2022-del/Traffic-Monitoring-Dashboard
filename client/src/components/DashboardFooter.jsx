const DashboardFooter = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 pt-8 pb-6 text-center">
      <h4 className="text-gray-700 font-semibold text-lg">
        Smart Traffic Monitoring Dashboard
      </h4>
      <p className="text-gray-400 text-sm mt-1">Version 1.0</p>
      <p className="text-gray-400 text-sm mt-3">
        Powered by{" "}
        <span className="font-medium text-blue-500">React</span> •{" "}
        <span className="font-medium text-cyan-500">Tailwind CSS</span> •{" "}
        <span className="font-medium text-purple-500">
          AI Vehicle Detection
        </span>
      </p>
    </footer>
  );
};

export default DashboardFooter;