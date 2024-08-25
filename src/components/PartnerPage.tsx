"use client";

import { LoadingIcon } from "@/components/LoadingIcon";
import { PageWrapper } from "@/components/PageWrapper";
import { QuestionInput } from "@/components/QuestionInput";
import { Summary } from "@/components/Summary";
import { VideoClips } from "@/components/VideoClips";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { YoutubeEmbed } from "@/components/YoutubeEmbed";
import { useVideoHandling } from "@/hooks";
import { FooterText } from "./FooterText";
import { useRef } from "react";
import { CreatorDisplayName, Creators } from "@/types";

interface PartnerPageProps {
  username: Creators;
  displayName: CreatorDisplayName;
}
export function PartnerPage({ username, displayName }: PartnerPageProps) {
  const {
    isLoading,
    embedId,
    setEmbedId,
    videoTitle,
    setVideoTitle,
    summary,
    clips,
    onStart,
    onFinish,
    onError,
  } = useVideoHandling();

  const videoRef = useRef<HTMLDivElement>(null);

  const onVideoClick = (embedId: string, videoTitle: string) => {
    setEmbedId(embedId);
    setVideoTitle(videoTitle);
    if (videoRef?.current) {
      videoRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <PageWrapper>
        <WelcomeMessage username={username} displayName={displayName} />

        <QuestionInput
          onStart={onStart}
          onFinish={onFinish}
          onError={onError}
          username={username}
        />
        <LoadingIcon isLoading={isLoading} />

        <Summary summary={summary} />

        <YoutubeEmbed
          embedId={embedId}
          title={videoTitle}
          onClear={() => setEmbedId("")}
          videoRef={videoRef}
        />

        <VideoClips
          clips={clips}
          embedId={embedId}
          onVideoClick={onVideoClick}
        />
        <FooterText />
      </PageWrapper>
    </>
  );
}
