"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCtrl_1 = require("./usersCtrl");
var router = express_1["default"].Router();
router
    // "/api/user"
    .get("", usersCtrl_1.getAllUsers)
    .get("/:id", usersCtrl_1.getUserById)
    .post("/login", usersCtrl_1.login)
    .post("/register", usersCtrl_1.register)
    .patch("/:id", usersCtrl_1.updateUserByID);
exports["default"] = router;
