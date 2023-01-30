"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema2 = new mongoose_1["default"].Schema({
    email: {
        type: String,
        unique: true,
        requierd: [true, "user must have email"]
    },
    userName: {
        type: String,
        required: true
    },
    password: String
});
var UserModel = mongoose_1["default"].model("accounts", UserSchema2);
exports["default"] = UserModel;
