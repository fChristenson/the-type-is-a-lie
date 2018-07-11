"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Name_1 = __importDefault(require("./models/Name"));
const EmailAddress_1 = __importDefault(require("./models/EmailAddress"));
const User_1 = __importDefault(require("./models/User"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'views', "index.html"));
});
app.get("/user", (req, res) => {
    const name = Name_1.default("foo", "bar");
    const emailAddress = EmailAddress_1.default("foo@bar.se");
    const user = new User_1.default(name, emailAddress);
    res.json(user);
    //res.json({ foo: 1 }); // ooops I did it again, you have no idea how often this happens
});
exports.default = app;
