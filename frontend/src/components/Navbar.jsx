import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { storedToken, setStoredToken } = useContext(AppContext)

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("accessToken");
    setStoredToken(null);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-evenly items-center shadow-md">
      <Link to="/" className="flex flex-col items-center">
        <span className="text-3xl font-extrabold text-blue-400 hover:text-blue-300 transition">
          Drive App
        </span>
        <p className="text-sm text-gray-400 mt-1">
          Made with <span className="text-red-500 text-lg">❤️</span> by Saurabh
        </p>
      </Link>

      <div>
        {storedToken ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 cursor-pointer"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
