export type Clip = {
  link: string;
  timeStamps: number[];
  title: string;
};

export type MessagePostResponse = {
  summary: string;
  clips: Clip[];
};

export type PageConfig = {
  username: Creators;
  displayName: CreatorDisplayName;
};

export enum Creators {
  "awsdevelopers",
  "MorningBrewDailyShow",
  "serverlessguru",
  "joenissim",
  "AndersErickson",
}

export enum CreatorDisplayName {
  awsdevelopers = "AWS Developers",
  MorningBrewDailyShow = "Morning Brew Daily",
  serverlessguru = "Serverless Guru",
  joenissim = "Nissim Tutoring⎮Joe Nissim",
  AndersErickson = "Anders Erickson",
}

export const PAGE_CONFIG: Record<Creators, PageConfig> = {
  [Creators.awsdevelopers]: {
    username: Creators.awsdevelopers,
    displayName: CreatorDisplayName.awsdevelopers,
  },
  [Creators.MorningBrewDailyShow]: {
    username: Creators.MorningBrewDailyShow,
    displayName: CreatorDisplayName.MorningBrewDailyShow,
  },
  [Creators.AndersErickson]: {
    username: Creators.AndersErickson,
    displayName: CreatorDisplayName.AndersErickson,
  },
  [Creators.serverlessguru]: {
    username: Creators.serverlessguru,
    displayName: CreatorDisplayName.serverlessguru,
  },
  [Creators.joenissim]: {
    username: Creators.joenissim,
    displayName: CreatorDisplayName.joenissim,
  },
};
