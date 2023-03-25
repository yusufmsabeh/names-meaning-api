exports.get = (path, request, response, method, isSent) => {
  if (request.url.includes(path) && request.method == "GET" && !isSent) {
    console.log("send get");
    method(request, response);
    isSent = true;
  }
  return isSent;
};
exports.post = (path, request, response, method, isSent) => {
  if (request.url.includes(path) && request.method == "POST" && !isSent) {
    method(request, response);
    isSent = true;
  }
  return isSent;
};

exports.notFound = (request, response, isSent) => {
  console.log("not found");
  if (!isSent) {
    response.writeHead(404, {
      "content-type": "application/text",
    });
    response.end(`cannot ${request.method} ${request.url}`);
  }
};
