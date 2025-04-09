import React, { useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy } from "react-icons/fa";

const LessonDisplay = ({ content }) => {
  const contentRef = useRef(null);

  if (!content) {
    return (
      <div className="text-gray-400 mt-10 text-center italic">
        No lesson selected. Start by entering a topic.
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    alert("Lesson copied to clipboard!");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      {/* Copy Button ABOVE the card */}
      <div className="flex justify-end mb-2">
        <button
          onClick={handleCopy}
          className="bg-gray-100 hover:bg-gray-200 p-2 px-4 rounded-md text-sm flex items-center gap-2 text-gray-700 shadow"
        >
          <FaCopy className="text-gray-600" />
          Copy
        </button>
      </div>

      {/* Lesson Content */}
      <div
        ref={contentRef}
        className="prose prose-blue prose-lg bg-white p-8 rounded-2xl shadow-xl transition-all duration-300"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={atomDark}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{ borderRadius: "0.5rem", padding: "1rem" }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              );
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default LessonDisplay;
