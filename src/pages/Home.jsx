import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to CourseGPT 🚀</h1>
      <p className="text-lg mb-6">Generate structured lessons with AI, instantly.</p>
      <button
        onClick={() => navigate("/course")}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Start Building
      </button>
    </div>
  );
};

export default Home;
    