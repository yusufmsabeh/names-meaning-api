exports.get = (path, request, response, method) => {
  if (request.url.includes(path) && request.method == "GET")
    method(request, response);
};
exports.post = (path, request, response, method) => {
  if (request.url.includes(path) && request.method == "POST")
    method(request, response);
};
