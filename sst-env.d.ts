/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "ChatWithClipsApi": {
      "type": "sst.aws.ApiGatewayV2"
      "url": string
    }
    "ChatWithClipsDB": {
      "name": string
      "type": "sst.aws.Dynamo"
    }
    "ChatWithClipsWeb": {
      "type": "sst.aws.Nextjs"
      "url": string
    }
  }
}
export {}
