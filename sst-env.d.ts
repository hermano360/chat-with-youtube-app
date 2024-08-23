/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "ChatWithClipsApi": {
      "type": "sst.aws.ApiGatewayV2"
      "url": string
    }
    "ChatWithClipsWeb": {
      "type": "sst.aws.Nextjs"
      "url": string
    }
  }
}
export {}
