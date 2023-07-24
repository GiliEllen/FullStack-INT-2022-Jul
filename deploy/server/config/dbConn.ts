import mongoose from "mongoose";
import mysql from "mysql";
import dotenv from 'dotenv';
dotenv.config()

const mongodb_uri = process.env.MONGO_URI;

mongoose.set("strictQuery", true);

mongoose
  .connect(mongodb_uri)
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("At mongoose.connect:");
    console.error(err.message);
  });



const SQL_PASSWORD = process.env.JWT_SECRET
 
export const connection = mysql.createConnection({
    host: "sql7.freemysqlhosting.net",
    user: "sql7616400",
    password: "IQY4CeQnYn",
    database: "sql7616400",
    port: 3306
});
var del = connection._protocol._delegateError;
connection._protocol._delegateError = function(err, sequence){
  if (err.fatal) {
    console.trace('fatal error: ' + err.message);
  }
  return del.call(this, err, sequence);
};

connection.connect((error) => {
    try {
        if(error) throw error;
        console.log("Connected to MySQL");
        
    } catch (error) {
        console.error(error);
        console.log(error.fatal)
        if (error.fatal) console.log("FATAL")
    }
});

