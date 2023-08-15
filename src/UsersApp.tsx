import { useContext, useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";
import { AuthContext } from "./context/Auth/AuthContex";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./components";
import { UserRoutes } from "./routes/UserRoutes";
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
          path="/*"
          element={
            <UserRoutes
              handleLogOut={handleLogOut}
              userName={login.user?.username ? login.user?.username : "No name"}
            />
          }
        />
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}

export default UsersApp;
