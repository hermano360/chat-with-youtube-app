"use client";

import { handleQuestionSubmit } from "@/hooks";
import { Clip } from "@/types";
import { useState } from "react";

interface QuestionInputProps {
  onStart: () => void;
  onFinish: (summary: string, clips: Clip[]) => void;
  onError: () => void;
  username: string;
}

export function QuestionInput({
  onStart,
  onFinish,
  onError,
  username,
}: QuestionInputProps) {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    handleQuestionSubmit(question, username, onStart, onFinish, onError);
  };

  return (
    <div className="flex items-center justify-start block w-full lg:w-1/2 p-2 text-gray-900 border rounded-lg text-base bg-gray-900 border-gray-600 text-white mb-10">
      <textarea
        id="question"
        rows={2}
        className="placeholder:align-center block w-full  p-4 focus:ring-blue-500 focus:border-blue-500 bg-gray-900 placeholder-gray-400 text-white text-center mr-4"
        placeholder="Ask your question"
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value.replace("\n", ""));
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <button
        className="text-white border border-gray-600 bg-black inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-gray-600 h-9 min-w-9"
        onClick={handleSubmit}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          fill="currentColor"
          className="size-4"
        >
          <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z"></path>
        </svg>
        <span className="sr-only">Send message</span>
      </button>
    </div>
  );
}
