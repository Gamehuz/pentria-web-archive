import { useLocation } from "react-router-dom";
import VendorEarnings from "./Earnings";
import VendorListings from "./Listings";
import VendorSettings from "./Settings";
import VendorSidebar from "./Sidebar";
import VendorWithdrawals from "./Withdrawals";
const VendorDashboard = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const checkpoint = query.get("checkpoint");
  const componentToRender = () => {
    switch (checkpoint) {
      case "listings":
        return <VendorListings />;
      case "earnings":
        return <VendorEarnings />;
      case "withdrawals":
        return <VendorWithdrawals />;
      case "settings":
        return <VendorSettings />;
      default:
        return <VendorListings />;
    }
  };
  return (
    <div>
      <VendorSidebar>
        <div className="dashboard_content">{componentToRender()}</div>
      </VendorSidebar>
    </div>
  );
};

export default VendorDashboard;
