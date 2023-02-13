"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.searchDB = exports.deleteUserByID = exports.updateUserByID = exports.getUserById = exports.getUserByCookie = exports.getAllUsers = exports.getUser = exports.logout = exports.login = exports.register = void 0;
var userModel_1 = require("./userModel");
var bcrypt_1 = require("bcrypt");
var jwt_simple_1 = require("jwt-simple");
var saltRounds = 10;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, username, password, repeatPassword, error, salt, hash, userDB, cookie, secret, JWTCookie, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, email = _a.email, username = _a.username, password = _a.password, repeatPassword = _a.repeatPassword;
                    if (!email || !username || !password || !repeatPassword)
                        throw new Error("Couldn't get all fields from req.body");
                    error = userModel_1.UserValidation.validate({ email: email, username: username, password: password, repeatPassword: repeatPassword }).error;
                    if (error)
                        throw error;
                    salt = bcrypt_1["default"].genSaltSync(saltRounds);
                    hash = bcrypt_1["default"].hashSync(password, salt);
                    userDB = new userModel_1["default"]({ email: email, username: username, password: hash });
                    return [4 /*yield*/, userDB.save()];
                case 1:
                    _b.sent();
                    cookie = { userId: userDB._id };
                    secret = process.env.JWT_SECRET;
                    if (!secret)
                        throw new Error("Couldn't load secret from .env");
                    JWTCookie = jwt_simple_1["default"].encode(cookie, secret);
                    if (userDB) {
                        res.cookie("userID", JWTCookie);
                        res.send({ register: true, userDB: userDB });
                    }
                    else {
                        res.send({ register: false });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    res.send({ error: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.register = register;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, userDB, isMatch, cookie, secret, JWTCookie, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, email = _a.email, password = _a.password;
                    if (!email || !password)
                        throw new Error("Couldn't get all fields from req.body");
                    return [4 /*yield*/, userModel_1["default"].findOne({ email: email })];
                case 1:
                    userDB = _b.sent();
                    if (!userDB)
                        throw new Error("User with that email can't be found");
                    if (!userDB.password)
                        throw new Error("No password in DB");
                    return [4 /*yield*/, bcrypt_1["default"].compare(password, userDB.password)];
                case 2:
                    isMatch = _b.sent();
                    if (!isMatch)
                        throw new Error("Email or password do not match");
                    cookie = { userId: userDB._id };
                    secret = process.env.JWT_SECRET;
                    if (!secret)
                        throw new Error("Couldn't load secret from .env");
                    JWTCookie = jwt_simple_1["default"].encode(cookie, secret);
                    res.cookie("userID", JWTCookie);
                    res.send({ login: true, userDB: userDB });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    res.send({ error: error_2.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
function logout(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                res.clearCookie("userID");
                res.send({ logout: true });
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.logout = logout;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var secret, userID, decodedUserId, userId, userDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    secret = process.env.JWT_SECRET;
                    if (!secret)
                        throw new Error("Couldn't load secret from .env");
                    userID = req.cookies.userID;
                    if (!userID)
                        throw new Error("Couldn't find user from cookies");
                    decodedUserId = jwt_simple_1["default"].decode(userID, secret);
                    userId = decodedUserId.userId;
                    return [4 /*yield*/, userModel_1["default"].findById(userId)];
                case 1:
                    userDB = _a.sent();
                    if (!userDB)
                        throw new Error("Couldn't find user id with the id: " + userId);
                    res.send({ userDB: userDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    res.send({ error: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUser = getUser;
//get All documents
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var usersDB, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userModel_1["default"].find()];
                case 1:
                    usersDB = _a.sent();
                    res.send({ usersDB: usersDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    res.status(500).send({ error: error_4.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllUsers = getAllUsers;
function getUserByCookie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                res.send({ test: "test" });
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getUserByCookie = getUserByCookie;
//get user by id
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userDB, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userModel_1["default"].findById(req.params.id)];
                case 1:
                    userDB = _a.sent();
                    res.send({ userDB: userDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    res.status(500).send({ error: error_5.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUserById = getUserById;
function updateUserByID(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userDB, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userModel_1["default"].findByIdAndUpdate(req.params.id, req.body, {
                            "new": true,
                            runValidators: true
                        })];
                case 1:
                    userDB = _a.sent();
                    res.send({ userDB: userDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    res.status(500).send({ error: error_6.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.updateUserByID = updateUserByID;
function deleteUserByID(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userDB, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userModel_1["default"].findByIdAndDelete(req.params.id)];
                case 1:
                    userDB = _a.sent();
                    res.send({ userDB: userDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    res.status(500).send({ error: error_7.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteUserByID = deleteUserByID;
function searchDB(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var category, searchString, pattern, usersDBnoReg, usersDB, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    category = req.params.category;
                    searchString = req.body.searchString;
                    pattern = RegExp(searchString);
                    return [4 /*yield*/, userModel_1["default"].find({ "username": searchString })];
                case 1:
                    usersDBnoReg = _a.sent();
                    return [4 /*yield*/, userModel_1["default"].find({ 'username': { $regex: pattern } })];
                case 2:
                    usersDB = _a.sent();
                    res.send({ usersDB: usersDB, usersDBnoReg: usersDBnoReg });
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    res.status(500).send({ error: error_8.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.searchDB = searchDB;
