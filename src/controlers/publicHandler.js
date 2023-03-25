const staticFileHandler = require("../util/staticFileHandler");
exports.getRoot = (request, response) => {
  staticFileHandler.getStaticFile(request, response, "index.html");
};
exports.getStaticFiles = (request, response) => {
  staticFileHandler.getStaticFile(request, response, request.url);
};
