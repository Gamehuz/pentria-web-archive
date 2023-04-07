import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { setToken } from "../redux/features/user/userSlice";
import { dispatch } from "../redux/store";

export function RequireToken() {
  const auth = useSelector((state) => state.user);
  let currentPath = window.location.pathname;
  let queryString = window.location.search;
  let pathname = currentPath + queryString;

  if (!auth && auth !== "undefined") {
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
  const auth = useSelector((state) => state.user);

  if (auth) {
    let redirect = localStorage.getItem("redirect");
    if (redirect) {
      let link = localStorage.getItem("redirect_link");
      return <Navigate to={link} replace />;
    } else {
      return <Navigate to="/user/dashboard" replace />;
    }
  }

  return <Outlet />;
}
