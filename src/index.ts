import { Response } from './APIGWResponse.d'
import { Context, APIGatewayEvent } from 'aws-lambda'
import * as queryString from 'query-string'
import axios from 'axios'
import * as dotenv from 'dotenv'
import { SlackCommand } from './SlackCommand'
import { Query } from './query'
dotenv.config()
const digExp = /[\d]{0,3}/g
const unitExp = /[^\d]{3,7}/g

export async function handler(
  event: APIGatewayEvent,
  context?: Context
): Promise<Response> {
  const body = (queryString.parse(event.body ?? '') as unknown) as SlackCommand
  const text = body.text

  const query: Query[] = []

  try {
    const query = format(text)
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

const format = (text: string): Query[] => {
  const digs = text
    .match(digExp)
    ?.filter((f) => f)
    .map((m) => Number(m))
  const units = text.match(unitExp)?.filter((f) => f)

  if (!digs || !units || digs?.length === 0 || !units) {
    throw new Error('正しいフォーマットを指定してください')
  }

  const querys = digs.map(
    (m, i): Query => {
      return {
        unit: units[i],
        time: m,
      }
    }
  )

  return querys
}
