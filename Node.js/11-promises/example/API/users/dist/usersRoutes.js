"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCtrl_1 = require("./usersCtrl");
var middlewares_1 = require("../middleware/middlewares");
var router = express_1["default"].Router();
router.param("id", function (req, res, next, val) {
    console.log("userId is: " + val);
    next();
});
router
    .get("", middlewares_1.helloMiddleware, middlewares_1.checkAccess, usersCtrl_1.getAllUsers)
    .get("/get-user-by-cookie", usersCtrl_1.getUser)
    .get("/logout", usersCtrl_1.logout)
    .get("/:id", middlewares_1.checkAccess, usersCtrl_1.getUserById)
    .post("/login", middlewares_1.checkAccess, usersCtrl_1.login) //no cookie of role
    .post("/register", usersCtrl_1.register) // no cookie role
    .post("/search/:category", middlewares_1.checkAccess, usersCtrl_1.searchDB);
exports["default"] = router;
