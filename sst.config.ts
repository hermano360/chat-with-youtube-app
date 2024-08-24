/// <reference path="./.sst/platform/config.d.ts" />

import { link } from "fs";

export default $config({
  app(input) {
    return {
      name: "chat-with-youtube-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const table = new sst.aws.Dynamo("ChatWithClipsDB", {
      fields: {
        pk: "string",
        sk: "string",
      },
      primaryIndex: { hashKey: "pk", rangeKey: "sk" },
    });

    const api = new sst.aws.ApiGatewayV2("ChatWithClipsApi", {
      domain: {
        name: "chatwithclips.com",
      },
      transform: {
        route: {
          handler: {
            link: [table],
          },
        },
      },
    });

    api.route("POST /api/question", "src/post.handler");

    new sst.aws.Nextjs("ChatWithClipsWeb", {
      environment: {
        NEXT_PUBLIC_API_URL: api.url,
      },
      domain: {
        name: "chatwithclips.com",
        redirects: ["www.chatwithclips.com"],
      },
    });
  },
});
