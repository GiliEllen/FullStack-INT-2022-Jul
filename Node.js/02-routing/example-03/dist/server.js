"use strict";
//npm init
//npm i express @types/node @types/express nodemon
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//app.get app.post app.delete app.patch app.put
//get info add      delete       update
//app.use
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json()); // to get body from client (body = data from client);
app.use(express_1.default.static("public")); // express knows static files exist on public folder
const users = [{ name: "Gili", age: 27 }, { name: "moshe", age: 35 }];
app.get("/api/users", (req, res) => {
    try {
        setTimeout(() => {
            res.send({ users: users });
        }, 5000);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});
