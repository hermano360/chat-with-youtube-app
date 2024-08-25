"use client";

import { FooterText } from "@/components/FooterText";
import { pageCounter } from "@/hooks";
import { CreatorDisplayName, Creators, PageConfig } from "@/types";
import { useEffect } from "react";

export default function Home() {
  const pages: PageConfig[] = [
    {
      username: Creators.joerogan,
      displayName: CreatorDisplayName.joerogan,
    },
    {
      username: Creators.awsdevelopers,
      displayName: CreatorDisplayName.awsdevelopers,
    },
    {
      username: Creators.MorningBrewDailyShow,
      displayName: CreatorDisplayName.MorningBrewDailyShow,
    },
    {
      username: Creators.serverlessguru,
      displayName: CreatorDisplayName.serverlessguru,
    },
    {
      username: Creators.AndersErickson,
      displayName: CreatorDisplayName.AndersErickson,
    },
    {
      username: Creators.juliensolo,
      displayName: CreatorDisplayName.juliensolo,
    },
    {
      username: Creators.ZoeSugg,
      displayName: CreatorDisplayName.ZoeSugg,
    },
    {
      username: Creators.joenissim,
      displayName: CreatorDisplayName.joenissim,
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
      <p className="mb-10 text-lg font-semibold text-center">
        Click on one of our supported Youtube creators to get started!
      </p>
      <ul className="grid w-full md:w-1/2 gap-6 xl:grid-cols-2 mb-4">
        {pages.map(({ username, displayName }) => (
          <li key={username}>
            <a
              href={`/${username}`}
              className={`flex flex-col items-center 
                        justify-center w-full p-5 bg-gray-900 text-white
                        border  rounded-lg cursor-pointer 
                        hover:text-gray-300 border-gray-600 
                        hover:bg-gray-600`}
            >
              <div className="w-full text-center text-lg font-semibold mb-2">
                {displayName}
              </div>
              <div className="w-full text-center text-sm text-gray-400">
                @{username}
              </div>
            </a>
          </li>
        ))}
      </ul>
      <FooterText />
    </div>
  );
}
