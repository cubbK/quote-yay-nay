const useDynamoDb = require("./helpers/useDynamoDb");
const uuid = require("uuid")
const db = useDynamoDb();

module.exports.create = async (event) => {
  const params = {
    TableName: 'quotes',
    Item: {
      id: uuid.v1(),
      quote: "quote 1"
    }
  }
  

  try {
    const result = await db.put(params).promise()
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'added',
        input: event,
        result: result
      }),
    };
  } catch ( err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error',
        input: event,
        error: err
      }),
    };
  }

  
  
}