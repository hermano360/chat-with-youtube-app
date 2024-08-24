"use client";

import { useState, useEffect, RefObject } from "react";

const useSize = () => {
  const [windowSize, setWindowSize] = useState([0, 300]);

  useEffect(() => {
    setWindowSize([window.innerHeight, window.innerWidth]);

    const windowSizeHandler = () => {
      setWindowSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return windowSize;
};

interface YoutubeEmbedProps {
  embedId: string;
  title: string;
  onClear: () => void;
  videoRef: RefObject<HTMLDivElement>;
}

export const YoutubeEmbed = ({
  embedId,
  title,
  onClear,
  videoRef,
}: YoutubeEmbedProps) => {
  const url = `https://www.youtube.com/embed/${embedId}&autoplay=1`;
  const windowsize = useSize();

  const rawWidth = windowsize[1] * 0.75 || 300;
  const width = rawWidth > 800 ? 800 : rawWidth;

  if (!embedId) {
    return <div ref={videoRef} />;
  }
  return (
    <div className="flex flex-col items-center" ref={videoRef}>
      {title && <h1 className="text-xl font-semibold mb-4">{title}</h1>}

      <div className="video-responsive">
        <iframe
          loading="lazy"
          width={width.toString()}
          height={(width / 1.77).toString()}
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>

      <p className="mt-4 text-gray-400 text-sm">
        Youtube is sometimes flakey, feel free to re-click source link to open
        in a new tab
      </p>
      <button
        className={`mt-4 border p-3 rounded-lg cursor-pointer 
                      hover:text-gray-300 border-gray-600 
                      hover:bg-gray-600 bg-gray-900 text-white`}
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );
};
