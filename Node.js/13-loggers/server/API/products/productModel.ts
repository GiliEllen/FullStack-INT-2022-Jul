import mongoose, { Schema } from "mongoose";
import CategoriesModel from "../categories/categoriesModel";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: CategoriesModel,
  },
});
const ProductModel = mongoose.model("products", ProductSchema);

export default ProductModel;
