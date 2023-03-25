exports.get = (path, request, response, method, isSent) => {
  if (request.url.includes(path) && request.method == "GET" && !isSent) {
    method(request, response);
    return true;
  }
  return false;
};
exports.post = (path, request, response, method, isSent) => {
  if (request.url.includes(path) && request.method == "POST" && !isSent) {
    method(request, response);
    return true;
  }
  return false;
};

exports.notFound = (request, response, isSent) => {
  if (!isSent) {
    response.writeHead(404, {
      "content-type": "application/text",
    });
    response.end(`cannot ${request.method} ${request.url}`);
  }
};
