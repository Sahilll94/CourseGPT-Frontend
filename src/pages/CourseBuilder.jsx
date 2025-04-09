import React, { useState, useEffect } from "react";
import ChatInput from "../components/ChatInput";
import LessonDisplay from "../components/LessonDisplay";
import Sidebar from "../components/Sidebar";
import { FaBars } from "react-icons/fa";

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
      <Sidebar
        chats={chats}
        onSelect={setSelectedChat}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Mobile Hamburger */}
      <button
        className="absolute top-4 left-4 z-50 sm:hidden bg-white p-2 rounded shadow"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars className="text-gray-800" />
      </button>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <ChatInput onLessonGenerated={handleLessonGenerated} />
        <LessonDisplay content={selectedChat?.content} />
      </div>
    </div>
  );
};

export default CourseBuilder;
