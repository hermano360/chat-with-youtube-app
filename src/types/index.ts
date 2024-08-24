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
  username: string;
  displayName: string;
};

export const PAGE_CONFIG: Record<string, PageConfig> = {
  awsdevelopers: { username: "awsdevelopers", displayName: "AWS Developers" },
  MorningBrewDailyShow: {
    username: "MorningBrewDailyShow",
    displayName: "Morning Brew Daily",
  },
  serverlessguru: {
    username: "serverlessguru",
    displayName: "Serverless Guru",
  },
  joenissim: {
    username: "joenissim",
    displayName: "Nissim Tutoring⎮Joe Nissim",
  },
};
