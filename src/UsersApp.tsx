import { useContext, useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";
import { AuthContext } from "./context/Auth/AuthContex";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, NavBar } from "./components";
import { UsersPage } from "./pages/UsersPage";
// import { UsersPage } from "./pages/UsersPage";
function UsersApp() {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    colorMode === "light" && toggleColorMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { login, handleLogOut } = useContext(AuthContext);
  return (
    <Routes>
      {login?.isAuth ? (
        <Route
          path="/users"
          element={
            <>
              <NavBar
                handleLogOut={handleLogOut}
                userName={
                  login.user?.username ? login.user?.username : "No name"
                }
              />
              <UsersPage />
            </>
          }
        />
      ) : (
        <Route path="/login" element={<LoginPage />} />
      )}
      <Route
        path="/*"
        element={<Navigate to={login?.isAuth ? "/users" : "/login"} />}
      />
    </Routes>
  );
}

export default UsersApp;
