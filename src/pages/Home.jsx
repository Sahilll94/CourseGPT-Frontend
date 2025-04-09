import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-10 text-center">
        
        <img
          src="/coursegpt.png"
          alt="CourseGPT Logo"
          className="mx-auto w-20 h-20 mb-6"
        />

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          🚀 Build with <span className="text-blue-600">CourseGPT</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">
          An AI-Powered Course Authoring Platform
        </h2>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
          <strong>Project Overview:</strong><br />
          CourseGPT is an intelligent authoring tool that empowers educators and content creators to efficiently create, organize, and enhance educational content.
          <br /><br />
          This innovative platform transforms the course creation process through <span className="font-medium text-blue-600">AI-assisted content generation</span>, <span className="font-medium text-blue-600">structured lesson templates</span>, and a <span className="font-medium text-blue-600">simple, intuitive interface</span>.
        </p>

        <button
          onClick={() => navigate("/course")}
          className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Building
        </button>
      </div>
    </div>
  );
};

export default Home;
