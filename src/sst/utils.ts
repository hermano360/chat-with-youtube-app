import { Resource } from "sst";
import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const handleVisitorCounter = async (page: string) => {
  const getParams = {
    TableName: Resource.ChatWithClipsDB.name,
    ExpressionAttributeNames: { "#kn0": "pk", "#kn1": "sk" },
    ExpressionAttributeValues: {
      ":kv0": { S: "counter" },
      ":kv1": { S: page },
    },
    KeyConditionExpression: "#kn0 = :kv0 AND #kn1 = :kv1",
    Limit: 1,
  };

  const result = await dynamoDb.send(new QueryCommand(getParams));

  const item = result?.Items?.[0];

  const counter = !item || !item.counter?.N ? 0 : parseInt(item.counter.N);

  const params = {
    TableName: Resource.ChatWithClipsDB.name,
    Item: {
      pk: `counter`,
      sk: page,
      counter: counter + 1,
    },
  };

  await dynamoDb.send(new PutCommand(params));

  return { page, counter: counter + 1 };
};
