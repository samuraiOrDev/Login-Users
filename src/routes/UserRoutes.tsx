import { Route, Routes, Navigate } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { NavBar } from "../components";
import { FC } from "react";

interface Props {
  handleLogOut: () => void;
  userName: string;
}
export const UserRoutes: FC<Props> = ({ handleLogOut, userName }) => {
  return (
    <>
      <NavBar handleLogOut={handleLogOut} userName={userName} />
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/*" element={<Navigate to={"/users"} />} />
      </Routes>
    </>
  );
};
