const Router = require("../util/route");
const userController = require("../controlers/userControler");
const publicController = require("../controlers/publicHandler.js");

module.exports = (request, response) => {
  let isSent = false;
  isSent = Router.get(
    "/style.css",
    request,
    response,
    publicController.getStaticFiles,
    isSent
  );
  isSent = Router.get(
    "/requests.js",
    request,
    response,
    publicController.getStaticFiles,
    isSent
  );
  isSent = Router.get(
    "/handelElements.js",
    request,
    response,
    publicController.getStaticFiles,
    isSent
  );
  isSent = Router.get(
    "/app.js",
    request,
    response,
    publicController.getStaticFiles,
    isSent
  );
  isSent = Router.get(
    "/auto-complete",
    request,
    response,
    userController.getAutoComplete,
    isSent
  );
  isSent = Router.get(
    "/get-meaning",
    request,
    response,
    userController.getMeaning,
    isSent
  );
  isSent = Router.post(
    "/add-meaning",
    request,
    response,
    userController.addMeaning,
    isSent
  );
  isSent = Router.get("/", request, response, publicController.getRoot, isSent);
  Router.notFound(request, response, isSent);
};
