const means = require("../models/meanings.json");
const getMeanings = (response, str) => {
  const myNameMeaning = JSON.stringify(means.str);
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(myNameMeaning);
};

module.exports = { getMeanings };
