"use client";

import { processTime } from "@/hooks";
import { Clip } from "@/types";

interface VideoClipsProps {
  onVideoClick: (embedId: string, videoTitle: string) => void;
  embedId: string;
  clips: Clip[];
}

export function VideoClips({ clips, embedId, onVideoClick }: VideoClipsProps) {
  if (clips.length === 0) return null;

  return (
    <div className="flex items-start w-full flex-col mt-10">
      {clips.map((item) => (
        <div key={item.link} className="w-full mb-10">
          <h3 className="text-lg mb-4 font-semibold">{item.title}</h3>
          <ul className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-4">
            {item.timeStamps.map((time) => {
              const videoId = item.link.split("v=")[1];
              const linkEmbedId = `${videoId}?start=${time}`;
              const isSelected = embedId === linkEmbedId;
              return (
                <li key={`${item.link}-${time}`}>
                  <div
                    className={`w-full cursor-pointer p-2 border border-4 rounded-lg hover:border-gray-300 ${
                      isSelected ? "border-gray-300" : "border-gray-600"
                    }`}
                    onClick={() => {
                      if (isSelected) {
                        onVideoClick("", "");

                        window
                          ?.open(`${item.link}&t=${time}s`, "_blank")
                          ?.focus();
                      } else {
                        onVideoClick(linkEmbedId, item.title);
                      }
                    }}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`}
                    />
                    <div className="w-full text-center text-md font-semibold text-gray-300">
                      {processTime(time)}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
