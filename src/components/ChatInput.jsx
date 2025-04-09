import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";

const ChatInput = ({ onLessonGenerated }) => {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("https://coursegpt-backend.onrender.com/api/generate-lesson", {
        topic,
      });

      const savedChat = {
        id: Date.now(),
        topic,
        content: res.data.content,
      };

      const prevChats = JSON.parse(localStorage.getItem("courseChats")) || [];
      const updatedChats = [savedChat, ...prevChats];
      localStorage.setItem("courseChats", JSON.stringify(updatedChats));

      onLessonGenerated(savedChat);
      setTopic("");
    } catch (err) {
      console.error("Error:", err);
    }
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleGenerate();
    }
  };

  return (
    <div className="sticky top-0 z-10 bg-white px-4 py-3 shadow-md rounded-lg">
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Enter a topic (e.g., Introduction to Object Oriented Programming)"
          className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 min-w-[130px]"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Generating...
            </span>
          ) : (
            <>
              <FaPaperPlane className="text-white" />
              Generate
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
