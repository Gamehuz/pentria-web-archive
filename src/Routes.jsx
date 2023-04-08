import { Route, Routes as Switch } from "react-router-dom";
import { Authenticated, RequireToken } from "./auth";
import UserLayout from "./Layouts/User";
import Aboutus from "./pages/AboutUs";
import AdminSettings from "./pages/AdminSettings";
import AdminTicket from "./pages/AdminTicket";
import BlogPage from "./pages/BlogPage";
import BookingPage from "./pages/BookingPage";
import CreateListing from "./pages/CreateListing/CreateListing";
import CustomerSignup from "./pages/CustomerSignup";
import Enquiries from "./pages/Enquiries";
import Explore from "./pages/Explore";
import HistoryGuest from "./pages/HistoryGuest";
import Homepage from "./pages/Home";
import LoginPage from "./pages/Login";
import LoginOrSignUp from "./pages/LoginOrSignUp";
import Partners from "./pages/Partners";
import Payment from "./pages/Payment";
import PromptPage from "./pages/PromptPage";
import Receipt from "./pages/Receipt";
import Sencilo from "./pages/Sencilo";
import UserDashboard from "./pages/UserDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import VendorSignup from "./pages/VendorSIgnUp";

// jsdoc
/**
   * @returns {JSX.Element}
 all routes are defined here
  */

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route element={<Authenticated />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loginorsignup" element={<LoginOrSignUp />} />
        <Route exact path="/customer/signup" element={<CustomerSignup />} />
        <Route exact path="/vendor/signup" element={<VendorSignup />} />
        <Route exact path="/prompt" element={<PromptPage />} />
      </Route>
      <Route path="/payment" element={<Payment />} />
      <Route path="/receipt" element={<Receipt />} />
      <Route exact path="/blog" element={<BlogPage />} />
      <Route exact path="/enquiries" element={<Enquiries />} />
      <Route exact path="/partners" element={<Partners />} />
      <Route exact path="/sencilo/:id" element={<Sencilo />} />
      {/* for Authenticated users */}
      <Route element={<RequireToken />}>
        <Route path="/history/guest" element={<HistoryGuest />} />
        <Route
          exact
          path="/booking"
          element={
            <UserLayout>
              <BookingPage />
            </UserLayout>
          }
        />
        <Route
          path="/vendor/dashboard"
          element={
            <UserLayout>
              <VendorDashboard />
            </UserLayout>
          }
        />
        <Route
          exact
          path="/vendor/create-listing"
          element={<CreateListing />}
        />
        <Route exact path="/admin/settings" element={<AdminSettings />} />
        <Route exact path="/admin/ticket" element={<AdminTicket />} />
        <Route
          path="/user/dashboard"
          element={
            <UserLayout>
              <UserDashboard />
            </UserLayout>
          }
        />
      </Route>
      <Route path="/explore" element={<Explore />} />
    </Switch>
  );
};

export default Routes;
