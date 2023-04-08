import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { setToken } from "../redux/features/user/userSlice";
import { dispatch } from "../redux/store";

export function RequireToken() {
  const { user } = useSelector((state) => state.user);
  let currentPath = window.location.pathname;
  let queryString = window.location.search;
  let pathname = currentPath + queryString;

  if (!user?.firstName && user?.firstName !== "undefined") {
    const rememberMe = localStorage.getItem("rememberMe");
    if (rememberMe) {
      const token = localStorage.getItem("pentriaAccessToken");
      if (!token) {
        localStorage.setItem("redirect", true);
        localStorage.setItem("redirect_link", pathname);
        return <Navigate to="/login" replace />;
      } else {
        dispatch(setToken(token));
      }
    } else {
      localStorage.setItem("redirect", true);
      localStorage.setItem("redirect_link", pathname);
      return <Navigate to="/login" replace />;
    }
  }

  return <Outlet />;
}

export function Authenticated() {
  const { user } = useSelector((state) => state.user);
  const userLink =
    user?.accountType === "GUEST"
      ? "/user/dashboard"
      : user?.accountType === "VENDOR"
      ? "/vendor/dashboard"
      : user?.accountType === "ADMIN"
      ? "/admin/dashboard"
      : "/login";
  if (user?.firstName) {
    let redirect = localStorage.getItem("redirect");
    if (redirect) {
      let link = localStorage.getItem("redirect_link");
      return <Navigate to={link} replace />;
    } else {
      return <Navigate to={userLink} replace />;
    }
  }

  return <Outlet />;
}
