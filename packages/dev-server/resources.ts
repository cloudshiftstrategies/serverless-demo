import {APIGatewayProxyEvent} from "aws-lambda";
export const apiEvent: APIGatewayProxyEvent = {
    body: "",
    headers: {},
    httpMethod: "",
    isBase64Encoded: false,
    multiValueHeaders: {},
    multiValueQueryStringParameters: {},
    path: "",
    pathParameters: {},
    queryStringParameters: {},
    requestContext: {
        accountId: "",
        apiId: "",
        authorizer: {},
        protocol: "",
        httpMethod: "",
        identity: {
            accessKey:  null,
            accountId: null,
            apiKey:  null,
            apiKeyId: null,
            caller: null,
            clientCert: null,
            cognitoAuthenticationProvider: null,
            cognitoAuthenticationType: null,
            cognitoIdentityId: null,
            cognitoIdentityPoolId: null,
            principalOrgId: null,
            sourceIp: "",
            user: null,
            userAgent: null,
            userArn: null
        },
        path: "",
        stage: "",
        requestId: "",
        requestTimeEpoch: 1,
        resourceId: "",
        resourcePath: ""
    },
    resource: "",
    stageVariables: {}
}