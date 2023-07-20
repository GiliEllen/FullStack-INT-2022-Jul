import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  }
});
const CategoriesModel = mongoose.model("categories", CategoriesSchema);

export default CategoriesModel;
