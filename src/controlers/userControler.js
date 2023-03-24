const names = require("../models/names.json");

exports.getAutoComplete = async (request, response, next) => {
  const requestUrl = new URL(`http://localhost:300${request.url}`);
  const queryAutoComplete = (requestUrl.searchParams.get("q") || "")
    .toLowerCase()
    .trim();

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(queryAutoComplete)
  );
  response.writeHead(200, {
    "Content-Type": "application/json",
  });
  response.end(JSON.stringify({ names: filteredNames }));
};
