const Router = require("../util/route");
const userController = require("../controlers/userControler");

module.exports = (request, response) => {
  console.log("hello");
  Router.get(
    "/auto-complete",
    request,
    response,
    userController.getAutoComplete
  );
  Router.get("/get-meaning", request, response, userController.getMeaning);
};
