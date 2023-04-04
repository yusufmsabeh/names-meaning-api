const means = require("../models/meanings.json");
let names = require("../models/names.json");
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
  const query = requestURL.searchParams.get("name").toLowerCase().trim();
  const myNameMeaning = JSON.stringify(means[query]);
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ name: means[query] }));
};

exports.addMeaning = (request, response) => {
  const requestUrl = new URL(`http://localhost:300${request.url}`);
  const name = (requestUrl.searchParams.get("name") || "").toLowerCase().trim();
  const meaning = (requestUrl.searchParams.get("meaning") || "")
    .toLowerCase()
    .trim();
  console.log(name, "  ", meaning);
  if (name == "" || meaning == "") {
    response.writeHead(400);
    response.end();
    return;
  }

  means[name] = meaning;
  names.push(name);
  names = [...new Set(names)];
  fs.writeFileSync(
    path.join("src", "models", "meanings.json"),
    JSON.stringify(means)
  );
  fs.writeFileSync(
    path.join("src", "models", "names.json"),
    JSON.stringify(names)
  );
  console.log(names);
  response.writeHead(200);
  response.end();
};
