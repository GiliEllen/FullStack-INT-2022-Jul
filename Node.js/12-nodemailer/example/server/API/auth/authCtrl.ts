import express from "express";
import nodemailer from "nodemailer";
import UserModel from "../users/userModel";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import Mailgen from "mailgen";

export async function sendEmail(req, res) {
  let testAccount = await nodemailer.createTestAccount(); // <-- the mail who sends the message

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let message = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<h1>Hello world?</h1>", // html body
  };

  transporter
    .sendMail(message)
    .then((info) => {
      res.status(201).send({
        msg: "You Got Mail",
        info,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
}

export async function forgotPassword(req, res) {
  try {
    const JWT_SECRET = process.env.JWT_SECRET;
    const { email } = req.body;
    if (!email)
      throw new Error(
        " no email from client on forgotPassword in file autctrl"
      );

    const userDB = await UserModel.findOne({ email });
    if (!userDB) throw new Error("no user");

    const resetCode = uuidv4();

    userDB.resetCode = resetCode;
    await userDB.save();

    const token = jwt.sign({ resetCode }, JWT_SECRET, { expiresIn: "1h" });

    const action = {
      instructions: "click here to reset",
      button: {
        color: "#222cbc", // Optional action button color
        text: "Reset",
        link: `http://localhost:3000/auth/access-account/${token}`,
      },
    };

    await sendEmailWithGmail(
      "Reset Password",
      userDB.email,
      userDB.username,
      "<p>This is to reset password</p>",
      "<p>have any questions?</p>",
      action
    );
    res.status(201).send({ msg: "you got mail" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export function sendEmailWithGmail(
  subject,
  userEmail,
  username,
  emailIntro,
  outro,
  action?
) {
  const EMAIL = process.env.EMAIL;
  const PASSWORD = process.env.PASSWORD;

  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Gili Support",
      link: "https://mailgern.js",
    },
  });

  let response = {
    body: {
      name: username,
      intro: emailIntro,
      action,
      outro,
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: EMAIL,
    to: userEmail,
    subject,
    html: mail,
  };

  transporter
    .sendMail(message)
    .then((info) => {
      console.log("success");
    })
    .catch((error) => {
      console.log("error");
    });
}
