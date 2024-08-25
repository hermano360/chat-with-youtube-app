import { Resource } from "sst";
import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

// counts the number of visitors
export const handler = async () => {
  try {
    const getParams = {
      TableName: Resource.ChatWithClipsDB.name,
      ExpressionAttributeNames: { "#kn0": "pk", "#kn1": "sk" },
      ExpressionAttributeValues: {
        ":kv0": { S: "counter" },
        ":kv1": { S: "counter" },
      },
      KeyConditionExpression: "#kn0 = :kv0 AND #kn1 = :kv1",
      Limit: 1,
    };

    const result = await dynamoDb.send(new QueryCommand(getParams));

    const item = result?.Items?.[0];

    if (!item || !item.counter?.N) {
      return {
        statusCode: 200,
        body: "no item",
      };
    }

    const counter = parseInt(item.counter?.N);

    const params = {
      TableName: Resource.ChatWithClipsDB.name,
      Item: {
        pk: `counter`,
        sk: `counter`,
        counter: counter + 1,
      },
    };

    await dynamoDb.send(new PutCommand(params));
    return {
      statusCode: 200,
      body: JSON.stringify({
        counter: counter + 1,
      }),
    };
  } catch (err) {
    console.error(err);
  }
};
