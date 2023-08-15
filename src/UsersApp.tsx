import { useContext, useEffect } from "react";
import { LoginPage, NavBar } from "./components";
import { UsersPage } from "./pages/UsersPage";
import { useColorMode } from "@chakra-ui/react";
import { AuthContext } from "./context/Auth/AuthContex";

// import { UsersPage } from "./pages/UsersPage";
function UsersApp() {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    colorMode === "light" && toggleColorMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { login, handleLogOut } = useContext(AuthContext);
  console.log(login);
  return (
    <>
      {login?.isAuth ? (
        <>
          <NavBar
            handleLogOut={handleLogOut}
            userName={login.user?.username ? login.user?.username : "No name"}
          />
          <UsersPage />
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default UsersApp;
