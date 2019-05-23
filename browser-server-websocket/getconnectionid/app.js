// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

const { TABLE_NAME } = process.env;

exports.handler = async (event, context) => {
  const connectionId = event.requestContext.connectionId;

  const params = {
    TableName : TABLE_NAME,
    Key : { 
      browserId : connectionId
    }
  }

  try {
    var browserData = await ddb.get(params).promise();
  } catch (e) {
    return { statusCode: 500, body: e.stack };
  }

  const apigwManagementApi = new AWS.ApiGatewayManagementApi({
    apiVersion: '2018-11-29',
    endpoint: event.requestContext.domainName + '/' + event.requestContext.stage
  });

  const postData = {simpleBrowserId: browserData.Item.simpleBrowserId};
  
  try {
    await apigwManagementApi.postToConnection({ ConnectionId: connectionId, Data: JSON.stringify(postData) }).promise();
  } catch (e) {
    return { statusCode: 500, body: e.stack };
  }
  
  return { statusCode: 200, body: 'Data sent.' };
};
