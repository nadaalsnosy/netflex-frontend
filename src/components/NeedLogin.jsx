import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const NeedLogin = () => {
  const location = useLocation();
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    setAuth({ token, user });
  }, [setAuth]);

  return !auth.user ? (
    <Outlet />
  ) : (
    <Navigate to={"/home"} state={{ from: location }} replace />
  );
};

export default NeedLogin;
