"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function EmailAddress(emailAddress) {
    if (/.+@.+/.test(emailAddress))
        return emailAddress;
    throw new Error(`${emailAddress} is not a valid emailAddress`);
}
exports.default = EmailAddress;
