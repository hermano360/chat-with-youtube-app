import { APIGatewayProxyEvent } from "aws-lambda";
import { handleVisitorCounter } from "./sst/utils";

// counts the number of visitors at a particular page
export const handler = async (event: APIGatewayProxyEvent) => {
  const { body } = event;

  if (!body) {
    return {
      statusCode: 200,
    };
  }

  const { page } = JSON.parse(body);

  if (!page) {
    return {
      statusCode: 200,
    };
  }

  try {
    const { counter } = await handleVisitorCounter(page);

    return {
      statusCode: 200,
      body: JSON.stringify({
        counter,
        page,
      }),
    };
  } catch (err) {
    return {
      statusCode: 400,
    };
  }
};
