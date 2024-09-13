"use client";

import { FooterText } from "@/components/FooterText";
import { pageCounter } from "@/hooks";
import {
  CreatorDisplayName,
  CreatorProfilePic,
  Creators,
  PageConfig,
} from "@/types";
import { useEffect } from "react";

export default function Home() {
  const pages: PageConfig[] = [
    {
      username: Creators.awsdevelopers,
      displayName: CreatorDisplayName.awsdevelopers,
      profilePic: CreatorProfilePic.awsdevelopers,
    },
    {
      username: Creators.hubermanlab,
      displayName: CreatorDisplayName.hubermanlab,
      profilePic: CreatorProfilePic.hubermanlab,
    },
    {
      username: Creators.restishistorypod,
      displayName: CreatorDisplayName.restishistorypod,
      profilePic: CreatorProfilePic.restishistorypod,
    },
    {
      username: Creators.HuggingFace,
      displayName: CreatorDisplayName.HuggingFace,
      profilePic: CreatorProfilePic.HuggingFace,
    },
    {
      username: Creators.MorningBrewDailyShow,
      displayName: CreatorDisplayName.MorningBrewDailyShow,
      profilePic: CreatorProfilePic.MorningBrewDailyShow,
    },
    {
      username: Creators.serverlessguru,
      displayName: CreatorDisplayName.serverlessguru,
      profilePic: CreatorProfilePic.serverlessguru,
    },
    {
      username: Creators.AndersErickson,
      displayName: CreatorDisplayName.AndersErickson,
      profilePic: CreatorProfilePic.AndersErickson,
    },
    {
      username: Creators.juliensolo,
      displayName: CreatorDisplayName.juliensolo,
      profilePic: CreatorProfilePic.juliensolo,
    },
    {
      username: Creators.hillerfit,
      displayName: CreatorDisplayName.hillerfit,
      profilePic: CreatorProfilePic.hillerfit,
    },
    {
      username: Creators.joenissim,
      displayName: CreatorDisplayName.joenissim,
      profilePic: CreatorProfilePic.joenissim,
    },
  ];

  // Just a simple counter
  useEffect(() => {
    pageCounter("index");
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-10 lg:p-24">
      <h2 className="mb-2 text-lg font-semibold text-center">Welcome to</h2>
      <h2 className="mb-10 text-2xl font-semibold text-center">
        Chat with Clips! 🎉
      </h2>
      <p className="mb-4 text-lg font-semibold text-center">
        Click on one of our supported Youtube creators to get started!
      </p>
      <p className="mb-10 text-sm text-center">
        By accessing the creator&apos;s entire video library, you&apos;ll be
        able to ask a question based primarily on the content of their own
        videos. You&apos;ll also get returned back the most relevant videos
        pertaining to your question for personal review.
      </p>
      <ul className="grid w-full md:w-1/2 gap-6 xl:grid-cols-2 mb-4">
        {pages.map(({ username, displayName, profilePic }) => (
          <li key={username}>
            <a
              className="flex justify-center w-full items-center"
              href={`/${username}`}
            >
              <div
                className="flex justify-center flex-col flex flex-col items-center 
                        justify-center p-5 bg-gray-900 text-white
                        border  rounded-lg cursor-pointer 
                        hover:text-gray-300 border-gray-600 
                        hover:bg-gray-600 rounded-2xl w-fit"
              >
                {profilePic && (
                  <img
                    src={profilePic}
                    alt={`Profile Pic for ${displayName}`}
                    style={{ borderRadius: "50%" }}
                    className="h-52 w-52"
                  />
                )}
                <div className="w-full text-center text-lg font-semibold">
                  {displayName}
                </div>
                <div className="w-full text-center text-sm text-gray-400">
                  @{username}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <p></p>
      <FooterText />
    </div>
  );
}
