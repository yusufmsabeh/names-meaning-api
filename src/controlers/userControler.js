const means = require("../models/meanings.json");
const names = require("../models/names.json");
const fs = require("fs");
const path = require("path");

exports.getAutoComplete = (request, response) => {
  const requestUrl = new URL(`http://localhost:300${request.url}`);
  const queryAutoComplete = (requestUrl.searchParams.get("q") || "")
    .toLowerCase()
    .trim();
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(queryAutoComplete)
  );
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ names: filteredNames }));
};
exports.getMeaning = (request, response) => {
  const requestURL = new URL(`http://local:3000${request.url}`);
  const query = requestURL.searchParams.get("name");
  const myNameMeaning = JSON.stringify(means[query]);
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(myNameMeaning);
};

exports.addMeaning = (request, response) => {
  const requestUrl = new URL(`http://localhost:300${request.url}`);
  const name = (requestUrl.searchParams.get("name") || "").toLowerCase().trim();
  const meaning = (requestUrl.searchParams.get("meaning") || "")
    .toLowerCase()
    .trim();
  console.log(name, "  ", meaning);
  if (name == "" || meaning == "") {
    console.log("bad request");
    response.writeHead(400);
    response.end();
    return;
  }

  means[name] = meaning;
  fs.writeFileSync(path.join("models", "meanings.json"), JSON.stringify(means));
  response.writeHead(200);
  response.end();
};
