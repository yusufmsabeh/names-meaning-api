const Router = require("../util/route");
const userController = require("../controlers/userControler");

module.exports = (request, response) => {
  console.log("request");
  let isSent = false;
  isSent = Router.get(
    "/auto-complete",
    request,
    response,
    userController.getAutoComplete,
    isSent
  );
  console.log(isSent);
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
  Router.notFound(request, response, isSent);
};
