export type Clip = {
  link: string;
  timeStamps: number[];
  title: string;
};
export type MessagePostResponse = {
  summary: string;
  clips: Clip[];
};
