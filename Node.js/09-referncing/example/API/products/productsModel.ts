import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    product_name: String, 
    price: Number,
    category: String, 
    img_src: String,
    model: String 
})

const ProductModel = mongoose.model("products", ProductSchema)

export default ProductModel;