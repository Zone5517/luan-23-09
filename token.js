"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setToken = setToken;
exports.getToken = getToken;
let jwtToken = "";
function setToken(token) {
    jwtToken = token;
}
function getToken() {
    return jwtToken;
}
//# sourceMappingURL=token.js.map