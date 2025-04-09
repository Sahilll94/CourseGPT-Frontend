import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const LessonDisplay = ({ content }) => {
  if (!content) return (
    <div className="text-gray-400 mt-10 text-center italic">No lesson selected. Start by entering a topic.</div>
  );

  return (
    <div className="prose max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg mt-6">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default LessonDisplay;
