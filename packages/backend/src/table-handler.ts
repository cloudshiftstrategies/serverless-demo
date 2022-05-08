import * as AWS from "aws-sdk"
import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";

const options = {endpoint: process.env.DYNAMODB_ENDPOINT || undefined, region: process.env.REGION || undefined};
console.log(JSON.stringify(options))
const ddb = new AWS.DynamoDB(options);
//const documentClient = new AWS.DynamoDB.DocumentClient(options);

export async function tableHandler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    const data = await ddb.listTables().promise()
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}