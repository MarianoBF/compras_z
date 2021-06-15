
const { APIKEY, APPID, SENDERID } = process.env;

const payload = {"APIKEY": APIKEY, "APPID": APPID, "SENDERID": SENDERID}

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(payload),
  };
};
