/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "chat-with-youtube-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const api = new sst.aws.ApiGatewayV2("ChatWithClipsApi");

    api.route("GET /api", "src/get.handler");
    api.route("POST /api/question", "src/post.handler");

    new sst.aws.Nextjs("ChatWithClipsWeb", {
      environment: {
        NEXT_PUBLIC_API_URL: api.url,
      },
    });
  },
});
