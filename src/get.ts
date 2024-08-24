export const handler = async (event: any) => {
  console.log(process.env);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from get",
      input: event,
    }),
  };
};
