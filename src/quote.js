const useDynamoDb = require("./helpers/useDynamoDb");
const uuid = require("uuid");
const enhanceWithMiddy = require("./helpers/enhanceWithMiddy")
const createError = require('http-errors')

const db = useDynamoDb();

/*
 * shas
 *
 * @param {string} text
 */
const createQuote = async event => {  
  console.log(typeof event.body);
  return createError(402, 'Please login to view this page.')
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
      quote: "123"
    })
  };
};

// Let's "middyfy" our handler, then we will be able to attach middlewares to it


module.exports.create = enhanceWithMiddy(createQuote)
