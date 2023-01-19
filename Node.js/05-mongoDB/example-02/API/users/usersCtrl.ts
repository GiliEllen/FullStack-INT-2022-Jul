import mongoose from "mongoose";
import UserModel from "./userModel";

export async function getAllUsers(req, res) {
  try {
    const usersDB = await UserModel.find();
    if (!usersDB)
      throw new Error(
        "no users found on FUNCTION getAllUsers IN FILE userCtrl"
      );
    res.send({ usersDB });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export async function getUserByID(req, res) {
    try {
        const userDB = await UserModel.findById(req.params)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}