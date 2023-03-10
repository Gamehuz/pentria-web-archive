import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Homepage from "./pages/Home";
import CustomerSignUp from "./pages/CustomerSignUp"
import PromptPage from "./pages/PromptPage";
import BookingPage from "./pages/BookingPage";
import BlogPage from "./pages/BlogPage";

// jsdoc
/**
  * @returns {JSX.Element}
 all routes are defined here
  */
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/customer-signup" element={<CustomerSignUp />} />
      <Route exact path="/prompt" element={<PromptPage />} />
      <Route exact path="/booking" element={<BookingPage />} />
      <Route exact path="/blog" element={<BlogPage />} />
    </Switch>
  );
};

export default Routes;
