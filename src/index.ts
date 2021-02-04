import { Response } from './APIGWResponse.d'
import { Context, APIGatewayEvent } from 'aws-lambda'
import * as queryString from 'query-string'
import axios from 'axios'
import * as dotenv from 'dotenv'
import { SlackCommand } from './SlackCommand'
import { query } from './query'
dotenv.config()

export async function handler(
  event: APIGatewayEvent,
  context?: Context
): Promise<Response> {
  const body = (queryString.parse(event.body ?? '') as unknown) as SlackCommand
  const text = body.text

  const query: query[] = []

  try {
    checkFormat(text)
  } catch (error) {
    return {
      isBase64Encoded: false,
      statusCode: 200,
      headers: {},
      body: error,
    }
  }

  // textを抽出してレスポンスを作る
  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: {},
    body: body.text,
  }
}

const checkFormat = (text: string) => {
  const digExp = /[\d]{0,2}/g
  const unitExp = /[^\d]{3,5}/g

  const digs = text
    .match(digExp)
    ?.filter((f) => f)
    .map((m) => Number(m))
  const units = text.match(unitExp)?.filter((f) => f)

  if (digs?.length === 0 || !units) {
    throw new Error('正しいフォーマットを指定してください')
  }
  return true
}
