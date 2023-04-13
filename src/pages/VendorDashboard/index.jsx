import { useLocation } from "react-router-dom";
import CreateListing from "./CreateListing";
import VendorListings from "./Listings";
import VendorSales from "./Sales";
import VendorSettings from "./Settings";
import VendorSidebar from "./Sidebar";
import Withdraw from "./Withdraw";
import VendorWithdrawals from "./Withdrawals";
const VendorDashboard = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const checkpoint = query.get("checkpoint");
  const componentToRender = () => {
    switch (checkpoint) {
      case "listings":
        return <VendorListings />;
      case "sales":
        return <VendorSales />;
      case "withdrawals":
        return <VendorWithdrawals />;
      case "settings":
        return <VendorSettings />;
      case "create-listing":
        return <CreateListing />;
      case "vendor-withdraw":
        return <Withdraw />;
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
