import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
export async function helloWorldHandler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    return {
        statusCode: 200,
        body: "Hello World"
    }
}