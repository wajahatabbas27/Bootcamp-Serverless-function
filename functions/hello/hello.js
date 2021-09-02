let random = require("random-name");

const handler = async (event) => {
  try {
    console.log(random());
    let name = random.first(); //first name lae take
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello world from ${name}` }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
