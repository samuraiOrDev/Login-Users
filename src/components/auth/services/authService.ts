import { TypeUserLogin } from "..";

export const loginAuthService = (userLogin: TypeUserLogin) => {
  const { username, password } = userLogin;
  return username === "admin" && password === "12345";
};
