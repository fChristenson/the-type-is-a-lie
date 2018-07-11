"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Name_1 = __importDefault(require("./Name"));
const EmailAddress_1 = __importDefault(require("./EmailAddress"));
const typechecker_1 = __importDefault(require("../lib/typechecker"));
class User {
    constructor(name, emailAddress) {
        this.name = name;
        this.emailAddress = emailAddress;
    }
    static from(json = {}) {
        const maybeName = json.name || {};
        const firstName = typechecker_1.default("string", "", "firstName")(maybeName.firstName);
        const lasttName = typechecker_1.default("string", "", "lastName")(maybeName.lastName);
        const emailAddress = typechecker_1.default("string", "", "emailAddress")(json.emailAddress);
        const name = Name_1.default(firstName, lasttName);
        const email = EmailAddress_1.default(emailAddress);
        return new User(name, email);
    }
}
exports.default = User;
