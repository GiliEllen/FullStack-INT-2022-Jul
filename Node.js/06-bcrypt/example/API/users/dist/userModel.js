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
// export const UserValidation = Joi.object({
//   email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
//   username: Joi.string().alphanum().min(3).max(16).required(),
//   password: joiPassword
//       .string()
//       .min(6)
//       .max(16)
//       .minOfSpecialCharacters(1)
//       .minOfLowercase(1)
//       .minOfUppercase(1)
//       .minOfNumeric(1)
//       .noWhiteSpaces()
//       .required(),
//   repeatPassword: Joi.ref('password')
// });
