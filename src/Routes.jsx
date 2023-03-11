import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import BookingPage from "./pages/BookingPage";
import CustomerSignup from "./pages/CustomerSignup";
import Homepage from "./pages/Home";
import PromptPage from "./pages/PromptPage";
import VendorSignup from "./pages/VendorSIgnUp/VendorSignup";

// jsdoc
/**
  * @returns {JSX.Element}
 all routes are defined here
  */
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/customer/signup" element={<CustomerSignup />} />
      <Route exact path="/vendor/signup" element={<VendorSignup />} />
      <Route exact path="/prompt" element={<PromptPage />} />
      <Route exact path="/booking" element={<BookingPage />} />
      <Route exact path="/blog" element={<BlogPage />} />
    </Switch>
  );
};

export default Routes;
