import { Response } from './APIGWResponse.d';
import { Context, APIGatewayEvent } from "aws-lambda";
import  * as queryString  from 'query-string';
import axios from 'axios';
import * as dotenv from "dotenv";
import { SlackCommand } from './SlackCommand.d.type';
dotenv.config();

export async function handler(event: APIGatewayEvent, context?: Context): Promise<Response> {
  const body = queryString.parse(event.body ?? '') as unknown as SlackCommand

  console.log(body.text)

    // textを抽出してレスポンスを作る
    return {
        isBase64Encoded: false,
        statusCode: 200,
        headers: {},
        body: body.text
    };
}
