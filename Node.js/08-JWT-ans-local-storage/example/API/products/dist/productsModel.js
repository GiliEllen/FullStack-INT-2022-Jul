"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ProductSchema = new mongoose_1["default"].Schema({
    product_name: String,
    price: Number,
    category: String,
    img_src: String,
    model: String
});
var ProductModel = mongoose_1["default"].model("products", ProductSchema);
exports["default"] = ProductModel;
