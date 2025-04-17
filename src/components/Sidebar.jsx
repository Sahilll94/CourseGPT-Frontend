import React from "react";
import { FaBookOpen } from "react-icons/fa";

const Sidebar = ({ chats, onSelect, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 sm:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed sm:static top-0 left-0 h-full z-40 sm:z-auto bg-white sm:bg-gray-50 w-72 sm:w-80 min-w-[18rem] border-r border-gray-200 overflow-y-auto shadow-2xl sm:shadow-inner transition-transform transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:flex-shrink-0`}
        style={{ backgroundColor: "#172219" }} // ✅ double lock for full opacity
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
            <FaBookOpen className="text-blue-600" />
            Your Lessons
          </h2>
        </div>

        {/* Lesson List */}
        <div className="p-4 space-y-2">
          {chats.length === 0 ? (
            <p className="text-sm text-gray-400 italic text-center">
              No lessons yet. Start by entering a topic!
            </p>
          ) : (
            chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => {
                  onSelect(chat);
                  if (onClose) onClose(); // close on mobile
                }}
                className="cursor-pointer p-3 bg-white hover:bg-blue-100 border border-gray-200 rounded-lg shadow-sm transition"
              >
                <p className="font-medium text-sm text-gray-700 truncate">
                  {chat.topic}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
