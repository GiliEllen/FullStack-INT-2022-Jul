import { app } from "../../server";
import express from "express";
import UserModel from "./../../../../07-joi-cookies/example/API/users/userModel";
import jwt from "jwt-simple";

export const helloMiddleware = (req, res, next) => {
  console.log("hello from the middleware 👌");
  next();
};

export const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  //@ts-ignore
  req.requestedTime = new Date().toISOString();
  console.log(req.path);
  //@ts-ignore
  console.log(req.requestedTime);
  next();
};

//task:
// write a middleware that runs whenever user is excessing the db
// the middleware will check if user has access to site (JWT token)

export const checkAccess = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    console.log("check user access");
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("Couldn't load secret from .env");

    const { UA } = req.cookies;
    if (!UA) throw new Error("Couldn't find UA from cookies");

    const decodedUserAccess = jwt.decode(UA, secret);
    const {role}  = decodedUserAccess; //"viewer"
    if (!role) throw new Error(`no role for this user, access denied`);
    
    if (role === "viewer") {
      console.log("access allowed");
      next();
    } else {
      throw new Error("no autoriztion");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
