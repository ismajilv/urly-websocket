// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const AWS = require('aws-sdk');

// const ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

// const { TABLE_NAME } = process.env;

exports.handler = async (event, context) => {
  console.log("yeap")
  // let connectionData;
  
  // try {
  //   connectionData = await ddb.scan({ TableName: TABLE_NAME, ProjectionExpression: 'browserId' }).promise();
  // } catch (e) {
  //   return { statusCode: 500, body: e.stack };
  // }
  
  // const apigwManagementApi = new AWS.ApiGatewayManagementApi({
  //   apiVersion: '2018-11-29',
  //   endpoint: event.requestContext.domainName + '/' + event.requestContext.stage
  // });
  
  // const postData = JSON.parse(event.body).data;
  
  // const postCalls = connectionData.Items.map(async ({ browserId }) => {
  //   try {
  //     await apigwManagementApi.postToConnection({ ConnectionId: browserId, Data: postData }).promise();
  //   } catch (e) {
  //     if (e.statusCode === 410) {
  //       console.log(`Found stale connection, deleting ${browserId}`);
  //       await ddb.delete({ TableName: TABLE_NAME, Key: { browserId } }).promise();
  //     } else {
  //       throw e;
  //     }
  //   }
  // });
  
  // try {
  //   await Promise.all(postCalls);
  // } catch (e) {
  //   return { statusCode: 500, body: e.stack };
  // }

  // return { statusCode: 200, body: 'Data sent.' };
};
