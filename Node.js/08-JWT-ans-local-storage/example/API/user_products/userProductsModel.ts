import mongoose from "mongoose";

const UserProductSchema = new mongoose.Schema({
    //its own id
    userId: String,
    productId: String,
    type: String //cart wishlist
})

const UserProductModel = mongoose.model("user_products", UserProductSchema)

export default UserProductModel;