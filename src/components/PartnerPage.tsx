"use client";

import { LoadingIcon } from "@/components/LoadingIcon";
import { PageWrapper } from "@/components/PageWrapper";
import { QuestionInput } from "@/components/QuestionInput";
import { Summary } from "@/components/Summary";
import { VideoClips } from "@/components/VideoClips";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { YoutubeEmbed } from "@/components/YoutubeEmbed";
import { useVideoHandling } from "@/hooks";

export function PartnerPage({ username }: { username: string }) {
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

  return (
    <PageWrapper>
      <WelcomeMessage username={username} />

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
      />

      <VideoClips
        clips={clips}
        embedId={embedId}
        setEmbedId={setEmbedId}
        setVideoTitle={setVideoTitle}
      />
    </PageWrapper>
  );
}
