import React from "react";
import { useLocation } from "react-router-dom";
import UserSidebar from "../../components/UserSidebar";
import UserEarnings from "./UserEarnings";
import UserFavorites from "./UserFavorites";
import UserListings from "./UserListings";
import UserSettings from "./UserSettings";
import UserWithdrawals from "./UserWithdrawals";
import History from "./History/History"
const UserDashboard = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const checkpoint = query.get("checkpoint");
  const componentToRender = () => {
    switch (checkpoint) {
      case "listings":
        return <UserListings />;
      case "earnings":
        return <UserEarnings />;
      case "withdrawals":
        return <UserWithdrawals />;
      case "settings":
        return <UserSettings />;
      case "favorites":
        return <UserFavorites />;
      case "history":
        return <History />;
      default:
        return <UserListings />;
    }
  };
  return (
    <div>
      <UserSidebar>
        <div className="dashboard_content">{componentToRender()}</div>
      </UserSidebar>
    </div>
  );
};

export default UserDashboard;
