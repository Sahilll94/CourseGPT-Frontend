import React, { useState } from "react";
import axios from "axios";

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

  return (
    <div className="sticky top-0 z-10 bg-white p-4 flex gap-3 shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Enter a topic (e.g., Introduction to OOP)"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg font-medium"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
};

export default ChatInput;
