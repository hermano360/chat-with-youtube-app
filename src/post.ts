export const handler = async (event: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      summary: `So Nvidia's stock has been on a rollercoaster recently. After becoming the
  world's most valuable company, its shares plummeted 13% over three
  trading days, wiping out $430 billion of its market cap. However, Nvidia
  announced a 10 to 1 stock split to make stock ownership more accessible.
  Despite this drop, the stock has been performing well overall, with
  record highs and a market cap of $1.16 trillion. The company's role as a
  leader in AI technology has propelled its stock price, but any negative
  news can lead to significant stock reactions. Moreover, Nvidia's revenue
  growth has been exceptional, with a 262% increase in the recent quarter,
  far surpassing the average S&P 500 company's growth.`,
      clips: [
        {
          link: "https://www.youtube.com/watch?v=e7BdS1rVkUI",
          timeStamps: [0, 30, 60, 90],
          title: "Countering Leg Hug",
        },
        {
          link: "https://www.youtube.com/watch?v=twVm5uGzEKA",
          timeStamps: [120, 180, 30],
          title:
            "Busting Myths and Misconceptions: IaC and Serverless Workflows",
        },
      ],
    }),
  };
};
