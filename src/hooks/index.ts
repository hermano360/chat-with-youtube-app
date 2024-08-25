"use client";

import { MessagePostResponse, Clip, Creators } from "@/types";
import { useState, useEffect } from "react";

export const pageCounter = async (page: Creators | "index") => {
  if (!page) {
    return;
  }

  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/count`, {
    method: "POST",
    body: JSON.stringify({ page }),
  });
};

export const handleQuestionSubmit = async (
  question: string,
  username: Creators,
  onStart: () => void,
  onFinish: (summary: string, clips: Clip[]) => void,
  onError: () => void
) => {
  if (!question) {
    return;
  }

  onStart();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/question`,
      {
        method: "POST",
        body: JSON.stringify({ question, username }),
      }
    );
    const data: MessagePostResponse = await response.json();
    const { summary, clips = [] } = data;

    onFinish(summary || "", clips);
  } catch (e) {
    console.log(e);
    onError();
  }
};

export const useVideoHandling = () => {
  const [isLoading, setIsLoading] = useState(false);
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

  const onStart = () => {
    setIsLoading(true);

    setEmbedId("");
    setVideoTitle("");
    setSummary("");
    setClips([]);
  };
  const onError = () => {
    setIsLoading(false);
  };
  const onFinish = (summary: string, clips: Clip[]) => {
    setIsLoading(false);

    setSummary(summary);
    setClips(clips);
  };

  return {
    isLoading,
    setIsLoading,
    embedId,
    setEmbedId,
    videoTitle,
    setVideoTitle,
    summary,
    setSummary,
    clips,
    setClips,
    onStart,
    onFinish,
    onError,
  };
};
