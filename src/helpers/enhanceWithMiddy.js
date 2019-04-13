const middy = require("middy");
// const handly = require("handly");
const {
  httpErrorHandler,
  jsonBodyParser
} = require("middy/middlewares");

module.exports = function enhanceWithMiddy (handler) {
  return middy(handler)
  .use(jsonBodyParser())
  .use(httpErrorHandler()); 
}