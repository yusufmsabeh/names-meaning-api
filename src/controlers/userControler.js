const means = require("../models/meanings.json");
const getMeaning = (request, response) => {
  const requestURL = new URL(`http://local:3000${request.url}`);
  const query = requestURL.searchParams.get("name");
  const myNameMeaning = JSON.stringify(means[query]);
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(myNameMeaning);
};

module.exports = { getMeaning };
