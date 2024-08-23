"use client";

import { YoutubeEmbed } from "@/components/YoutubeEmbed";
import { MessagePostResponse, Clip } from "@/types";
import { useState, useEffect } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [embedId, setEmbedId] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [clips, setClips] = useState<Clip[]>([]);

  useEffect(() => {
    setEmbedId("");
    setVideoTitle("");
    setSummary("");
    setClips([]);
    return () => {
      setEmbedId("");
      setVideoTitle("");
      setSummary("");
      setClips([]);
    };
  }, []);

  const handleSubmit = async () => {
    setEmbedId("");
    setVideoTitle("");
    setSummary("");
    setClips([]);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/question`,
      {
        method: "POST",
        body: JSON.stringify({ question, username: "awsdevelopers" }),
      }
    );
    const data: MessagePostResponse = await response.json();

    console.log(data);

    setSummary(data?.summary || "");
    setClips(data?.clips || []);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10 lg:p-24">
      <h2 className="mb-2 text-lg font-semibold text-center">Welcome to</h2>
      <h2 className="mb-10 text-2xl font-semibold text-center">
        Chat with Clips! 🎉
      </h2>
      <h2 className="mb-2 text-md font-semibold text-center">
        What would you like to ask
      </h2>
      <h2 className="mb-10 text-lg font-semibold text-center">
        @MorningBrewDailyShow?
      </h2>
      <div className="flex items-center justify-start block w-full lg:w-1/2 p-2 text-gray-900 border rounded-lg text-base bg-gray-900 border-gray-600 text-white mb-10">
        <textarea
          id="question"
          rows={2}
          className="placeholder:align-center block w-full  p-4 focus:ring-blue-500 focus:border-blue-500 bg-gray-900 placeholder-gray-400 text-white text-center mr-4"
          placeholder="Ask your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="text-white border border-gray-600 bg-black inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-gray-600 h-9 min-w-9"
          type="submit"
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

      {summary && (
        <div className="flex flex-col text-center mb-10">
          {summary
            .split("\n")
            .filter((section) => section)
            .map((section) => (
              <p className="text-base text-center mb-2">{section}</p>
            ))}
        </div>
      )}

      {embedId && (
        <div className="flex flex-col items-center">
          {videoTitle && (
            <h1 className="text-xl font-semibold mb-4">{videoTitle}</h1>
          )}
          <YoutubeEmbed embedId={embedId} />
          <button
            className={`mt-4 border p-3 rounded-lg cursor-pointer 
                        hover:text-gray-300 border-gray-600 
                        hover:bg-gray-600 bg-gray-900 text-white`}
            onClick={() => setEmbedId("")}
          >
            Clear
          </button>
        </div>
      )}

      <div className="flex items-start w-full flex-col mt-10">
        {clips.map((item) => (
          <div id={item.link} className="w-full mb-10">
            <h3 className="text-lg mb-4 font-semibold">{item.title}</h3>
            <ul className="grid w-full gap-6 md:grid-cols-4">
              {item.timeStamps.map((time, i) => {
                const linkEmbedId = `${item.link.split("v=")[1]}?start=${time}`;
                const isSelected = embedId === linkEmbedId;
                return (
                  <li key={`${item.link}-${time}`}>
                    <a
                      onClick={() => {
                        if (isSelected) {
                          setEmbedId("");
                          setVideoTitle("");
                          window
                            ?.open(`${item.link}&t=${time}s`, "_blank")
                            ?.focus();
                        } else {
                          setVideoTitle(item.title);
                          setEmbedId(linkEmbedId);
                        }
                      }}
                      className={`inline-flex items-center 
                        justify-center w-full p-5 ${
                          isSelected
                            ? "text-gray-300 bg-gray-600"
                            : "bg-gray-900  text-white"
                        }  
                        border  rounded-lg cursor-pointer 
                        hover:text-gray-300 border-gray-600 
                        hover:bg-gray-600`}
                    >
                      <div className="w-full text-center text-lg font-semibold">
                        Source #{i + 1}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
