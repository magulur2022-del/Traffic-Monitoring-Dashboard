import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import TDM from "./pages/TDM";
import Dashboard from "./pages/Dashboard";
import LiveMapPage from "./pages/LiveMapPage";
import CameraPage from "./pages/CameraPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import TrafficSignalPage from "./pages/TrafficSignalPage";
import TrafficJunctionPage from "./pages/TrafficJunctionPage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import TrafficRecordsPage from "./pages/TrafficRecordsPage";
import AddTraffic from "./pages/AddTraffic";
import EditTraffic from "./pages/EditTraffic";
import TrafficDetails from "./pages/TrafficDetails";

import ProtectedRoute from "./components/ProtectedRoute";
import LoadingScreen from "./components/LoadingScreen";

function AppRoutes() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<TDM />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Dashboard onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      {/* Live Map */}
      <Route
        path="/livemap"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <LiveMapPage onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      {/* Camera */}
      <Route
        path="/camera"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <CameraPage onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      {/* Reports */}
      <Route
        path="/reports"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <ReportsPage onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      {/* Analytics */}
      <Route
        path="/analytics"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <AnalyticsPage onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      {/* Traffic Signals */}
      <Route
        path="/traffic-signal"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <TrafficSignalPage onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      {/* Traffic Junctions */}
      <Route
        path="/traffic-junctions"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <TrafficJunctionPage onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      {/* Traffic Records */}
      <Route
        path="/traffic-records"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <TrafficRecordsPage />
          </ProtectedRoute>
        }
      />

      {/* Add Traffic */}
      <Route
        path="/add-traffic"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <AddTraffic />
          </ProtectedRoute>
        }
      />

      {/* Edit Traffic */}
      <Route
        path="/edit-traffic/:id"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <EditTraffic />
          </ProtectedRoute>
        }
      />

      {/* Traffic Details */}
      <Route
        path="/traffic-details/:id"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <TrafficDetails />
          </ProtectedRoute>
        }
      />

      {/* Settings */}
      <Route
        path="/settings"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <SettingsPage onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      {/* About */}
      <Route
        path="/about"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <AboutPage onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      {/* Login */}
      <Route path="/login" element={<Login onLogin={handleLogin} />} />

      {/* 404 */}
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-red-600">404</h1>
              <p className="text-xl mt-4">Page Not Found</p>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;