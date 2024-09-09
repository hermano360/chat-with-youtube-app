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
  profilePic?: string;
};

export enum Creators {
  awsdevelopers = "awsdevelopers",
  MorningBrewDailyShow = "MorningBrewDailyShow",
  serverlessguru = "serverlessguru",
  joenissim = "joenissim",
  AndersErickson = "AndersErickson",
  juliensolo = "juliensolo",
  ZoeSugg = "ZoeSugg",
  joerogan = "joerogan",
  HuggingFace = "HuggingFace",
  hubermanlab = "hubermanlab",
  restishistorypod = "restishistorypod",
  hillerfit = "hillerfit",
}

export enum CreatorDisplayName {
  awsdevelopers = "AWS Developers",
  MorningBrewDailyShow = "Morning Brew Daily",
  serverlessguru = "Serverless Guru",
  joenissim = "Nissim Tutoring⎮Joe Nissim",
  AndersErickson = "Anders Erickson",
  juliensolo = "julien solomita",
  ZoeSugg = "Zoe Sugg",
  joerogan = "PowerfulJRE",
  HuggingFace = "HuggingFace",
  hubermanlab = "Andrew Huberman",
  restishistorypod = "The Rest Is History",
  hillerfit = "Andrew Hiller",
}

export enum CreatorProfilePic {
  awsdevelopers = "https://yt3.googleusercontent.com/_eb0KbxyjUmU0Gev_koCAdQz7Yapuvv7LBDdv3RBn647h7Cu1TE45zRGVSr-PCuT92MkT5UGlA=s160-c-k-c0x00ffffff-no-rj",
  MorningBrewDailyShow = "https://yt3.ggpht.com/Q3U6_AtzX4sD370dnByPvskU0BdC3fsNJHsV7vAUvgTxxu_umsnNzVhtPqQm5xtV3dnAHjrG=s176-c-k-c0x00ffffff-no-rj-mo",
  serverlessguru = "https://yt3.ggpht.com/DdCnVFRerdq76Bv7wkrs5s6LsRMLRCF0wU8Ku0_dJ_H85Hc2Hi9KDDacGpEy_hUaaqwbzdBWMA=s176-c-k-c0x00ffffff-no-rj-mo",
  joenissim = "https://yt3.googleusercontent.com/_BAfcICY61HtOSxpvKSBUzvpOSDQprF3RG3JZ4KpqaPyYg2JTW-YJzORaufd3txVLxUGjkTg=s160-c-k-c0x00ffffff-no-rj",
  AndersErickson = "https://yt3.googleusercontent.com/QSoNia3XmGfPc3pFh8RE9BSPl7nOPpqbHcfyv3e2Qbn1pCPw-SM7Bw4F-bKCQVspPtNv_2CFkg=s160-c-k-c0x00ffffff-no-rj",
  juliensolo = "https://yt3.googleusercontent.com/ytc/AIdro_nNHPlj0YH7cEELbJj9174W_tcdWZISKgbMDZEDVKyJHHA=s160-c-k-c0x00ffffff-no-rj",
  ZoeSugg = "https://yt3.googleusercontent.com/ytc/AIdro_mIy4fUwXQEe_EFkBnhibEZz3k1xgm8gwKKjitEFIyNe4Q=s160-c-k-c0x00ffffff-no-rj",
  joerogan = "https://yt3.googleusercontent.com/ytc/AIdro_kf3qwg9_tCqnvEjOnu2TeKh7sW2pciWWxCxWl4G2ETXT0=s176-c-k-c0x00ffffff-no-rj-mo",
  HuggingFace = "https://yt3.googleusercontent.com/ytc/AIdro_mNrquVCKsXMFEQe0YqYV7cTkQ6TsEIVq-kWruQJoOH7g=s160-c-k-c0x00ffffff-no-rj",
  hubermanlab = "https://yt3.googleusercontent.com/5ONImZvpa9_hYK12Xek2E2JLzRc732DWsZMX2F-AZ1cTutTQLBuAmcEtFwrCgypqJncl5HrV2w=s160-c-k-c0x00ffffff-no-rj",
  restishistorypod = "https://yt3.googleusercontent.com/nrkCjT2S0wgFLymgDvUYF6DEXS_lpN99c499kTQm6YTIkSN_FthRf9JIQHg7OMI8SKDU3Et0JA=s160-c-k-c0x00ffffff-no-rj",
  hillerfit = "https://yt3.googleusercontent.com/Y5E5FBRNlUvT1z_fGdGZTGSlllJZc-nwSiClYgZN-rYb5NtwXVpYzo6c3Y96Mgw2zyajsFrAvIk=s160-c-k-c0x00ffffff-no-rj",
}

export const PAGE_CONFIG: Record<Creators, PageConfig> = {
  [Creators.awsdevelopers]: {
    username: Creators.awsdevelopers,
    displayName: CreatorDisplayName.awsdevelopers,
    profilePic: CreatorProfilePic.awsdevelopers,
  },
  [Creators.MorningBrewDailyShow]: {
    username: Creators.MorningBrewDailyShow,
    displayName: CreatorDisplayName.MorningBrewDailyShow,
    profilePic: CreatorProfilePic.MorningBrewDailyShow,
  },
  [Creators.AndersErickson]: {
    username: Creators.AndersErickson,
    displayName: CreatorDisplayName.AndersErickson,
    profilePic: CreatorProfilePic.AndersErickson,
  },
  [Creators.serverlessguru]: {
    username: Creators.serverlessguru,
    displayName: CreatorDisplayName.serverlessguru,
    profilePic: CreatorProfilePic.serverlessguru,
  },
  [Creators.joenissim]: {
    username: Creators.joenissim,
    displayName: CreatorDisplayName.joenissim,
    profilePic: CreatorProfilePic.joenissim,
  },
  [Creators.juliensolo]: {
    username: Creators.juliensolo,
    displayName: CreatorDisplayName.juliensolo,
    profilePic: CreatorProfilePic.juliensolo,
  },
  [Creators.ZoeSugg]: {
    username: Creators.ZoeSugg,
    displayName: CreatorDisplayName.ZoeSugg,
    profilePic: CreatorProfilePic.ZoeSugg,
  },
  [Creators.joerogan]: {
    username: Creators.joerogan,
    displayName: CreatorDisplayName.joerogan,
    profilePic: CreatorProfilePic.joerogan,
  },
  [Creators.HuggingFace]: {
    username: Creators.HuggingFace,
    displayName: CreatorDisplayName.HuggingFace,
    profilePic: CreatorProfilePic.HuggingFace,
  },
  [Creators.hubermanlab]: {
    username: Creators.hubermanlab,
    displayName: CreatorDisplayName.hubermanlab,
    profilePic: CreatorProfilePic.hubermanlab,
  },
  [Creators.restishistorypod]: {
    username: Creators.restishistorypod,
    displayName: CreatorDisplayName.restishistorypod,
    profilePic: CreatorProfilePic.restishistorypod,
  },
  [Creators.hillerfit]: {
    username: Creators.hillerfit,
    displayName: CreatorDisplayName.hillerfit,
    profilePic: CreatorProfilePic.hillerfit,
  },
};
