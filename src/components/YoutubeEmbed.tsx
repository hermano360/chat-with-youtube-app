"use client";

import { useState, useEffect } from "react";

const useSize = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerHeight,
    window.innerWidth,
  ]);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return windowSize;
};

export const YoutubeEmbed = ({ embedId }: { embedId: string }) => {
  const url = `https://www.youtube.com/embed/${embedId}&autoplay=1`;
  const windowsize = useSize();
  const rawWidth = windowsize[1] * 0.75 || 300;
  const width = rawWidth > 800 ? 800 : rawWidth;

  return (
    <div className="video-responsive">
      <iframe
        width={width.toString()}
        height={(width / 1.77).toString()}
        src={url}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
