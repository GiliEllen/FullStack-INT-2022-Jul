"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1["default"].Schema({
    email: {
        type: String,
        unique: true,
        requierd: [true, "user must have email"]
    },
    password: String
});
var UserModel = mongoose_1["default"].model("users", UserSchema);
exports["default"] = UserModel;
