exports.handler = async (event, context, callback) => {
  return callback(null, {statusCode: 200, body: "KEY" + process.env.APIKEY })
  }