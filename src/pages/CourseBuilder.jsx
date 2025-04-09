import React, { useState, useEffect } from "react";
import ChatInput from "../components/ChatInput";
import LessonDisplay from "../components/LessonDisplay";
import Sidebar from "../components/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";

const CourseBuilder = () => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("courseChats")) || [];
    setChats(saved);
    if (saved.length > 0) setSelectedChat(saved[0]);
  }, []);

  const handleLessonGenerated = (newChat) => {
    setChats((prev) => [newChat, ...prev]);
    setSelectedChat(newChat);
  };

  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <Sidebar
        chats={chats}
        onSelect={setSelectedChat}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-20">
          {/* Sidebar Toggle (hamburger / close) */}
          <button
            className="sm:hidden p-2 bg-gray-100 rounded-md shadow"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            {sidebarOpen ? (
              <FaTimes className="text-gray-700 text-lg" />
            ) : (
              <FaBars className="text-gray-700 text-lg" />
            )}
          </button>

          {/* Input */}
          <div className="flex-1">
            <ChatInput onLessonGenerated={handleLessonGenerated} />
          </div>
        </div>

        {/* Lesson */}
        <LessonDisplay content={selectedChat?.content} />
      </div>
    </div>
  );
};

export default CourseBuilder;
