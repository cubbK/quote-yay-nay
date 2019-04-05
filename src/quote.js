const useDynamoDb = require("./helpers/useDynamoDb");
const uuid = require("uuid");
const db = useDynamoDb();

module.exports.create = async event => {
  const body = JSON.parse(event.body)
  const item = {
    id: uuid.v1(),
    quote: body.quote,
    upvotes: 0,
    downvotes: 0
  }

  const params = {
    TableName: "quotes",
    Item: item
  };

  try {

    await db.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "added",
        input: event
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error",
        input: event,
        error: err
      })
    };
  }
};
