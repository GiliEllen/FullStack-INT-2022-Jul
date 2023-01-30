import mongoose from "mongoose";

const UserSchema2 = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      requierd: [true, "user must have email"]
    },
    userName: {
      type: String,
      required: true
    },
    password: String
  });
  
  const UserModel = mongoose.model("accounts", UserSchema2);
  
  export default UserModel;
  