import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Editor from "../components/Editor";
import LetterList from "../components/LetterList";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const location = useLocation();

  const { storedToken, setStoredToken, storedAccessToken, setStoredAccessToken } = useContext(AppContext)

  useEffect(() => {
    const token = new URLSearchParams(location.search).get("token");
    const accessToken = new URLSearchParams(location.search).get("accessToken");

    if (token && accessToken) {
      localStorage.setItem("token", token);
      localStorage.setItem("accessToken", accessToken);

      setStoredToken(token);
      setStoredAccessToken(accessToken);

      window.history.replaceState({}, document.title, "/");
    }
  }, [location.search]);

  return (
    <div className="h-full bg-gray-900 text-white flex items-center justify-center">
      {storedToken ? (
        <div className="w-full max-w-4xl p-6">
          <h1 className="text-3xl font-bold text-center mb-4">Welcome Back!</h1>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <Editor accessToken={storedAccessToken} />
            <LetterList />
          </div>
        </div>
      ) : (
        <div className="text-center mt-52">
          <h1 className="text-3xl font-semibold">Please login to continue</h1>
          <p className="text-gray-400 mt-2">
            Access your letters and start editing.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
