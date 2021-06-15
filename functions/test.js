
const { APIKEY } = process.env;

const payload = {"APIKEY": APIKEY, "STRING": "A STRING"}

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(payload),
  };
};


// exports.handler = async (event, context) => {
//   const { name = "Anonymous" } = event.queryStringParameters;
//   return {
//     statusCode: 200,
//     body: `Hello, ${name}`
//   };
// };