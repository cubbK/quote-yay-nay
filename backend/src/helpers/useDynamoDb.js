var dynamodb = require("serverless-dynamodb-client");
var docClient = dynamodb.doc; // return an instance of new AWS.DynamoDB.DocumentClient()

module.exports = () => docClient;
