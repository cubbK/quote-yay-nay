const useDynamoDb = require("./helpers/useDynamoDb");
const uuid = require("uuid");
const enhanceWithMiddy = require("./helpers/enhanceWithMiddy");
const createError = require("http-errors");
const axios = require("axios");

const db = useDynamoDb();

// Quote example
// "quote": {
//   "id": 8889,
//   "dialogue": false,
//   "private": false,
//   "tags": [
//       "car"
//   ],
//   "url": "https://favqs.com/quotes/bill-watterson/8889-shutting-off-t-",
//   "favorites_count": 0,
//   "upvotes_count": 1,
//   "downvotes_count": 0,
//   "author": "Bill Watterson",
//   "author_permalink": "bill-watterson",
//   "body": "Shutting off the thought process is not rejuvenating the mind; it's like a car battery - it recharges by running."
// }

async function createQuote(quote) {
  // return createError(402, 'Please login to view this page.')
  try {
    const item = {
      id: quote.id.toString(),
      data: quote,
      upvotes: 0,
      downvotes: 0
    };

    const params = {
      TableName: "quotes",
      Item: item
    };

    await db.put(params).promise();
  } catch (err) {
    throw new Error(err.message);
  }
}

async function setQuoteOfTheDay(event) {
  try {
    const request = await axios.get("https://favqs.com/api/qotd");
    const quote = request.data.quote;
    await createQuote(quote);
    console.log("Added quote of the day")
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Successfully added the quote.", quote })
    };
  } catch (err) {
    console.log(err)
    return createError(500, 'Error');
  }
}

// Let's "middyfy" our handler, then we will be able to attach middlewares to it

module.exports.setQuoteOfTheDay = enhanceWithMiddy(setQuoteOfTheDay);
