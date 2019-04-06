const useDynamoDb = require("../helpers/useDynamoDb");
const uuid = require("uuid");
const db = useDynamoDb();
const middy = require("middy");
const {
  urlEncodeBodyParser,
  validator,
  httpErrorHandler
} = require("middy/middlewares");
const createError = require("http-errors");

/*
 * @param {string} text
 */
const createQuote = event => {
  console.log(typeof(event.body))
  const item = {
    id: uuid.v1(),
    text: event.body.text,
    upvotes: 0,
    downvotes: 0
  };

  const params = {
    TableName: "quotes",
    Item: item
  };

  // await db.put(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "added",
      quote: item
    })
  };
};

const inputSchema = {
  required: ['body'],
  properties: {
    body: {
      properties: {
        text: { type: 'string', minLength: 1 },
      },
      required: ['text'] // Insert here all required event properties
    }
  }
}

// Let's "middyfy" our handler, then we will be able to attach middlewares to it
const handler = middy(createQuote)
  .use(urlEncodeBodyParser()) // parses the request body when it's a JSON and converts it to an object
  .use(validator({inputSchema})) // validates the input
  .use(httpErrorHandler()) // handles common http errors and returns proper responses

module.exports.create = handler;
