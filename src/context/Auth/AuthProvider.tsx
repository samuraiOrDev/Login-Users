import React, { FC } from "react";
import { useReducer } from "react";
import { AuthContext } from "./AuthContex";
import { TypeUserLogin, loginReducer } from "../../components";
import { loginAuthService } from "../../components/auth/services/authService";
interface Props {
  children: React.ReactNode;
}
const initialLogin = JSON.parse(sessionStorage.getItem("login")!) || {
  isAuth: false,
  user: undefined,
};
export const AuthProvider: FC<Props> = ({ children }) => {
  const [login, dispach] = useReducer(loginReducer, initialLogin);
  const handleLogOut = () => {
    dispach({ type: "logout" });
    sessionStorage.removeItem("login");
  };
  const handleLogin = (userLogin: TypeUserLogin) => {
    const isLogin = loginAuthService(userLogin);

    if (isLogin) {
      const { username } = userLogin;
      const user = { username };
      dispach({
        type: "login",
        payload: user,
      });
      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true,
          user,
        })
      );
    } else {
      alert("El usuario no presenta credenciales!!");
    }
  };
  return (
    <AuthContext.Provider value={{ login, handleLogOut, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
