import express from "express";
import UserModel, { UserValidation } from "./userModel";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import UserProductModel from "./../../../../08-JWT-ans-local-storage/example/API/user_products/userProductsModel";
const saltRounds = 10;

export async function register(req: express.Request, res: express.Response) {
  try {
    const { email, username, password, repeatPassword } = req.body;
    if (!email || !username || !password || !repeatPassword)
      throw new Error("Couldn't get all fields from req.body");

    const { error } = UserValidation.validate({
      email,
      username,
      password,
      repeatPassword,
    });
    if (error) throw error;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const userDB = new UserModel({ email, username, password: hash });
    await userDB.save();

    //sending cookie
    const cookie = { userId: userDB._id };
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("Couldn't load secret from .env");

    const JWTCookie = jwt.encode(cookie, secret);

    const cookie2 = { role: "viewer" };
    const JWTCookie2 = jwt.encode(cookie2, secret);

    if (userDB) {
      res.cookie("userID", JWTCookie);
      res.cookie("UA", JWTCookie2);
      res.send({ register: true, userDB });
    } else {
      res.send({ register: false });
    }
  } catch (error) {
    res.send({ error: error.message });
  }
}

export async function login(req: express.Request, res: express.Response) {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw new Error("Couldn't get all fields from req.body");

    const userDB = await UserModel.findOne({ email });
    if (!userDB) throw new Error("User with that email can't be found");
    if (!userDB.password) throw new Error("No password in DB");

    const isMatch = await bcrypt.compare(password, userDB.password);
    if (!isMatch) throw new Error("Email or password do not match");
    let role = "";
    // if (userDB.role === "viewer") {
    //   role = "viewer";
    // } else if (userDB.role === "admin") {
    //   role = admin;
    // }

    //sending cookie
    const cookie = { userId: userDB._id };
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("Couldn't load secret from .env");

    const cookie2 = { role: "viewer" };
    const JWTCookie2 = jwt.encode(cookie2, secret);

    const JWTCookie = jwt.encode(cookie, secret);

    res.cookie("userID", JWTCookie);
    res.cookie("UA", JWTCookie2); // UA = user access
    res.send({ login: true, userDB });
  } catch (error) {
    res.send({ error: error.message });
  }
}

export async function logout(req, res) {
  try {
    res.clearCookie("userID");
    res.clearCookie("UA");
    res.send({ logout: true });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
}

export async function getUser(req: express.Request, res: express.Response) {
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("Couldn't load secret from .env");

    const { userID } = req.cookies;
    if (!userID) throw new Error("Couldn't find user from cookies");

    const decodedUserId = jwt.decode(userID, secret);
    const { userId } = decodedUserId;

    const userDB = await UserModel.findById(userId);
    if (!userDB)
      throw new Error(`Couldn't find user id with the id: ${userId}`);

    res.send({ userDB });
  } catch (error) {
    res.send({ error: error.message });
  }
}

//get All documents
export async function getAllUsers(req, res) {
  try {
    const usersDB = await UserModel.find();
    res.send({ usersDB });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}
export async function getUserByCookie(req, res) {
  try {
    res.send({ test: "test" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

//get user by id
export async function getUserById(req, res) {
  try {
    const userDB = await UserModel.findById(req.params.id);
    res.send({ userDB });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export async function updateUserByID(req, res) {
  try {
    //who to change? // to what information // option - send new doc / run the validations again
    const userDB = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.send({ userDB });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export async function deleteUserByID(req, res) {
  try {
    //who to change? // to what information // option - send new doc
    const userDB = await UserModel.findByIdAndDelete(req.params.id);
    res.send({ userDB });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export async function searchDB(req, res) {
  try {
    const category = req.params.category;
    const { searchString } = req.body;
    const pattern = RegExp(searchString);

    // if(category === "username") {
    //   const usersDB = await UserModel.find({'username':{ $regex : pattern}})
    // } else if (category === 'age') {
    //   const usersDB = await UserModel.find({'age':{ $regex : pattern}})
    // }

    const usersDBnoReg = await UserModel.find({ username: searchString });
    const usersDB = await UserModel.find({ username: { $regex: pattern } });

    res.send({ usersDB, usersDBnoReg });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// export async function searchDB(req, res) {
//   try {

//     const {userSearch} = req.body
//     const pattern = new RegExp(userSearch)
//     const usersDB = await UserModel.find({'username': {$regex: pattern}})
//     res.send({usersDB})
//   } catch (error) {
//     res.status(500).send({error: error.message})
//   }
// }

export async function createTwoUsersAndAddSiblings(req, res) {
  const { email1, email2 } = req.body;
  if (!email1 || !email2)
    throw new Error("Couldn't get all fields from req.body");
  // start as two promises
  const [userDB1, userDB2] = await Promise.all([
    UserModel.findOne({ email: email1 }),
    UserModel.findOne({ email: email2 }),
  ]);

  // const [groupByUserID, groupBySiblingID] = await Promise.all([
  //   UserSibilingModel.find({ 'sibling.email': email1 }),
  //   UserSibilingModel.find({ 'sibling.email': email2 }),
  // ]);


  // const userDB1 = await  UserModel.findOne({ email: email1 });
  // const userDB2 = await  UserModel.findOne({ email: email2 });

  userDB1.sibling = userDB2;
  userDB2.sibling = userDB1;

  // await userDB1.save()
  // await userDB2.save()

  const [userDB1WithSibling, userDB2WithSibling] = await Promise.all([
    userDB1.save(),
    userDB2.save(),
  ]);

  res.send({ ok: true });
}

export async function searchUsereBySiblingName(req, res) {
  try {
    const { username } = req.body;
    //example for spesific search inside object
    const siblingsDB = await UserModel.find({ "sibling.username": username });

    res.send({ siblingsDB });
  } catch (error) {
    res.status;
  }
}
