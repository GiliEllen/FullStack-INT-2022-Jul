import mongoose from "mongoose";
import UserModel from "./userModel";

export async function register(req, res) {
  try {
    const { email, password } = req.body;
    if(!email || !password) throw new Error("no password or email from client on FUNCTION register in FILE userCtrl")

    // const userDB = await UserModel.create({ email, password });
    // if(!userDB) throw new Error("no user was created")

    const userDB = new UserModel({ email, password });
    await userDB.save();
    if (!userDB) throw new Error("no user was created");

    res.send({ ok: true });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const userDB = await UserModel.findOne({ email, password });
    if (!userDB) throw new Error("User name or password do not match");

    res.send({ ok: true });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
}

//get All documents
export async function getAllUsers(req, res) {
  try {
    const usersDB = await UserModel.find();
    res.send({usersDB});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

//get user by id
export async function getUserById(req, res) {
  try {
    const userDB = await UserModel.findById(req.params.id);
    res.send({userDB});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export async function updateUserByID(req, res) {
  try {              
                                                   //who to change? // to what information // option - send new doc / run the validations again
    const userDB = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    res.send({userDB});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export async function deleteUserByID(req, res) {
  try {                                           //who to change? 
    const userDB = await UserModel.findByIdAndDelete(req.params.id);
    res.send({userDB});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}