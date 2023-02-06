"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserProductSchema = new mongoose_1["default"].Schema({
    //its own id
    userId: String,
    productId: String,
    type: String //cart wishlist
});
var UserProductModel = mongoose_1["default"].model("user_products", UserProductSchema);
exports["default"] = UserProductModel;
