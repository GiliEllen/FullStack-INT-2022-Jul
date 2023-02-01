"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var joi_password_1 = require("joi-password");
var joiPassword = joi_1["default"].extend(joi_password_1.joiPasswordExtendCore);
var UserSchema = new mongoose_1["default"].Schema({
    email: {
        type: String,
        unique: true,
        requierd: [true, "user must have email"]
    },
    username: {
        type: String,
        required: true
    },
    password: String
});
var UserModel = mongoose_1["default"].model("users", UserSchema);
exports["default"] = UserModel;
exports.UserValidation = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    username: joi_1["default"].string().alphanum().min(3).max(16).required(),
    password: joiPassword
        .string()
        .min(6)
        .max(16)
        // .minOfSpecialCharacters(1)
        // .minOfLowercase(1)
        // .minOfUppercase(1)
        // .minOfNumeric(1)
        // .noWhiteSpaces()
        .required(),
    repeatPassword: joi_1["default"].ref('password')
});
