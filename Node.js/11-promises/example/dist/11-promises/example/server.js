"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const middlewares_1 = require("./API/middleware/middlewares");
exports.app = express_1.default();
dotenv_1.default.config();
const mongodb_uri = process.env.MONGO_URI;
const PORT = process.env.PORT;
// future implementation
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect(mongodb_uri)
    .then((res) => {
    console.log("Connected to DB");
})
    .catch((err) => {
    console.log("At mongoose.connect:");
    console.error(err.message);
});
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.static("public"));
exports.app.use(cookie_parser_1.default());
const usersRoutes_1 = __importDefault(require("./API/users/usersRoutes"));
exports.app.use("/api/users", middlewares_1.logger, usersRoutes_1.default);
exports.app.listen(PORT, () => {
    console.log(`server is active on port : ${PORT}`);
});
