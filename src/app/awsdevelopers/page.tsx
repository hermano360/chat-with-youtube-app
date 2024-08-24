"use client";

import { YoutubeEmbed } from "@/components/YoutubeEmbed";
import { MessagePostResponse, Clip } from "@/types";
import { useState, useEffect } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
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
    if (!question) {
      return;
    }
    setIsLoading(true);

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

    setIsLoading(false);

    setSummary(data?.summary || "");
    setClips(data?.clips || []);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-10 lg:p-24">
      <h2 className="mb-2 text-lg font-semibold text-center">Welcome to</h2>
      <h2 className="mb-10 text-2xl font-semibold text-center">
        Chat with Clips! 🎉
      </h2>
      <h2 className="mb-2 text-md font-semibold text-center">
        What would you like to ask
      </h2>
      <h2 className="mb-10 text-lg font-semibold text-center">
        @awsdevelopers?
      </h2>
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
      {isLoading && (
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <svg
            className="text-gray-300 animate-spin"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900"
            ></path>
          </svg>
        </div>
      )}

      {summary && (
        <div className="flex flex-col text-center mb-10">
          {summary
            .split("\n")
            .filter((section) => section)
            .map((section, i) => (
              <p className="text-base text-left mb-2" key={`${section}-${i}`}>
                {section}
              </p>
            ))}
        </div>
      )}

      {embedId && (
        <div className="flex flex-col items-center">
          {videoTitle && (
            <h1 className="text-xl font-semibold mb-4">{videoTitle}</h1>
          )}
          <YoutubeEmbed embedId={embedId} />
          <p className="mt-4 text-gray-400">
            Youtube is sometimes flakey, feel free to re-click source link to
            open in a new tab
          </p>
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
          <div key={item.link} className="w-full mb-10">
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
    </div>
  );
}
