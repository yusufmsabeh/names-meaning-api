const url = require("url");
const fs = require("fs");
const path = require("path");

exports.getAutoComplete = async (request, response, next) => {
  const requestUrl = new URL(`http://localhost:300${request.url}`);
  const queryAutoComplete = requestUrl.searchParams.get("q");
  console.log(queryAutoComplete);
  if (!queryAutoComplete) return console.log("not found");

  // open names.json file
  const rawdata = fs.readFileSync(path.join("models", "names.json"));
  const names = JSON.parse(rawdata);
  const filteredNames = names.filter((name) =>
    name.includes(queryAutoComplete)
  );
  response.writeHead(200);
  response.end(JSON.stringify({ names: filteredNames }));
};
