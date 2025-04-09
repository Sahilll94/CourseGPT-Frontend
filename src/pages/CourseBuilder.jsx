import React, { useState, useEffect } from "react";
import ChatInput from "../components/ChatInput";
import LessonDisplay from "../components/LessonDisplay";
import Sidebar from "../components/Sidebar";

const CourseBuilder = () => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("courseChats")) || [];
    setChats(saved);
    if (saved.length > 0) setSelectedChat(saved[0]);
  }, []);

  const handleLessonGenerated = (newChat) => {
    const updated = [newChat, ...chats];
    setChats(updated);
    setSelectedChat(newChat);
    localStorage.setItem("courseChats", JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    const updated = chats.filter(chat => chat.id !== id);
    setChats(updated);
    localStorage.setItem("courseChats", JSON.stringify(updated));

    if (selectedChat && selectedChat.id === id) {
      setSelectedChat(null);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar chats={chats} onSelect={setSelectedChat} onDelete={handleDelete} />
      <div className="flex-grow flex flex-col overflow-hidden">
        <ChatInput onLessonGenerated={handleLessonGenerated} />
        <div className="overflow-y-auto px-6 pb-8">
          <LessonDisplay content={selectedChat?.content} />
        </div>
      </div>
    </div>
  );
};

export default CourseBuilder;
