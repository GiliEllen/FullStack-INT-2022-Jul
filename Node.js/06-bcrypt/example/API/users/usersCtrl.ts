import express from "express";
import mongoose from "mongoose";
import UserModel, {UserValidation} from "./userModel";
import bcrypt from 'bcrypt';
import { decode } from 'punycode';
const saltRounds = 10;

export async function register(req:express.Request, res:express.Response) {
    try {
        const { email, username, password, rePassword } = req.body;
        if (!email || !username || !password || !rePassword) throw new Error("Couldn't get all fields from req.body");

        const { error } = UserValidation.validate({ email, username, password, repeatPassword: rePassword });
        if (error) throw error;

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const userDB = new UserModel({ email, username, password: hash });
        await userDB.save();

        //sending cookie

        if (userDB) {
            res.send({ register: true, userDB });
        } else {
            res.send({ register: false });
        }

    } catch (error) {
        res.send({ error: error.message });
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
  try {                                           //who to change? // to what information // option - send new doc / run the validations again
    const userDB = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    res.send({userDB});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export async function deleteUserByID(req, res) {
  try {                                           //who to change? // to what information // option - send new doc
    const userDB = await UserModel.findByIdAndDelete(req.params.id);
    res.send({userDB});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}