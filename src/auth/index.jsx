import IsLoadingSkeleton from "@/components/LoadingSkeleton";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { setToken } from "../redux/features/user/userSlice";
import { dispatch } from "../redux/store";

export function RequireToken() {
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("pentriaAccessToken");
    if (token) {
      dispatch(setToken(token));
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <IsLoadingSkeleton />;
  }
  if (!user?.firstName) {
    return <Navigate to="/login" replace />;
  } else {
    return <Outlet />;
  }
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
      : "/";

  if (user?.firstName) {
    return <Navigate to={userLink} replace />;
  }

  return <Outlet />;
}
