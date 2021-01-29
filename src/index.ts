import { Response } from './APIGWResponse.d';
import { Context, APIGatewayEvent } from "aws-lambda";
import axios from 'axios';
import * as dotenv from "dotenv";
dotenv.config();

export async function handler(event: APIGatewayEvent, context?: Context): Promise<Response> {
    const token = process.env['SECRET'];
    const baseRequest = axios.create({
        baseURL: `url`,
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'json'
    });

    const res = await baseRequest.get('path')
        .catch(e => {
            console.error(e);
            return {
                isBase64Encoded: false,
                statusCode: 500,
                headers: {},
                body: JSON.stringify({

                })
            };
        });

    return {
        isBase64Encoded: false,
        statusCode: 200,
        headers: {},
        body: JSON.stringify({
            propName: 'success'
        })
    };
}
