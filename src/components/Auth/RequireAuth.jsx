import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import NavbarComp from "../Login/NavbarComp";

const RequireAuth = () => {
  const location = useLocation();
  const { auth } = useAuth();

  return auth ? (
    <>
      <NavbarComp />
      <Outlet />
    </>
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
