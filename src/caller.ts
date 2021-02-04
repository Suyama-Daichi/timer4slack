import { APIGatewayEvent } from "aws-lambda";
import { handler } from './index';

export const apiGatewayEvent: APIGatewayEvent = {
    body: 'token=yZxCF1ekYc39FJ2b385Pnbad&team_id=TU45FSWH5&team_domain=symdit&channel_id=C01GZTLH2G6&channel_name=memo&user_id=UU45FSWT1&user_name=symdit&command=%2Ftimer&text=15min&api_app_id=A01KWLMGJT1&is_enterprise_install=false&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FTU45FSWH5%2F1706627477734%2FlsCH9zQa2PBBe84MjjwuN45e&trigger_id=1698630161479.956185914583.70e26c23660f940ca5f7fee42c042868',
    headers: {},
    httpMethod: 'POST',
    isBase64Encoded: false,
    multiValueQueryStringParameters: null,
    multiValueHeaders: {},
    path: '',
    pathParameters: null,
    queryStringParameters: null,
    requestContext: {
        accountId: '123456789',
        apiId: '',
        authorizer: null,
        httpMethod: 'POST',
        identity: {
            accessKey: '',
            accountId: '',
            apiKey: '',
            apiKeyId: '',
            caller: '',
            cognitoAuthenticationProvider: '',
            cognitoAuthenticationType: '',
            cognitoIdentityId: '',
            cognitoIdentityPoolId: '',
            principalOrgId: '',
            sourceIp: '',
            user: '',
            userAgent: '',
            userArn: ''
        },
        path: '',
        protocol: '',
        requestId: '',
        requestTimeEpoch: 0,
        resourceId: '',
        resourcePath: '',
        stage: ''
    },
    resource: '',
    stageVariables: null
}

handler(apiGatewayEvent)
