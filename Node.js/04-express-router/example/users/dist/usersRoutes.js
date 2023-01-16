"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCtrl_1 = require("./usersCtrl");
var router = express_1["default"].Router();
router
    // "/api/user"
    .get("", usersCtrl_1.getAllUsers)
    .get("/:id", usersCtrl_1.getUserById)
    .get("/:userId/books/:bookId", usersCtrl_1.getUserBook)
    .post("", usersCtrl_1.addUser)["delete"]("/:id", usersCtrl_1.deleteUser);
exports["default"] = router;
