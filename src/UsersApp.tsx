import { useReducer } from "react";
import { LoginPage, loginReducer } from "./components";
import { UsersPage } from "./pages/UsersPage";
// import { UsersPage } from "./pages/UsersPage";

const initialLogin = sessionStorage.getItem("login")!
  ? JSON.parse(sessionStorage.getItem("login")!)
  : {
      isAuth: false,
      user: undefined,
    };
function UsersApp() {
  const [login, dispach] = useReducer(loginReducer, initialLogin);
  return <>{login?.isAuth ? <UsersPage /> : <LoginPage dispach={dispach} />}</>;
}

export default UsersApp;
