let jwtToken: string = "";

export function setToken(token: string) {
  jwtToken = token;
}

export function getToken() {
  return jwtToken;
}
