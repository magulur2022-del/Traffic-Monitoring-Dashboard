import { useState } from "react";
import {
  FaUser,
  FaLock,
  FaTrafficLight,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "Nagamani" && password === "Traffic@2026") {
      setError("");
      onLogin();
    } else {
      setError("Invalid Username or Password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <FaTrafficLight className="text-6xl text-blue-600 mx-auto mb-4" />

          <h1 className="text-3xl font-bold text-gray-800">
            Smart Traffic Monitoring
          </h1>

          <p className="text-gray-500 mt-2">Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 font-semibold">Username</label>

            <div className="flex items-center border rounded-lg px-3">
              <FaUser className="text-gray-500" />

              <input
                type="text"
                className="w-full p-3 outline-none"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-semibold">Password</label>

            <div className="flex items-center border rounded-lg px-3">
              <FaLock className="text-gray-500" />

              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 outline-none"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-600 mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            <b>Username:</b> Nagamani
          </p>
          <p>
            <b>Password:</b> Traffic@2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;