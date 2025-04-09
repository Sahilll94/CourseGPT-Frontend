import React from "react";

const Sidebar = ({ chats, onSelect }) => {
  return (
    <div className="w-72 bg-gray-50 h-screen overflow-y-auto p-4 border-r border-gray-200 shadow-inner">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">📚 Your Lessons</h2>
      <div className="space-y-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="cursor-pointer p-3 bg-white hover:bg-blue-100 border rounded-lg shadow-sm transition"
            onClick={() => onSelect(chat)}
          >
            <p className="font-medium text-sm text-gray-700 truncate">{chat.topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
