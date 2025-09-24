let jwtToken = "";
export function setToken(token) {
    jwtToken = token;
}
export function getToken() {
    return jwtToken;
}
