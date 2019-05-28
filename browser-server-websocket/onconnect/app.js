// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

var AWS = require("aws-sdk");
AWS.config.update({ region: process.env.AWS_REGION });
var DDB = new AWS.DynamoDB({ apiVersion: "2012-10-08" });

exports.handler = function (event, context, callback) {
  const simpleBrowserId = Math.floor(Math.random() * 10).toString()

  var putParams = {
    TableName: process.env.TABLE_NAME,
    Item: {
      browserId: { S: event.requestContext.connectionId },
      simpleBrowserId: { S: simpleBrowserId },
      connectedClientIds: { L: [] }//TODO
    }
  };

  DDB.putItem(putParams, function (err) {
    callback(null, {
      statusCode: err ? 500 : 200,
      body: err ? "Failed to connect: " + JSON.stringify(err) : "Connected."
    });
  });
};
