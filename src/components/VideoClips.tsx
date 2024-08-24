"use client";

import { Clip } from "@/types";

export function VideoClips({
  clips,
  embedId,
  setEmbedId,
  setVideoTitle,
}: {
  setEmbedId: (embedId: string) => void;
  setVideoTitle: (videoTitle: string) => void;
  embedId: string;
  clips: Clip[];
}) {
  if (clips.length === 0) return null;

  return (
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
  );
}
