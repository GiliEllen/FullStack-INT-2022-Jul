import mongoose from "mongoose";

const CheckSchema = new mongoose.Schema({
    check: String
})

const CheckModel = mongoose.model("checks", CheckSchema)

export default CheckModel